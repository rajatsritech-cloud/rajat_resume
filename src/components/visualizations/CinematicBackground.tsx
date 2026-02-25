"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const ParticleGlowBackground = () => (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#1a140b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full blur-[140px]"
            style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.15) 0%, transparent 70%)' }}
        />
        <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], x: ['10%', '-10%', '10%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vw] rounded-full blur-[160px]"
            style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.1) 0%, transparent 60%)' }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
    </div>
);

export const GridLinesBackground = () => (
    <div className="absolute inset-0 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0"
            style={{
                backgroundImage: 'linear-gradient(rgba(197,160,89,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,0.05) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                transformOrigin: 'top center'
            }}
        />
        <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-nobel-gold/10 to-transparent blur-3xl opacity-50"
        />
    </div>
);

export const RadialPulseBackground = () => (
    <div className="absolute inset-0 overflow-hidden bg-[#080705]">
        {[...Array(3)].map((_, i) => (
            <motion.div
                key={i}
                animate={{ scale: [0.8, 1.5, 0.8], opacity: [0, 0.2, 0] }}
                transition={{ duration: 8, repeat: Infinity, delay: i * 2.5, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-nobel-gold/20"
                style={{ boxShadow: 'inset 0 0 60px rgba(197,160,89,0.1)' }}
            />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
    </div>
);

export const FloatingOrbsBackground = () => (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]">
        <motion.div
            animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-nobel-gold/10 rounded-full blur-[100px]"
        />
        <motion.div
            animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-nobel-gold/5 rounded-full blur-[120px]"
        />
    </div>
);
