# Sangye Tengkhar: Portfolio

My personal portfolio website, live at **[sangyetengkhar.com](https://sangyetengkhar.com)**. It introduces me, lists my skills, education and experience, and showcases my top projects, each with a demo video, an overview, the technologies used and a link to the code. Built with React.

![Portfolio demo: the home section, skills, education and experience timeline, project filters and a project page](docs/demo.gif)

## Features

- **Home:** an introduction and a resume download.
- **Skills:** frontend and mobile skills alongside backend and cloud skills.
- **Qualifications:** an education and experience timeline you switch between with tabs.
- **Projects:** a slider of my four featured projects, with arrow buttons, dots, and swiping on phones. Each project has its own page with a demo video, an overview, the technologies used, and GitHub and live-site links.
- **Footer:** LinkedIn, GitHub and email links.
- **Responsive:** the layout adapts from desktop to phone, with a bottom navigation menu on small screens.
- **Link previews:** Open Graph tags give a preview card when the site is shared on LinkedIn or in messages.

## Project structure

```
public/
├── index.html            Page title, meta and link-preview tags, icon fonts
├── og-image.jpg          Link-preview image
└── projects/             Project thumbnails and demo videos served from the site
src/
├── App.js                Routes: "/" (all sections) and "/project/:itemId"
├── components/
│   ├── header/           Navigation bar
│   ├── home/             Introduction and resume download
│   ├── skills/           Skills cards
│   ├── qualifications/   Education and experience timeline
│   ├── portfolio/        Projects slider and Data.jsx (all project content)
│   ├── project/          Project detail page
│   ├── footer/           LinkedIn, GitHub and email links
│   └── scrollup/         Back-to-top button
└── App.test.js           Tests for the home page, project filters and project pages
```

### Adding a project

Add an entry to `projectsData` in `src/components/portfolio/Data.jsx` with an `id`, `title`, `year`, `subtitle`, `image`, `video`, `project_overview`, `technologies` and `github` link. Optional fields are `link` for a live site and `status` (for example "In progress"). Put the image and video in `public/projects/`, or host them elsewhere and use the full URL.

## Running it locally

```bash
npm install
npm start        # development server at http://localhost:3000
npm test         # run the tests
npm run build    # production build in build/
```

## Deployment

The site is hosted on Netlify, which rebuilds and publishes it automatically whenever `main` changes. Pull requests get a preview build first.

## Built with

- React 18 (Create React App), React Router
- CSS, Boxicons and Unicons icon fonts, Google Fonts (Poppins)
- Netlify for hosting

Created by Sangye Tengkhar.
