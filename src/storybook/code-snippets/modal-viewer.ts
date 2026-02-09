export const code = `import {
  FC,
  Suspense,
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
} from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  invalidate,
} from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { OBJLoader } from "three-stdlib";
import * as THREE from "three";

const GLTFLoaderWrapper: FC<{
  url: string;
  children: (content: THREE.Object3D) => React.ReactNode;
}> = ({ url, children }) => {
  const { scene } = useGLTF(url);
  const content = useMemo(() => scene.clone(), [scene]);
  return <>{children(content)}</>;
};

const FBXLoaderWrapper: FC<{
  url: string;
  children: (content: THREE.Object3D) => React.ReactNode;
}> = ({ url, children }) => {
  const fbx = useFBX(url);
  const content = useMemo(() => fbx.clone(), [fbx]);
  return <>{children(content)}</>;
};

const OBJLoaderWrapper: FC<{
  url: string;
  children: (content: THREE.Object3D) => React.ReactNode;
}> = ({ url, children }) => {
  const obj = useLoader(OBJLoader, url);
  const content = useMemo(() => obj.clone(), [obj]);
  return <>{children(content)}</>;
};

const UnifiedLoader: FC<{
  url: string;
  children: (content: THREE.Object3D) => React.ReactNode;
}> = ({ url, children }) => {
  const ext = useMemo(() => url.split(".").pop()!.toLowerCase(), [url]);
  if (ext === "glb" || ext === "gltf")
    return <GLTFLoaderWrapper url={url}>{children}</GLTFLoaderWrapper>;
  if (ext === "fbx")
    return <FBXLoaderWrapper url={url}>{children}</FBXLoaderWrapper>;
  if (ext === "obj")
    return <OBJLoaderWrapper url={url}>{children}</OBJLoaderWrapper>;
  console.error("Unsupported format:", ext);
  return null;
};

export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableMouseParallax?: boolean;
  enableManualRotation?: boolean;
  enableHoverRotation?: boolean;
  enableManualZoom?: boolean;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
  rimLightIntensity?: number;
  environmentPreset?:
    | "city"
    | "sunset"
    | "night"
    | "dawn"
    | "studio"
    | "apartment"
    | "forest"
    | "park"
    | "none";
  autoFrame?: boolean;
  placeholderSrc?: string;
  showScreenshotButton?: boolean;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onModelLoaded?: () => void;
}

const isTouch =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);
const deg2rad = (d: number) => (d * Math.PI) / 180;
const DECIDE = 8; // px before we decide horizontal vs vertical
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

const Loader: FC<{ placeholderSrc?: string }> = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;
  return (
    <Html center>
      {placeholderSrc ? (
        <img
          src={placeholderSrc}
          width={128}
          height={128}
          className="blur-lg rounded-lg"
        />
      ) : (
        \`\${Math.round(progress)} %\`
      )}
    </Html>
  );
};

const DesktopControls: FC<{
  pivot: THREE.Vector3;
  min: number;
  max: number;
  zoomEnabled: boolean;
}> = ({ pivot, min, max, zoomEnabled }) => {
  const ref = useRef<any>(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};

interface ModelInnerProps {
  content: THREE.Object3D;
  xOff: number;
  yOff: number;
  pivot: THREE.Vector3;
  initYaw: number;
  initPitch: number;
  minZoom: number;
  maxZoom: number;
  enableMouseParallax: boolean;
  enableManualRotation: boolean;
  enableHoverRotation: boolean;
  enableManualZoom: boolean;
  autoFrame: boolean;
  fadeIn: boolean;
  autoRotate: boolean;
  autoRotateSpeed: number;
  onLoaded?: () => void;
}

const ModelInner: FC<ModelInnerProps> = ({
  content,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded,
}) => {
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const pivotW = useRef(new THREE.Vector3());
  // Flag to indicate model is initialized
  const modelReadyRef = useRef(false);
  // Store the base position set during layout effect
  const basePositionRef = useRef(new THREE.Vector3());

  useLayoutEffect(() => {
    if (!content) return;
    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const sphere = new THREE.Box3()
      .setFromObject(g)
      .getBoundingSphere(new THREE.Sphere());
    // Normalize to a larger size (diameter ~3) so it's clearly visible
    const s = 3 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(s);

    g.traverse((o: any) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    g.getWorldPosition(pivotW.current);
    pivot.copy(pivotW.current);
    outer.current.rotation.set(initPitch, initYaw, 0);

    // Always reposition camera to frame the model correctly
    // The model is normalized to radius ~0.5, so we need to position the camera appropriately
    if ((camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const persp = camera as THREE.PerspectiveCamera;
      const fitR = sphere.radius * s; // This is ~0.5 after normalization
      // Calculate distance needed to see the entire model (with autoFrame logic)
      const d = autoFrame
        ? (fitR * 1.2) / Math.sin((persp.fov * Math.PI) / 180 / 2)
        : 1.5; // Default distance if autoFrame is disabled
      persp.position.set(
        pivotW.current.x,
        pivotW.current.y,
        pivotW.current.z + d,
      );
      if (autoFrame) {
        persp.near = d / 10;
        persp.far = d * 10;
        persp.updateProjectionMatrix();
      }
    }

    // Mark model as ready for frame updates
    modelReadyRef.current = true;
    invalidate();

    /* optional fade-in */
    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse((o: any) => {
          if (o.isMesh) o.material.opacity = v;
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else onLoaded?.();
  }, [content]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let drag = false;
    let lx = 0,
      ly = 0;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener("pointerup", up);
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      invalidate();
    };
    const up = () => (drag = false);
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [gl, enableManualRotation]);

  useEffect(() => {
    if (!isTouch) return;
    const el = gl.domElement;
    const pts = new Map<number, { x: number; y: number }>();
    type Mode = "idle" | "decide" | "rotate" | "pinch";
    let mode: Mode = "idle";
    let sx = 0,
      sy = 0,
      lx = 0,
      ly = 0,
      startDist = 0,
      startZ = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "touch") return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        mode = "decide";
        sx = lx = e.clientX;
        sy = ly = e.clientY;
      } else if (pts.size === 2 && enableManualZoom) {
        mode = "pinch";
        const [p1, p2] = [...pts.values()];
        startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        startZ = camera.position.z;
        e.preventDefault();
      }
      invalidate();
    };

    const move = (e: PointerEvent) => {
      const p = pts.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;

      if (mode === "decide") {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
          if (enableManualRotation && Math.abs(dx) > Math.abs(dy)) {
            mode = "rotate";
            el.setPointerCapture(e.pointerId);
          } else {
            mode = "idle";
            pts.clear();
          }
        }
      }

      if (mode === "rotate") {
        e.preventDefault();
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
        invalidate();
      } else if (mode === "pinch" && pts.size === 2) {
        e.preventDefault();
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const ratio = startDist / d;
        camera.position.z = THREE.MathUtils.clamp(
          startZ * ratio,
          minZoom,
          maxZoom,
        );
        invalidate();
      }
    };

    const up = (e: PointerEvent) => {
      pts.delete(e.pointerId);
      if (mode === "rotate" && pts.size === 0) mode = "idle";
      if (mode === "pinch" && pts.size < 2) mode = "idle";
    };

    el.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", up, { passive: true });
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (isTouch) return;
    const mm = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      if (enableMouseParallax)
        tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      if (enableHoverRotation)
        tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener("pointermove", mm);
    return () => window.removeEventListener("pointermove", mm);
  }, [enableMouseParallax, enableHoverRotation]);

  useFrame((_, dt) => {
    // Don't update until model is ready
    if (!modelReadyRef.current) return;

    let need = false;

    // Ease the hover rotation values
    const phx = cHov.current.x,
      phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    // Apply hover rotation effect
    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    // Auto-rotate if enabled
    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    // Apply manual rotation inertia
    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4)
      need = true;

    // Check if hover animation still needs to run
    if (
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  if (!content) return null;
  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer: FC<ViewerProps> = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.5,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = "forest",
  autoFrame = true,
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded,
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);
  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef<THREE.Mesh>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const cameraRef = useRef<THREE.Camera>(null);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  // Use a reasonable initial camera distance that works with the normalized model (radius ~0.5)
  // The model will be repositioned by autoFrame, but this ensures visibility initially
  const camZ = Math.min(
    Math.max(defaultZoom > 1 ? defaultZoom : 1.5, minZoomDistance),
    maxZoomDistance,
  );

  const capture = () => {
    const g = rendererRef.current,
      s = sceneRef.current,
      c = cameraRef.current;
    if (!g || !s || !c) return;
    g.shadowMap.enabled = false;
    const tmp: { l: THREE.Light; cast: boolean }[] = [];
    s.traverse((o: any) => {
      if (o.isLight && "castShadow" in o) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;
    g.render(s, c);
    const urlPNG = g.domElement.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "model.png";
    a.href = urlPNG;
    a.click();
    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  return (
    <div
      style={{
        width,
        height,
        touchAction: "pan-y pinch-zoom",
      }}
      className="relative"
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          className="absolute top-4 right-4 z-10 cursor-pointer px-4 py-2 border border-white rounded-xl bg-transparent text-white hover:bg-white hover:text-black transition-colors"
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        {environmentPreset !== "none" && (
          <Environment preset={environmentPreset as any} background={false} />
        )}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={keyLightIntensity}
          castShadow
        />
        <directionalLight
          position={[-5, 2, 5]}
          intensity={fillLightIntensity}
        />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows
          ref={contactRef as any}
          position={[0, -0.5, 0]}
          opacity={0.35}
          scale={10}
          blur={2}
        />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <UnifiedLoader url={url}>
            {(content) => (
              <ModelInner
                content={content}
                xOff={modelXOffset}
                yOff={modelYOffset}
                pivot={pivot}
                initYaw={initYaw}
                initPitch={initPitch}
                minZoom={minZoomDistance}
                maxZoom={maxZoomDistance}
                enableMouseParallax={enableMouseParallax}
                enableManualRotation={enableManualRotation}
                enableHoverRotation={enableHoverRotation}
                enableManualZoom={enableManualZoom}
                autoFrame={autoFrame}
                fadeIn={fadeIn}
                autoRotate={autoRotate}
                autoRotateSpeed={autoRotateSpeed}
                onLoaded={onModelLoaded}
              />
            )}
          </UnifiedLoader>
        </Suspense>

        {!isTouch && (
          <DesktopControls
            pivot={pivot}
            min={minZoomDistance}
            max={maxZoomDistance}
            zoomEnabled={enableManualZoom}
          />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
`;
