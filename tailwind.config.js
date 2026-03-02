/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Space Grotesk", "sans-serif"],
                mono: ["JetBrains Mono", "Fira Code", "monospace"],
            },
            colors: {
                accent: "#C8F135",
                dark: "#0A0A0A",
                light: "#F2F2F2",
                secondary: "#888888",
                border: "#222222",
            },
            borderRadius: {
                '4xl': '48px',
                '5xl': '60px',
            },
            fontSize: {
                'huge': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1' }],
                'mega': ['clamp(5rem, 12vw, 10rem)', { lineHeight: '0.9' }],
            },
        },
    },
    plugins: [],
};
