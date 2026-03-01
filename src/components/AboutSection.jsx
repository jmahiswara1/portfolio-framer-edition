import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
    return (
        <AnimatedSection
            id="about-section"
            className="py-24 flex flex-col justify-center border-t border-border bg-dark/50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-7 lg:pr-8">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                            ABOUT ME
                        </h2>
                        <div className="h-1 w-20 bg-accent rounded-full mb-10"></div>

                        <div className="space-y-6 text-lg text-secondary leading-relaxed">
                            <p>
                                Sebagai mahasiswa S1 Teknik Informatika dengan catatan akademis yang solid (IPK 3.74), saya sangat menikmati proses menerjemahkan masalah dunia nyata menjadi produk digital yang efisien dan berpusat pada pengguna.
                            </p>
                            <p>
                                Ketertarikan saya berada di persimpangan antara antarmuka yang indah (ekosistem React) dan logika sistem yang tangguh. Saya terbiasa berkolaborasi dalam proyek berbasis tim, memecahkan masalah kompleks, dan kini saya sangat antusias untuk membawa pola pikir logis tersebut ke dalam ranah pengolahan dan analisis data.
                            </p>
                        </div>
                    </div>

                    {/* Optional Visual/Stats Profile Area */}
                    <div className="lg:col-span-5 hidden sm:block">
                        <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-2 border-border translate-x-4 translate-y-4 rounded-lg"></div>

                            {/* Image Container Placeholder */}
                            <div className="absolute inset-0 bg-border/40 rounded-lg flex flex-col items-center justify-center p-8 backdrop-blur-sm shadow-xl">

                                {/* Fallback Stats if no image */}
                                <div className="w-full space-y-6">
                                    <div className="bg-dark/80 rounded-lg p-6 border border-border/50">
                                        <p className="text-sm font-mono tracking-wider text-secondary mb-1">CUM LAUDE TRACK</p>
                                        <p className="font-display text-4xl font-bold text-accent">3.74 GPA</p>
                                    </div>

                                    <div className="bg-dark/80 rounded-lg p-6 border border-border/50">
                                        <p className="text-sm font-mono tracking-wider text-secondary mb-1">UNIVERSITY</p>
                                        <p className="font-display pl-0.5 text-xl font-medium text-white">Universitas Negeri Surabaya</p>
                                    </div>

                                    <div className="bg-dark/80 rounded-lg p-6 border border-border/50">
                                        <p className="text-sm font-mono tracking-wider text-secondary mb-1">SPECIALIZATION</p>
                                        <p className="font-display pl-0.5 text-xl font-medium text-white">Full-Stack Developer</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AnimatedSection>
    );
}
