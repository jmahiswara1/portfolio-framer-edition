import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TechBackground from "./TechBackground";

const navLinks = [
    { label: "WORK", href: "#work-section" },
    { label: "ABOUT", href: "#about-section" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#footer-section" },
];

const linkVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6, ease: "easeOut" } },
};

const brandingVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function HeroSection() {
    // Zoom-proof font size based on physical screen width
    const [brandingFontSize, setBrandingFontSize] = useState('20vw');

    useEffect(() => {
        const calcSize = () => {
            const screenW = window.screen.width;
            // 20% of physical screen width, clamped between 64px and 320px
            const size = Math.max(64, Math.min(screenW * 0.2, 320));
            setBrandingFontSize(`${size}px`);
        };
        calcSize();
        // Recalculate on actual resize (e.g. connecting external monitor), not on zoom
        window.addEventListener('resize', calcSize);
        return () => window.removeEventListener('resize', calcSize);
    }, []);

    // Reference for parallax scroll tracking
    const { scrollY } = useScroll();

    // Map scrollY to a Y translation.
    // When scrollY goes from 0 to 1000px, move the section DOWN by 500px.
    // This creates the illusion that it's scrolling up at 0.5x speed.
    // The section itself is sticky but its contents move, or the section is absolute/fixed
    // The easiest way to do 0.5x relative to normal scroll is to make it fixed, and translate it up by 0.5x
    const yParallax = useTransform(scrollY, [0, 2000], [0, -1000]);

    const handleScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        // Wrapper keeps the document height correct for the 100vh hero space
        <div className="h-screen w-full relative z-0">
            <motion.section
                id="hero-section"
                className="fixed top-0 left-0 w-full min-h-screen flex flex-col justify-between bg-light pt-24 md:pt-32 pb-12 overflow-hidden z-0 will-change-transform"
                style={{ y: yParallax }}
            >
                <TechBackground />

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 z-10 flex-1 lg:mt-12 xl:mt-16 relative">

                    {/* Glow Blob */}
                    {/* <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#c8f135] rounded-full opacity-20 blur-[100px] pointer-events-none -z-10 translate-x-1/3 translate-y-1/3"></div> */}
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#c8f135] rounded-full opacity-20 blur-[100px] pointer-events-none -z-10 -translate-x-1/3 -translate-y-1/3"></div>

                    <nav className="flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0 justify-center gap-2">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="group relative flex items-center justify-between w-full font-display font-black text-[12vw] sm:text-[10vw] md:text-7xl lg:text-8xl xl:text-8xl tracking-tighter text-dark leading-[0.9] cursor-pointer uppercase overflow-hidden"
                                variants={linkVariants}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Background fill that expands from left to right */}
                                <span className="absolute inset-0 bg-[#c8f135] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0"></span>

                                <span className="relative z-10 group-hover:text-white transition-colors duration-300 px-4 md:px-0">
                                    {link.label}
                                </span>

                                {/* Arrow Icon that fades in / slides in */}
                                <span className="relative z-10 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.76,0,0.24,1] group-hover:text-white px-4 md:px-8">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                                    </svg>
                                </span>
                            </motion.a>
                        ))}
                    </nav>

                    {/* Descriptive Block (Right Side) */}
                    <motion.div
                        className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-12 xl:pl-24 pb-8 lg:pb-24 relative"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-dark font-display text-xl sm:text-2xl md:text-3xl leading-snug tracking-tight font-medium mb-4 max-w-lg relative z-10">
                            Hi, I'm Gadang Jatu Mahiswara.
                        </h2>
                        <p className="text-dark font-display text-lg sm:text-xl md:text-2xl text-justify leading-snug tracking-tight font-medium max-w-lg relative z-10">
                            A Fullstack Developer based in Kediri. Transforming complex ideas into aesthetic, performant, and user-centric digital products.
                        </p>
                    </motion.div>

                </div>

                {/* Bottom: Giant Full-Width Branding */}
                <motion.div
                    className="w-full relative z-0 flex flex-col items-center justify-end overflow-hidden mt-8"
                    variants={brandingVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="font-display font-black text-accent leading-[0.8] tracking-tighter text-center whitespace-nowrap select-none w-full"
                        style={{ fontSize: brandingFontSize }}
                    >
                        MAHISWARA
                    </h1>
                </motion.div>
            </motion.section>
        </div>
    );
}
