import React from "react";
import { ExternalLink } from "./ExternalLink.jsx";

export function ProjectCard({ project, number }) {
    return (
        <article className={"project-card " + project.type} aria-labelledby={project.id}>
            {project.image ? (
                <div className="project-image">
                    <img src={project.image} alt={project.imageAlt || project.title + " screenshot"} loading="lazy" />
                </div>
            ) : (
                <div className="project-cover" aria-hidden="true">
                    <span className="cover-label">{project.category}</span>
                    <span className="cover-number">{number}</span>
                </div>
            )}
            <div className="project-content">
                <h3 id={project.id}>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tags" aria-label="Technologies">
                    {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
                {(project.repository || project.demo) && (
                    <div className="project-links">
                        <ExternalLink href={project.repository} icon={project.repIcon}>Source code</ExternalLink>
                        <ExternalLink href={project.demo}>Live demo</ExternalLink>
                    </div>
                )}
            </div>
        </article>
    );
}
