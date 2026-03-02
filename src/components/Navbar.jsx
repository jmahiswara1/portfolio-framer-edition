import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "WORK", href: "#work-section" },
    { label: "ABOUT", href: "#about-section" },
    { label: "SKILLS", href: "#services" },
    { label: "CONTACT", href: "#footer-section" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show hamburger when scrolled past ~90% of the viewport height (Hero section disappearing)
            if (window.scrollY > window.innerHeight * 0.9) {
                setShowHamburger(true);
            } else {
                setShowHamburger(false);
                if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Auto close if scrolling back up to hero
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check in case of page reload halfway down
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false); // Close menu on click
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Absolute header for HOME initially text on top left */}
            <header className="absolute top-0 w-full z-50 p-6 md:p-8 lg:p-12 pointer-events-none">
                <div className="flex justify-between items-start max-w-[1800px] mx-auto">
                    {/* Left: Plain HOME text */}
                    <a
                        href="#hero-section"
                        onClick={(e) => handleNavClick(e, "#hero-section")}
                        className="text-dark font-display font-semibold text-lg hover:text-accent transition-colors duration-300 pointer-events-auto"
                    >
                        HOME
                    </a>
                </div>
            </header>

            {/* Fixed Hamburger Button that appears only on scroll */}
            <AnimatePresence>
                {showHamburger && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-6 right-6 md:top-8 md:right-8 lg:top-12 lg:right-12 z-[100]"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white text-dark rounded-full shadow-lg hover:bg-dark hover:text-white transition-colors border border-black/5"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
                                )}
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Full-screen Menu overlay from hamburger */}
            <AnimatePresence>
                {isMobileMenuOpen && showHamburger && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 m-4 md:m-8 lg:m-12 bg-light rounded-[32px] md:rounded-[48px] shadow-2xl z-[90] flex flex-col justify-center items-center border border-dark/10 overflow-hidden"
                    >
                        <nav className="flex flex-col gap-4 md:gap-8 items-center justify-center">
                            {NAV_LINKS.map((link, i) => (
                                <div key={link.label} className="overflow-hidden">
                                    <motion.a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="relative group inline-block font-display font-black text-6xl md:text-8xl lg:text-[8rem] tracking-tighter text-dark hover:text-accent transition-colors uppercase leading-[0.85]"
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "100%" }}
                                        transition={{ duration: 0.5, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        {/* Hover line effect */}
                                        <span className="absolute left-0 bottom-0 w-full h-[8px] md:h-[12px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
                                    </motion.a>
                                </div>
                            ))}
                        </nav>

                        {/* Additional aesthetic details */}
                        <motion.div
                            className="absolute bottom-12 left-12 right-12 flex justify-between items-center text-secondary font-mono text-xs tracking-widest uppercase hidden md:flex"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <span>(MENU)</span>
                            <span>GADANG JATU MAHISWARA</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
