import { useRef } from 'react';
import { motion } from "framer-motion";

export default function ProjectCard({
    project, i, colors
}) {
    const {
        category,
        title,
        techStack,
        imageUrl,
        liveUrl,
        repoUrl,
        id
    } = project;

    // Use 0 top spacing so cards stack exactly flush with the top of the viewport
    const topSpacing = 0;

    // Special layout for the final "More Work" card
    if (id === 'more-work') {
        const moreWorkColors = { bg: '#FF3D00', text: '#0a0a0a', hoverBg: '#c8f135' }; // matching reference orange initially, or pure c8f135 as requested
        // User requested: "Card berwarna c8f135" (card colored lime green)
        const customBg = '#c8f135';

        return (
            <div className={`h-screen flex items-center justify-center sticky top-0 w-full overflow-hidden p-2 md:p-4 ${i === 0 ? 'bg-light' : 'bg-transparent'}`}>
                <motion.div
                    style={{
                        top: topSpacing,
                        backgroundColor: customBg,
                        color: colors.text,
                    }}
                    className="relative flex items-center justify-center w-full h-full rounded-[32px] md:rounded-[48px] overflow-hidden p-8 cursor-pointer transition-colors duration-500"
                    onClick={() => {
                        if (liveUrl) window.open(liveUrl, '_blank');
                    }}
                >
                    {/* Inner Content: Centered Text Swapping on Hover */}
                    <div className="relative overflow-hidden flex items-center justify-center group">
                        <motion.h2
                            className="font-display text-5xl sm:text-7xl lg:text-[8rem] xl:text-[9rem] font-bold tracking-tighter text-dark text-center uppercase transition-all duration-500 ease-out group-hover:-translate-y-[150%] group-hover:opacity-0 relative"
                        >
                            MORE PROJECTS (...)
                        </motion.h2>
                        <motion.h2
                            className="absolute font-display text-5xl sm:text-7xl lg:text-[8rem] xl:text-[9rem] font-bold tracking-tighter text-dark text-center uppercase translate-y-[150%] opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            VIEW ALL
                        </motion.h2>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className={`h-screen flex items-center justify-center sticky top-0 w-full overflow-hidden p-2 md:p-4 ${i === 0 ? 'bg-light' : 'bg-transparent'}`}>
            <motion.div
                style={{
                    top: topSpacing,
                    backgroundColor: colors.bg,
                    color: colors.text,
                }}
                className="relative flex flex-col lg:flex-row w-full h-full rounded-[32px] md:rounded-[48px] overflow-hidden px-8 md:px-16 lg:px-20 pt-28 md:pt-36 pb-8 md:pb-16"
            >
                {/* Left side text content */}
                <div className="flex flex-col h-full w-full lg:w-5/12 justify-between z-10">
                    <div>
                        <span
                            className="font-mono text-xs md:text-sm tracking-widest uppercase font-semibold block mb-8"
                            style={{ color: colors.label }}
                        >
                            (WORK)
                        </span>
                        <h2 className="font-display text-5xl sm:text-6xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-8 w-full">
                            {title}
                        </h2>
                    </div>

                    <div className="flex flex-col gap-12 lg:gap-24">
                        {/* Diamond & Link (Centered between sections) */}
                        <div className="flex items-center justify-between w-full lg:w-4/5">
                            <div className="w-8 h-8 rotate-45" style={{ backgroundColor: colors.text }}></div>

                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-sm tracking-wide font-mono uppercase text-right hover:opacity-80 transition-opacity"
                                >
                                    View Project
                                </a>
                            )}
                        </div>

                        {/* Details Grid */}
                        <div className="flex flex-col gap-4 font-mono text-[10px] lg:text-xs uppercase tracking-wide opacity-80">
                            <div className="grid grid-cols-3 gap-4">
                                <span className="col-span-1 opacity-60">Category:</span>
                                <span className="col-span-2 font-medium">{category}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <span className="col-span-1 opacity-60">Tech Stack:</span>
                                <span className="col-span-2 font-medium">{techStack.join(', ')}</span>
                            </div>
                            {repoUrl && (
                                <div className="grid grid-cols-3 gap-4">
                                    <span className="col-span-1 opacity-60">Source:</span>
                                    <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="col-span-2 font-medium underline underline-offset-4 hover:opacity-100 transition-opacity">
                                        GitHub Repo
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right side Image */}
                <div
                    className="w-full lg:w-7/12 h-[35vh] lg:h-full relative overflow-hidden rounded-[24px] lg:rounded-[32px] mt-8 lg:mt-0 lg:ml-8 cursor-pointer group"
                    onClick={() => {
                        if (project.id === 'more-work' || (liveUrl && liveUrl.includes('github.com'))) {
                            window.open(liveUrl, '_blank');
                        } else {
                            alert(`Details for '${title}' coming soon!`);
                        }
                    }}
                >
                    <div className="w-full h-full absolute inset-0 bg-dark/5 z-0"></div>
                    <motion.img
                        src={imageUrl}
                        alt={`Preview of ${title}`}
                        className="w-full h-full object-cover object-center lg:object-left relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                            e.target.parentElement.innerHTML = `<span class="font-mono text-sm opacity-40">Project Preview Not Found</span>`;
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
}
