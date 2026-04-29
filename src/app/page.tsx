import dynamic from 'next/dynamic';
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StructuredData from "@/components/seo/StructuredData";

const Profile = dynamic(() => import("@/components/sections/Profile"), { ssr: true });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: true });
const Impact = dynamic(() => import("@/components/sections/Impact"), { ssr: true });
const Expertise = dynamic(() => import("@/components/sections/Expertise"), { ssr: true });
const Education = dynamic(() => import("@/components/sections/Education"), { ssr: true });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: true });

export default function Home() {
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
