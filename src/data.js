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
        category: ["Interactive Web", "Full Stack", "Authentication", "API"],
        type: "web site",
        tech: ["JavaScript", "HTML", "CSS", "Express.js", "SQL"],
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
        category: ["Interactive Web", "OOP", "DSP"],
        type: "Audio App",
        tech: ["JavaScript"],
        description:
            "An audio-reactive music visualizer built with JavaScript, transforming energy across frequency bands into dynamic 2D and 3D animations, including waveforms, noise-driven ripples, fireworks, dial gauges, a sphere, and flames. Controlers are provided on the right and left side of the window.",
        repository: "git@github.com:rahafrouz98/vidualizer.git",
        demo: "https://vidualizer.onrender.com/",
    },
    {
        title: "Python chatbot",
        category: ["NLP", "Python"],
        type: "chat",
        tech: ["Python"],
        description: `Developed a conversational chatbot using Python and NLTK, applying tokenization, part-of-speech tagging, and lemmatization to match user input with predefined intents. Used regular expressions, session memory, and response templates to personalize replies, with randomized responses and fallback messages.`,
        repository: "https://github.com/rahafrouz98/chatbot1",
        demo: "",
    },
    {
        title: "W2Watch",
        category: ["RAG", "LLM", "Full Stack"],
        type: "web site",
        tech: ["JavaScript", "Express.js", "HTML", "CSS", "vite", "API", "SQL"],
        description: `Built a full-stack app that recommends movies based on individual or group preferences, mood, and available time. Combined OpenAI embeddings, Supabase vector search, and generative AI to deliver personalized suggestions with summaries and TMDB posters.`,
        repository: "https://github.com/rahafrouz98/w2watch",
        demo: "https://w2watch-3.onrender.com",
    },
    {
        title: "Library",
        category: ["Interactive Web"],
        type: "fullstack",
        tech: ["TypeScript", "Next.js", "React"],
        description: `Library is a book browsing website built with Next.js, React, TypeScript, and Tailwind CSS. It features a responsive catalogue, category filtering, and individual book pages with author information and interactive like buttons.`,
        repository: "https://github.com/rahafrouz98/tiny-library",
        demo: "https://tiny-library.onrender.com/books",
    },
    {
        title: "Applied-Data-Science-Capstone",
        category: ["Data Analysis"],
        type: "Data Analysis",
        tech: ["Data Analysis"],
        description: `A SpaceX launch analysis project exploring how payload mass, orbit, and launch location relate to Falcon 9 first-stage landing success. Uses Python, SQL, interactive maps, and a Plotly Dash dashboard to explore historical launch data, alongside machine learning models for predicting landing outcomes. Developed as part of the IBM Applied Data Science Capstone.`,
        repository: "https://github.com/rahafrouz98/tiny-library",
        demo: "https://applied-data-science-capstone-djdc.onrender.com/",
    },
        {
        title: "Restaurant",
        category: ["Interactive Web"],
        type: "web site",
        tech: ["JavaScript", "HTML", "CSS"],
        description: `A restaurant ordering app built with HTML, CSS, and vanilla JavaScript. Users can browse the menu, add or remove items, adjust quantities, and view automatically calculated order totals. The app includes a simulated checkout form and order confirmation, demonstrating DOM manipulation, event handling, and cart state management. Developed using Vite."
        demo: "https://applied-data-science-capstone-djdc.onrender.com/",
    }
];

export const filters = [
    "All",
    "Full Stack",
    "Interactive Web",
    "LLM",
    "RAG",
    "Authentication",
    "Data Analysis",
    "DSP",
    "OOP",
    "NLP",
    "API",
];
