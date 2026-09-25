import React from "react";
import { ExternalLink } from "./ExternalLink.jsx";


export function ProjectCard({ project, number }) {
    return (
        <article className={"project-card " + project.type} aria-labelledby={project.id}>
            
            <div className="project-cover" aria-hidden="true">
                <h3 id={project.id} className = "project-title">{project.title}</h3>
                <div className="cover-number">{number}</div>
            </div>
            
            <div className="project-content">
                <p className="cover-label">
                    {project.category.join(" / ")}
                </p>
                <p className="project-description">{project.description}</p>
                <ul className="projects-tags-container " aria-label="Technologies">
                    {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
                {(project.repository || project.demo) && (
                    <div className="project-links">
                        <ExternalLink href={project.repository} Icon={project.repIcon}>Source code</ExternalLink>
                        <ExternalLink href={project.demo}>Live demo</ExternalLink>
                    </div>
                )}
            </div>
        </article>
    );
}
