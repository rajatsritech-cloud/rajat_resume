import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: {
        default: "Rajat Srivastava | Senior Full-Stack Architect & AI Engineer",
        template: "%s | Rajat Srivastava"
    },
    description: "Senior Full-Stack Software Engineer specializing in large-scale systems, Enterprise Modernization, and Agentic AI. Expert in Azure, React, Node.js, and Cloud-Native Architectures.",
    keywords: ["Rajat Srivastava", "Senior Full-Stack Engineer", "AI Architect", "Enterprise Modernization", "Agentic AI", "Azure", "React", "Node.js", "System Design", "Cloud Native"],
    authors: [{ name: "Rajat Srivastava", url: "https://www.linkedin.com/in/rajat-srivastava-dev/" }], // Replace with actual LinkedIn if known, or generic
    creator: "Rajat Srivastava",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://rajatsrivastava.com", // Placeholder, user can update
        title: "Rajat Srivastava | Senior Full-Stack Architect",
        description: "Architecting Intelligence - Senior Full-Stack Software Engineer specializing in large-scale systems and enterprise AI modernization.",
        siteName: "Rajat Srivastava Portfolio",
        images: [
            {
                url: "/rajat_avatar.webp",
                width: 800,
                height: 800,
                alt: "Rajat Srivastava - Senior Architect",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rajat Srivastava | Senior Full-Stack Architect",
        description: "Senior Full-Stack Software Engineer specializing in large-scale systems and enterprise AI modernization.",
        images: ["/rajat_avatar.webp"],
        creator: "@rajatsri", // Placeholder
    },
    icons: {
        icon: "/rajat_avatar.webp",
        shortcut: "/rajat_avatar.webp",
        apple: "/rajat_avatar.webp",
    },
    alternates: {
        canonical: "/",
    },
    verification: {
        google: "L_dXqIlF8tnfrYcw8BqzKy6TPOqlotz84EBCYgDJ_0k",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
