import Section from "../components/Section"
import { projectSectionData, projectItems } from "../data/project"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
    return (
        <Section id="projects">
            <div className="flex flex-col items-center justify-center gap-5 w-full h-full px-6 py-20">
                <div className="text-center mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold uppercase">
                        {projectSectionData.title}
                    </h2>
                    <p className="text-muted mt-4">
                        {projectSectionData.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 px-2">
                    {projectItems.map(project => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </Section>
    )
}
