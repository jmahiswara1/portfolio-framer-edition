export default function SkillTag({ name }) {
    return (
        <div className="bg-dark border border-border px-4 py-3 rounded-md hover:border-accent hover:text-accent transition-all duration-300 flex items-center shadow-sm hover:-translate-y-1">
            <span className="font-mono text-sm group-hover:text-accent text-secondary">{name}</span>
        </div>
    );
}
