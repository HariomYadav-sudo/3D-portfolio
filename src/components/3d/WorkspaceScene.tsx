import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural futuristic laptop model
function Laptop() {
  const laptopGroupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (laptopGroupRef.current) {
      // Gentle drift rotation
      laptopGroupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.15;
    }
    if (screenRef.current) {
      // Pulsing screen emission intensity
      const material = screenRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.8 + Math.sin(state.clock.getElapsedTime() * 4) * 0.15;
    }
  });

  return (
    <group ref={laptopGroupRef} position={[0, -0.4, 0]}>
      {/* Laptop Base */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.6, 0.08, 1.8]} />
        <meshStandardMaterial color="#0c0721" metalness={0.9} roughness={0.15} />
      </mesh>
      
      {/* Laptop Trackpad & Trim */}
      <mesh position={[0, 0.045, 0.6]}>
        <boxGeometry args={[0.5, 0.01, 0.35]} />
        <meshStandardMaterial color="#030014" roughness={0.6} />
      </mesh>

      {/* Cyber Keyboard area placeholder (glowing bars) */}
      <group position={[0, 0.045, -0.1]}>
        <mesh>
          <boxGeometry args={[2.2, 0.01, 0.8]} />
          <meshStandardMaterial color="#050212" roughness={0.8} />
        </mesh>
        {/* Glow keys */}
        {[-0.8, -0.4, 0, 0.4, 0.8].map((xOffset, idx) => (
          <mesh key={idx} position={[xOffset, 0.01, 0]}>
            <boxGeometry args={[0.25, 0.01, 0.6]} />
            <meshBasicMaterial color={idx % 2 === 0 ? '#bd00ff' : '#00f0ff'} transparent opacity={0.4} />
          </mesh>
        ))}
      </group>

      {/* Screen Hinge and Screen Lid */}
      <group position={[0, 0.04, -0.85]} rotation={[Math.PI * 0.58, 0, 0]}>
        {/* Screen Bezel */}
        <mesh position={[0, 0.9, 0]} castShadow>
          <boxGeometry args={[2.6, 1.7, 0.06]} />
          <meshStandardMaterial color="#0c0721" metalness={0.9} roughness={0.15} />
        </mesh>

        {/* Display Screen */}
        <mesh position={[0, 0.9, 0.035]}>
          <planeGeometry args={[2.4, 1.5]} />
          <meshBasicMaterial color="#030014" />
        </mesh>

        {/* Display Content Grid overlay */}
        <gridHelper args={[2.4, 12, '#00f0ff', '#bd00ff']} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.9, 0.04]} />

        {/* Display Core Screen Glow */}
        <mesh ref={screenRef} position={[0, 0.9, 0.042]}>
          <planeGeometry args={[2.0, 1.2]} />
          <meshBasicMaterial color="#bd00ff" transparent opacity={0.8} side={THREE.DoubleSide} />
        </mesh>

        {/* Glowing futuristic lines representing code snippets */}
        {[-0.3, 0, 0.3].map((yOffset, idx) => (
          <mesh key={idx} position={[0, 0.9 + yOffset, 0.045]}>
            <boxGeometry args={[1.5, 0.04, 0.01]} />
            <meshBasicMaterial color="#00f0ff" />
          </mesh>
        ))}
      </group>

      {/* Glowing connection lines extending from screen */}
      <group position={[0, 0.4, 0]}>
        <mesh position={[-0.8, 0.2, -0.2]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
        <mesh position={[0.8, 0.2, -0.2]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#bd00ff" />
        </mesh>
      </group>
    </group>
  );
}

// Glowing code lines floating in space around laptop
function CodeLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      linesRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={linesRef}>
      {Array.from({ length: 25 }).map((_, i) => {
        const theta = Math.random() * Math.PI * 2;
        const radius = Math.random() * 1.5 + 1.8;
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        const y = (Math.random() - 0.5) * 2.5 + 0.5;
        const length = Math.random() * 0.6 + 0.2;
        const color = Math.random() > 0.4 ? '#00f0ff' : '#bd00ff';
        
        return (
          <mesh key={i} position={[x, y, z]} rotation={[0, -theta + Math.PI / 2, 0]}>
            <boxGeometry args={[length, 0.02, 0.02]} />
            <meshBasicMaterial color={color} transparent opacity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}

// A glowing, pulsing sphere of compilation (core logic)
function CyberSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      const pulse = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.08;
      sphereRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 1.4, 0]}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial 
        color="#00f0ff" 
        wireframe 
        emissive="#00f0ff" 
        emissiveIntensity={2} 
        transparent 
        opacity={0.7} 
      />
    </mesh>
  );
}

export default function WorkspaceScene() {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative z-10 cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 1.5, 4.5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.6} />
        {/* Neon blue and purple point spotlights */}
        <pointLight position={[5, 5, 5]} color="#00f0ff" intensity={1.5} />
        <pointLight position={[-5, 5, -5]} color="#bd00ff" intensity={1.5} />
        <pointLight position={[0, 0.5, 0.5]} color="#0066ff" intensity={2} />
        
        <Float 
          speed={2} 
          rotationIntensity={0.6} 
          floatIntensity={0.8}
        >
          <Laptop />
          <CodeLines />
          <CyberSphere />
        </Float>

        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 4} 
        />
      </Canvas>
    </div>
  );
}
