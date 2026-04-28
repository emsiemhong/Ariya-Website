import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Professional rotating rings
const TechRings = () => {
  const ringsRef = useRef([]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.x = time * (0.1 + i * 0.05);
        ring.rotation.y = time * (0.15 + i * 0.08);
        ring.rotation.z = time * (0.05 + i * 0.03);
      }
    });
  });
  
  return (
    <group>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (ringsRef.current[i] = el)}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
        >
          <torusGeometry args={[1.2 + i * 0.4, 0.08, 32, 100]} />
          <meshPhysicalMaterial
            color={i % 2 === 0 ? "#1F4E79" : "#D4AF37"}
            emissive={i % 2 === 0 ? "#1F4E79" : "#D4AF37"}
            emissiveIntensity={0.2}
            roughness={0.3}
            metalness={0.8}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

// Central professional core
const ProfessionalCore = ({ hovered }) => {
  const coreRef = useRef();
  
  useFrame((state) => {
    if (coreRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Professional steady rotation
      coreRef.current.rotation.y = time * 0.5;
      coreRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      
      // Subtle breathing effect
      const scale = 1 + Math.sin(time * 1.2) * 0.05;
      coreRef.current.scale.setScalar(scale);
    }
  });
  
  return (
    <mesh ref={coreRef}>
      <dodecahedronGeometry args={[1.2, 0]} />
      <meshPhysicalMaterial
        color="#1F4E79"
        emissive="#1F4E79"
        emissiveIntensity={hovered ? 0.8 : 0.4}
        roughness={0.15}
        metalness={0.85}
        transparent
        opacity={0.9}
        envMapIntensity={1.5}
      />
    </mesh>
  );
};

// Data flow lines
const DataFlowLines = () => {
  const linesRef = useRef([]);
  
  const lineData = useMemo(() => {
    const lines = [];
    const points = 8;
    
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const radius = 2.8;
      
      // Create curved paths
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius),
        new THREE.Vector3(Math.cos(angle + 0.5) * radius * 0.7, 1.5, Math.sin(angle + 0.5) * radius * 0.7),
        new THREE.Vector3(Math.cos(angle + 1) * radius * 0.5, 0, Math.sin(angle + 1) * radius * 0.5),
      ]);
      
      const curvePoints = curve.getPoints(50);
      const positions = new Float32Array(curvePoints.flatMap(p => [p.x, p.y, p.z]));
      
      lines.push({
        positions,
        color: i % 2 === 0 ? "#D4AF37" : "#1F4E79"
      });
    }
    
    return lines;
  }, []);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    linesRef.current.forEach((line, i) => {
      if (line) {
        line.material.opacity = 0.3 + Math.sin(time * 2 + i * 0.5) * 0.2;
        line.rotation.y = time * 0.2;
      }
    });
  });
  
  return (
    <group>
      {lineData.map((data, i) => (
        <line
          key={i}
          ref={(el) => (linesRef.current[i] = el)}
        >
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={data.positions.length / 3}
              array={data.positions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={data.color}
            transparent
            opacity={0.5}
            linewidth={2}
          />
        </line>
      ))}
    </group>
  );
};

// Floating tech nodes
const TechNodes = () => {
  const nodesRef = useRef([]);
  
  const nodeData = useMemo(() => {
    const nodes = [];
    const count = 16;
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 3.5 + Math.random() * 1.5;
      
      nodes.push({
        position: new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ),
        color: Math.random() > 0.7 ? "#D4AF37" : "#1F4E79",
        size: 0.05 + Math.random() * 0.1,
        speed: 0.3 + Math.random() * 0.4
      });
    }
    
    return nodes;
  }, []);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    nodesRef.current.forEach((node, i) => {
      if (node) {
        const data = nodeData[i];
        const angle = time * data.speed + i * 0.5;
        const radius = 3.5 + Math.sin(time * 0.5 + i) * 0.5;
        
        node.position.x = Math.cos(angle) * radius;
        node.position.z = Math.sin(angle) * radius;
        node.position.y = Math.sin(time * 2 + i * 0.3) * 0.8;
        
        node.rotation.x = time * 0.5;
        node.rotation.y = time * 0.7;
      }
    });
  });
  
  return (
    <group>
      {nodeData.map((data, i) => (
        <mesh
          key={i}
          ref={(el) => (nodesRef.current[i] = el)}
          position={data.position}
        >
          <boxGeometry args={[data.size, data.size, data.size]} />
          <meshPhysicalMaterial
            color={data.color}
            emissive={data.color}
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

// Main professional component
const ProfessionalTechHub = () => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  
  useFrame((state) => {
    if (groupRef.current && !isDragging) {
      // Auto-rotate when not dragging
      groupRef.current.rotation.y += 0.003;
      
      // Apply manual rotation when dragging
      if (isDragging) {
        groupRef.current.rotation.x = rotation.x;
        groupRef.current.rotation.y = rotation.y;
      }
    }
  });

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e) => {
    if (isDragging && groupRef.current) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;
      
      // Full 360° rotation control
      const newRotationY = rotation.y + deltaX * 0.01;
      const newRotationX = rotation.x + deltaY * 0.01;
      
      setRotation({ x: newRotationX, y: newRotationY });
      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };
  
  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#1F4E79" />
      <pointLight position={[0, 0, 0]} intensity={1.8} color="#D4AF37" distance={12} />
      <pointLight position={[3, 3, 3]} intensity={0.8} color="#1F4E79" distance={8} />
      
      <TechNodes />
      
      <DataFlowLines />
      
      <TechRings />
      
      <ProfessionalCore hovered={hovered} />
    </group>
  );
};

export default ProfessionalTechHub;
