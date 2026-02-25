"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import VideoBackground from "@/components/presentation/VideoBackground";

const VIDEO_SRC = 'https://videos.pexels.com/video-files/9629254/9629254-hd_1920_1080_24fps.mp4';

const ExperienceCard = ({ company, role, period, points, delay }: { company: string, role: string, period: string, points: string[], delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full mb-8"
        >
            <div className="glass-card overflow-hidden transition-all duration-500 hover:border-nobel-gold/30 flex flex-col lg:flex-row cursor-pointer"
                style={{ boxShadow: '0 24px 64px -16px rgba(0,0,0,0.5)' }}
            >
                {/* Left Branding */}
                <div className="lg:w-[32%] p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative backdrop-blur-md"
                    style={{ background: 'rgba(10, 10, 10, 0.4)' }}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-nobel-gold/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-[10px] font-black tracking-[0.2em] text-nobel-gold uppercase mb-5 shadow-sm backdrop-blur-md">
                            <Briefcase size={12} /> Career Milestone
                        </div>
                        <h3 className="text-2xl text-white font-semibold leading-tight mb-3 tracking-tight uppercase break-words whitespace-normal drop-shadow-lg">{company}</h3>
                        <div className="flex flex-col gap-1">
                            <p className="text-white font-medium text-base uppercase tracking-wide mb-0 drop-shadow-md">{role}</p>
                            <p className="text-white/60 font-mono text-[11px] font-bold mt-2 uppercase tracking-tighter bg-white/10 w-fit px-3 py-1 rounded mb-0 backdrop-blur-sm shadow-inner">{period}</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="lg:w-[68%] p-10 lg:p-12 backdrop-blur-md" style={{ background: 'rgba(10, 10, 10, 0.4)' }}>
                    <ul className="space-y-6">
                        {points.map((p, i) => (
                            <li key={i} className="flex gap-6 group/item items-start">
                                <div className="mt-1.5 shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-nobel-gold group-hover/item:border-nobel-gold transition-all duration-300 shadow-inner">
                                    <ChevronRight size={12} className="text-white/50 group-hover/item:text-white transition-colors" />
                                </div>
                                <p className="text-white/80 text-[15px] leading-relaxed font-light tracking-tight group-hover/item:text-white transition-colors mb-0 drop-shadow-md">{p}</p>
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
        <section id="experience" className="relative py-20 overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <VideoBackground src={VIDEO_SRC} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="max-w-4xl mb-14">
                    <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-6 block">02 / TENURE HISTORY</span>
                    <h2 className="text-4xl md:text-5xl text-white font-semibold leading-[1.1] tracking-tight mb-6 uppercase">Career <br /><span className="font-light text-white/30">Archive.</span></h2>
                    <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl mb-0">Building technical excellence at high-visibility firms through scalable architectural design.</p>
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
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
