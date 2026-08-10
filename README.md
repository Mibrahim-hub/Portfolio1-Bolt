# Mohamed Ibrahim — Portfolio

Premium, modern personal portfolio for an IT Administrator and System Administrator.

## Tech Stack
- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Features
- Dark / Light mode (dark by default)
- Sticky glassmorphism navbar with active link tracking
- Typing effect, animated counters, scroll animations
- Sections: Home, About, Experience, Skills, Certifications, Projects, Contact
- Back-to-top button, responsive, SEO meta + structured data
- Reusable components

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This project is preconfigured for GitHub Pages. The build uses a relative `base` so assets resolve correctly under `https://<username>.github.io/<repo-name>/`.

### Option A — GitHub Actions (recommended)
A workflow is included at `.github/workflows/deploy.yml`. On push to `main` it builds and deploys to the `gh-pages` branch automatically.

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and set it to **GitHub Actions**.
3. Push to `main` — the site goes live at `https://<username>.github.io/<repo-name>/`.

### Option B — Manual
```bash
npm run build
npx gh-pages -d dist
```
Then set **Settings → Pages → Source** to the `gh-pages` branch.

> If deploying to a user/organization page (`<username>.github.io`), set `base: '/'` in `vite.config.ts`.
