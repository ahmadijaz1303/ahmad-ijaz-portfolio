# Ahmad Ijaz — Portfolio

Personal portfolio website for **Ahmad Ijaz**, AI/ML Engineer specializing in Computer Vision, Deep Learning, and Assistive Technology.

Built with **React**, **Vite**, and **Tailwind CSS v4**.

## Features

- Modern dark theme with AI/tech aesthetic
- Responsive design (mobile, tablet, desktop)
- Sections: Hero, About, Skills, Experience, Projects, Achievements, Education, Contact
- Featured **Talking Hands** FYP project (Pakistan Sign Language)
- Links to GitHub repos and professional profiles
- Smooth scroll navigation

## Prerequisites

Install [Node.js](https://nodejs.org/) (v18 or later recommended).

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

The production build is output to the `dist/` folder.

## Deploy

### Vercel (Recommended)

1. Push this repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Deploy

### GitHub Pages

Add `base: '/your-repo-name/'` to `vite.config.js`, then:

```bash
npm run build
# Deploy the dist/ folder to GitHub Pages
```

## Customize

Edit `src/data/portfolio.js` to update your info, projects, skills, and experience without touching components.

## Project Structure

```
src/
├── components/     # UI sections
├── data/
│   └── portfolio.js  # All portfolio content
├── App.jsx
├── main.jsx
└── index.css
public/
├── favicon.svg
└── resume.pdf
```

## License

Private — © Ahmad Ijaz
