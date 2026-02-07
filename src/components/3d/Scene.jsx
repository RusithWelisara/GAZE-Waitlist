import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import HeroGeometry from './HeroGeometry';
import FloatingParticles from './FloatingParticles';

export default function Scene({ opacity = 1 }) {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000" style={{ opacity }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]} // Handle high DPI screens
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4c1d95" />

                    <HeroGeometry opacity={opacity} />
                    <FloatingParticles count={150} opacity={opacity} />

                    {/* Environment for reflections */}
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
