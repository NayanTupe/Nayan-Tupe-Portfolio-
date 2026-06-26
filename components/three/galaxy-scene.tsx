"use client";

import { Float, Line, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function seeded(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function spread(seed: number, range: number) {
  return (seeded(seed) - 0.5) * range;
}

function CameraRig() {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(0, 0, -3), []);

  useFrame((state, delta) => {
    const progress =
      Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scroll-progress")) || 0;
    const pointerX =
      (Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pointer-x")) || 0) * 0.4;
    const pointerY =
      (Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pointer-y")) || 0) * 0.25;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, Math.sin(progress * 4.5) * 1.25 + pointerX, delta);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.2 + Math.cos(progress * 3.5) * 0.3 + pointerY, delta);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 7.8 - progress * 2.5, delta);
    target.set(pointerX * 0.8, pointerY * 0.5, -3 - progress * 3);
    camera.lookAt(target);
  });

  return null;
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 1600;
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const radius = 2 + seeded(index + 1) * 18;
      const theta = seeded(index + 9) * Math.PI * 2;
      const phi = Math.acos(spread(index + 29, 2));
      values[index * 3] = Math.sin(phi) * Math.cos(theta) * radius;
      values[index * 3 + 1] = Math.cos(phi) * radius * 0.5;
      values[index * 3 + 2] = Math.sin(phi) * Math.sin(theta) * radius - 6;
    }
    return values;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.035;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#9efcff" transparent opacity={0.82} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Asteroids() {
  const rocks = useMemo(
    () =>
      Array.from({ length: 26 }, (_, index) => ({
        id: index,
        position: [spread(index + 10, 16), spread(index + 20, 6), -(2 + seeded(index + 30) * 16)] as [
          number,
          number,
          number,
        ],
        scale: 0.07 + seeded(index + 40) * 0.24,
      })),
    [],
  );

  return (
    <group>
      {rocks.map((rock) => (
        <Float key={rock.id} speed={0.45} rotationIntensity={0.85} floatIntensity={0.55}>
          <mesh position={rock.position} scale={rock.scale}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#1c2438"
              roughness={0.74}
              metalness={0.25}
              emissive="#071e2a"
              emissiveIntensity={0.18}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function EnergyObject() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.y += delta * 0.24;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.45} floatIntensity={0.6}>
      <group position={[2.25, 0.18, -2.4]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.65, 0.009, 16, 160]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.48} />
        </mesh>
        <mesh rotation={[Math.PI / 2.6, 0.4, 0.22]}>
          <torusGeometry args={[2.08, 0.007, 16, 160]} />
          <meshBasicMaterial color="#7B5CFF" transparent opacity={0.34} />
        </mesh>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.72, 2]} />
          <meshStandardMaterial
            color="#f5fdff"
            emissive="#00E5FF"
            emissiveIntensity={0.52}
            metalness={0.82}
            roughness={0.12}
            transparent
            opacity={0.82}
          />
        </mesh>
      </group>
    </Float>
  );
}

function EnergyLines() {
  const lines = useMemo(
    () => [
      [
        [-3.8, -1.1, -3],
        [-1.2, 0.6, -5],
        [1.4, -0.1, -4],
        [3.4, 1.1, -6],
      ],
      [
        [-4.3, 1.1, -7],
        [-1.9, -0.3, -4],
        [0.6, 1.2, -5],
        [4.1, -0.8, -8],
      ],
    ],
    [],
  );

  return lines.map((line, index) => (
    <Line key={index} points={line as [number, number, number][]} color={index ? "#7B5CFF" : "#00E5FF"} lineWidth={1} transparent opacity={0.35} />
  ));
}

function Galaxy() {
  return (
    <>
      <color attach="background" args={["#020204"]} />
      <fog attach="fog" args={["#020204", 5, 24]} />
      <ambientLight intensity={0.58} />
      <pointLight position={[3, 3, 2]} intensity={3.2} color="#00E5FF" />
      <pointLight position={[-5, 1.5, -4]} intensity={2.2} color="#7B5CFF" />
      <spotLight position={[0, 7, 4]} angle={0.4} penumbra={1} intensity={2.6} color="#fff3da" />
      <CameraRig />
      <Stars radius={90} depth={42} count={3600} factor={4} saturation={0.35} fade speed={0.65} />
      <ParticleField />
      <Asteroids />
      <EnergyObject />
      <EnergyLines />
      <gridHelper args={[38, 76, "#00E5FF", "#273049"]} position={[0, -2.65, -6]} />
      <EffectComposer multisampling={2}>
        <Bloom luminanceThreshold={0.26} luminanceSmoothing={0.78} intensity={1.1} mipmapBlur />
        <ChromaticAberration offset={[0.00045, 0.00065]} />
        <Noise opacity={0.035} blendFunction={BlendFunction.SOFT_LIGHT} />
        <Vignette eskil={false} offset={0.2} darkness={0.7} />
      </EffectComposer>
    </>
  );
}

export function GalaxyScene() {
  return (
    <div className="webgl-stage" aria-hidden="true">
      <Canvas camera={{ position: [0, 1.35, 7.8], fov: 48 }} dpr={[1, 1.65]} performance={{ min: 0.65 }}>
        <Suspense fallback={null}>
          <Galaxy />
        </Suspense>
      </Canvas>
    </div>
  );
}
