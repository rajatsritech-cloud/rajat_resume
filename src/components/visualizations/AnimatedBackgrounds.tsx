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

type BlueprintVariant = "profile" | "impact" | "education";

const variantCopy: Record<BlueprintVariant, { label: string; x: string; y: string; accent: string }> = {
    profile: { label: "SYSTEM DESIGN", x: "62%", y: "22%", accent: "#D4A853" },
    impact: { label: "VELOCITY MAP", x: "12%", y: "18%", accent: "#E8C872" },
    education: { label: "CREDENTIAL PATH", x: "56%", y: "68%", accent: "#D4A853" },
};

export const ArchitecturalFlowBackground = ({ variant = "profile" }: { variant?: BlueprintVariant }) => {
    const config = variantCopy[variant];
    const gradientId = `architect-flow-${variant}`;
    const nodeId = `architect-node-${variant}`;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full opacity-55" viewBox="0 0 1440 760" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={config.accent} stopOpacity="0" />
                        <stop offset="45%" stopColor={config.accent} stopOpacity="0.34" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id={nodeId} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={config.accent} stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#050505" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <rect width="100%" height="100%" fill="#050505" />
                <circle cx={config.x} cy={config.y} r="360" fill={`url(#${nodeId})`} className="animate-pulse-sharp" />

                <g className="animate-slow-pan">
                    <path d="M-120 180H170L260 270H520L610 180H890L1010 300H1560" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
                    <path d="M-120 560H210L330 440H620L730 550H1040L1140 450H1560" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    <path d="M260 0V270M610 180V760M1010 300V760M1140 450V0" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
                </g>

                <g fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.5" className="animate-path-draw">
                    <path d="M-80 330C220 170 420 530 680 340S1120 200 1510 390" />
                    <path d="M-60 470C240 330 420 660 720 500S1120 360 1500 520" />
                </g>

                <g className="animate-pulse-sharp">
                    <rect x="134" y="134" width="132" height="54" rx="8" fill="rgba(212,168,83,0.035)" stroke="rgba(212,168,83,0.16)" />
                    <rect x="1096" y="512" width="172" height="58" rx="8" fill="rgba(255,255,255,0.018)" stroke="rgba(255,255,255,0.08)" />
                    <circle cx="610" cy="180" r="4" fill={config.accent} opacity="0.65" />
                    <circle cx="1010" cy="300" r="4" fill={config.accent} opacity="0.5" />
                    <circle cx="730" cy="550" r="4" fill={config.accent} opacity="0.55" />
                </g>

                <text x={config.x} y={config.y} fill="rgba(255,255,255,0.08)" fontSize="12" fontFamily="monospace" fontWeight="700" textAnchor="middle">
                    {config.label}
                </text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_82%)]" />
        </div>
    );
};
