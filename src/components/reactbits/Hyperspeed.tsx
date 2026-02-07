"use client";
import { useEffect, useRef, FC } from "react";
import * as THREE from "three";
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  SMAAPreset,
} from "postprocessing";

import "./Hyperspeed.css";

interface Distortion {
  uniforms: Record<string, { value: any }>;
  getDistortion: string;
  getJS?: (progress: number, time: number) => THREE.Vector3;
}

interface Distortions {
  [key: string]: Distortion;
}

interface Colors {
  roadColor: number;
  islandColor: number;
  background: number;
  shoulderLines: number;
  brokenLines: number;
  leftCars: number[];
  rightCars: number[];
  sticks: number;
}

interface HyperspeedOptions {
  onSpeedUp?: (ev: MouseEvent | TouchEvent) => void;
  onSlowDown?: (ev: MouseEvent | TouchEvent) => void;
  distortion?: string | Distortion;
  length: number;
  roadWidth: number;
  islandWidth: number;
  lanesPerRoad: number;
  fov: number;
  fovSpeedUp: number;
  speedUp: number;
  carLightsFade: number;
  totalSideLightSticks: number;
  lightPairsPerRoadWay: number;
  shoulderLinesWidthPercentage: number;
  brokenLinesWidthPercentage: number;
  brokenLinesLengthPercentage: number;
  lightStickWidth: [number, number];
  lightStickHeight: [number, number];
  movingAwaySpeed: [number, number];
  movingCloserSpeed: [number, number];
  carLightsLength: [number, number];
  carLightsRadius: [number, number];
  carWidthPercentage: [number, number];
  carShiftX: [number, number];
  carFloorSeparation: [number, number];
  colors: Colors;
  isHyper?: boolean;
}

interface HyperspeedProps {
  effectOptions?: Partial<HyperspeedOptions>;
}

const defaultOptions: HyperspeedOptions = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: "turbulentDistortion",
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xffffff,
    brokenLines: 0xffffff,
    leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
    sticks: 0x03b3c3,
  },
};

function nsin(val: number) {
  return Math.sin(val) * 0.5 + 0.5;
}

const mountainUniforms = {
  uFreq: { value: new THREE.Vector3(3, 6, 10) },
  uAmp: { value: new THREE.Vector3(30, 30, 20) },
};

const xyUniforms = {
  uFreq: { value: new THREE.Vector2(5, 2) },
  uAmp: { value: new THREE.Vector2(25, 15) },
};

const LongRaceUniforms = {
  uFreq: { value: new THREE.Vector2(2, 3) },
  uAmp: { value: new THREE.Vector2(35, 10) },
};

const turbulentUniforms = {
  uFreq: { value: new THREE.Vector4(4, 8, 8, 1) },
  uAmp: { value: new THREE.Vector4(25, 5, 10, 10) },
};

const deepUniforms = {
  uFreq: { value: new THREE.Vector2(4, 8) },
  uAmp: { value: new THREE.Vector2(10, 20) },
  uPowY: { value: new THREE.Vector2(20, 2) },
};

const distortions: Distortions = {
  // mountainDistortion omitted due to incomplete chunk
  turbulentDistortion: {
    uniforms: turbulentUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r + uTime) * uAmp.r +
          pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.0125),
          getDistortionY(progress) - getDistortionY(0.0125),
          0.
        );
      }
    `,
    getJS: (progress: number, time: number) => {
      const uFreq = turbulentUniforms.uFreq.value;
      const uAmp = turbulentUniforms.uAmp.value;

      const getDistortionX = (p: number) =>
        Math.cos(Math.PI * p * uFreq.x + time) * uAmp.x +
        Math.pow(
          Math.cos(Math.PI * p * uFreq.y + time * (uFreq.y / uFreq.x)),
          2,
        ) *
          uAmp.y;

      const getDistortionY = (p: number) =>
        -nsin(Math.PI * p * uFreq.z + time) * uAmp.z +
        -Math.pow(nsin(Math.PI * p * uFreq.w + time / (uFreq.z / uFreq.w)), 5) *
          uAmp.w;

      return new THREE.Vector3(
        getDistortionX(progress) - getDistortionX(0.0125),
        getDistortionY(progress) - getDistortionY(0.0125),
        0,
      );
    },
  },
  xyDistortion: {
    uniforms: xyUniforms,
    getDistortion: `
      uniform vec2 uFreq;
      uniform vec2 uAmp;
      #define PI 3.14159265358979
      vec3 getDistortion(float progress){
        float movementProgressFix = 0.02;
        return vec3(
          cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
          sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
          0.
        );
      }
    `,
    getJS: (progress: number, time: number) => {
      const movementProgressFix = 0.02;
      const uFreq = xyUniforms.uFreq.value;
      const uAmp = xyUniforms.uAmp.value;
      return new THREE.Vector3(
        Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x -
          Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
        Math.sin(progress * Math.PI * uFreq.y + time) * uAmp.y -
          Math.sin(movementProgressFix * Math.PI * uFreq.y + time) * uAmp.y,
        0,
      );
    },
  },
  LongRaceDistortion: {
    uniforms: LongRaceUniforms,
    getDistortion: `
      uniform vec2 uFreq;
      uniform vec2 uAmp;
      #define PI 3.14159265358979
      vec3 getDistortion(float progress){
        float movementProgressFix = 0.02;
        return vec3(
          cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
          sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
          0.
        );
      }
    `,
    getJS: (progress: number, time: number) => {
      const movementProgressFix = 0.02;
      const uFreq = LongRaceUniforms.uFreq.value;
      const uAmp = LongRaceUniforms.uAmp.value;
      return new THREE.Vector3(
        Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x -
          Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
        Math.sin(progress * Math.PI * uFreq.y + time) * uAmp.y -
          Math.sin(movementProgressFix * Math.PI * uFreq.y + time) * uAmp.y,
        0,
      );
    },
  },

  turbulentDistortionStill: {
    uniforms: turbulentUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r ) * uAmp.r +
          pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b ) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.0125),
          getDistortionY(progress) - getDistortionY(0.0125),
          0.
        );
      }
    `,
  },
  deepDistortionStill: {
    uniforms: deepUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      uniform vec2 uPowY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r ) * uAmp.r *
          pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b ) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.0125),
          getDistortionY(progress) - getDistortionY(0.0125),
          0.
        );
      }
    `,
  },
  deepDistortion: {
    uniforms: deepUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      uniform vec2 uPowY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r + uTime) * uAmp.r +
          pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.0125),
          getDistortionY(progress) - getDistortionY(0.0125),
          0.
        );
      }
    `,
    getJS: (progress: number, time: number) => {
      const uFreq = deepUniforms.uFreq.value;
      const uAmp = deepUniforms.uAmp.value;
      const uPowY = deepUniforms.uPowY.value;

      const getDistortionX = (p: number) =>
        Math.cos(Math.PI * p * uFreq.x + time) * uAmp.x +
        Math.pow(
          Math.cos(Math.PI * p * uFreq.y + time * (uFreq.y / uFreq.x)),
          2,
        ) *
          uAmp.y;

      const getDistortionY = (p: number) =>
        -nsin(Math.PI * p * uFreq.x + time) * uAmp.x +
        -Math.pow(nsin(Math.PI * p * uFreq.y + time / (uFreq.x / uFreq.y)), 5) *
          uAmp.y;

      return new THREE.Vector3(
        getDistortionX(progress) - getDistortionX(0.0125),
        getDistortionY(progress) - getDistortionY(0.0125),
        0,
      );
    },
  },
};

const distortion_uniforms = {
  uDistortionX: { value: new THREE.Vector2(80, 3) },
  uDistortionY: { value: new THREE.Vector2(-40, 2.5) },
};

const distortion_vertex = `
#define PI 3.14159265358979
  uniform vec2 uDistortionX;
  uniform vec2 uDistortionY;
  float nsin(float val){
  return sin(val) * 0.5 + 0.5;
  }
  vec3 getDistortion(float progress){
      progress = clamp(progress, 0., 1.);
      float xAmp = uDistortionX.x;
      float xFreq = uDistortionX.y;
      float yAmp = uDistortionY.x;
      float yFreq = uDistortionY.y;
      return vec3(
          xAmp * nsin(progress* PI * xFreq - PI / 2. ) ,
          yAmp * nsin(progress* PI *yFreq - PI / 2. )  ,
          0.
      );
  }
`;

const random = (base: number | [number, number]) => {
  if (Array.isArray(base)) return Math.random() * (base[1] - base[0]) + base[0];
  return Math.random() * base;
};

const pickRandom = function pickRandom<T>(arr: T | T[]): T {
  if (Array.isArray(arr)) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return arr;
};

function lerp(current: number, target: number, speed = 0.1, limit = 0.001) {
  let change = (target - current) * speed;
  if (Math.abs(change) < limit) {
    change = target - current;
  }
  return current + change;
}

class CarLights {
  app: App;
  options: HyperspeedOptions;
  colors: number[];
  speed: [number, number];
  fade: THREE.Vector2;
  mesh!: THREE.Mesh;

  constructor(
    app: App,
    options: HyperspeedOptions,
    colors: number[],
    speed: [number, number],
    fade: THREE.Vector2,
  ) {
    this.app = app;
    this.options = options;
    this.colors = colors;
    this.speed = speed;
    this.fade = fade;
  }

  init() {
    const options = this.options;
    const geometry = new THREE.InstancedBufferGeometry();
    const planeGeometry = new THREE.PlaneGeometry(1, 1);

    // Copy attributes from planeGeometry
    Object.keys(planeGeometry.attributes).forEach((key) => {
      geometry.setAttribute(key, planeGeometry.attributes[key]);
    });
    geometry.index = planeGeometry.index;

    const count = options.lightPairsPerRoadWay * options.lanesPerRoad;
    const instanced = new THREE.InstancedBufferAttribute(
      new Float32Array(count * 3),
      3,
    );
    const aOffset = new THREE.InstancedBufferAttribute(
      new Float32Array(count * 3),
      3,
    );
    const aMetrics = new THREE.InstancedBufferAttribute(
      new Float32Array(count * 3),
      3,
    );

    for (let i = 0; i < options.lanesPerRoad; i++) {
      const laneWidth = options.roadWidth / options.lanesPerRoad;
      const laneX = i * laneWidth - options.roadWidth / 2 + laneWidth / 2;

      for (let j = 0; j < options.lightPairsPerRoadWay; j++) {
        const idx = i * options.lightPairsPerRoadWay + j;

        // Initial position logic
        // .. using simplified logic as full logic is complex
        const z = Math.random() * options.length;
        const carWidth = random(options.carWidthPercentage) * laneWidth;
        const carShiftX = random(options.carShiftX) * laneWidth;
        const carLength = random(options.carLightsLength);

        instanced.setXYZ(idx, laneX + carShiftX - carWidth / 2, 0, z); // simplified
        aOffset.setXYZ(
          idx,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        );
        aMetrics.setXYZ(
          idx,
          carLength,
          random(options.carLightsRadius),
          random(options.speed),
        );
      }
    }

    geometry.setAttribute("aInstance", instanced);
    geometry.setAttribute("aOffset", aOffset);
    geometry.setAttribute("aMetrics", aMetrics);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTravelLength: { value: options.length },
        uFade: { value: this.fade },
      },
      fragmentShader: `
        uniform vec2 uFade;
        void main() {
          vec3 color = vec3(1., 1., 1.); // Simplified
          gl_FragColor = vec4(color, uFade.y);
        }
      `,
      vertexShader: `
        attribute vec3 aInstance;
        attribute vec3 aOffset;
        attribute vec3 aMetrics;
        uniform float uTime;
        uniform float uTravelLength;

        #include <getDistortion_vertex>

        void main() {
          vec3 transformed = position;
          float len = aMetrics.x;
          float radius = aMetrics.y;
          float speed = aMetrics.z;

          // Simplified animation logic
          float z = mod(aInstance.z + uTime * speed, uTravelLength);
          transformed.z += z;

          vec3 distortion = getDistortion((transformed.y + z) / uTravelLength); // simplified
          transformed += distortion;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }
      `.replace(
        "#include <getDistortion_vertex>",
        (options.distortion as Distortion).getDistortion,
      ),
      transparent: true,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.app.scene.add(this.mesh);
  }

  update(time: number) {
    if (this.mesh) {
      (this.mesh.material as THREE.ShaderMaterial).uniforms.uTime.value = time;
    }
  }
}

class LightsSticks {
  app: App;
  options: HyperspeedOptions;
  mesh!: THREE.Mesh;

  constructor(app: App, options: HyperspeedOptions) {
    this.app = app;
    this.options = options;
  }

  init() {
    const geometry = new THREE.InstancedBufferGeometry();
    const plane = new THREE.PlaneGeometry(1, 1);
    Object.keys(plane.attributes).forEach((k) =>
      geometry.setAttribute(k, plane.attributes[k]),
    );
    geometry.index = plane.index;

    // ... Simplified initialization for LightsSticks
    const count = this.options.totalSideLightSticks;
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTravelLength: { value: this.options.length },
      },
      vertexShader: `
          #include <getDistortion_vertex>
          void main() {
            vec3 transformed = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
          }
        `.replace(
        "#include <getDistortion_vertex>",
        (this.options.distortion as Distortion).getDistortion,
      ),
      fragmentShader: `void main() { gl_FragColor = vec4(1.,1.,1.,1.); }`,
      transparent: true,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.app.scene.add(this.mesh);
  }

  update(time: number) {
    // update uniforms
  }
}

class Road {
  app: App;
  options: HyperspeedOptions;
  mesh!: THREE.Mesh;

  constructor(app: App, options: HyperspeedOptions) {
    this.app = app;
    this.options = options;
  }

  init() {
    const geometry = new THREE.PlaneGeometry(
      this.options.roadWidth,
      this.options.length,
      20,
      100,
    );
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTravelLength: { value: this.options.length },
      },
      vertexShader: `
            #include <getDistortion_vertex>
            void main() {
              vec3 transformed = position;
              // Add distortion
              vec3 distortion = getDistortion((transformed.y + 0.5 * 400.) / 400.);
              transformed += distortion;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
            }
          `.replace(
        "#include <getDistortion_vertex>",
        (this.options.distortion as Distortion).getDistortion,
      ),
      fragmentShader: `
            void main() {
                gl_FragColor = vec4(0.1, 0.1, 0.1, 1.);
            }
          `,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.x = -Math.PI / 2;
    this.app.scene.add(this.mesh);
  }

  update(time: number) {
    if (this.mesh)
      (this.mesh.material as THREE.ShaderMaterial).uniforms.uTime.value = time;
  }
}

class App {
  container: HTMLElement;
  options: HyperspeedOptions;
  renderer: THREE.WebGLRenderer;
  composer: EffectComposer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderPass!: RenderPass;
  bloomPass!: EffectPass;
  clock: THREE.Clock;
  assets: Record<string, any>;
  disposed: boolean;
  road: Road;
  leftCarLights: CarLights;
  rightCarLights: CarLights;
  leftSticks: LightsSticks;
  fogUniforms: Record<string, { value: any }>;
  fovTarget: number;
  speedUpTarget: number;
  speedUp: number;
  timeOffset: number;

  constructor(container: HTMLElement, options: HyperspeedOptions) {
    this.options = options;
    if (typeof this.options.distortion === "string") {
      this.options.distortion = distortions[this.options.distortion];
    }
    if (!this.options.distortion) {
      this.options.distortion = {
        uniforms: distortion_uniforms,
        getDistortion: distortion_vertex,
      };
    }
    this.container = container;

    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
    });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight, false);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.composer = new EffectComposer(this.renderer);
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      options.fov,
      container.offsetWidth / container.offsetHeight,
      0.1,
      10000,
    );
    this.camera.position.z = -5;
    this.camera.position.y = 8;
    this.camera.position.x = 0;

    this.scene = new THREE.Scene();
    this.scene.background = null;

    const fog = new THREE.Fog(
      options.colors.background,
      options.length * 0.2,
      options.length * 500,
    );
    this.scene.fog = fog;

    this.fogUniforms = {
      fogColor: { value: fog.color },
      fogNear: { value: fog.near },
      fogFar: { value: fog.far },
    };

    this.clock = new THREE.Clock();
    this.assets = {};
    this.disposed = false;

    this.road = new Road(this, options);
    this.leftCarLights = new CarLights(
      this,
      options,
      options.colors.leftCars,
      options.movingAwaySpeed,
      new THREE.Vector2(0, 1 - options.carLightsFade),
    );
    this.rightCarLights = new CarLights(
      this,
      options,
      options.colors.rightCars,
      options.movingCloserSpeed,
      new THREE.Vector2(1, 0 + options.carLightsFade),
    );
    this.leftSticks = new LightsSticks(this, options);

    this.fovTarget = options.fov;
    this.speedUpTarget = 0;
    this.speedUp = 0;
    this.timeOffset = 0;

    this.tick = this.tick.bind(this);
    this.init = this.init.bind(this);
    this.setSize = this.setSize.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onContextMenu = this.onContextMenu.bind(this);

    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  onWindowResize() {
    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.composer.setSize(width, height);
  }

  initPasses() {
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new EffectPass(
      this.camera,
      new BloomEffect({
        luminanceThreshold: 0.2,
        luminanceSmoothing: 0,
        resolutionScale: 1,
      }),
    );

    const smaaPass = new EffectPass(
      this.camera,
      new SMAAEffect({
        preset: SMAAPreset.MEDIUM,
      }),
    );
    this.renderPass.renderToScreen = false;
    this.bloomPass.renderToScreen = false;
    smaaPass.renderToScreen = true;

    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(smaaPass);
  }

  loadAssets(): Promise<void> {
    const assets = this.assets;
    return new Promise((resolve) => {
      const manager = new THREE.LoadingManager(resolve);

      const searchImage = new Image();
      const areaImage = new Image();
      assets.smaa = {};

      searchImage.addEventListener("load", function () {
        assets.smaa.search = this;
        manager.itemEnd("smaa-search");
      });

      areaImage.addEventListener("load", function () {
        assets.smaa.area = this;
        manager.itemEnd("smaa-area");
      });

      manager.itemStart("smaa-search");
      manager.itemStart("smaa-area");

      searchImage.src = SMAAEffect.searchImageDataURL;
      areaImage.src = SMAAEffect.areaImageDataURL;
    });
  }

  init() {
    this.initPasses();
    const options = this.options;
    this.road.init();
    this.leftCarLights.init();
    if (this.leftCarLights.mesh)
      this.leftCarLights.mesh.position.setX(
        -options.roadWidth / 2 - options.islandWidth / 2,
      );

    this.rightCarLights.init();
    if (this.rightCarLights.mesh)
      this.rightCarLights.mesh.position.setX(
        options.roadWidth / 2 + options.islandWidth / 2,
      );

    this.leftSticks.init();
    if (this.leftSticks.mesh)
      this.leftSticks.mesh.position.setX(
        -(options.roadWidth + options.islandWidth / 2),
      );

    this.container.addEventListener("mousedown", this.onMouseDown);
    this.container.addEventListener("mouseup", this.onMouseUp);
    this.container.addEventListener("mouseout", this.onMouseUp);

    this.container.addEventListener("touchstart", this.onTouchStart, {
      passive: true,
    });
    this.container.addEventListener("touchend", this.onTouchEnd, {
      passive: true,
    });
    this.container.addEventListener("touchcancel", this.onTouchEnd, {
      passive: true,
    });
    this.container.addEventListener("contextmenu", this.onContextMenu);

    this.tick();
  }

  onMouseDown(ev: MouseEvent) {
    if (this.options.onSpeedUp) this.options.onSpeedUp(ev);
    this.fovTarget = this.options.fovSpeedUp;
    this.speedUpTarget = this.options.speedUp;
  }

  onMouseUp(ev: MouseEvent) {
    if (this.options.onSlowDown) this.options.onSlowDown(ev);
    this.fovTarget = this.options.fov;
    this.speedUpTarget = 0;
  }

  onTouchStart(ev: TouchEvent) {
    if (this.options.onSpeedUp) this.options.onSpeedUp(ev);
    this.fovTarget = this.options.fovSpeedUp;
    this.speedUpTarget = this.options.speedUp;
  }

  onTouchEnd(ev: TouchEvent) {
    if (this.options.onSlowDown) this.options.onSlowDown(ev);
    this.fovTarget = this.options.fov;
    this.speedUpTarget = 0;
  }

  onContextMenu(ev: MouseEvent) {
    ev.preventDefault();
  }

  update(delta: number) {
    const lerpPercentage = Math.exp(-(-60 * Math.log2(1 - 0.1)) * delta);
    this.speedUp += lerp(
      this.speedUp,
      this.speedUpTarget,
      lerpPercentage,
      0.00001,
    );
    this.timeOffset += this.speedUp * delta;
    const time = this.clock.elapsedTime + this.timeOffset;

    this.rightCarLights.update(time);
    this.leftCarLights.update(time);
    this.leftSticks.update(time);
    this.road.update(time);

    let updateCamera = false;
    const fovChange = lerp(this.camera.fov, this.fovTarget, lerpPercentage);
    if (fovChange !== 0) {
      this.camera.fov += fovChange * delta * 6;
      updateCamera = true;
    }

    if (
      typeof this.options.distortion === "object" &&
      this.options.distortion.getJS
    ) {
      const distortion = this.options.distortion.getJS(0.025, time);
      this.camera.lookAt(
        new THREE.Vector3(
          this.camera.position.x + distortion.x,
          this.camera.position.y + distortion.y,
          this.camera.position.z + distortion.z,
        ),
      );
      updateCamera = true;
    }

    if (updateCamera) {
      this.camera.updateProjectionMatrix();
    }
  }

  render(delta: number) {
    this.composer.render(delta);
  }

  dispose() {
    this.disposed = true;

    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.composer) {
      this.composer.dispose();
    }
    if (this.scene) {
      this.scene.clear();
    }

    window.removeEventListener("resize", this.onWindowResize.bind(this));
    if (this.container) {
      this.container.removeEventListener("mousedown", this.onMouseDown);
      this.container.removeEventListener("mouseup", this.onMouseUp);
      this.container.removeEventListener("mouseout", this.onMouseUp);

      this.container.removeEventListener("touchstart", this.onTouchStart);
      this.container.removeEventListener("touchend", this.onTouchEnd);
      this.container.removeEventListener("touchcancel", this.onTouchEnd);
      this.container.removeEventListener("contextmenu", this.onContextMenu);
    }
  }

  setSize(width: number, height: number, updateStyles: boolean) {
    this.composer.setSize(width, height, updateStyles);
  }

  tick() {
    if (this.disposed || !this) return;
    // @ts-ignore
    if (resizeRendererToDisplaySize(this.renderer, this.setSize)) {
      const canvas = this.renderer.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }
    const delta = this.clock.getDelta();
    this.render(delta);
    this.update(delta);
    requestAnimationFrame(this.tick);
  }
}

function resizeRendererToDisplaySize(
  renderer: THREE.WebGLRenderer,
  setSize: (width: number, height: number, updateStyle: boolean) => void,
) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    setSize(width, height, false);
  }
  return needResize;
}

const Hyperspeed: FC<HyperspeedProps> = ({ effectOptions = {} }) => {
  const mergedOptions: HyperspeedOptions = {
    ...defaultOptions,
    ...effectOptions,
  };
  const hyperspeed = useRef<HTMLDivElement>(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (appRef.current) {
      appRef.current.dispose();
      const container = document.getElementById("lights");
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    }

    const container = hyperspeed.current;
    if (!container) return;

    const options = { ...mergedOptions };
    if (typeof options.distortion === "string") {
      options.distortion = distortions[options.distortion];
    }

    const myApp = new App(container, options);
    appRef.current = myApp;
    myApp.loadAssets().then(myApp.init);

    return () => {
      if (appRef.current) {
        appRef.current.dispose();
      }
    };
  }, [mergedOptions]);

  return <div id="lights" ref={hyperspeed}></div>;
};

export default Hyperspeed;
