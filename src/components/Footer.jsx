export default function Footer() {
    return (
        <footer id="footer-background" className="bg-dark pt-24 pb-12 border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

                <div className="max-w-2xl mx-auto mb-16">
                    <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                        LET'S CONNECT
                    </h2>
                    <p className="text-secondary text-lg mb-10 leading-relaxed">
                        Mari berkolaborasi! Saya selalu terbuka untuk diskusi mengenai teknologi, peluang internship, atau proyek inovatif lainnya.
                    </p>
                    <a
                        href="mailto:gadangjatumahiswara@gmail.com"
                        className="inline-flex justify-center items-center px-10 py-5 bg-accent text-dark font-semibold text-lg transition-transform duration-300 hover:scale-105 hover:bg-white"
                    >
                        gadangjatumahiswara@gmail.com
                    </a>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-border/50 gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-secondary">
                        <span className="font-medium text-white">Gadang Jatu Mahiswara</span>
                        <span className="hidden md:inline text-border">•</span>
                        <span>Kediri, East Java</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/jmahiswara1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-accent transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/gadangmahiswara"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-accent transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://instagram.com/j.mahiswara_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-accent transition-colors"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                <div className="mt-12 text-sm text-secondary/60">
                    © {new Date().getFullYear()} Gadang Jatu Mahiswara. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
