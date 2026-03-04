import { motion } from "framer-motion";

export default function Preloader() {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark overflow-hidden pointer-events-none"
            initial={{ y: 0 }}
            exit={{
                y: "-100%",
                transition: {
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1] // Custom smooth bezier curve
                }
            }}
        >
            <div className="relative overflow-hidden">
                <motion.h1
                    className="font-display font-black text-accent text-5xl md:text-7xl lg:text-9xl tracking-tighter"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    MAHISWARA
                </motion.h1>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-dark"></div>
            </div>
        </motion.div>
    );
}
