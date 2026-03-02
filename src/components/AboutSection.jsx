import { motion, animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const AnimatedCounter = ({ value }) => {
    // Extract base number and suffix
    const numMatch = value.match(/[\d.]+/);
    const target = numMatch ? parseFloat(numMatch[0]) : 0;
    const hasDecimals = value.includes('.');
    const suffix = value.replace(/[\d.]+/g, '').trim();

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const count = useMotionValue(0);

    useEffect(() => {
        if (inView) {
            // Slight delay so the counter starts after the section fades in
            setTimeout(() => {
                animate(count, target, { duration: 2.5, ease: "easeOut" });
            }, 600);
        }
    }, [inView, target, count]);

    const display = useTransform(count, (latest) =>
        (hasDecimals ? latest.toFixed(2) : Math.round(latest)) + (suffix ? suffix : "")
    );

    return <motion.span ref={ref}>{display}</motion.span>;
};

export default function AboutSection() {
    return (
        <section
            id="about-section"
            className="py-24 md:py-32 lg:py-40 bg-light px-6 md:px-12"
        >
            <div className="max-w-7xl mx-auto w-full">
                {/* Two-column header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left: Label */}
                    <motion.div
                        className="lg:col-span-3"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <span className="font-mono text-xs tracking-widest uppercase text-secondary">
                            (ABOUT)
                        </span>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="lg:col-span-9"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-[1.15] mb-12">
                            I am an Informatics Engineering student at State University of Surabaya residing in Kediri, East Java — building efficient and user-centric digital products.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary text-base md:text-lg leading-relaxed">
                            <p>
                                My interest lies at the intersection of beautiful interfaces (React/Next.js ecosystem) and robust system logic. I believe good design is invisible design.
                            </p>
                            <p>
                                With a 3.74 GPA and experience building 40+ fullstack projects, I am ready to bring a problem-solving mindset to your team. Currently open for internship and collaboration opportunities.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Stats row */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 md:mt-28 pt-12 border-t border-dark/10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {[
                        { value: "3.74", label: "GPA" },
                        { value: "40+   ", label: "Projects" },
                        { value: "20+", label: "Tech Stacks" },
                        { value: "2023", label: "Start Coding" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center md:text-left">
                            <p className="font-display text-4xl md:text-5xl font-bold text-dark mb-2">
                                <AnimatedCounter value={stat.value} />
                            </p>
                            <p className="font-mono text-xs tracking-widest uppercase text-secondary">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
