"use client";

import React from 'react';

/* ═══════════════════════════════════════════════════
   EXPERTISE — Sharp Geometric Matrix
   ═══════════════════════════════════════════════════ */
export const GridMatrixBackground = () => (
    <div className="absolute inset-0 overflow-hidden bg-[#050505] z-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="hex-grid" width="60" height="103.92" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
                    <path d="M30 0L60 17.32V51.96L30 69.28L0 51.96V17.32Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    <path d="M30 103.92L60 86.6V51.96L30 34.64L0 51.96V86.6Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </pattern>
                <radialGradient id="matrix-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D4A853" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#050505" stopOpacity="0" />
                </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#hex-grid)" />

            <g className="animate-slow-pan">
                <circle cx="20%" cy="30%" r="400" fill="url(#matrix-glow)" />
                <circle cx="80%" cy="70%" r="500" fill="url(#matrix-glow)" />

                {/* Sharp floating geometric accents */}
                <polygon points="100,100 120,90 140,100 140,120 120,130 100,120" fill="none" stroke="#D4A853" strokeWidth="1" className="animate-pulse-sharp" />
                <polygon points="800,400 830,380 860,400 860,430 830,450 800,430" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" className="animate-pulse-sharp" style={{ animationDelay: '1s' }} />
                <polygon points="400,800 415,790 430,800 430,815 415,825 400,815" fill="none" stroke="#D4A853" strokeWidth="1.5" className="animate-pulse-sharp" style={{ animationDelay: '2s' }} />
            </g>
        </svg>
    </div>
);
