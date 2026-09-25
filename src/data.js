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
    email: "h.rahafrouz@gmail.com",
    github: "https://github.com/rahafrouz98",
    linkedin: "https://www.linkedin.com/in/h-rahafrouz/",
};

export const projects = [
    {
        title: "The History of Internet in Canada",
        category: ["Interactive Web", "Full Stack", "Authentication"],
        type: "web site",
        tech: ["JavaScript", "API"],
        description:
            "The first of three browser-based game projects. Add the game name, its rules, and what you built here.",
        repository: "https://github.com/rahafrouz98/internet-history",
        repIcon: GitLogo,
        demo: "https://internet-history-project.onrender.com/",
    },
    {
        title: "Game project two",
        category: ["Interactive", "Web"],
        type: "game",
        tech: ["JavaScript", "React"],
        description:
            "A second experiment in interactive play. Describe the main interaction and the development challenge you solved.",
        repository: "",
        demo: "",
    },
    {
        title: "Game project three",
        category: ["Interactive Web"],
        type: "game",
        tech: ["JavaScript", "React"],
        description:
            "The third game in the collection. Replace this text with the actual gameplay and your contribution.",
        repository: "",
        demo: "",
    },
    {
        title: "DJ application",
        category: ["Audio", "Desktop"],
        type: "audio",
        tech: ["C++"],
        description:
            "A DJ application built with C++. Add the audio features you implemented and the libraries you used.",
        repository: "",
        demo: "",
    },
    {
        title: "Python chatbot",
        category: ["Conversation", "Python"],
        type: "chat",
        tech: ["Python"],
        description:
            "A conversational project built with Python. Explain how responses are generated and what the bot helps users do.",
        repository: "",
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
];
