"use client";

import React from 'react';
import { EngineeringImpactDiagram } from "@/components/visualizations/Diagrams";
import { motion } from 'framer-motion';
import { ArchitecturalFlowBackground } from "@/components/visualizations/AnimatedBackgrounds";

const Impact = () => {
    return (
        <section id="impact" className="py-24 relative overflow-hidden" style={{ background: '#050505' }}>
            <div className="section-divider relative z-10" />
            <ArchitecturalFlowBackground variant="impact" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10 pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-12 xl:col-span-5">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-nobel-gold font-semibold text-[13px] tracking-[0.5em] uppercase mb-4 block"
                        >03 / PERFORMANCE GAINS</motion.span>
                        <h2 className="text-white font-semibold mb-7 leading-[1.08] tracking-tighter uppercase">Measurable <br /><span className="font-extralight" style={{ color: 'rgba(255,255,255,0.2)' }}>Impact.</span></h2>
                        <p className="text-[17px] text-white/45 font-light leading-relaxed mb-10 max-w-md">
                            Architecting the transition from legacy bottlenecks to high-velocity delivery within the <span className="text-nobel-gold font-medium">PwC Technical Ecosystem.</span>
                        </p>

                        <div className="space-y-8">
                            {/* 80% metric */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="p-8 glass-card cursor-pointer"
                            >
                                <span className="text-6xl text-white font-bold block leading-none mb-3 tracking-tighter">80%</span>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[2px] rounded-full bg-gradient-to-r from-nobel-gold to-nobel-gold/30"></div>
                                    <p className="text-[12px] text-white/30 uppercase tracking-[0.4em] font-semibold mb-0">Automation Achieved</p>
                                </div>
                            </motion.div>

                            {/* 40m → 3m metric */}
                            <div className="flex items-center gap-6 group pl-4 cursor-pointer">
                                <div className="flex flex-col items-center">
                                    <span className="text-5xl font-semibold text-white/12 line-through decoration-white/8">40m</span>
                                    <span className="text-[11px] font-semibold text-white/20 tracking-[0.3em] uppercase mt-1.5">Legacy</span>
                                </div>
                                <div className="w-16 relative flex items-center">
                                    <div className="w-full h-px bg-gradient-to-r from-white/8 to-white/8" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="px-2.5 py-1 text-[10px] font-semibold text-nobel-gold tracking-[0.15em] uppercase"
                                            style={{ background: 'rgba(212,168,83,0.08)', borderRadius: '6px', boxShadow: 'inset 0 1px 0 rgba(212,168,83,0.1)' }}>
                                            Process
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-6xl font-bold text-white group-hover:text-nobel-gold transition-colors duration-500 tracking-tighter">3m</span>
                                    <span className="text-[11px] font-semibold text-nobel-gold tracking-[0.3em] uppercase mt-1.5">Optimized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-12 xl:col-span-7">
                        <div className="glass-card p-5 rounded-2xl">
                            <EngineeringImpactDiagram dark={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
