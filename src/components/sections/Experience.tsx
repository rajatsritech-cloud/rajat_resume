"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';

const ExperienceCard = ({ company, role, period, points, delay }: { company: string, role: string, period: string, points: string[], delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full mb-12"
        >
            <div className="bg-white/[0.02] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(197,160,89,0.1)] hover:border-nobel-gold/30 flex flex-col lg:flex-row cursor-pointer">
                {/* Left Branding Column */}
                <div className="lg:w-[32%] bg-white/[0.01] p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 relative">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-nobel-gold/5 rounded-full -mr-20 -mt-20"></div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-[0.2em] text-nobel-gold uppercase mb-8 shadow-sm">
                            <Briefcase size={12} /> Career Milestone
                        </div>
                        <h3 className="font-serif text-3xl text-white leading-tight mb-3 tracking-tighter uppercase break-words whitespace-normal">{company}</h3>
                        <div className="flex flex-col gap-1">
                            <p className="text-stone-300 font-bold text-sm uppercase tracking-wide">{role}</p>
                            <p className="text-stone-500 font-mono text-[11px] font-bold mt-2 uppercase tracking-tighter bg-white/5 w-fit px-3 py-1 rounded">{period}</p>
                        </div>
                    </div>
                </div>

                {/* Content Column */}
                <div className="lg:w-[68%] p-10 lg:p-14">
                    <ul className="space-y-6">
                        {points.map((p, i) => (
                            <li key={i} className="flex gap-6 group/item items-start">
                                <div className="mt-1.5 shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-nobel-gold group-hover/item:border-nobel-gold transition-all duration-300">
                                    <ChevronRight size={12} className="text-stone-600 group-hover/item:text-white transition-colors" />
                                </div>
                                <p className="text-stone-400 text-[16px] leading-relaxed font-light tracking-tight group-hover/item:text-stone-200 transition-colors">{p}</p>
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
        <section id="experience" className="py-24 bg-stone-950 border-b border-white/5">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="max-w-4xl mb-24">
                    <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-8 block">02 / TENURE HISTORY</span>
                    <h2 className="font-serif text-5xl md:text-7xl text-white leading-[1] tracking-tighter mb-8 uppercase">Career <br /><span className="italic font-normal text-stone-500">Archive.</span></h2>
                    <p className="text-2xl text-stone-400 font-light leading-relaxed max-w-2xl">Building technical excellence at high-visibility firms through scalable architectural design.</p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <ExperienceCard
                        company="PricewaterhouseCoopers (PwC AC)"
                        role="Senior Associate – Full-Stack Engineer"
                        period="FEB 2021 — PRESENT"
                        points={[
                            "Built a distributed microservices platform for automated tax workpaper generation, supporting concurrent users and driving 80%+ automation.",
                            "Optimized critical Excel workflows using streaming OpenXML processing, slashing latency from 40m to <3m.",
                            "Led Proof of Concept for major airline legacy system modernization using Agentic AI (CrewAI) and Python.",
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
