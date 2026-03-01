import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-accent selection:text-dark">
            <Navbar />
            <main>
                <HeroSection />
                <WorkSection />
                <AboutSection />
                <SkillsSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;
