import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = elapsed * 0.06;
      globeRef.current.rotation.x = elapsed * 0.03;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -elapsed * 0.04;
    }
  });

  return (
    <group scale={1.2}>
      {/* Cyber Wireframe Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.8, 24, 24]} />
        <meshBasicMaterial
          color="#bd00ff"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Connection Nodes */}
      <points ref={pointsRef}>
        <sphereGeometry args={[1.82, 36, 36]} />
        <pointsMaterial
          color="#00f0ff"
          size={0.035}
          transparent
          opacity={0.65}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function GlobeScene() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-70 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00f0ff" />
        <React.Suspense fallback={null}>
          <Globe />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
