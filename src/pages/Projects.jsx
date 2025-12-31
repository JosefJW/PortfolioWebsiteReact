import projectsData from "../data/projects.json";
import Project from "../components/Project";
import "./education.css";

export default function Projects() {
    return <main className="toggleDisplays" id="projects">
        {projectsData.map((projectData) => (
            <Project key={projectData.id} project={projectData} />
        ))}
    </main>
}