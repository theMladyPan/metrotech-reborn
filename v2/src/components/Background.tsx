import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const Particles = ({ count = 2000 }) => {
  const mesh = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.05;
      mesh.current.rotation.x = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#64ffda"
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-metro-dark">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#0a192f', 5, 15]} />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default Background;
