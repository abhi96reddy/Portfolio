# Abhilash Reddy — Portfolio Website

A responsive portfolio built with React and Vite.

## Development

```bash
npm install
npm run dev
```

## Available commands

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build in `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Project structure

- `index.html` — Vite HTML entry point
- `src/main.jsx` — React application bootstrap
- `src/App.jsx` — portfolio UI and interactions
- `src/projects.js` — professional project data
- `src/styles.css` — responsive site styling
- `assets/` — static site assets

The portfolio contains 36 professional/client projects and 3 self projects. Search, category filters, reset behavior, and the mobile navigation are implemented with React state.

## Deployment

Pushes to `main` automatically build and deploy the site through GitHub Actions. The production site is available at:

https://abhi96reddy.github.io/Portfolio/
