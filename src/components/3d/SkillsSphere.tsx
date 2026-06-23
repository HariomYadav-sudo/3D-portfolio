import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  'React.js',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Tailwind CSS',
  'Material UI',
  'Redux',
  'Git & GitHub',
  'REST APIs'
];

interface SkillWordProps {
  word: string;
  position: THREE.Vector3;
}

function SkillWord({ word, position }: SkillWordProps) {
  const textRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  // Smooth hover transition
  useFrame(() => {
    if (textRef.current) {
      const targetScale = hovered ? 1.25 : 1;
      textRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Billboard position={position}>
      <Text
        ref={textRef}
        fontSize={0.28}
        font="https://fonts.gstatic.com/s/fira-code/v22/u2Jx0S2Lj2JZ1Fl-o87skjvclg.woff" // Fallback to google fonts Fira Code
        color={hovered ? '#00f0ff' : '#e2e8f0'}
        maxWidth={2}
        textAlign="center"
        onClick={() => alert(` Hariom Yadav has hands-on production experience in ${word}!`)}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        {word}
      </Text>
    </Billboard>
  );
}

function Cloud({ radius }: { radius: number }) {
  const groupRef = useRef<THREE.Group>(null);

  // Fibonacci Sphere distribution
  const words = useMemo(() => {
    const temp = [];
    const count = skills.length;
    for (let i = 0; i < count; i++) {
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / count);
      const theta = Math.PI * (1 + 5 ** 0.5) * k;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      temp.push({
        word: skills[i],
        position: new THREE.Vector3(x, y, z)
      });
    }
    return temp;
  }, [radius]);

  // Self rotation on frame loop
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {words.map((item, idx) => (
        <SkillWord key={idx} word={item.word} position={item.position} />
      ))}
    </group>
  );
}

export default function SkillsSphere() {
  return (
    <div className="w-full h-[320px] sm:h-[400px] md:h-[450px] relative z-10 cursor-grab active:cursor-grabbing">
      {/* Visual cyber circle borders in canvas background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80%] h-[80%] border border-white/5 rounded-full animate-spin-slow" />
      </div>

      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <React.Suspense fallback={null}>
          <Cloud radius={2.2} />
        </React.Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
