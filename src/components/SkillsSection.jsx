import AnimatedSection from "./AnimatedSection";
import SkillCategory from "./SkillCategory";

const FRONTEND_SKILLS = [
    "React.js",
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive UI/UX",
];

const BACKEND_SKILLS = [
    "Node.js",
    "Express.js",
    "Laravel",
    "PHP",
    "REST API Development",
];

const DATA_DB_SKILLS = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "C++",
    "Python (Dasar)",
    "SQL",
];

export default function SkillsSection() {
    return (
        <AnimatedSection
            id="services"
            className="py-24 border-t border-border"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="mb-16">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                        EXPERTISE & TOOLS
                    </h2>
                    <div className="h-1 w-20 bg-accent rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCategory title="Front-End & UI/UX" items={FRONTEND_SKILLS} />
                    <SkillCategory title="Back-End & API" items={BACKEND_SKILLS} />
                    <SkillCategory title="Database & Languages" items={DATA_DB_SKILLS} />
                </div>
            </div>
        </AnimatedSection>
    );
}
