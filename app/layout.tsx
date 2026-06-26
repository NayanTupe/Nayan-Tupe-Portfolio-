import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Nayan Tupe | AI/ML Developer Portfolio",
  description:
    "Cinematic portfolio for Nayan Tupe: AI/ML developer building FastAPI systems, React dashboards, analytics products and deployed project proof.",
  keywords: ["Nayan Tupe", "AI ML Developer", "React Developer", "FastAPI", "Data Science", "Portfolio"],
  openGraph: {
    title: "Nayan Tupe | AI/ML Developer Portfolio",
    description: "AI/ML systems, FastAPI backends, React dashboards and deployment proof.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#020204",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
