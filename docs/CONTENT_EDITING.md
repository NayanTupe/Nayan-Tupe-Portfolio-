# Content Editing Guide

Use this guide when updating Nayan's portfolio content.

## Main Content File

Edit content here:

```text
lib/portfolio-data.ts
```

This file is intentionally centralized so non-design changes do not require touching UI components.

## Profile Content

Update the `profile` object:

```ts
export const profile = {
  name: "Nayan Tupe",
  role: "Data Science | Machine Learning | Software Developer",
  focus: "...",
  location: "...",
  education: "...",
  experience: "...",
  bio: "...",
  targetRoles: "...",
  email: "...",
  phone: "...",
};
```

This content appears in:

- Hero
- Identity section
- Contact section
- AI assistant
- SEO structured data

## Resume and Social Links

Update:

```ts
export const profileLinks = {
  github: "...",
  linkedin: "...",
  resume: "/Nayan_Tupe_Resume.pdf",
  resumeWithCertificates: "/Nayan_Tupe_Resume_With_Certificates.pdf",
  portfolioDrive: "...",
};
```

PDF files should be placed in:

```text
public/
```

## Projects

Projects are controlled by:

```ts
export const projects: Project[] = [...]
```

Each project supports:

```ts
{
  slug: "unique-project-id",
  title: "Project Name",
  category: "Project Category",
  short: "One-line summary",
  description: "Card description",
  tech: ["Python", "React"],
  image: "/images/project-screenshot.png",
  gallery: ["/images/extra-image.png"],
  proofPoints: ["Point 1", "Point 2"],
  live: "https://...",
  github: "https://...",
  presentation: "https://...",
  highlight: true,
  caseStudy: {
    overview: "...",
    problem: "...",
    research: "...",
    planning: "...",
    design: "...",
    development: "...",
    challenges: "...",
    solutions: "...",
    results: "...",
    performance: "...",
    future: "...",
  }
}
```

## Adding a Project With Screenshot

1. Add image to:

```text
public/images/
```

2. Add this to the project object:

```ts
image: "/images/your-image-name.png"
```

3. If there are multiple screenshots:

```ts
gallery: [
  "/images/screen-1.png",
  "/images/screen-2.png",
]
```

## Adding a Project Without Screenshot

Do not use unrelated placeholder screenshots.

Remove `image` and add:

```ts
proofPoints: [
  "Built Python backend for equity/options data",
  "Created ML prediction workflow",
  "Added backtesting engine with trade logs",
]
```

The UI will automatically show a polished text proof panel instead of an image.

## Skills

Update:

```ts
export const skills: Skill[] = [...]
```

Each skill has:

```ts
{
  name: "Python",
  group: "ML/Data",
  related: ["Machine Learning", "Data Science"]
}
```

`related` controls hover highlighting in the Knowledge Network.

## Experience

Update:

```ts
export const experienceItems: ExperienceItem[] = [...]
```

Use concise resume-style bullets.

## Certificates

Update:

```ts
export const certificates: Certificate[] = [...]
```

If the certificate is in a PDF, put it in `public/` and link it with:

```ts
link: "/Nayan_Tupe_Resume_With_Certificates.pdf"
```

## Achievements

Update:

```ts
export const achievements = [...]
```

Keep numbers realistic and resume-friendly.

## Testimonials

Update:

```ts
export const testimonials = [...]
```

If real testimonials are not available, keep them as review-style portfolio feedback, not fake client claims.

## SEO Text

SEO metadata is in:

```text
app/layout.tsx
```

Update it when the role, primary skills or domain changes.
