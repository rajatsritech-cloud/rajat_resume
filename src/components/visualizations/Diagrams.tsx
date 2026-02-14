"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu, CheckCircle2, Server, Layout,
    Database, Terminal, Layers, Code2, Workflow,
    BrainCircuit, Cog, Zap, ArrowRight
} from 'lucide-react';
import { cn } from "@/lib/utils";

// --- SKILLS GRID COMPONENT ---
export const SkillsGrid: React.FC = () => {
    const skillCategories = [
        {
            title: "Technical expertise",
            icon: <Code2 size={20} />,
            skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "React / Next.js", "Node.js / Express"]
        },
        {
            title: "Cloud & infrastructure",
            icon: <Database size={20} />,
            skills: ["Microsoft Azure", "Docker", "Microservices", "Azure AI Search", "SQL Server", "PostgreSQL", "MongoDB"]
        },
        {
            title: "Intelligence & AI",
            icon: <BrainCircuit size={20} />,
            skills: ["LLMs", "Vector Embeddings", "Agentic AI (CrewAI)", "Prompt Engineering", "Hybrid Search"]
        },
        {
            title: "Engineering practice",
            icon: <Cog size={20} />,
            skills: ["System Design", "CI/CD Pipelines", "Modular Design", "High-Performance Dashboards", "Power Platform"]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {skillCategories.map((cat, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    className="p-10 bg-white/[0.04] backdrop-blur-3xl rounded-[3rem] border border-white/10 hover:border-nobel-gold/40 transition-all group"
                >
                    <div className="flex items-center gap-6 mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-nobel-gold group-hover:bg-nobel-gold group-hover:text-white transition-all shadow-inner">
                            {cat.icon}
                        </div>
                        <h4 className="text-[11px] font-black tracking-[0.5em] uppercase text-stone-200 leading-none">{cat.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {cat.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="px-5 py-3 bg-white/5 rounded-2xl text-[13px] font-bold text-stone-400 hover:bg-nobel-gold/30 hover:text-white transition-all cursor-default border border-white/5">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// --- TECH STACK DIAGRAM ---
export const TechStackDiagram: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState<number>(2);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-[600px] w-full bg-stone-900/40 rounded-[4rem]" />;

    const tech = [
        { id: 0, name: 'React 18 / Next.js', type: 'Frontend', icon: <Layout size={24} />, color: 'bg-blue-600', desc: 'Expertise in modern UI architecture, performance optimization, and high-performance financial dashboards.' },
        { id: 1, name: 'Python / FastAPI', type: 'Backend', icon: <Terminal size={24} />, color: 'bg-green-700', desc: 'Building secure, async microservices for orchestration, classification, and estimation pipelines.' },
        { id: 2, name: 'Azure / Cloud', type: 'Infra', icon: <Database size={24} />, color: 'bg-sky-700', desc: 'Azure AI Search, Vector DBs, and secure container orchestration for Fortune 500 delivery.' },
        { id: 3, name: 'Node.js / TypeScript', type: 'Runtime', icon: <Server size={24} />, color: 'bg-emerald-600', desc: 'Scalable service delivery and high-concurrency event-driven architectures with <1% defect rates.' },
        { id: 4, name: 'Generative AI', type: 'AI', icon: <Cpu size={24} />, color: 'bg-amber-600', desc: 'Agentic AI modernization workflows, LLM integration, and hybrid search optimization.' },
    ];

    const radius = 150;

    return (
        <div className="flex flex-col items-center p-10 bg-stone-900/40 backdrop-blur-3xl rounded-[4rem] border border-white/5 my-12 relative">
            <div className="relative w-full aspect-square max-w-[450px] flex items-center justify-center">
                <div className="absolute w-[85%] h-[85%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite]"></div>
                <div className="absolute w-[65%] h-[65%] border border-white/10 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>

                <div className="w-28 h-28 bg-stone-800 rounded-3xl border border-nobel-gold/30 flex items-center justify-center z-10 shadow-[0_0_80px_rgba(197,160,89,0.3)] rotate-12">
                    <Layers className="text-nobel-gold" size={40} />
                </div>

                {tech.map((item, i) => {
                    const angle = (i * (360 / tech.length)) * (Math.PI / 180);
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const isActive = activeTab === item.id;

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            style={{ x, y }}
                            className={cn(
                                "absolute w-16 h-16 rounded-2xl flex items-center justify-center transition-all cursor-pointer border",
                                isActive
                                    ? "bg-nobel-gold border-nobel-gold text-white shadow-[0_0_40px_rgba(197,160,89,0.5)] scale-125 z-20"
                                    : "bg-stone-800 border-white/10 text-stone-400 hover:border-nobel-gold/50"
                            )}
                            onClick={() => setActiveTab(item.id)}
                        >
                            {item.icon}
                        </motion.div>
                    );
                })}
            </div>

            <div className="mt-12 text-center max-w-sm px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h5 className="text-nobel-gold font-black text-[10px] tracking-[0.3em] uppercase mb-4">{tech[activeTab].type}</h5>
                        <h4 className="text-white font-sans text-lg mb-3 font-semibold">{tech[activeTab].name}</h4>
                        <p className="text-stone-400 text-sm leading-relaxed font-light">{tech[activeTab].desc}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

// --- ENGINEERING FLOW DIAGRAM (RECONSTRUCTED) ---
export const EngineeringFlowDiagram: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    const steps = [
        { title: "Architect", icon: <Layout size={20} />, status: "Design" },
        { title: "Automate", icon: <Workflow size={20} />, status: "Scale" },
        { title: "Optimize", icon: <Zap size={20} />, status: "Performance" },
        { title: "Deliver", icon: <CheckCircle2 size={20} />, status: "Enterprise" }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full py-12">
            {steps.map((step, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group p-8 bg-white/[0.03] border border-white/5 rounded-[2.5rem] hover:border-nobel-gold/30 transition-all"
                >
                    <div className="w-12 h-12 bg-nobel-gold/10 rounded-xl flex items-center justify-center text-nobel-gold mb-6 group-hover:scale-110 transition-transform">
                        {step.icon}
                    </div>
                    <h4 className="text-white font-sans text-xl font-semibold mb-2">{step.title}</h4>
                    <span className="text-[10px] font-black tracking-[0.2em] text-stone-500 uppercase">{step.status}</span>

                    {idx < steps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-10 text-stone-700">
                            <ArrowRight size={20} />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

// --- ENGINEERING IMPACT DIAGRAM (RECONSTRUCTED) ---
export const EngineeringImpactDiagram: React.FC<{ dark?: boolean }> = ({ dark = true }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <div className={cn(
            "w-full min-h-[500px] backdrop-blur-3xl rounded-[4rem] border relative overflow-hidden p-12 flex flex-col justify-between",
            dark ? "bg-stone-900/20 border-white/5" : "bg-white/20 border-stone-200/40"
        )}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-nobel-gold/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-nobel-gold font-black text-[9px] tracking-[0.4em] uppercase mb-4 block underline underline-offset-8">Metrics Visualization</span>
                        <h3 className={cn(
                            "font-sans text-2xl font-semibold tracking-tight mb-2",
                            dark ? "text-white" : "text-stone-950"
                        )}>Technical Velocity</h3>
                        <p className={cn(
                            "text-[10px] font-black tracking-[0.2em] uppercase",
                            dark ? "text-stone-500" : "text-stone-400"
                        )}>Architecture Evolution / PwC Hub</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-nobel-gold"></div>
                        <div className={cn("w-2.5 h-2.5 rounded-full", dark ? "bg-stone-700" : "bg-stone-200")}></div>
                    </div>
                </div>

                <div className="flex items-end gap-2 pt-12 h-[220px]">
                    {[40, 65, 45, 90, 55, 75, 85, 95, 80, 100].map((height, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 1, ease: "easeOut" }}
                            className={cn(
                                "flex-1 rounded-t-xl transition-all duration-500",
                                i === 9 ? "bg-nobel-gold shadow-[0_0_30px_rgba(197,160,89,0.3)]" :
                                    dark ? "bg-stone-800 hover:bg-stone-700" : "bg-stone-300 hover:bg-stone-400"
                            )}
                        />
                    ))}
                </div>
            </div>

            <div className={cn("grid grid-cols-3 gap-8 pt-8 border-t mt-6 relative z-10", dark ? "border-white/5" : "border-stone-200/60")}>
                <div>
                    <span className="text-[9px] font-black text-stone-500 tracking-widest uppercase mb-2 block">Efficiency</span>
                    <span className={cn("font-sans text-xl font-bold", dark ? "text-white" : "text-stone-950")}>+85%</span>
                </div>
                <div>
                    <span className="text-[9px] font-black text-stone-500 tracking-widest uppercase mb-2 block">Stability</span>
                    <span className={cn("font-sans text-xl font-bold", dark ? "text-white" : "text-stone-950")}>99.9%</span>
                </div>
                <div>
                    <span className="text-[9px] font-black text-stone-500 tracking-widest uppercase mb-2 block">Deployment</span>
                    <span className={cn("font-sans text-xl font-bold", dark ? "text-white" : "text-stone-950")}>Weekly</span>
                </div>
            </div>
        </div>
    );
};
