"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SkillsGrid, TechStackDiagram } from "@/components/visualizations/Diagrams";
import { Server, Database, Layout, Terminal, Cloud } from 'lucide-react';

const EcosystemCategory = ({ title, items }: { title: string, items: { name: string, years: string }[] }) => (
    <div className="flex flex-col gap-6 w-full">
        <h4 className="text-[10px] font-black tracking-[0.4em] text-stone-500 uppercase border-b border-white/5 pb-4">{title}</h4>
        <div className="flex flex-col gap-4">
            {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-end group cursor-pointer">
                    <span className="text-xl md:text-2xl font-serif text-white group-hover:text-nobel-gold transition-colors">{item.name}</span>
                    <div className="flex-1 border-b border-dotted border-white/10 mx-4 mb-1 opacity-50"></div>
                    <span className="text-[11px] font-black text-stone-500 font-mono italic">{item.years}</span>
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
            {
                title: "Backend",
                items: [
                    { name: "Node.js", years: "8Y" },
                    { name: "TypeScript", years: "7Y" },
                    { name: "Java / Spring", years: "8Y" },
                    { name: "Python / Flask", years: "6Y" },
                    { name: "Golang", years: "2Y" }
                ]
            },
            {
                title: "Frontend",
                items: [
                    { name: "React / Next.js", years: "6Y" },
                    { name: "Tailwind CSS", years: "1Y" },
                    { name: "Jekyll", years: "5Y" },
                    { name: "Astro", years: "1Y" }
                ]
            }
        ],
        [
            {
                title: "Data",
                items: [
                    { name: "MySQL / MongoDB", years: "6Y" },
                    { name: "Redis", years: "8Y" },
                    { name: "Cassandra", years: "3Y" },
                    { name: "Prometheus", years: "2Y" }
                ]
            },
            {
                title: "Infra",
                items: [
                    { name: "Apache Kafka", years: "7Y" },
                    { name: "Apache Spark", years: "5Y" },
                    { name: "RabbitMQ", years: "5Y" },
                    { name: "OpenAI / Datadog", years: "EXP" }
                ]
            }
        ]
    ];

    if (!mounted) return <div className="py-24 bg-stone-950 min-h-screen" />;

    return (
        <section id="expertise" className="py-32 bg-stone-950 text-white relative overflow-hidden border-b border-white/5">
            {/* Subtle Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-25">
                <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] bg-nobel-gold/5 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-blue-500/5 rounded-full blur-[140px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                {/* 0. Header Narrative */}
                <div className="max-w-4xl mb-32">
                    <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-8 block">04 / CORE EXPERTISE</span>
                    <h2 className="font-serif text-5xl md:text-7xl text-white leading-[1] tracking-tighter mb-10 uppercase">
                        The Modern <br />
                        <span className="italic font-normal text-stone-500">Stack & Ecosystem.</span>
                    </h2>
                    <p className="text-2xl text-stone-400 font-light leading-relaxed max-w-2xl">
                        A clean architecture approach where distributed backends meet elite infrastructure performance.
                    </p>
                </div>

                {/* 1. Core Ecosystem Lists (Top Priority) */}
                <div className="mb-40 space-y-24">
                    {ecosystemData.map((row, rowIdx) => (
                        <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
                            {row.map((cat, catIdx) => (
                                <motion.div
                                    key={catIdx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: (rowIdx * 2 + catIdx) * 0.1 }}
                                >
                                    <EcosystemCategory title={cat.title} items={cat.items} />
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* 2. High-Impact Infrastructure Card (The Middle Ground) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-40 p-12 lg:p-16 bg-white/[0.02] border border-nobel-gold/30 rounded-[4rem] relative overflow-hidden group hover:border-nobel-gold transition-all duration-700 shadow-2xl cursor-pointer"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-nobel-gold/10 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-nobel-gold/20 transition-all"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-3 px-5 py-2 bg-nobel-gold/10 border border-nobel-gold/20 rounded-full text-[10px] font-black tracking-[0.3em] text-nobel-gold uppercase mb-10">
                                <Cloud size={14} /> Cloud Infrastructure Excellence
                            </div>
                            <h3 className="font-serif text-4xl md:text-6xl text-white mb-8 uppercase leading-[0.9] tracking-tighter">Infra <br /><span className="text-stone-500 italic font-normal">Azure / Cloud</span></h3>
                            <p className="text-2xl text-stone-300 font-light leading-snug">
                                Azure AI Search, Vector DBs, and secure container orchestration for <span className="text-nobel-gold italic font-medium underline underline-offset-[12px] decoration-nobel-gold/30">Fortune 500 delivery.</span>
                            </p>
                        </div>
                        <div className="lg:col-span-5 flex flex-col items-center">
                            <TechStackDiagram />
                        </div>
                    </div>
                </motion.div>

                {/* 3. Broader Expertise Grid (The Visual Foundation) */}
                <div>
                    <div className="flex flex-col mb-16">
                        <h4 className="text-[10px] font-black tracking-[0.5em] text-stone-500 uppercase mb-4 pl-1">Visual Domain Expertise</h4>
                        <div className="h-[1px] w-full bg-gradient-to-r from-nobel-gold/50 to-transparent"></div>
                    </div>
                    <SkillsGrid />
                </div>
            </div>
        </section>
    );
};

export default Expertise;
