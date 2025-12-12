import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Box, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry({ position, color, scale = 1, speed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.4}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.1}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function GoldenTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={0.8}>
        <torusGeometry args={[1, 0.3, 16, 50]} />
        <meshStandardMaterial
          color="#C9A227"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

function CrystalSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={0.6}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshWobbleMaterial
          color="#E8E0D5"
          factor={0.3}
          speed={1}
          metalness={0.1}
          roughness={0.4}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#C9A227"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function DiamondShape({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={0.4}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#C9A227"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 dark:opacity-80">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#C9A227" />
        
        <ParticleField />
        
        <FloatingGeometry position={[-4, 2, -2]} color="#C9A227" scale={0.7} speed={0.8} />
        <FloatingGeometry position={[4, -1, -3]} color="#8B7355" scale={0.5} speed={1.2} />
        <GoldenTorus position={[3, 2, -2]} />
        <CrystalSphere position={[-3, -2, -1]} />
        <DiamondShape position={[0, 3, -4]} />
        <DiamondShape position={[-2, 0, -5]} />
      </Canvas>
    </div>
  );
}

export function BackgroundScene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30 dark:opacity-50">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#C9A227" />
        
        <ParticleField />
        
        <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={[-6, 3, -5]} scale={0.3}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#C9A227" metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>
        
        <Float speed={0.7} rotationIntensity={0.3} floatIntensity={0.6}>
          <mesh position={[6, -3, -6]} scale={0.25}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#8B7355" metalness={0.7} roughness={0.3} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}

export default HeroScene3D;
