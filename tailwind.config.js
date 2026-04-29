/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1280px',
            },
        },
        extend: {
            colors: {
                background: "#050505",
                foreground: "#f5f5f5",
                "nobel-gold": "#D4A853",
                "card-bg": "rgba(255,255,255,0.03)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", "Inter", "sans-serif"],
                mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
            },
        },
    },
    plugins: [],
};
