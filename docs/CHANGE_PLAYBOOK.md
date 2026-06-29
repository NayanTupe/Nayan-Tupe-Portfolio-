# Change Playbook

Common tasks for future developers.

## Run the Project

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Verify Before Delivery

```bash
npm run build
```

Build must pass before handing over changes.

## Important Dev Server Note

Do not run `npm run build` while the dev server is serving pages from `.next`.

Recommended flow:

1. Stop dev server with `Ctrl+C`.
2. Run `npm run build`.
3. Start dev server again with `npm run dev`.

This avoids `.next` manifest conflicts.

## Change Hero Text

Edit:

```text
components/sections.tsx
```

Search:

```text
HeroSection
```

Most profile facts should still come from:

```text
lib/portfolio-data.ts
```

## Change Role, Bio or Contact Details

Edit:

```text
lib/portfolio-data.ts
```

Update:

```ts
profile
profileLinks
socialLinks
```

## Add a New Project

1. Open:

```text
lib/portfolio-data.ts
```

2. Add a new object inside `projects`.

3. Use a unique slug:

```ts
slug: "new-project-name"
```

4. If screenshot is available, add it to:

```text
public/images/
```

5. Reference it:

```ts
image: "/images/new-project-screenshot.png"
```

6. If screenshot is not available, use:

```ts
proofPoints: [
  "Point one",
  "Point two",
  "Point three",
]
```

## Replace a Project Screenshot

1. Add the new image to:

```text
public/images/
```

2. Update the project `image` path in:

```text
lib/portfolio-data.ts
```

3. Use browser refresh to check:

- Card image
- Case study modal hero image
- Gallery image

## Remove a Wrong Project Screenshot

Remove the `image` field from the project object and add `proofPoints`.

This is better than showing a wrong image.

## Change Project Card Layout

Edit:

```text
components/sections.tsx
```

Search:

```text
ProjectsSection
ProjectTextVisual
ProjectModal
```

Related CSS:

```text
styles/globals.css
```

Search:

```text
.project-window
.project-media
.project-text-visual
.case-hero
.case-gallery
```

## Change Colors or Design Tokens

Edit:

```text
styles/globals.css
```

Search:

```css
:root
```

Use existing tokens:

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
```

Avoid adding random colors in components.

## Improve Performance

Start with these files:

```text
components/three/ai-core.tsx
styles/globals.css
components/cinematic-portfolio.tsx
```

Recommended performance rules:

- Keep custom cursor disabled unless absolutely needed.
- Avoid heavy post-processing in Three.js.
- Prefer `object-fit: contain` for dashboard screenshots.
- Avoid large animated backgrounds on mobile.
- Keep animations subtle and short.

## Accessibility Checklist

Before final delivery, check:

- Keyboard can reach buttons and links.
- Modal closes with Escape.
- Images have useful alt text.
- Text has enough contrast.
- `prefers-reduced-motion` is respected.
- Contact form fields have labels.

## Deployment

This is a standard Next.js project.

For Vercel:

```text
Framework: Next.js
Build command: npm run build
Output: .next
```

No extra environment variables are required for the current static portfolio.
