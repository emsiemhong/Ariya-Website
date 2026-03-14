import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ──────────────────────────────────────────────────────────────────────────
   Constants
────────────────────────────────────────────────────────────────────────── */
const GOLD_COLOR   = new THREE.Color('#D4AF37');
const GLASS_COLOR  = new THREE.Color('#9bbfdf');

// Shatter: 8 child cubes positioned at face-corners of the parent
const CHILD_OFFSETS = [
  [-1, -1, -1], [ 1, -1, -1], [-1,  1, -1], [ 1,  1, -1],
  [-1, -1,  1], [ 1, -1,  1], [-1,  1,  1], [ 1,  1,  1],
];

/* ──────────────────────────────────────────────────────────────────────────
   Gold Core (visible only during shatter phase)
────────────────────────────────────────────────────────────────────────── */
const GoldCore = ({ visible }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.scale.setScalar(visible ? 0.38 + Math.sin(t * 3) * 0.06 : 0);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={GOLD_COLOR}
        emissive={GOLD_COLOR}
        emissiveIntensity={1.6}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   Single shatter piece
────────────────────────────────────────────────────────────────────────── */
const ShardCube = ({ offset, progress, index }) => {
  const ref = useRef();
  const seed = useMemo(() => index * 137.508, [index]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t   = clock.getElapsedTime();
    const p   = progress.current; // 0 = reformed, 1 = shattered

    // Target position when shattered: orbit around center
    const angle  = (index / 8) * Math.PI * 2 + t * 0.4;
    const radius = 2.0 * p;
    const tx = Math.cos(angle) * radius + offset[0] * 0.5 * p;
    const ty = Math.sin(angle * 0.7 + seed) * radius * 0.5 + offset[1] * 0.5 * p;
    const tz = Math.sin(angle + seed) * radius * 0.4 + offset[2] * 0.5 * p;

    ref.current.position.set(tx, ty, tz);
    ref.current.rotation.x = t * (0.3 + index * 0.07) * p;
    ref.current.rotation.y = t * (0.5 + index * 0.05) * p;
    ref.current.scale.setScalar(0.5 - p * 0.12);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshPhysicalMaterial
        color={GLASS_COLOR}
        transmission={0.92}
        roughness={0.08}
        metalness={0.0}
        ior={1.5}
        thickness={0.5}
        transparent
        opacity={0.75}
      />
    </mesh>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   Main monolith cube
────────────────────────────────────────────────────────────────────────── */
const MonolithCube = ({ shattered }) => {
  const ref      = useRef();
  const progress = useRef(0);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();

    // Lerp progress toward target
    const target = shattered ? 1 : 0;
    progress.current += (target - progress.current) * 0.06;

    // Breathing scale + slow Y rotation on the parent cube
    const breath = 1 + Math.sin(t * 0.8) * 0.03;
    const p      = progress.current;

    ref.current.scale.setScalar(breath * (1 - p * 0.9)); // shrink as shards fly out
    ref.current.rotation.y = t * 0.25;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.08;
  });

  return (
    <>
      {/* Main monolith */}
      <mesh ref={ref}>
        <boxGeometry args={[2.4, 2.4, 2.4]} />
        <meshPhysicalMaterial
          color={GLASS_COLOR}
          transmission={0.90}
          roughness={0.10}
          metalness={0.0}
          ior={1.6}
          thickness={1.5}
          transparent
          opacity={0.85}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Gold inner glow core — always present, more visible through glass */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color={GOLD_COLOR}
          emissive={GOLD_COLOR}
          emissiveIntensity={shattered ? 0 : 0.8}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={shattered ? 0 : 0.9}
        />
      </mesh>

      {/* Shatter shards */}
      {CHILD_OFFSETS.map((offset, i) => (
        <ShardCube key={i} offset={offset} progress={progress} index={i} />
      ))}

      {/* Gold core — visible when shattered */}
      <GoldCore visible={shattered} />
    </>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   Scene wrapper — handles hover state + lighting
────────────────────────────────────────────────────────────────────────── */
const GlassMonolith = () => {
  const [shattered, setShattered] = useState(false);

  return (
    <group
      onPointerEnter={() => setShattered(true)}
      onPointerLeave={() => setShattered(false)}
    >
      {/* Lighting rig */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]}   intensity={1.2} color="#ffffff" />
      <directionalLight position={[-4, -2, -4]} intensity={0.4} color="#1F4E79" />
      <pointLight position={[0, 0, 3]}          intensity={1.8} color="#D4AF37" distance={8} />
      <pointLight position={[3, 3, 0]}          intensity={0.6} color="#9bbfdf" distance={6} />

      <MonolithCube shattered={shattered} />
    </group>
  );
};

export default GlassMonolith;
