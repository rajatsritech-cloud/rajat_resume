"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Cylinder, Stars, Environment, Box } from '@react-three/drei';
import * as THREE from 'three';

const DataParticle = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            const t = state.clock.getElapsedTime();
            ref.current.position.y = position[1] + Math.sin(t * 1.5 + position[0]) * 0.3;
            ref.current.rotation.x = t * 0.4;
            ref.current.rotation.z = t * 0.2;
        }
    });

    return (
        <Sphere ref={ref} args={[1, 32, 32]} position={position} scale={scale}>
            <MeshDistortMaterial
                color={color}
                envMapIntensity={2}
                clearcoat={1}
                clearcoatRoughness={0.1}
                metalness={0.9}
                distort={0.4}
                speed={2}
            />
        </Sphere>
    );
};

const NeuralNetworkLine = () => {
    const ref = useRef<THREE.Mesh>(null);
    const ref2 = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ref.current) {
            ref.current.rotation.x = Math.sin(t * 0.1) * 0.1;
            ref.current.rotation.y = t * 0.08;
        }
        if (ref2.current) {
            ref2.current.rotation.x = Math.sin(t * 0.15) * 0.15;
            ref2.current.rotation.y = -t * 0.1;
        }
    });

    return (
        <group>
            <Torus ref={ref} args={[4, 0.04, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={1.5} transparent opacity={0.3} wireframe />
            </Torus>
            <Torus ref={ref2} args={[3.8, 0.02, 8, 50]} rotation={[Math.PI / 4, 0, 0]}>
                <meshStandardMaterial color="#ffffff" transparent opacity={0.1} wireframe />
            </Torus>
        </group>
    );
}

export const HeroScene: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="absolute inset-0 z-0 bg-stone-950" />;
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[15, 15, 15]} intensity={2} color="#C5A059" />
                <spotLight position={[-15, 15, 15]} angle={0.2} penumbra={1} intensity={2} color="#ffffff" />

                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
                    <DataParticle position={[0, 0, 0]} color="#C5A059" scale={1.2} />
                    <NeuralNetworkLine />
                </Float>

                <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
                    <DataParticle position={[-5, 2, -4]} color="#ffffff" scale={0.3} />
                    <DataParticle position={[6, -3, -5]} color="#C5A059" scale={0.6} />
                    <DataParticle position={[3, 4, -3]} color="#888888" scale={0.2} />
                </Float>

                <Environment preset="night" />
                <Stars radius={150} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export const CloudSystemScene: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <div className="w-full h-full absolute inset-0">
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
                <ambientLight intensity={1} />
                <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={5} color="#C5A059" />
                <Environment preset="studio" />

                <Float rotationIntensity={0.8} floatIntensity={0.5} speed={1.5}>
                    <group position={[0, 0, 0]}>
                        <Box args={[1.2, 1.2, 1.2]} position={[0, 0, 0]}>
                            <meshStandardMaterial color="#000000" metalness={1} roughness={0} />
                        </Box>

                        {[0, 1, 2, 3].map((i) => (
                            <Torus key={i} args={[2.5 - i * 0.5, 0.02, 16, 100]} rotation={[i * Math.PI / 4, i * Math.PI / 8, 0]}>
                                <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.1} transparent opacity={0.4} />
                            </Torus>
                        ))}

                        {[
                            [2, 0, 0], [-2, 0, 0], [0, 2, 0], [0, -2, 0]
                        ].map((pos, i) => (
                            <Box key={i} args={[0.4, 0.4, 0.4]} position={pos as [number, number, number]}>
                                <meshStandardMaterial color={i % 2 === 0 ? "#C5A059" : "#ffffff"} metalness={1} roughness={0.1} />
                            </Box>
                        ))}

                        <Cylinder args={[0.02, 0.02, 4, 8]} rotation={[0, 0, Math.PI / 2]}>
                            <meshStandardMaterial color="#C5A059" transparent opacity={0.2} />
                        </Cylinder>
                        <Cylinder args={[0.02, 0.02, 4, 8]}>
                            <meshStandardMaterial color="#C5A059" transparent opacity={0.2} />
                        </Cylinder>
                    </group>
                </Float>
            </Canvas>
        </div>
    );
}
