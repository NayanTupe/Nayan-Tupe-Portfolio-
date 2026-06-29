import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { profile, profileLinks } from "@/lib/portfolio-data";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nayan-tupe.com"),
  title: {
    default: "Nayan Tupe | Data Science, Machine Learning & Software Developer",
    template: "%s | Nayan Tupe",
  },
  description:
    "Portfolio for Nayan Tupe: Data Science, Machine Learning, Python, FastAPI, React/Vite dashboards, analytics projects, deployment proof and resume links.",
  keywords: [
    "Nayan Tupe",
    "Data Science",
    "Machine Learning Developer",
    "Software Developer",
    "Python Developer",
    "Data Analyst",
    "ML Engineer Intern",
    "FastAPI",
    "React Vite Dashboard",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nayan Tupe | Data Science, Machine Learning & Software Developer",
    description: "Resume-backed portfolio with ML projects, FastAPI APIs, React/Vite dashboards, live proof and GitHub links.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/profile.jpg", width: 1200, height: 630, alt: "Nayan Tupe portfolio preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayan Tupe | Data Science, Machine Learning & Software Developer",
    description: "Python, ML models, FastAPI, React/Vite dashboards and analytics projects.",
    images: ["/images/profile.jpg"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    url: "https://nayan-tupe.com",
    sameAs: [profileLinks.github, profileLinks.linkedin],
    knowsAbout: ["Python", "Machine Learning", "Data Science", "FastAPI", "React", "Vite", "pandas", "scikit-learn"],
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
