import React, { useEffect, useState, useMemo } from "react";
import { profile, projects, filters } from "./data.js";
import { ExternalLink } from "./ExternalLink.jsx";
import { ProjectCard } from "./ProjectCard.jsx";
import { ProjectFilter } from "./ProjectFilter.jsx";
import { GitLogo } from "./GitLogo.jsx";
import { LinkedInLogo } from "./LinkedInLogo.jsx";

export default function App() {
    let [activeFilter, setFilter] = useState(filters[0]);

    const filteredProjects = useMemo(() => {
        return activeFilter == "All" ? projects : projects.filter((project) => project.category.includes(activeFilter));
    }, [projects, activeFilter]);

    useEffect(() => {
        document.title = profile.name + " — Developer portfolio";
    }, []);
    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <header className="site-header container">
                <a className="brand" href="#home" aria-label={profile.name + ", home"}>
                    <span>
                        {" "}
                        <img className="profile-photo" src="./profile.png" alt={`Portrait of ${profile.name}`} />
                    </span>
                    <span>
                        {profile.name}
                        <span className="brand-suffix"> / developer</span>
                    </span>
                </a>
                <nav aria-label="Main navigation">
                    <a href="#work">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <main id="main">
                <section id="home" className="hero container" aria-labelledby="hero-title">
                    <h1 id="hero-title">
                        {profile.headline.split("\n").map((line, index) => (
                            <span className={index === 1 ? "accent" : ""} key={line}>
                                {line}
                            </span>
                        ))}
                    </h1>
                    <div className="hero-bottom">
                        <p>{profile.intro}</p>
                        <a className="button-main" href="#work">
                            Explore my work <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                </section>
                <section id="work" className="work container" aria-labelledby="work-title">
                    <div>
                        <h2 id="work-title">Selected Projects</h2>
                    </div>
                    <div className="project-filtering">
                        <div>
                            <ProjectFilter
                                setActiveFilter={(selectedFilter) => setFilter(selectedFilter)}
                                activeFilter={activeFilter}
                            />
                        </div>
                        <span className="count">{String(filteredProjects.length).padStart(2, "0")} projects found</span>
                    </div>
                    <div className="project-grid">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} number={index + 1} />
                        ))}
                    </div>
                </section>
                <section id="about" className="about container" aria-labelledby="about-title">
                    <div>
                        <h2 id="about-title">
                            Curiosity,
                            <br />
                            <span className="accent">put into code.</span>
                        </h2>
                    </div>
                    <div className="about-copy">
                        <p>{profile.about}</p>
                        <h3>Tools I work with</h3>
                        <ul className="skills">
                            {["JavaScript", "React", "C++", "Python", "HTML & CSS"].map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section id="contact" className="contact container" aria-labelledby="contact-title">
                    <h2 id="contact-title">
                        Let’s build
                        <br />
                        something <span className="accent">good.</span>
                    </h2>
                    <div className="contact-bottom">
                        <p>
                            Have a project in mind?
                            <br />
                            I’d love to hear about it.
                        </p>
                        <div className="contact-links">
                            {profile.email && (
                                <a className="button-main" href={"mailto:" + profile.email}>
                                    Say hello <span aria-hidden="true">↗</span>
                                </a>
                            )}
                            <ExternalLink href={profile.github} Icon={GitLogo}>
                              GitHub
                            </ExternalLink>
                            <ExternalLink href={profile.linkedin} Icon={LinkedInLogo}>
                              LinkedIn
                            </ExternalLink>
                            {!profile.email && !profile.github && !profile.linkedin && (
                                <span className="contact-placeholder">Contact details coming soon.</span>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="container">
                <span>
                    © {new Date().getFullYear()} {profile.name}
                </span>
                <span>Built with React. Made with curiosity.</span>
                <a href="#home">Back to top ↑</a>
            </footer>
        </>
    );
}
