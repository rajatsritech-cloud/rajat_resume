"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Target, Star } from 'lucide-react';

const Profile = () => {
    return (
        <section
            id="profile"
            className="relative z-10 overflow-hidden border-b border-stone-100"
            style={{
                padding: '6rem 0',
                background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #ffffff 0%, #f7f5f2 40%, #edeae6 100%)',
            }}
        >
            {/* ── Flowing SVG Background Shapes ── */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 1440 900"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {/* Large flowing blob top-right */}
                <motion.path
                    d="M980 -60C1120 20 1380 80 1460 220C1540 360 1400 480 1260 520C1120 560 960 500 840 400C720 300 840 -140 980 -60Z"
                    fill="url(#blob1)"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                />
                {/* Mid-left flowing blob */}
                <motion.path
                    d="M-100 400C0 280 200 200 360 260C520 320 560 500 480 620C400 740 180 760 60 680C-60 600 -200 520 -100 400Z"
                    fill="url(#blob2)"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' }}
                />
                {/* Small accent blob center-bottom */}
                <motion.ellipse
                    cx="720"
                    cy="780"
                    rx="340"
                    ry="180"
                    fill="url(#blob3)"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
                />
                {/* Thin flowing curve across the section */}
                <motion.path
                    d="M0 520Q360 380 720 440Q1080 500 1440 380"
                    stroke="rgba(197,160,89,0.08)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 0.8, ease: 'easeInOut' }}
                />
                <defs>
                    <radialGradient id="blob1" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="rgba(210,205,195,0.35)" />
                        <stop offset="100%" stopColor="rgba(210,205,195,0)" />
                    </radialGradient>
                    <radialGradient id="blob2" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="rgba(197,160,89,0.07)" />
                        <stop offset="100%" stopColor="rgba(220,215,205,0)" />
                    </radialGradient>
                    <radialGradient id="blob3" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="rgba(200,195,185,0.2)" />
                        <stop offset="100%" stopColor="rgba(200,195,185,0)" />
                    </radialGradient>
                </defs>
            </svg>

            {/* Warm gold ambient glow top-right */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -mr-72 -mt-72 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.08) 0%, transparent 70%)' }} />
            {/* Subtle warm glow bottom-left */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -ml-48 -mb-48 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.05) 0%, transparent 70%)' }} />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column: Label + Heading + Contact Cards */}
                    <div className="lg:w-[35%]">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-6 block"
                        >
                            01 / ARCHITECTURE
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.15 }}
                            className="font-sans text-4xl md:text-5xl font-semibold mb-8 text-stone-950 leading-[1.1] tracking-tight uppercase"
                        >
                            Engineered <br /><span className="font-light text-stone-400">Excellence.</span>
                        </motion.h2>

                        <div className="space-y-6 w-full max-w-lg" style={{ perspective: '900px' }}>
                            {[
                                { icon: <MapPin size={24} />, label: "Base", value: "Bengaluru, India" },
                                { icon: <Mail size={24} />, label: "Direct", value: "rajat.sri.tech@gmail.com" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30, rotateX: 8 }}
                                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                                    whileHover={{ y: -6, scale: 1.03, boxShadow: '0 24px 48px -12px rgba(197,160,89,0.15), 0 8px 20px -4px rgba(0,0,0,0.08)' }}
                                    className="flex items-center gap-5 p-6 rounded-2xl border cursor-pointer group"
                                    style={{
                                        background: 'rgba(255,255,255,0.65)',
                                        backdropFilter: 'blur(24px) saturate(1.3)',
                                        WebkitBackdropFilter: 'blur(24px) saturate(1.3)',
                                        borderColor: 'rgba(214,210,200,0.5)',
                                        boxShadow: '0 10px 40px -8px rgba(0,0,0,0.06), 0 2px 8px -2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)',
                                        transform: 'translateZ(0)',
                                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg shrink-0"
                                        style={{
                                            background: 'linear-gradient(135deg, #C5A059 0%, #D4B06A 100%)',
                                            color: '#fff',
                                            boxShadow: '0 6px 16px -4px rgba(197,160,89,0.35)',
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</span>
                                        <span className="text-stone-950 font-semibold text-[17px]">{item.value}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Intro + Feature Cards */}
                    <div className="lg:w-[65%]">
                        <div className="space-y-12">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="text-2xl md:text-3xl text-stone-950 font-sans font-medium leading-[1.4] tracking-tight max-w-3xl"
                            >
                                Senior Full-Stack Software Engineer specializing in <span className="text-nobel-gold font-semibold">large-scale systems</span> and enterprise AI modernization.
                            </motion.p>

                            <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(197,160,89,0.2), rgba(214,210,200,0.4), rgba(197,160,89,0.2), transparent)' }} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
                                {[
                                    { icon: <Target size={24} />, title: "Tech Lead Vision", desc: "Seeking to drive technical excellence and architect scalable solutions leveraging distributed systems and cloud-native AI." },
                                    { icon: <Star size={24} />, title: "Modernization Lead", desc: "Leading enterprise modernization via intelligent automation and AI enablement. Driving cloud-native architectures to enhance operational efficiency and business agility." }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 40, rotateX: 6 }}
                                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.9, delay: 0.4 + i * 0.2 }}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02,
                                            boxShadow: '0 32px 64px -16px rgba(197,160,89,0.12), 0 16px 32px -8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,1)',
                                        }}
                                        className="group p-10 rounded-2xl h-full cursor-pointer"
                                        style={{
                                            background: 'rgba(255,255,255,0.55)',
                                            backdropFilter: 'blur(20px) saturate(1.2)',
                                            WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
                                            border: '1px solid rgba(214,210,200,0.45)',
                                            boxShadow: '0 16px 48px -12px rgba(0,0,0,0.08), 0 4px 12px -2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.85)',
                                            transform: 'translateZ(0)',
                                            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                        }}
                                    >
                                        <div className="flex items-center gap-4 mb-5">
                                            <div
                                                className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:text-white transition-all duration-500 shrink-0"
                                                style={{
                                                    background: 'rgba(197,160,89,0.1)',
                                                    border: '1px solid rgba(197,160,89,0.2)',
                                                    color: '#C5A059',
                                                    boxShadow: '0 4px 12px -2px rgba(197,160,89,0.1)',
                                                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                                }}
                                            >
                                                {feature.icon}
                                            </div>
                                            <h4 className="font-sans text-xl text-stone-950 font-semibold tracking-tight leading-snug">{feature.title}</h4>
                                        </div>
                                        <p className="text-stone-600 text-[17px] leading-relaxed font-light">{feature.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
