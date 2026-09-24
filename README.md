# React developer portfolio

A complete, responsive React + Vite portfolio with six project cards, about and contact sections, accessible navigation, and custom CSS.

## Run locally

Install Node.js 22 or newer, then open a terminal in this folder:

    npm install
    npm run dev

Open the local address printed in the terminal.

## Personalize

Edit src/data.js:
- Set your name, initials, biography, email, GitHub profile, and LinkedIn URL.
- Replace the six sample titles, summaries, and technology lists with your actual repository details.
- Paste each full GitHub repository URL into repository.
- Set demo only if you have a live demo. Leave it blank otherwise.
- Put screenshots in public/ and use paths such as /my-game.png in image. Fill in imageAlt with a useful description.
- Empty links are intentionally hidden so the template never sends visitors to fake repositories.

The three game technology lists are examples; adjust them for each actual project. The full stack chatbot intentionally has no invented framework or backend technology. Project cover numbers are graphic placeholders, not screenshots of your apps.

Edit src/styles.css for all styling, colors, layout, and responsive behavior. Edit src/App.jsx for the page structure and components. Update index.html description and title before publishing.

## Production

    npm run build
    npm run preview

The build creates dist/. Deploy its contents to a static host. If hosting below a URL subdirectory, configure Vite's base option before building.

## Structure

    public/favicon.svg
    src/App.jsx       Page and reusable components
    src/data.js       Personal details and six projects
    src/main.jsx      React entry point
    src/styles.css   Complete styling
    index.html       Document metadata
    package.json     Dependencies and commands

Google Fonts are optional external resources; system sans-serif fallbacks are provided. No API keys, server, or paid services are required. The portfolio showcases your chatbot projects; it does not implement or embed the chatbots.
