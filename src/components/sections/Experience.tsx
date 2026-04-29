"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';


import Image from 'next/image';

const ExperienceCard = ({ company, role, period, points, delay }: { company: string, role: string, period: string, points: string[], delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full mb-8"
        >
            <div className="glass-card overflow-hidden flex flex-col lg:flex-row cursor-pointer group">
                {/* Left Branding */}
                <div className="lg:w-[32%] p-8 lg:p-9 flex flex-col justify-between relative"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold tracking-[0.15em] text-nobel-gold uppercase mb-5"
                            style={{ background: 'rgba(212,168,83,0.08)', boxShadow: 'inset 0 1px 0 rgba(212,168,83,0.1)' }}>
                            <Briefcase size={10} /> Career Milestone
                        </div>
                        <h3 className="text-xl text-white font-semibold leading-tight mb-3 tracking-tight uppercase break-words whitespace-normal">{company}</h3>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-white/70 font-medium text-[15px] uppercase tracking-wide mb-0">{role}</p>
                            <p className="text-white/30 font-mono text-[13px] font-medium mt-1.5 uppercase tracking-tight w-fit mb-0">{period}</p>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="hidden lg:block w-px self-stretch" style={{ background: 'linear-gradient(180deg, transparent, rgba(212,168,83,0.12), transparent)' }} />
                <div className="lg:hidden h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,83,0.12), transparent)' }} />

                {/* Content */}
                <div className="lg:w-[68%] p-8 lg:p-10">
                    <ul className="space-y-5">
                        {points.map((p, i) => (
                            <li key={i} className="flex gap-4 group/item items-start">
                                <div className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-nobel-gold/40 group-hover/item:bg-nobel-gold group-hover/item:shadow-[0_0_8px_rgba(212,168,83,0.4)] transition-all duration-300" />
                                <p className="text-white/60 text-[17px] leading-relaxed font-light group-hover/item:text-white/85 transition-colors mb-0">{p}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 overflow-hidden">
            <div className="section-divider relative z-10" />

            {/* Image Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/experience-bg.png" /* Please place your image in the public folder and name it 'experience-bg.png' */
                    alt="Experience Background"
                    fill
                    className="object-cover opacity-35 mix-blend-screen blur-[6px]"
                />
                {/* Edge fade: radial gradient to smoothly hide all edges into the dark theme */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 20%, #050505 85%)' }} />
                {/* Top and bottom fade for seamless transition between sections */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10 pt-4">
                <div className="max-w-4xl mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-nobel-gold font-semibold text-[13px] tracking-[0.5em] uppercase mb-4 block"
                    >02 / TENURE HISTORY</motion.span>
                    <h2 className="text-white font-semibold leading-[1.08] tracking-tighter mb-4 uppercase">Career <br /><span className="font-extralight" style={{ color: 'rgba(255,255,255,0.2)' }}>Archive.</span></h2>
                    <p className="text-base text-white/40 font-light leading-relaxed max-w-2xl mb-0">Building technical excellence at high-visibility firms through scalable architectural design.</p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <ExperienceCard
                        company="PricewaterhouseCoopers (PwC AC)"
                        role="Senior Associate – Full-Stack Engineer"
                        period="FEB 2021 — PRESENT"
                        points={[
                            "Built a distributed microservices platform for automated tax workpaper generation, supporting concurrent users and driving 80%+ automation.",
                            "Optimized critical Excel workflows using streaming OpenXML processing, slashing latency from 40m to <3m.",
                            "Architected 4 production-grade services (orchestration, classification, estimation, Excel processing) with Python/FastAPI and .NET 8.",
                            "Spearheaded Frontend Architecture Modernization using React 18, integrating PwC AppKit for enterprise UI standards.",
                            "Developed 'First-of-its-Kind' Global Delivery Tool on Power Platform (Power Pages & Automate) for high-visibility engagements.",
                            "Built AI-powered document classification pipeline using LLMs, Vector Embeddings, and Hybrid Search.",
                            "Accelerated application delivery by 40% through a custom internal GenAI developer platform.",
                            "Led M365 Migration Initiative, reducing defects to <1% using custom Power Platform transition tools."
                        ]}
                        delay={0}
                    />
                    <ExperienceCard
                        company="Mindtree Ltd"
                        role="Senior Software Engineer"
                        period="OCT 2018 — JAN 2021"
                        points={[
                            "Built full-stack, cloud-based platforms for global luxury hospitality client, boosting revenue and retention by 20%.",
                            "Improved consumer-facing website frontend performance by 40% using code-splitting and React optimization.",
                            "Developed reusable UI component libraries increasing engineering velocity across multiple teams by 30%.",
                            "Delivered real-time analytics dashboards for healthcare clients using cloud data (DOMO) enabling data-driven decisions."
                        ]}
                        delay={0.15}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
