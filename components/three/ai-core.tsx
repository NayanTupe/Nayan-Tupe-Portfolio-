"use client";

import { Environment, Float } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function MouseLight() {
  const light = useRef<THREE.PointLight>(null);
  useFrame((_, delta) => {
    if (!light.current || typeof window === "undefined") return;
    const styles = getComputedStyle(document.documentElement);
    const x = Number.parseFloat(styles.getPropertyValue("--pointer-x")) || 0;
    const y = Number.parseFloat(styles.getPropertyValue("--pointer-y")) || 0;
    light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, x * 2.2, delta * 4);
    light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, -y * 1.4, delta * 4);
  });
  return <pointLight ref={light} position={[1, 1, 3]} intensity={4.2} color="#72F2C0" />;
}

function CameraRig() {
  const { camera } = useThree();
  useFrame((state, delta) => {
    const x = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pointer-x")) || 0;
    const y = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pointer-y")) || 0;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, x * 0.22, delta * 2);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -y * 0.16, delta * 2);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5.2 + Math.sin(state.clock.elapsedTime * 0.4) * 0.08, delta * 1.5);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function CoreGeometry() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const particles = useMemo(() => {
    return Array.from({ length: 42 }, (_, index) => {
      const angle = (index / 42) * Math.PI * 2;
      const radius = 0.82 + (index % 7) * 0.045;
      return [Math.cos(angle) * radius, Math.sin(index) * 0.34, Math.sin(angle) * radius] as [number, number, number];
    });
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
    }
    if (inner.current) {
      inner.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.035);
      inner.current.rotation.y -= delta * 0.28;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.22} floatIntensity={0.34}>
      <group ref={group}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.55, 0.018, 24, 180]} />
          <meshPhysicalMaterial color="#ffffff" emissive="#72F2C0" emissiveIntensity={0.28} roughness={0.1} metalness={0.2} transmission={0.6} thickness={0.2} transparent opacity={0.7} />
        </mesh>
        <mesh rotation={[Math.PI / 2.4, 0.35, 0.25]}>
          <torusGeometry args={[1.92, 0.012, 24, 180]} />
          <meshPhysicalMaterial color="#7BA8FF" emissive="#7BA8FF" emissiveIntensity={0.18} roughness={0.18} metalness={0.28} transmission={0.52} transparent opacity={0.48} />
        </mesh>
        <mesh rotation={[Math.PI / 1.55, -0.5, 0.1]}>
          <torusGeometry args={[2.22, 0.008, 18, 180]} />
          <meshBasicMaterial color="#FFD87A" transparent opacity={0.25} />
        </mesh>
        <mesh ref={inner}>
          <icosahedronGeometry args={[0.82, 4]} />
          <meshPhysicalMaterial color="#f8fffd" emissive="#72F2C0" emissiveIntensity={0.62} roughness={0.08} metalness={0.35} clearcoat={1} transparent opacity={0.42} />
        </mesh>
        {particles.map((position, index) => (
          <mesh key={index} position={position}>
            <sphereGeometry args={[0.014 + (index % 3) * 0.004, 12, 12]} />
            <meshBasicMaterial color={index % 4 === 0 ? "#FFD87A" : "#72F2C0"} transparent opacity={0.65} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 4, 3]} intensity={1.5} color="#ffffff" />
      <spotLight position={[-3, 3, 4]} angle={0.55} penumbra={1} intensity={2.2} color="#7BA8FF" />
      <MouseLight />
      <CameraRig />
      <CoreGeometry />
      <Environment preset="city" />
    </>
  );
}

export function AICore() {
  return (
    <div className="ai-core-wrap">
      <div className="ai-core-portrait">
        <Image src="/images/profile.jpg" alt="Portrait of Nayan Tupe inside the AI core" fill priority sizes="280px" />
      </div>
      <div className="ai-core-scan" />
      <Canvas className="ai-core-canvas" camera={{ position: [0, 0, 5.2], fov: 46 }} dpr={[1, 1]} performance={{ min: 0.8 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
