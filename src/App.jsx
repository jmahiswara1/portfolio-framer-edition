import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { ReactLenis } from '@studio-freight/react-lenis';
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait a small amount of time for initial paints to settle before starting exit
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader key="preloader" />}
            </AnimatePresence>

            <ReactLenis root options={{ lerp: 0.12, duration: 1.2, smoothTouch: false }}>
                <div className="min-h-screen text-dark selection:bg-accent selection:text-dark">
                    <Navbar />
                    <main className="relative z-10 bg-light rounded-b-[40px] md:rounded-b-[80px] shadow-[0_8px_30px_rgba(0,0,0,0.3)] outline outline-1 outline-transparent">
                        <HeroSection />
                        <WorkSection />
                        <AboutSection />
                        <SkillsSection />
                    </main>
                    <Footer />
                </div>
            </ReactLenis>
        </>
    );
}

export default App;
