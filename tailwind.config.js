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
                secondary: "#888888",
                border: "#222222",
            },
        },
    },
    plugins: [],
};
