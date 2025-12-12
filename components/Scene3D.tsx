import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry({ position, color, scale = 1, speed = 1, wireframe = false }: { 
  position: [number, number, number]; 
  color: string; 
  scale?: number; 
  speed?: number;
  wireframe?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.position.x = position[0] + mouse.x * 0.3;
      meshRef.current.position.y = position[1] + mouse.y * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, wireframe ? 1 : 2]} />
        {wireframe ? (
          <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
        ) : (
          <MeshDistortMaterial
            color={color}
            envMapIntensity={0.8}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0.2}
            roughness={0.1}
            distort={0.3}
            speed={3}
          />
        )}
      </mesh>
    </Float>
  );
}

function GoldenTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 + mouse.y * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.08 + mouse.x * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={1}>
        <torusGeometry args={[1, 0.35, 32, 100]} />
        <meshStandardMaterial
          color="#C9A227"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

function CrystalSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={0.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshWobbleMaterial
          color="#C8AA6E"
          factor={0.2}
          speed={1.5}
          metalness={0.3}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function EnhancedParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(1000 * 3);
    const cols = new Float32Array(1000 * 3);
    const goldColor = new THREE.Color('#C9A227');
    const creamColor = new THREE.Color('#E8D4A8');
    
    for (let i = 0; i < 1000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      const mixFactor = Math.random();
      const mixedColor = goldColor.clone().lerp(creamColor, mixFactor);
      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015 + mouse.x * 0.1;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01 + mouse.y * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={1000}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function DiamondShape({ position, scale = 0.5 }: { position: [number, number, number]; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25 + mouse.x * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#C9A227"
          metalness={0.98}
          roughness={0.02}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

function GlowingRing({ position, radius = 2, color = "#C8AA6E" }: { 
  position: [number, number, number]; 
  radius?: number;
  color?: string;
}) {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} position={position}>
      <ringGeometry args={[radius, radius + 0.02, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} side={THREE.DoubleSide} />
    </mesh>
  );
}

function FloatingWireframeSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={3}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshBasicMaterial color="#C8AA6E" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

export function HeroScene3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-70 dark:opacity-90">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#fff" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#C9A227" />
          <pointLight position={[5, 5, 5]} intensity={0.4} color="#E8D4A8" />
          
          <Stars radius={50} depth={50} count={1500} factor={3} saturation={0} fade speed={0.5} />
          
          <EnhancedParticleField />
          
          <FloatingWireframeSphere position={[0, 0, -5]} />
          
          <GlowingRing position={[0, 0, -3]} radius={4} />
          <GlowingRing position={[0, 0, -6]} radius={6} color="#8C7548" />
          
          <FloatingGeometry position={[-5, 2.5, -3]} color="#C9A227" scale={0.8} speed={0.6} />
          <FloatingGeometry position={[5, -1.5, -4]} color="#E8D4A8" scale={0.6} speed={0.9} wireframe />
          <FloatingGeometry position={[-3, -3, -2]} color="#8B7355" scale={0.4} speed={1.1} />
          
          <GoldenTorus position={[4, 2.5, -3]} />
          <CrystalSphere position={[-4, -2, -2]} />
          
          <DiamondShape position={[0, 4, -5]} scale={0.6} />
          <DiamondShape position={[-2.5, 0.5, -6]} scale={0.4} />
          <DiamondShape position={[3, -2, -4]} scale={0.35} />
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function BackgroundScene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.4} color="#C9A227" />
          
          <Stars radius={80} depth={60} count={800} factor={2} saturation={0} fade speed={0.3} />
          
          <EnhancedParticleField />
          
          <Float speed={0.4} rotationIntensity={0.15} floatIntensity={0.4}>
            <mesh position={[-8, 4, -8]} scale={0.4}>
              <icosahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#C9A227" metalness={0.9} roughness={0.1} />
            </mesh>
          </Float>
          
          <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh position={[8, -4, -10]} scale={0.3}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#8B7355" metalness={0.8} roughness={0.2} />
            </mesh>
          </Float>
          
          <GlowingRing position={[0, 0, -8]} radius={8} color="#C8AA6E" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HeroScene3D;
