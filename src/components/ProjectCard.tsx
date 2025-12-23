import { projectItems } from "../data/project"

type Project = typeof projectItems[number]

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-card border border-violet-900 rounded-xl p-6 relative">
            <span className="bg-violet-500/10 backdrop-blur-sm w-full h-full absolute inset-0 -z-50"></span>
            <h3 className="text-lg font-medium">
                {project.title}
            </h3>

            <p className="text-muted text-sm mt-2">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map(t => (
                    <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    )
}
