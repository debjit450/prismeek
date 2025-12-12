import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function GoldenRing({ position, radius = 2, thickness = 0.015 }: {
  position: [number, number, number];
  radius?: number;
  thickness?: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2.5 + Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[radius, thickness, 64, 200]} />
      <meshStandardMaterial
        color="#C9A227"
        metalness={0.95}
        roughness={0.05}
        emissive="#C9A227"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function FloatingSphere({ position, color, size = 0.3, speed = 1 }: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.position.x = position[0] + mouse.x * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

function SoftParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(400 * 3);
    const cols = new Float32Array(400 * 3);

    const palette = [
      new THREE.Color('#C9A227'),
      new THREE.Color('#8FA89A'),
      new THREE.Color('#C4937A'),
    ];

    for (let i = 0; i < 400; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 8 + Math.random() * 12;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = Math.sin(angle) * radius - 10;

      const color = palette[Math.floor(Math.random() * palette.length)];
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={400} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={400} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function HeroScene3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 dark:opacity-80">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} color="#fff" />
          <pointLight position={[-5, 5, 5]} intensity={0.3} color="#C9A227" />
          <pointLight position={[5, -5, 5]} intensity={0.2} color="#8FA89A" />

          <SoftParticles />

          <GoldenRing position={[0, 0, -5]} radius={3.5} />
          <GoldenRing position={[0, 0, -8]} radius={5} thickness={0.01} />

          <FloatingSphere position={[-4, 2, -4]} color="#C9A227" size={0.25} speed={0.8} />
          <FloatingSphere position={[4.5, -1.5, -5]} color="#8FA89A" size={0.2} speed={1.2} />
          <FloatingSphere position={[-3, -2.5, -3]} color="#C4937A" size={0.18} speed={0.6} />
          <FloatingSphere position={[3, 3, -6]} color="#8B7189" size={0.15} speed={1} />

          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function BackgroundScene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30 dark:opacity-50">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#C9A227" />

          <SoftParticles />

          <Float speed={0.3} rotationIntensity={0.1} floatIntensity={0.3}>
            <mesh position={[-8, 4, -12]} scale={0.2}>
              <sphereGeometry args={[1, 24, 24]} />
              <meshStandardMaterial color="#C9A227" metalness={0.9} roughness={0.1} />
            </mesh>
          </Float>

          <Float speed={0.4} rotationIntensity={0.15} floatIntensity={0.4}>
            <mesh position={[8, -4, -14]} scale={0.15}>
              <sphereGeometry args={[1, 24, 24]} />
              <meshStandardMaterial color="#8FA89A" metalness={0.8} roughness={0.2} />
            </mesh>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HeroScene3D;
