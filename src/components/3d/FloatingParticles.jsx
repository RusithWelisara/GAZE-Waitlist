import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingParticles({ count = 100, opacity = 1 }) {
    const meshRef = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const time = Math.random() * 100;
            const factor = Math.random() * 100 + 20;
            const speed = Math.random() * 0.002 + 0.001; // Much slower
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;

            temp.push({ time, factor, speed, x, y, z, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        particles.forEach((particle, i) => {
            let { time, factor, speed, x, y, z } = particle;

            // Update time for subtle movement
            time = particle.time += speed / 2;

            // Add mouse influence
            const mx = (state.mouse.x * 10 - x) * 0.02;
            const my = (state.mouse.y * 10 - (-y)) * 0.02;

            particle.mx += (mx - particle.mx) * 0.1;
            particle.my += (my - particle.my) * 0.1;

            // Calculate final position
            const t = Math.sin(time); // Oscillate
            dummy.position.set(
                x + Math.cos((time / 10) * factor) + (Math.sin(time * 1) * factor) / 10 + particle.mx,
                y + Math.sin((time / 10) * factor) + (Math.cos(time * 2) * factor) / 10 + particle.my,
                z + Math.cos((time / 10) * factor) + (Math.sin(time * 3) * factor) / 10
            );

            // Scale based on "distance" (z-index simulation)
            const scale = Math.max(0.1, (1 + dummy.position.z / 50));
            dummy.scale.set(scale, scale, scale);

            dummy.updateMatrix();

            // Update instance matrix at index i
            if (meshRef.current) {
                meshRef.current.setMatrixAt(i, dummy.matrix);
            }
        });
        if (meshRef.current) {
            meshRef.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial
                color="#8b5cf6"
                transparent
                opacity={0.3 * opacity} // Apply global opacity
                roughness={0.2}
            />
        </instancedMesh>
    );
}
