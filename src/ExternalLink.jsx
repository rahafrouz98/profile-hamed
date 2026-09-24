import React from "react";
import { GitLOGO } from "./gitLOGO";

export function ExternalLink({ href, children, className = "link-container", icon = "↗" }) {
    if (!href) return null;
    return (
        <a className={className} href={href} target="_blank" rel="noopener noreferrer">
            {children}
            {icon == "↗" ? 
            <span>↗</span> :
            <GitLOGO className = "work-link-icon"/>}
        </a>
    );
}
