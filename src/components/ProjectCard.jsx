import { motion } from "framer-motion";

export default function ProjectCard({
    category,
    title,
    description,
    techStack,
    imageUrl,
    liveUrl,
    repoUrl,
}) {
    return (
        <div className="flex flex-col group h-full">
            <div className="relative overflow-hidden rounded-lg mb-6 aspect-video bg-border/30">
                <motion.img
                    src={imageUrl}
                    alt={`Preview of ${title}`}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    onError={(e) => {
                        // Fallback for missing placeholder images
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                        e.target.parentElement.innerHTML = `<span class="text-secondary font-mono text-sm">Image Placeholder</span>`;
                    }}
                />

                {/* Overlay hover state per PRD constraint */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="text-white font-medium border border-white/20 rounded-full px-4 py-2 bg-dark/40 backdrop-blur-sm">
                        View Project Details
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-accent font-mono text-xs tracking-wider uppercase">
                        {category}
                    </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {title}
                </h3>

                <p className="text-secondary mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs font-mono text-secondary bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-white hover:text-accent transition-colors relative inline-block group/link"
                            >
                                Live Demo
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/link:w-full"></span>
                            </a>
                        )}

                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-secondary hover:text-white transition-colors"
                        >
                            GitHub / Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
