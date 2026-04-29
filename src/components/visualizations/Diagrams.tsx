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
        { title: "Technical expertise", icon: <Code2 size={18} />, skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "React / Next.js", "Node.js / Express"] },
        { title: "Cloud & infrastructure", icon: <Database size={18} />, skills: ["Microsoft Azure", "Docker", "Microservices", "Azure AI Search", "SQL Server", "PostgreSQL", "MongoDB"] },
        { title: "Intelligence & AI", icon: <BrainCircuit size={18} />, skills: ["LLMs", "Vector Embeddings", "Agentic AI (CrewAI)", "Prompt Engineering", "Hybrid Search"] },
        { title: "Engineering practice", icon: <Cog size={18} />, skills: ["System Design", "CI/CD Pipelines", "Modular Design", "High-Performance Dashboards", "Power Platform"] }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {skillCategories.map((cat, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className="p-8 glass-card group"
                >
                    <div className="flex items-center gap-4 mb-7">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-nobel-gold group-hover:bg-nobel-gold group-hover:text-white transition-all duration-400"
                            style={{ background: 'rgba(212,168,83,0.08)' }}>
                            {cat.icon}
                        </div>
                        <h4 className="text-[11px] font-medium tracking-[0.35em] uppercase text-white/60 leading-none">{cat.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="tag">{skill}</span>
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
        const interval = setInterval(() => setActiveTab((prev) => (prev + 1) % 5), 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return <div className="h-[600px] w-full rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)' }} />;

    const tech = [
        { id: 0, name: 'React 18 / Next.js', type: 'Frontend', icon: <Layout size={22} />, desc: 'Expertise in modern UI architecture, performance optimization, and high-performance financial dashboards.' },
        { id: 1, name: 'Python / FastAPI', type: 'Backend', icon: <Terminal size={22} />, desc: 'Building secure, async microservices for orchestration, classification, and estimation pipelines.' },
        { id: 2, name: 'Azure / Cloud', type: 'Infra', icon: <Database size={22} />, desc: 'Azure AI Search, Vector DBs, and secure container orchestration for Financial Enterprise delivery.' },
        { id: 3, name: 'Node.js / TypeScript', type: 'Runtime', icon: <Server size={22} />, desc: 'Scalable service delivery and high-concurrency event-driven architectures with <1% defect rates.' },
        { id: 4, name: 'Generative AI', type: 'AI', icon: <Cpu size={22} />, desc: 'Agentic AI modernization workflows, LLM integration, and hybrid search optimization.' },
    ];

    const radius = 140;

    return (
        <div className="flex flex-col items-center p-8 glass-card my-10 relative">
            <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center">
                <div className="absolute w-[80%] h-[80%] rounded-full animate-[spin_40s_linear_infinite]"
                    style={{ border: '1px solid rgba(255,255,255,0.03)' }} />
                <div className="absolute w-[60%] h-[60%] rounded-full animate-[spin_25s_linear_infinite_reverse]"
                    style={{ border: '1px solid rgba(255,255,255,0.05)' }} />

                <div className="w-20 h-20 rounded-2xl flex items-center justify-center z-10 rotate-12 accent-glow"
                    style={{ background: 'linear-gradient(135deg, #0d0d0d, #1a1a1a)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 0 60px -10px rgba(212,168,83,0.25)' }}>
                    <Layers className="text-nobel-gold" size={32} />
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
                            transition={{ delay: i * 0.08 }}
                            style={{ x, y }}
                            className={cn(
                                "absolute w-14 h-14 rounded-xl flex items-center justify-center transition-all cursor-pointer",
                                isActive
                                    ? "text-white scale-125 z-20 accent-glow"
                                    : "text-white/30 hover:text-white/60"
                            )}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <div className={cn(
                                "w-full h-full rounded-xl flex items-center justify-center transition-all",
                                isActive
                                    ? "bg-nobel-gold"
                                    : "bg-white/[0.04]"
                            )} style={isActive ? {} : { boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}>
                                {item.icon}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="mt-10 text-center max-w-sm px-4">
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}>
                        <h5 className="text-nobel-gold font-medium text-[10px] tracking-[0.2em] uppercase mb-2">{tech[activeTab].type}</h5>
                        <h4 className="text-white font-semibold text-base mb-2">{tech[activeTab].name}</h4>
                        <p className="text-white/40 text-sm leading-relaxed font-light">{tech[activeTab].desc}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

// --- ENGINEERING FLOW DIAGRAM ---
export const EngineeringFlowDiagram: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const steps = [
        { title: "Architect", icon: <Layout size={18} />, status: "Design" },
        { title: "Automate", icon: <Workflow size={18} />, status: "Scale" },
        { title: "Optimize", icon: <Zap size={18} />, status: "Performance" },
        { title: "Deliver", icon: <CheckCircle2 size={18} />, status: "Enterprise" }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full py-10">
            {steps.map((step, idx) => (
                <motion.div key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="relative group p-7 glass-card">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-nobel-gold mb-5 group-hover:scale-110 transition-transform"
                        style={{ background: 'rgba(212,168,83,0.08)' }}>
                        {step.icon}
                    </div>
                    <h4 className="text-white text-base font-semibold mb-1.5">{step.title}</h4>
                    <span className="text-[10px] font-medium tracking-[0.15em] text-white/25 uppercase">{step.status}</span>

                    {idx < steps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-3.5 -translate-y-1/2 z-10 text-white/10">
                            <ArrowRight size={18} />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

// --- ENGINEERING IMPACT DIAGRAM ---
export const EngineeringImpactDiagram: React.FC<{ dark?: boolean }> = ({ dark = true }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className={cn(
            "w-full min-h-[500px] rounded-2xl relative overflow-hidden p-9 flex flex-col justify-between",
            dark ? "bg-white/[0.02]" : "bg-white/20"
        )} style={dark ? { boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' } : {}}>
            <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-[60px] -mr-28 -mt-28 opacity-40"
                style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.1) 0%, transparent 70%)' }} />

            <div className="relative z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-nobel-gold font-medium text-[9px] tracking-[0.3em] uppercase mb-3 block">Metrics Visualization</span>
                        <h3 className={cn("text-xl font-semibold tracking-tight mb-1.5", dark ? "text-white" : "text-stone-950")}>Technical Velocity</h3>
                        <p className={cn("text-[10px] font-medium tracking-[0.15em] uppercase", dark ? "text-white/25" : "text-stone-400")}>Architecture Evolution / PwC Hub</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-nobel-gold"></div>
                        <div className={cn("w-2 h-2 rounded-full", dark ? "bg-white/10" : "bg-stone-200")}></div>
                    </div>
                </div>

                <div className="flex items-end gap-1.5 pt-10 h-[200px]">
                    {[40, 65, 45, 90, 55, 75, 85, 95, 80, 100].map((height, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04, duration: 0.8, ease: "easeOut" }}
                            className={cn(
                                "flex-1 rounded-t-lg transition-all duration-400",
                                i === 9
                                    ? "bg-nobel-gold accent-glow"
                                    : dark ? "bg-white/[0.06] hover:bg-white/[0.1]" : "bg-stone-300 hover:bg-stone-400"
                            )}
                        />
                    ))}
                </div>
            </div>

            <div className={cn("grid grid-cols-3 gap-6 pt-6 mt-4 relative z-10", dark ? "" : "")}
                style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                {[
                    { label: "Efficiency", value: "+85%" },
                    { label: "Stability", value: "99.9%" },
                    { label: "Deployment", value: "Weekly" },
                ].map((m, i) => (
                    <div key={i}>
                        <span className="text-[9px] font-medium text-white/20 tracking-widest uppercase mb-1.5 block">{m.label}</span>
                        <span className={cn("text-lg font-bold", dark ? "text-white" : "text-stone-950")}>{m.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
