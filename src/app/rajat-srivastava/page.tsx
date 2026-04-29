import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StructuredData from "@/components/seo/StructuredData";

const Profile = dynamic(() => import("@/components/sections/Profile"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Impact = dynamic(() => import("@/components/sections/Impact"));
const Expertise = dynamic(() => import("@/components/sections/Expertise"));
const Education = dynamic(() => import("@/components/sections/Education"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export const metadata: Metadata = {
    title: "Rajat Srivastava - Senior Software Architect & AI Engineer",
    description: "Portfolio of Rajat Srivastava - Expert in Enterprise Modernization, Agentic AI, and Cloud-Native Architectures. Leading digital transformation at scale.",
    alternates: {
        canonical: "/rajat-srivastava",
    },
    openGraph: {
        title: "Rajat Srivastava - Senior Software Architect",
        description: "Portfolio of Rajat Srivastava - Expert in Enterprise Modernization, Agentic AI, and Cloud-Native Architectures.",
        images: [
            {
                url: "/rajat_avatar.webp",
                width: 800,
                height: 800,
                alt: "Rajat Srivastava",
            },
        ],
    },
};

export default function RajatSrivastavaPage() {
    return (
        <div className="min-h-screen">
            <StructuredData />
            <Navbar />
            <main>
                <Hero />
                <Profile />{/* 01 - Light */}
                <Experience />{/* 02 - Dark */}
                <Impact />{/* 03 - Light */}
                <Expertise />{/* 04 - Dark Combined */}
                <Education />{/* 05 - Light */}
            </main>
            <Footer />
        </div>
    );
}
