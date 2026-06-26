import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Hexagon,
  Layers3,
  LineChart,
  Server,
  Sparkles,
} from "lucide-react";
import type { Certificate, ExperienceItem, Project, Skill } from "@/types/portfolio";

export const profileLinks = {
  portfolioDrive:
    "https://drive.google.com/drive/folders/1l5Pc85te8yRyO9jDgGQU71L-dd27EHgi?usp=sharing",
  github: "https://github.com/NayanTupe?tab=repositories",
  linkedin: "https://linkedin.com/in/nayan-tupe-488664277",
  resume: "/Nayan_Tupe_Resume.pdf",
  resumeWithCertificates: "/Nayan_Tupe_Resume_With_Certificates.pdf",
};

export const projects: Project[] = [
  {
    title: "RetailIQ - AI SaaS Analytics Platform",
    category: "Project Highlight / Full-Stack ML Platform",
    description:
      "End-to-end e-commerce intelligence system with churn prediction, customer segmentation, dashboards, APIs and deployment proof.",
    tech: ["FastAPI", "React", "ML", "Swagger", "Render", "Vercel"],
    image: "/images/retailiq-dashboard.png",
    live: "https://retailiq-dashboard-frontend.vercel.app/",
    github: "https://github.com/NayanTupe/retailiq-dashboard-frontend",
    presentation:
      "https://drive.google.com/drive/folders/1l5Pc85te8yRyO9jDgGQU71L-dd27EHgi?usp=sharing",
    highlight: true,
  },
  {
    title: "TradingMLModel - ML Backtesting & Paper Trading",
    category: "ML + Analytics Dashboard",
    description:
      "Python backend for equity/options data, technical indicators, ML predictions, backtesting, trade logs and performance charts.",
    tech: ["Python", "React", "Vite", "ML", "Backtesting"],
    image: "/images/tradingml-dashboard-preview.png",
    github: "https://github.com/NayanTupe/TradingMLModel-.git",
    presentation:
      "https://drive.google.com/drive/folders/1l5Pc85te8yRyO9jDgGQU71L-dd27EHgi?usp=sharing",
  },
  {
    title: "KKC Spices - ERP Reports Dashboard",
    category: "Business Analytics Dashboard",
    description:
      "ERP-style reporting dashboard for material loss, sales/purchase contracts, machines, stock, customers and suppliers.",
    tech: ["React", "Dashboard", "Reports", "PDF Export"],
    image: "/images/kkc-spices-dashboard-preview.png",
    live: "https://nayantupe.github.io/KKC-Final-Report-/",
    github: "https://github.com/NayanTupe/KKC-Final-Report-.git",
    presentation:
      "https://drive.google.com/drive/folders/1l5Pc85te8yRyO9jDgGQU71L-dd27EHgi?usp=sharing",
  },
  {
    title: "Credit Score Classification",
    category: "Machine Learning Project",
    description:
      "Built credit score classification model using Random Forest and XGBoost with feature engineering and model optimization.",
    tech: ["Python", "scikit-learn", "Random Forest", "XGBoost"],
    image: "/images/retailiq-api-request.png",
    github: "https://github.com/NayanTupe/CREDIT-SCORE-CLASSIFICATION-PROJECT-.git",
    presentation:
      "https://drive.google.com/drive/folders/1l5Pc85te8yRyO9jDgGQU71L-dd27EHgi?usp=sharing",
  },
  {
    title: "Hotel Reservation Cancellation Prediction",
    category: "Machine Learning / EDA",
    description:
      "ML project to predict hotel booking cancellations using preprocessing, feature engineering, EDA and model evaluation.",
    tech: ["Python", "EDA", "ML", "pandas"],
    image: "/images/backend-structure.png",
    github:
      "https://github.com/NayanTupe/PREDICTING-HOTEL-RESERVATION-CANCELLATION-PROJECT-.git",
    presentation:
      "https://drive.google.com/drive/folders/1l5Pc85te8yRyO9jDgGQU71L-dd27EHgi?usp=sharing",
  },
  {
    title: "SMOS - Sales Management Operating System",
    category: "React/Vite Business Platform",
    description:
      "Responsive marketing and sales platform with modular components, EmailJS lead capture and modern CSS architecture.",
    tech: ["React", "Vite", "EmailJS", "CSS"],
    image: "/images/frontend-structure.png",
    github: "https://github.com/NayanTupe/SMOS---Sales-Management-Operating-System.git",
    presentation:
      "https://drive.google.com/drive/folders/1l5Pc85te8yRyO9jDgGQU71L-dd27EHgi?usp=sharing",
  },
  {
    title: "Moments - Response & Analytics App",
    category: "Full-Stack Tracking App",
    description:
      "React/Vite app with interactive flow, Framer Motion, Firebase tracking, Express APIs and MongoDB analytics.",
    tech: ["React", "Firebase", "Express", "MongoDB", "Framer Motion"],
    image: "/images/retailiq-segments.png",
    live: "https://moments-lc4dnhdpp-nayantupe699-5450s-projects.vercel.app/",
    github: "https://github.com/NayanTupe/Moments.git",
    presentation:
      "https://drive.google.com/drive/folders/1l5Pc85te8yRyO9jDgGQU71L-dd27EHgi?usp=sharing",
  },
];

export const skills: Skill[] = [
  { name: "React", icon: Code2, group: "Frontend" },
  { name: "Next.js", icon: Layers3, group: "Frontend" },
  { name: "TypeScript", icon: Hexagon, group: "Frontend" },
  { name: "Three.js", icon: Sparkles, group: "Creative" },
  { name: "GSAP", icon: LineChart, group: "Motion" },
  { name: "Python", icon: BrainCircuit, group: "AI/ML" },
  { name: "FastAPI", icon: Server, group: "Backend" },
  { name: "MongoDB", icon: Database, group: "Database" },
  { name: "Docker", icon: Cloud, group: "DevOps" },
  { name: "Git", icon: GitBranch, group: "Workflow" },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Technology Intern",
    company: "Z-Aksys Solutions, Vashi Navi Mumbai",
    date: "Mar 2026 - Present",
    points: [
      "Developed and maintained 15+ responsive web pages using Git/GitHub.",
      "Performed QA testing, identified/logged 20+ bugs and supported fixes.",
      "Managed website content updates and digital campaign support using Mailchimp.",
      "Built practical exposure to production websites and client-ready delivery.",
    ],
  },
  {
    role: "Logistics Clearing & Documentation Executive",
    company: "Ace Clearing And Forwarding, Navi Mumbai",
    date: "Mar 2024 - Nov 2025",
    points: [
      "Handled import/export clearance documents and shipping records.",
      "Worked on ODEX document submission and process tracking.",
      "Built documentation discipline and business process understanding.",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Data Science Diploma",
    source: "Boston Institute Of Analytics",
    date: "Mar 2025 - Nov 2025",
  },
  {
    title: "Artificial Intelligence Diploma",
    source: "Boston Institute Of Analytics",
    date: "May 2025 - Nov 2025",
  },
  {
    title: "Data Science Internship",
    source: "Spinnaker Analytics Pvt. Ltd.",
    date: "2-month internship",
  },
];
