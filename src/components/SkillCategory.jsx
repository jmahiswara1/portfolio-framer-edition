import { motion } from "framer-motion";
import SkillTag from "./SkillTag";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
};

export default function SkillCategory({ title, items }) {
    return (
        <div className="flex flex-col h-full bg-border/20 p-8 rounded-xl border border-border/50">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-6 tracking-tight">
                {title}
            </h3>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-3 mt-auto"
            >
                {items.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <SkillTag name={item} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
