# Nayan Tupe Portfolio

Production portfolio website for Nayan Tupe, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis and React Three Fiber.

The website content is based on Nayan's resume: Data Science, Machine Learning, Python, FastAPI, React/Vite dashboards, analytics projects, deployment proof and project presentations.

## Quick Start

```bash
npm install
npm run dev
```

Local preview:

```text
http://localhost:3000
```

Production build:

```bash
npm run build
```

## Active Tech Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS v4
- Framer Motion
- GSAP
- Lenis smooth scroll
- Three.js / React Three Fiber
- lucide-react icons

## Active Project Structure

```text
app/
  layout.tsx          SEO metadata, JSON-LD, viewport, root layout
  page.tsx            Main page entry
  robots.ts           Robots route
  sitemap.ts          Sitemap route

components/
  cinematic-portfolio.tsx       Main page composition
  animations/boot-sequence.tsx  Initial boot animation
  assistant/ai-assistant.tsx    Floating assistant
  background/living-background.tsx
  layout/floating-nav.tsx       Floating navigation dock
  sections.tsx                  Hero, identity, skills, projects, timeline, contact
  smooth-scroll-provider.tsx    Lenis smooth scroll setup
  three/ai-core.tsx             Hero 3D AI core
  ui/button.tsx                 Reusable button component

hooks/
  use-magnetic.ts      Magnetic hover interaction helper

lib/
  portfolio-data.ts    Main editable content source
  utils.ts             Shared utility helpers

public/
  images/              Project screenshots and profile images
  docs/                Project presentations
  *.pdf                Resume and certificates

styles/
  globals.css          Design system, layout, animations and responsive CSS

types/
  portfolio.ts         Shared TypeScript content types
```

## Important: Editable Content

Most website changes should start in:

```text
lib/portfolio-data.ts
```

Use this file to update:

- Name, role, bio, phone, email
- Resume and social links
- Project titles, descriptions, GitHub links and live links
- Project screenshots
- Skills
- Experience
- Certificates
- Achievements
- Testimonials

## Updating Project Images

1. Add the image inside:

```text
public/images/
```

2. Update the project in:

```text
lib/portfolio-data.ts
```

Example:

```ts
{
  title: "KKC Spices ERP Reports",
  image: "/images/kkc-spices-material-loss-report.png",
}
```

If a project does not have a real screenshot, do not use a wrong placeholder image. Remove `image` and add `proofPoints`:

```ts
{
  title: "TradingMLModel",
  proofPoints: [
    "Python backend for equity/options data",
    "ML prediction workflow",
    "Backtesting engine with trade logs",
  ],
}
```

The UI will automatically show a text proof panel instead of an image.

## Legacy Files

This repository still contains some older Vite/React files under:

```text
src/
vite.config.js
index.html
dist/
```

They are not used by the live Next.js portfolio. The active website runs from `app/`, `components/`, `lib/`, `styles/`, `types/` and `public/`.

For new development, work only in the active Next.js structure listed above.

## Developer Guides

Detailed handover docs are available in:

```text
docs/PROJECT_STRUCTURE.md
docs/CONTENT_EDITING.md
docs/CHANGE_PLAYBOOK.md
```

## Build Notes

`npm run build` currently passes. Next.js may show an ESLint migration warning because the project uses a custom ESLint config; this warning does not block the build.
