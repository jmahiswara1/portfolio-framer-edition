import { motion } from "framer-motion";

const SERVICES = [
    {
        number: "01",
        title: "Frontend Development",
        description: "Building responsive, performant and pixel-perfect interfaces using React, Next.js, Tailwind CSS and Framer Motion.",
        skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5 & CSS3", "JavaScript (ES6+)", "TypeScript"],
    },
    {
        number: "02",
        title: "Backend & API Development",
        description: "Designing robust RESTful APIs and server architectures with Node.js, Express, Laravel, and database integration.",
        skills: ["Node.js", "Express.js", "Laravel", "NestJS", "PHP", "REST API", "Hapi Framework"],
    },
    {
        number: "03",
        title: "Database & Data",
        description: "Managing data with MySQL, PostgreSQL, MongoDB, and exploring data analysis with Python and SQL.",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Python", "SQL"],
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

export default function SkillsSection() {
    return (
        <section
            id="services"
            className="py-24 md:py-32 lg:py-40 bg-light px-6 md:px-12"
        >
            <div className="max-w-7xl mx-auto w-full">
                {/* Two-column header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-28">
                    <div className="lg:col-span-9">
                        <motion.h2
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            What I Do
                        </motion.h2>
                    </div>
                    <motion.div
                        className="lg:col-span-3 flex justify-start lg:justify-end items-end"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="font-mono text-xs tracking-widest uppercase text-secondary">
                            (SERVICES)
                        </span>
                    </motion.div>
                </div>

                {/* Services list */}
                <div className="space-y-0">
                    {SERVICES.map((service, i) => (
                        <motion.div
                            key={service.number}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 md:py-16 border-t border-dark/10 group"
                            variants={itemVariants}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* Number */}
                            <div className="lg:col-span-2 flex items-start">
                                <motion.div
                                    className="relative"
                                    whileHover={{ rotate: -12 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                                        <span className="font-display text-xl md:text-2xl font-bold text-dark rotate-6 group-hover:rotate-0 transition-transform duration-500">
                                            {service.number}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Title */}
                            <div className="lg:col-span-4 flex items-center">
                                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description + skills */}
                            <div className="lg:col-span-6">
                                <p className="text-secondary text-base md:text-lg leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs font-mono text-dark/70 bg-dark/5 border border-dark/10 px-3 py-1.5 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
