# Project Structure

This document explains the active production structure of the portfolio so a new developer can understand the codebase quickly.

## Architecture Overview

The app is a single-page portfolio built with Next.js App Router.

The page is composed in this order:

```text
app/page.tsx
  -> components/cinematic-portfolio.tsx
    -> SmoothScrollProvider
    -> BootSequence
    -> LivingBackground
    -> FloatingNav
    -> HeroSection
    -> IdentitySection
    -> SkillsSection
    -> ProjectsSection
    -> ExperienceSection
    -> CertificatesSection
    -> AchievementsSection
    -> TestimonialsSection
    -> ContactSection
    -> AIAssistant
```

## Active Directories

### `app/`

Next.js App Router entry points.

- `layout.tsx`: global metadata, Open Graph, Twitter cards, JSON-LD structured data and root HTML.
- `page.tsx`: renders the portfolio shell.
- `robots.ts`: dynamic robots.txt route.
- `sitemap.ts`: dynamic sitemap.xml route.

### `components/`

All reusable UI and experience components.

- `cinematic-portfolio.tsx`: main composition file. Use this to reorder sections.
- `sections.tsx`: all page sections. If the project grows, split this file into one file per section.
- `animations/boot-sequence.tsx`: initial loading/boot animation.
- `assistant/ai-assistant.tsx`: floating assistant and quick actions.
- `background/living-background.tsx`: layered animated background.
- `layout/floating-nav.tsx`: top navigation.
- `three/ai-core.tsx`: hero 3D core.
- `ui/button.tsx`: reusable button component.

### `lib/`

Shared data and helpers.

- `portfolio-data.ts`: main editable content file.
- `utils.ts`: utility helper for class name merging.

### `styles/`

Global design system and responsive styling.

- `globals.css`: color tokens, section layout, cards, buttons, modals, project visuals, responsive rules and reduced motion behavior.

### `types/`

TypeScript types for portfolio content.

- `portfolio.ts`: project, skill, certificate, experience and social link types.

### `public/`

Static files served by Next.js.

- `images/`: profile photo and project screenshots.
- `docs/`: project presentations.
- root PDFs: resume and certificates.

## Legacy Directories

The following are old Vite assets and are not part of the active Next.js website:

```text
src/
vite.config.js
index.html
dist/
```

Do not make new website changes in those files. Use the active structure above.

## Data Flow

Most section content comes from:

```text
lib/portfolio-data.ts
```

Example:

```text
projects -> ProjectsSection -> ProjectModal
skills -> SkillsSection
experienceItems -> ExperienceSection
certificates -> CertificatesSection
profile -> HeroSection, IdentitySection, ContactSection, SEO
```

## Styling Flow

Classes are defined globally in:

```text
styles/globals.css
```

The project uses CSS variables for design tokens:

```css
--bg
--surface
--glass
--border
--text
--secondary
--muted
--mint
--blue
--gold
--radius-card
--radius-button
```

Use these tokens instead of adding random one-off colors.

## Motion Flow

- Framer Motion handles section reveals and modals.
- Lenis handles smooth scrolling.
- GSAP handles magnetic hover movement.
- React Three Fiber handles the hero AI core.

Keep motion subtle. If performance drops, reduce animation before adding new effects.
