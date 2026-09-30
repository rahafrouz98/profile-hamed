import { GitLogo } from "./GitLogo.jsx";
// Replace these sample titles and summaries with facts from your repositories.
// Leave links blank until you have a real URL; blank links are not rendered.
export const profile = {
    name: "Hamed Rahafrouz",
    initials: "HR",
    role: "Software developer",
    headline: "Building applications.\nTurning data into insights.",
    intro: "I help clients build websites, interactive applications, and chatbots with JavaScript, React, C++, and Python, and turn complex data into clear, actionable insights.",
    about: "My background combines software development, data analysis, and reliability engineering, with experience working with IBM Maximo. I can help you build a custom application, or make enterprise data easier to understand and use. My projects include browser-based games, a desktop DJ application, chatbots, and data analysis",
    email: "hamed@afrouztech.tech",
    github: "https://github.com/rahafrouz98",
    linkedin: "www.linkedin.com/in/h-rahafrouz",
};

export const projects = [
    {
        title: "The History of Internet in Canada",
        category: ["Interactive Web", "Full Stack", "Authentication", "API", "PostgreSQL"],
        type: "web site",
        tech: ["JavaScript", "Express.js", "SQL"],
        description:
            "A website exploring the history of the Internet in Canada, built with Express.js and Supabase for authentication and PostgreSQL data storage. Users can sign up, log in, and contribute content for review.",
        repository: "https://github.com/rahafrouz98/internet-history",
        repIcon: GitLogo,
        demo: "https://internet-history-lfc4.onrender.com/",
    },
    {
        title: "Robot in jungle",
        category: ["Interactive Web", "Game"],
        type: "game",
        tech: ["JavaScript"],
        description:
            "A browser-based 2D side-scrolling platformer built with JavaScript, featuring procedural level generation, collision detection, dynamic camera scrolling, animated enemies, and collectible-based progression.",
        repository: "https://github.com/rahafrouz98/robot-in-jungle",
        demo: "https://robot-in-jungle.onrender.com/",
    },
    {
        title: "OtoDecks",
        category: ["OPP", "DSP"],
        type: "Adio App",
        tech: ["c++", "juce"],
        description:
            "A DJ application built with C++ and the JUCE framework, featuring FFT-based signal processing, BPM estimation, a loop sampling panel, cue controls, and playlist management.",
        repository: "https://github.com/rahafrouz98/OtoDecks-new",
        demo: "https://youtu.be/1SRcnPIJ6MI",
    },
    {
        title: "Music Visualizer",
        category: ["OOP", "DSP"],
        type: "Audio App",
        tech: ["JavaScript"],
        description:
            "An audio-reactive music visualizer built with JavaScript, transforming energy across frequency bands into dynamic 2D and 3D animations, including waveforms, noise-driven ripples, fireworks, dial gauges, a sphere, and flames. Controlers are provided on the right and left side of the window.",
        repository: "git@github.com:rahafrouz98/vidualizer.git",
        demo: "https://vidualizer.onrender.com/",
    },
    {
        title: "Python chatbot",
        category: ["Conversation", "Python"],
        type: "chat",
        tech: ["Python"],
        description:
            "A conversational project built with Python. Explain how responses are generated and what the bot helps users do.",
        repository: "https://github.com/rahafrouz98/chatbot1",
        demo: "",
    },
    {
        title: "Full stack chatbot",
        category: ["Conversation", "Full stack"],
        type: "fullstack",
        tech: ["Frontend", "Backend"],
        description:
            "A chatbot with a connected frontend and backend. Add your actual stack, architecture, and supported features.",
        repository: "",
        demo: "",
    },
];

export const filters = [
    "All",
    "Full Stack",
    "Interactive Web",
    "LLM",
    "RAG",
    "Authentication",
    "Game",
    "FFT",
    "Audio Analysis",
    "Data Analysis",
    "DSP",
    "OOP",
];
