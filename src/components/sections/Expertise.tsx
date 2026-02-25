"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SkillsGrid, TechStackDiagram } from "@/components/visualizations/Diagrams";
import { Cloud } from 'lucide-react';
import VideoBackground from "@/components/presentation/VideoBackground";

const VIDEO_SRC = 'https://videos.pexels.com/video-files/19063788/19063788-hd_1920_1080_30fps.mp4';

const EcosystemCategory = ({ title, items }: { title: string, items: { name: string, years: string }[] }) => (
    <div className="flex flex-col gap-6 w-full">
        <h4 className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase border-b border-white/5 pb-4">{title}</h4>
        <div className="flex flex-col gap-4">
            {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-end group cursor-pointer">
                    <span className="text-lg md:text-xl font-medium text-white group-hover:text-nobel-gold transition-colors">{item.name}</span>
                    <div className="flex-1 border-b border-dotted border-white/10 mx-4 mb-1 opacity-50"></div>
                    <span className="text-[11px] font-black text-white/30 font-mono">{item.years}</span>
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
                title: "Frontend",
                items: [
                    { name: "React / Next.js", years: "7Y" },
                    { name: "Tailwind CSS", years: "7Y" },
                    { name: "Angular", years: "2Y" },
                    { name: "Astro", years: "1Y" }
                ]
            },
            {
                title: "Backend",
                items: [
                    { name: "Node.js", years: "6Y" },
                    { name: "TypeScript", years: "6Y" },
                    { name: "Java", years: "2Y" },
                    { name: "Python", years: "4Y" }
                ]
            }
        ],
        [
            {
                title: "Data",
                items: [
                    { name: "NoSQL", years: "5Y" },
                    { name: "PostgreSQL", years: "5Y" },
                    { name: "MySQL", years: "5Y" },
                    { name: "Redis", years: "5Y" }
                ]
            },
            {
                title: "Infra",
                items: [
                    { name: "Azure", years: "7Y" },
                    { name: "Service Bus & Event Hubs", years: "5Y" },
                    { name: "Container Apps", years: "3Y" },
                    { name: "OpenAI / OCI / Datadog", years: "3" }
                ]
            }
        ]
    ];

    if (!mounted) return <div className="py-24 bg-[#0a0a0a] min-h-screen" />;

    return (
        <section id="expertise" className="relative py-20 text-white min-h-screen overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <VideoBackground src={VIDEO_SRC} />
                <div className="absolute inset-0 bg-[#0a0a0a]/30" />
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="max-w-4xl mb-16">
                    <span className="text-nobel-gold font-black text-[11px] tracking-[0.8em] uppercase mb-6 block drop-shadow-md">04 / CORE EXPERTISE</span>
                    <h2 className="text-4xl md:text-5xl text-white font-semibold leading-[1.1] tracking-tight mb-8 uppercase drop-shadow-lg">
                        The Modern <br />
                        <span className="font-light text-white/50">Stack & Ecosystem.</span>
                    </h2>
                    <p className="text-[17px] text-white/80 font-normal leading-relaxed max-w-2xl drop-shadow-md">
                        A clean architecture approach where distributed backends meet elite infrastructure performance.
                    </p>
                </div>

                {/* Ecosystem Lists */}
                <div className="mb-20 space-y-14">
                    {ecosystemData.map((row, rowIdx) => (
                        <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
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

                {/* Cloud Infrastructure Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 p-10 lg:p-12 glass-card rounded-3xl relative overflow-hidden group hover:border-nobel-gold/30 transition-all duration-700 cursor-pointer"
                    style={{ boxShadow: '0 32px 80px -16px rgba(0,0,0,0.5)', border: '1px solid rgba(197,160,89,0.2)' }}
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-nobel-gold/10 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-nobel-gold/20 transition-all"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-3 px-5 py-2 bg-nobel-gold/10 border border-nobel-gold/20 rounded-full text-[10px] font-black tracking-[0.3em] text-nobel-gold uppercase mb-6">
                                <Cloud size={14} /> Cloud Infrastructure Excellence
                            </div>
                            <h3 className="text-3xl md:text-4xl text-white font-semibold mb-6 uppercase leading-[0.95] tracking-tight">Infra <br /><span className="text-white/30 font-light">Azure / Cloud</span></h3>
                            <p className="text-[17px] text-white/60 font-light leading-snug">
                                Azure AI Search, Vector DBs, and secure <span className="text-nobel-gold font-semibold underline underline-offset-[12px] decoration-nobel-gold/30">Financial Enterprise delivery.</span>
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
                        <h4 className="text-[10px] font-black tracking-[0.5em] text-white/30 uppercase mb-4 pl-1">Visual Domain Expertise</h4>
                        <div className="h-[1px] w-full bg-gradient-to-r from-nobel-gold/50 to-transparent"></div>
                    </div>
                    <SkillsGrid />
                </div>
            </div>
        </section>
    );
};

export default Expertise;
