import { useState } from "react";

export default function Project({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="toggleable" onClick={() => setIsOpen(!isOpen)}>
        {project.name}
      </div>
      <div className={`courses ${isOpen ? "open" : ""}`}>
        { /* Image (if provided) */}
        {project.image && (<img src={project.image} alt={project.alt || project.name}/>)}
        { /* Github (if provided) */ }
        {project.github && (<a href={project.github}>Github</a>)}
        { /* Demo (if provided) */ }
        {project.demo && (<a href={project.demo}>Demo</a>)}
        { /* Objective */ }
        <h3>Objective</h3>
        <p>{project.objective}</p>
        { /* Details */ }
        <h3>Details</h3>
        <p>{project.details}</p>
        { /* Technologies [List] */ }
        <h3>Technologies</h3>
        <ul>
            {project.technologies.map((technology) => {
                return <li key={technology}>{technology}</li>
            })}
        </ul>
        { /* Highlights (if provided) */ }
        {project.highlights && project.highlights.length > 0 && (
            <div>
                <h3>Highlights</h3>
                <ul>
                    {project.highlights.map((highlight) => {
                        return <li key={highlight}>{highlight}</li>
                    })}
                </ul>
            </div>
        )}
        { /* Learned (if provided) */ }
        {project.learned && (
            <div>
                <h3>Learned</h3>
                <p>{project.learned}</p>
            </div>
        )}
        { /* Status */ }
        <h3>Status</h3>
        <p>{project.status}</p>
      </div>
    </div>
  );
}