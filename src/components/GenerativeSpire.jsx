import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GenerativeSpire = () => {
  const pointsRef = useRef();
  
  // Create thousands of dots for the spire
  const particlesCount = 8000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    const colorGold = new THREE.Color('#D4AF37');
    const colorBlue = new THREE.Color('#1F4E79');
    
    for(let i = 0; i < particlesCount; i++) {
      // Shape it like a towering spire (tapered cylinder/cone)
      // Height centered around 0, spanning from -6 to 6
      const y = (Math.random() - 0.5) * 12;
      
      // Radius narrows linearly as y goes up
      // At y = -6 (bottom), radius is larger. At y = 6 (top), it's nearly a point.
      const heightPercent = (y + 6) / 12; // 0 at bottom, 1 at top
      const maxRadius = Math.max(0.1, 2.5 * (1 - heightPercent));
      
      const radius = Math.random() * maxRadius;
      const angle = Math.random() * Math.PI * 2;
      
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Randomly assign Gold or Royal Blue (70% Blue, 30% Gold for elegance)
      const selectedColor = Math.random() > 0.7 ? colorGold : colorBlue;
      colors[i * 3 + 0] = selectedColor.r;
      colors[i * 3 + 1] = selectedColor.g;
      colors[i * 3 + 2] = selectedColor.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (pointsRef.current) {
      // Gently breathe (expanding and contracting softly over time)
      const scale = 1 + Math.sin(time * 1.5) * 0.02;
      pointsRef.current.scale.set(scale, scale, scale);
      
      // Idle slow spin
      pointsRef.current.rotation.y = time * 0.2;

      // Mouse interactive tilt mapping normalized device coordinates [-1, 1]
      const targetRotationX = (state.pointer.y * Math.PI) / 12; 
      const targetRotationZ = (-state.pointer.x * Math.PI) / 12;

      // Smooth interpolation toward target tilt
      pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.05;
      pointsRef.current.rotation.z += (targetRotationZ - pointsRef.current.rotation.z) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={positions.length / 3} 
          array={positions} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={colors.length / 3} 
          array={colors} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.04} 
        vertexColors={true} 
        transparent={true} 
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default GenerativeSpire;
