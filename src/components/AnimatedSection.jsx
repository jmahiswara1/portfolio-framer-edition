import { motion } from "framer-motion";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

export default function AnimatedSection({ children, className = "", id }) {
    return (
        <motion.section
            id={id}
            className={className}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.section>
    );
}
