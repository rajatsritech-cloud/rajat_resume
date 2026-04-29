"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SkillsGrid, TechStackDiagram } from "@/components/visualizations/Diagrams";
import { Cloud } from 'lucide-react';
import { GridMatrixBackground } from "@/components/visualizations/AnimatedBackgrounds";

const EcosystemCategory = ({ title, items }: { title: string, items: { name: string, years: string }[] }) => (
    <div className="flex flex-col gap-5 w-full">
        <h4 className="text-[12px] font-medium tracking-[0.3em] text-white/20 uppercase pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{title}</h4>
        <div className="flex flex-col gap-3">
            {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-end group cursor-pointer">
                    <span className="text-[15px] md:text-base font-medium text-white/80 group-hover:text-nobel-gold transition-colors">{item.name}</span>
                    <div className="flex-1 mx-4 mb-1 opacity-30" style={{ borderBottom: '1px dotted rgba(255,255,255,0.1)' }}></div>
                    <span className="text-[13px] font-medium text-white/20 font-mono">{item.years}</span>
                </div>
            ))}
        </div>
    </div>
);

const Expertise = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const ecosystemData = [
        [
            { title: "Frontend", items: [{ name: "React / Next.js", years: "7Y" }, { name: "Tailwind CSS", years: "7Y" }, { name: "Angular", years: "2Y" }, { name: "Astro", years: "1Y" }] },
            { title: "Backend", items: [{ name: "Node.js", years: "6Y" }, { name: "TypeScript", years: "6Y" }, { name: "Java", years: "2Y" }, { name: "Python", years: "4Y" }] }
        ],
        [
            { title: "Data", items: [{ name: "NoSQL", years: "5Y" }, { name: "PostgreSQL", years: "5Y" }, { name: "MySQL", years: "5Y" }, { name: "Redis", years: "5Y" }] },
            { title: "Infra", items: [{ name: "Azure", years: "7Y" }, { name: "Service Bus & Event Hubs", years: "5Y" }, { name: "Container Apps", years: "3Y" }, { name: "OpenAI / OCI / Datadog", years: "3" }] }
        ]
    ];

    if (!mounted) return <div className="py-24 min-h-screen" style={{ background: '#050505' }} />;

    return (
        <section id="expertise" className="relative py-24 text-white min-h-screen overflow-hidden">
            <div className="section-divider" />

            {/* Sharp Matrix SVG */}
            <GridMatrixBackground />

            <div className="container mx-auto px-6 lg:px-20 relative z-10 pt-4">
                <div className="max-w-4xl mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-nobel-gold font-semibold text-[13px] tracking-[0.5em] uppercase mb-4 block"
                    >04 / CORE EXPERTISE</motion.span>
                    <h2 className="text-white font-semibold leading-[1.08] tracking-tighter mb-6 uppercase">
                        The Modern <br />
                        <span className="font-extralight" style={{ color: 'rgba(255,255,255,0.2)' }}>Stack & Ecosystem.</span>
                    </h2>
                    <p className="text-[17px] text-white/40 font-light leading-relaxed max-w-2xl">
                        A clean architecture approach where distributed backends meet elite infrastructure performance.
                    </p>
                </div>

                {/* Ecosystem Lists */}
                <div className="mb-20 space-y-12">
                    {ecosystemData.map((row, rowIdx) => (
                        <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                            {row.map((cat, catIdx) => (
                                <motion.div key={catIdx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: (rowIdx * 2 + catIdx) * 0.08 }}>
                                    <EcosystemCategory title={cat.title} items={cat.items} />
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Cloud Infrastructure Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 p-9 lg:p-10 glass-card rounded-2xl relative overflow-hidden group cursor-pointer"
                >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-[0.2em] text-nobel-gold uppercase mb-5"
                                style={{ background: 'rgba(212,168,83,0.08)', boxShadow: 'inset 0 1px 0 rgba(212,168,83,0.1)' }}>
                                <Cloud size={12} /> Cloud Infrastructure Excellence
                            </div>
                            <h3 className="text-white font-semibold mb-4 uppercase leading-[0.95] tracking-tighter">Infra <br /><span className="font-extralight" style={{ color: 'rgba(255,255,255,0.2)' }}>Azure / Cloud</span></h3>
                            <p className="text-[17px] text-white/45 font-light leading-snug">
                                Azure AI Search, Vector DBs, and secure <span className="text-nobel-gold font-medium">Financial Enterprise delivery.</span>
                            </p>
                        </div>
                        <div className="lg:col-span-5 flex flex-col items-center">
                            <TechStackDiagram />
                        </div>
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div>
                    <div className="flex flex-col mb-10">
                        <h4 className="text-[12px] font-medium tracking-[0.35em] text-white/20 uppercase mb-4 pl-1">Visual Domain Expertise</h4>
                        <div className="section-divider" />
                    </div>
                    <SkillsGrid />
                </div>
            </div>
        </section>
    );
};

export default Expertise;
