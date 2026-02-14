import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Experience from "@/components/sections/Experience";
import Impact from "@/components/sections/Impact";
import Expertise from "@/components/sections/Expertise";
import Education from "@/components/sections/Education";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
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
