import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, GradientTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroGeometry() {
    const groupRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const mouseX = state.mouse.x;
        const mouseY = state.mouse.y;

        if (groupRef.current) {
            // Base floating rotation
            groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
            groupRef.current.rotation.y += 0.005;

            // Mouse interaction (tilt)
            groupRef.current.rotation.x += mouseY * 0.05;
            groupRef.current.rotation.y += mouseX * 0.05;

            // Hover scale effect
            const targetScale = hovered ? 1.1 : 1;
            groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

            // Scroll interaction: Parallax move + Fade out
            const scrollY = window.scrollY;
            const scrollThreshold = 500; // Pixel value where it should be fully gone

            // Move slower than scroll (parallax)
            groupRef.current.position.y = -scrollY * 0.002;

            // Fade out logic logic requires material access, but we can scale down to zero/hide
            // or we'd need to control material opacity via state or ref.
            // Simple approach: Move it away quickly after threshold or scale down.

            if (scrollY > 100) {
                const fade = Math.max(0, 1 - (scrollY - 100) / 400);
                groupRef.current.scale.setScalar(targetScale * fade);
            }
        }
    });

    // Reusable Voxel Cube
    const Voxel = ({ position }) => (
        <mesh position={position}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <MeshDistortMaterial
                color="#8b5cf6"
                speed={2}
                distort={0.2} // Less distortion to keep cube shape
                roughness={0.2}
                transparent={true}
                opacity={0.6}
                wireframe={true}
            />
        </mesh>
    );

    return (
        <group
            ref={groupRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            position={[2.5, 0, 0]} // Shifted right
            rotation={[0.5, -0.5, 0]} // Initial playful angle
        >
            {/* Constructing a 3D "T" Tetromino or Abstract Voxel Cluster */}
            <Voxel position={[0, 0, 0]} />       {/* Center */}
            <Voxel position={[-0.85, 0, 0]} />   {/* Left */}
            <Voxel position={[0.85, 0, 0]} />    {/* Right */}
            <Voxel position={[0, -0.85, 0]} />   {/* Down */}
            <Voxel position={[0, 0, 0.85]} />    {/* Front (making it 3D structure) */}
        </group>
    );
}
