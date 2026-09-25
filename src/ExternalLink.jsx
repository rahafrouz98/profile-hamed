import React from "react";

export function ExternalLink({ href, children, className = "link-container", Icon = "↗" }) {
    if (!href) return null;
    return (
        <a className={className} href={href} target="_blank" rel="noopener noreferrer">
            {children}
            {Icon == "↗" ? 
            <span>↗</span> :
            <Icon className = "link-icon"/>}
        </a>
    );
}
