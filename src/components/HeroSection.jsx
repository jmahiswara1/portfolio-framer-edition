import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function HeroSection() {
    const handleScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero-section" className="min-h-screen flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
                    >
                        Elevating Digital Experiences.
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="font-display text-2xl sm:text-3xl md:text-4xl text-secondary mb-6 font-medium"
                    >
                        Halo, saya Gadang Jatu Mahiswara.
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-secondary mb-10 leading-relaxed max-w-2xl"
                    >
                        Saya adalah mahasiswa Teknik Informatika di Universitas Negeri Surabaya yang berdomisili di Kediri, Jawa Timur. Memiliki fondasi yang kuat dalam pengembangan web full-stack end-to-end dan desain UI/UX. Saat ini, saya sedang mencari peluang internship di bidang Data untuk menggabungkan kemampuan analisis dengan latar belakang teknis rekayasa perangkat lunak saya.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#work-section"
                            onClick={(e) => handleScroll(e, "#work-section")}
                            className="inline-flex justify-center items-center px-8 py-4 bg-accent text-dark font-semibold transition-colors duration-300 hover:bg-white"
                        >
                            Lihat Pekerjaan Saya
                        </a>
                        <a
                            href="#footer-background"
                            onClick={(e) => handleScroll(e, "#footer-background")}
                            className="inline-flex justify-center items-center px-8 py-4 bg-transparent text-white border border-border font-semibold transition-colors duration-300 hover:border-accent hover:text-accent"
                        >
                            Hubungi Saya
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
