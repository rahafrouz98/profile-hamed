import React from "react";

export function EmailLogo({ className }) {
    return (
        <svg
            className={className}
            viewBox="0 0 90 90"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
        >
            <circle
                cx="45"
                cy="45"
                r="45"
                fill="currentColor"
            />

            <path
                d="M 45 42.66 l 22.511 -7.647 v -3.028 c 0 -1.8 -1.46 -3.26 -3.26 -3.26 H 25.749 c -1.8 0 -3.26 1.46 -3.26 3.26 v 3.028 L 45 42.66 z"
                fill="white"
            />

            <path
                d="M 45 47.34 l -22.511 -7.647 v 18.323 c 0 1.8 1.46 3.26 3.26 3.26 h 38.501 c 1.8 0 3.26 -1.46 3.26 -3.26 V 39.692 L 45 47.34 z"
                fill="white"
            />
        </svg>
    );
}
