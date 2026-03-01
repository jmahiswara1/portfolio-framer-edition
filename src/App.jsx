import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-accent selection:text-dark">
            <Navbar />
            <main>
                <HeroSection />
                <section id="work-section" className="min-h-screen border-t border-border flex items-center justify-center">
                    <p className="text-secondary">Work Section Placeholder</p>
                </section>
                <section id="about-section" className="min-h-screen border-t border-border flex items-center justify-center">
                    <p className="text-secondary">About Section Placeholder</p>
                </section>
                <section id="services" className="min-h-screen border-t border-border flex items-center justify-center">
                    <p className="text-secondary">Skills Section Placeholder</p>
                </section>
            </main>
            <footer id="footer-background" className="min-h-screen border-t border-border flex items-center justify-center">
                <p className="text-secondary">Footer Placeholder</p>
            </footer>
        </div>
    );
}

export default App;
