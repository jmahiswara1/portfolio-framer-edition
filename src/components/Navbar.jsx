import { useState, useEffect } from "react";

const NAV_LINKS = [
    { label: "HOME", href: "#hero-section" },
    { label: "WORK", href: "#work-section" },
    { label: "ABOUT", href: "#about-section" },
    { label: "SKILLS", href: "#services" },
    { label: "CONTACT", href: "#footer-background" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#hero-section");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        const sections = NAV_LINKS.map(link => document.querySelector(link.href)).filter(Boolean);
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-dark/95 backdrop-blur-sm border-b border-border" : "bg-transparent"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <a
                            href="#hero-section"
                            onClick={(e) => handleNavClick(e, "#hero-section")}
                            className="font-display font-bold text-2xl tracking-tighter text-white"
                        >
                            JM.
                        </a>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === link.href ? "text-accent" : "text-secondary"}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-secondary hover:text-white focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-dark border-b border-border transition-all">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${activeSection === link.href ? "text-accent bg-white/5" : "text-secondary hover:text-white hover:bg-white/5"}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
