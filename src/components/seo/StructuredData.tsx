const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://rajatsrivastava.com/#person",
            name: "Rajat Srivastava",
            url: "https://rajatsrivastava.com",
            image: "https://rajatsrivastava.com/rajat_avatar.webp",
            jobTitle: "Senior Full-Stack Software Engineer",
            email: "mailto:rajat.sri.tech@gmail.com",
            telephone: "+91 9664258497",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressCountry: "IN",
            },
            sameAs: [
                "https://www.linkedin.com/in/rajat-srivastava-dev/",
                "https://github.com/rajatsritech-cloud",
                "http://statementextract.com/",
            ],
            knowsAbout: [
                "React",
                "Node.js",
                "Python",
                "Azure",
                "Enterprise Modernization",
                "Agentic AI",
                "Distributed Systems",
                "Cloud-Native Architectures",
            ],
        },
        {
            "@type": "ProfilePage",
            "@id": "https://rajatsrivastava.com/#profile-page",
            url: "https://rajatsrivastava.com",
            name: "Rajat Srivastava | Senior Full-Stack Architect & AI Engineer",
            description:
                "Senior Full-Stack Software Engineer specializing in large-scale systems, Enterprise Modernization, and Agentic AI. Expert in Azure, React, Node.js, and Cloud-Native Architectures.",
            mainEntity: { "@id": "https://rajatsrivastava.com/#person" },
        },
        {
            "@type": "WebSite",
            "@id": "https://rajatsrivastava.com/#website",
            url: "https://rajatsrivastava.com",
            name: "Rajat Srivastava Portfolio",
            publisher: { "@id": "https://rajatsrivastava.com/#person" },
        },
    ],
};

const StructuredData = () => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
    />
);

export default StructuredData;
