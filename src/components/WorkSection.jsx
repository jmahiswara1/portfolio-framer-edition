import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const CARD_COLORS = [
    { bg: '#c8f135', text: '#0a0a0a', label: '#0a0a0a' }, // Green
    { bg: '#0a0a0a', text: '#f5f5f5', label: '#c8f135' }, // Black
];

export default function WorkSection() {
    return (
        <section id="work-section" className="w-full bg-transparent pt-32 pb-24 relative z-10">
            <div className="w-full flex flex-col items-center relative">
                {projects.map((project, index) => {
                    const colors = CARD_COLORS[index % CARD_COLORS.length];
                    return (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            i={index}
                            colors={colors}
                        />
                    );
                })}
            </div>
        </section>
    );
}
