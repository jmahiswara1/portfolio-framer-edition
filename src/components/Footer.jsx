export default function Footer() {
    // The Footer needs to be sticky at the bottom with z-index -1 so the main content scrolls over it.
    // We achieve this by giving the footer a fixed h-screen or sticky bottom 0, and wrapping the content above it with a solid background.
    return (
        <footer id="footer-section" className="relative w-full h-[700px] md:h-[800px] overflow-hidden">
            <div className="fixed bottom-0 left-0 w-full h-[700px] md:h-[800px] bg-black px-6 md:px-12 pt-16 md:pt-24 pb-8 flex flex-col justify-between z-0">

                {/* Top Half: Contact Info & Links */}
                <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row justify-between gap-16">

                    {/* Left: Email CTA */}
                    <div className="flex flex-col w-full lg:w-1/2">
                        <span className="font-mono text-xs tracking-widest uppercase text-white/50 mb-8 md:mb-12">
                            (LET'S CONNECT)
                        </span>

                        <a
                            href="mailto:gadangjatumahiswara@gmail.com"
                            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight hover:text-accent transition-colors duration-300 break-all mb-4"
                        >
                            gadangjatumahiswara
                            <br />@gmail.com
                        </a>
                    </div>

                    {/* Right: Link Columns */}
                    <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 lg:gap-32 w-full lg:w-1/2 justify-start lg:justify-end">

                        {/* Follow Us */}
                        <div className="flex flex-col">
                            <span className="font-mono text-xs tracking-widest uppercase text-white/50 mb-6 md:mb-8">
                                (FOLLOW US)
                            </span>
                            <div className="flex flex-col gap-3 md:gap-4">
                                <a href="https://github.com/jmahiswara1" target="_blank" rel="noopener noreferrer"
                                    className="text-white text-xs md:text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wide">
                                    GITHUB
                                </a>
                                <a href="https://linkedin.com/in/gadangmahiswara" target="_blank" rel="noopener noreferrer"
                                    className="text-white text-xs md:text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wide">
                                    LINKEDIN
                                </a>
                                <a href="https://instagram.com/j.mahiswara_" target="_blank" rel="noopener noreferrer"
                                    className="text-white text-xs md:text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wide">
                                    INSTAGRAM
                                </a>
                            </div>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col">
                            <span className="font-mono text-xs tracking-widest uppercase text-white/50 mb-6 md:mb-8">
                                (LEGAL)
                            </span>
                            <div className="flex flex-col gap-3 md:gap-4">
                                <a href="#" className="text-white text-xs md:text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wide">
                                    PRIVACY POLICY
                                </a>
                                <a href="#" className="text-white text-xs md:text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wide">
                                    COOKIE POLICY
                                </a>
                                <a href="#" className="text-white text-xs md:text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wide">
                                    LICENSING
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Half: Giant Branding & Copyright */}
                <div className="w-full max-w-[1800px] mx-auto flex flex-col items-center justify-end relative mt-12 md:mt-0">
                    <div className="w-full flex justify-end px-4 mb-2">
                        <span className="text-white text-[10px] md:text-xs font-mono opacity-80">
                            © {new Date().getFullYear()} by <span className="text-[#c8f135]">GADANG</span><span className="opacity-50 mx-2">made with</span><span className="text-[#c8f135]">REACT</span>
                        </span>
                    </div>
                    <div className="w-full overflow-hidden flex justify-center items-end">
                        <h1 className="font-display font-black text-[#c8f135] leading-[0.75] tracking-tighter text-center whitespace-nowrap select-none w-full"
                            style={{ fontSize: 'clamp(5rem, 20vw, 20rem)' }}
                        >
                            MAHISWARA
                        </h1>
                    </div>
                </div>

            </div>
        </footer>
    );
}
