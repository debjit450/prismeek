import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function MorphingBlob({ 
  position, 
  size = 1, 
  color,
  opacity = 0.4,
  speed = 0.3,
}: {
  position: [number, number, number];
  size?: number;
  color: string;
  opacity?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { pointer } = useThree();
  const initialPosition = useRef(position);

  const blobShader = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: opacity },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      uniform float uTime;
      
      void main() {
        vUv = uv;
        vNormal = normal;
        
        vec3 pos = position;
        float noise = sin(pos.x * 1.5 + uTime * 0.8) * 0.15 + 
                      sin(pos.y * 1.2 + uTime * 0.6) * 0.15 +
                      sin(pos.z * 1.3 + uTime * 0.7) * 0.15;
        pos += normal * noise;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uTime;
      
      void main() {
        float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 1.5);
        vec3 finalColor = uColor + fresnel * 0.2;
        float alpha = uOpacity * (0.6 + fresnel * 0.4);
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,
  }), [color, opacity]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = initialPosition.current[0] + pointer.x * 0.15;
      meshRef.current.position.y = initialPosition.current[1] + pointer.y * 0.1;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={size}>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial
          ref={materialRef}
          attach="material"
          {...blobShader}
          transparent
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </mesh>
    </Float>
  );
}

function MinimalDots() {
  const dotsRef = useRef<THREE.Points>(null);

  const [positions] = useMemo(() => {
    const count = 30;
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 5;
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (dotsRef.current) {
      dotsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={dotsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={30} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#7C3AED"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

export function HeroScene3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />

          <MinimalDots />

          {/* Large purple blob - top right */}
          <MorphingBlob 
            position={[3, 2, -3]} 
            size={3.5} 
            color="#7C3AED"
            opacity={0.35}
            speed={0.25}
          />

          {/* Pink/coral blob - bottom left */}
          <MorphingBlob 
            position={[-3.5, -1.5, -4]} 
            size={2.8} 
            color="#F43F5E"
            opacity={0.3}
            speed={0.3}
          />

          {/* Cyan blob - center */}
          <MorphingBlob 
            position={[0.5, 0, -5]} 
            size={2.2} 
            color="#06B6D4"
            opacity={0.25}
            speed={0.35}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function BackgroundScene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />

          <MinimalDots />

          <MorphingBlob 
            position={[-5, 3, -8]} 
            size={2} 
            color="#7C3AED"
            opacity={0.25}
            speed={0.2}
          />

          <MorphingBlob 
            position={[5, -2, -10]} 
            size={1.8} 
            color="#F43F5E"
            opacity={0.2}
            speed={0.25}
          />

          <MorphingBlob 
            position={[0, -4, -6]} 
            size={1.5} 
            color="#06B6D4"
            opacity={0.2}
            speed={0.22}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HeroScene3D;
