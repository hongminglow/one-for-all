// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
} from "@react-three/rapier";

import "./Lanyard.css";

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  maxSpeed?: number;
  minSpeed?: number;
  bandColor?: string;
  cardColor?: string;
  cardGLB?: string;
  cardTexture?: string;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  maxSpeed = 50,
  minSpeed = 0,
  bandColor = "white",
  cardColor = "white",
  cardGLB,
  cardTexture,
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = (): void => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band
            isMobile={isMobile}
            maxSpeed={maxSpeed}
            minSpeed={minSpeed}
            bandColor={bandColor}
            cardColor={cardColor}
            cardGLB={cardGLB}
            cardTexture={cardTexture}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  bandColor?: string;
  cardColor?: string;
  cardGLB?: string;
  cardTexture?: string;
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  bandColor = "white",
  cardColor = "white",
  cardGLB,
  cardTexture,
}: BandProps) {
  // Using "any" for refs since the exact types depend on Rapier's internals
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const band = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fixed = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const j1 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const j2 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const j3 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const segmentProps: any = {
    type: "dynamic" as RigidBodyProps["type"],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const [curve] = useState(() => {
    const c = new THREE.CatmullRomCurve3([
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
    ]);
    c.curveType = "chordal";
    return c;
  });

  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== "boolean") {
      // Check if dragged is a Vector3
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation(),
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())),
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
        );
      });
      // Calculate catmull curve
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));

      // Tilt logic
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody
          ref={fixed}
          {...segmentProps}
          type={"fixed" as RigidBodyProps["type"]}
        />
        <RigidBody
          position={[0.5, 0, 0]}
          ref={j1}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1, 0, 0]}
          ref={j2}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.5, 0, 0]}
          ref={j3}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={
            dragged
              ? ("kinematicPosition" as RigidBodyProps["type"])
              : ("dynamic" as RigidBodyProps["type"])
          }
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation())),
              );
            }}
          >
            {cardGLB ? (
              <CardWithGLB url={cardGLB} textureUrl={cardTexture} />
            ) : (
              <CardDefault color={cardColor} textureUrl={cardTexture} />
            )}
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color={bandColor}
          depthTest={false}
          resolution={[1000, 1000]}
          useMap={false}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

// Separate component for safe texture loading
function TextureMaterial({
  url,
  color = "white",
  transparent = false,
}: {
  url: string;
  color?: string;
  transparent?: boolean;
}) {
  const texture = useTexture(url);
  if (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  }

  return (
    <meshPhysicalMaterial
      map={texture}
      color={color}
      clearcoat={1}
      clearcoatRoughness={0.15}
      roughness={0.3}
      metalness={0.5}
      transparent={transparent}
      map-anisotropy={16}
    />
  );
}

function CardWithGLB({
  url,
  textureUrl,
}: {
  url: string;
  textureUrl?: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes, materials } = useGLTF(url) as any;

  // Safety check just in case
  if (!nodes?.card?.geometry) return null;

  return (
    <>
      <mesh geometry={nodes.card.geometry}>
        {textureUrl ? (
          <TextureMaterial url={textureUrl} />
        ) : (
          <meshPhysicalMaterial
            map={materials.base.map}
            map-anisotropy={16}
            clearcoat={1}
            clearcoatRoughness={0.15}
            roughness={0.9}
            metalness={0.8}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.clip.geometry}
        material={materials.metal}
        material-roughness={0.3}
      />
      <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
    </>
  );
}

function CardDefault({
  color,
  textureUrl,
}: {
  color: string;
  textureUrl?: string;
}) {
  return (
    <>
      <mesh>
        <boxGeometry args={[0.7, 1, 0.02]} />
        {textureUrl ? (
          <TextureMaterial url={textureUrl} color={color} />
        ) : (
          <meshPhysicalMaterial
            color={color}
            clearcoat={1}
            clearcoatRoughness={0.15}
            roughness={0.3}
            metalness={0.5}
          />
        )}
      </mesh>
      <mesh position={[0, 0.55, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#666" />
      </mesh>
    </>
  );
}
