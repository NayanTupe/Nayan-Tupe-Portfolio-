import type { Certificate, ExperienceItem, PersonalityTrait, Project, Skill, SocialLink } from "@/types/portfolio";

// Source of truth for portfolio content.
// Start here when updating profile details, projects, skills, experience,
// certificates, achievements, testimonials, resume links or project images.
export const profile = {
  name: "Nayan Tupe",
  role: "Data Science | Machine Learning | Software Developer",
  focus: "Python, machine learning, FastAPI backends, React/Vite dashboards and analytics products.",
  location: "Navi Mumbai, India",
  education: "Computer Science graduate. Data Science and Artificial Intelligence training at Boston Institute of Analytics.",
  experience: "Technology Intern at Z-Aksys Solutions with hands-on production website, QA and campaign support.",
  bio:
    "Nayan builds resume-backed projects across data science, machine learning, FastAPI, React/Vite dashboards, API testing, deployment proof and business reporting.",
  targetRoles: "Data Scientist Intern | ML Engineer Intern | Data Analyst | Python Developer | Frontend Developer",
  status: ["ONLINE", "Available for internships", "Building ML dashboards", "Current Status: Learning AI"],
  email: "nayantupe699@gmail.com",
  phone: "+91 9152110404",
};

export const profileLinks = {
  github: "https://github.com/NayanTupe?tab=repositories",
  linkedin: "https://linkedin.com/in/nayan-tupe-488664277",
  resume: "/Nayan_Tupe_Resume.pdf",
  resumeWithCertificates: "/Nayan_Tupe_Resume_With_Certificates.pdf",
  portfolioDrive: "https://drive.google.com/drive/folders/1l5Pc85te8yRyO9jDgGQU71L-dd27EHgi?usp=sharing",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profileLinks.github },
  { label: "LinkedIn", href: profileLinks.linkedin },
  { label: "Resume", href: profileLinks.resume },
  { label: "Proof Vault", href: profileLinks.portfolioDrive },
];

const defaultStudy = {
  research:
    "Studied the dataset, expected user workflow, resume screening value and the proof needed for interview discussion.",
  planning:
    "Planned data flow, API endpoints, dashboard screens, GitHub proof, live deployment and presentation material before implementation.",
  design:
    "Designed practical dashboards with clear KPIs, readable tables, prediction states, responsive layout and recruiter-friendly proof.",
  development:
    "Implemented modular React/Vite UI, Python/FastAPI services where required, organized repositories and deployable project structure.",
  challenges:
    "The main challenge was connecting realistic data, ML output, API testing, dashboard presentation and deployment proof in a clean way.",
  solutions:
    "Used clear API contracts, structured components, concise project documentation, screenshots, PPT/PDF proof and live links.",
  performance:
    "Kept layouts responsive, assets compact and interactions simple enough to run smoothly on regular laptops.",
  future:
    "Add stronger validation, deeper analytics, model monitoring, more tests and extended dashboard workflows.",
};

export const projects: Project[] = [
  {
    slug: "retailiq",
    title: "RetailIQ",
    category: "AI SaaS Analytics Platform",
    short: "Resume-featured AI SaaS project with churn prediction, customer segmentation and dashboard proof.",
    description:
      "Built a FastAPI backend and React/Vite dashboard for churn prediction, customer segments, summary KPIs, Swagger/OpenAPI testing and live deployment proof.",
    tech: ["FastAPI", "React", "Machine Learning", "Swagger", "Render", "Vercel"],
    image: "/images/retailiq-dashboard.png",
    gallery: ["/images/retailiq-prediction.png", "/images/retailiq-segments.png", "/images/retailiq-api-docs.png"],
    live: "https://retailiq-dashboard-frontend.vercel.app/",
    github: "https://github.com/NayanTupe/retailiq-dashboard-frontend",
    presentation: profileLinks.portfolioDrive,
    highlight: true,
    caseStudy: {
      overview:
        "RetailIQ is the main resume project: an AI-powered e-commerce intelligence platform with ML backend, dashboard UI, API testing and deployment evidence.",
      problem:
        "Retail teams need a clear way to understand churn risk, customer groups and business KPIs from CSV/customer data.",
      results:
        "Delivered live Vercel dashboard, Render backend proof, frontend/backend GitHub repositories, Swagger evidence and project presentation.",
      ...defaultStudy,
    },
  },
  {
    slug: "tradingml",
    title: "TradingMLModel",
    category: "ML Backtesting Dashboard",
    short: "Python ML and analytics dashboard for market data, predictions, paper trading and backtesting.",
    description:
      "Built Python backend for equity/options data, technical indicators, ML predictions, backtesting, stop-loss, targets, brokerage, trade logs and React/Vite summaries.",
    tech: ["Python", "React", "Vite", "ML", "Backtesting"],
    proofPoints: [
      "Python backend for equity/options data and technical indicators",
      "ML prediction workflow with paper trading signals",
      "Backtesting engine with stop-loss, target, brokerage and trade logs",
    ],
    github: "https://github.com/NayanTupe/TradingMLModel-.git",
    presentation: profileLinks.portfolioDrive,
    caseStudy: {
      overview:
        "TradingMLModel converts market data experiments into a readable dashboard with ML predictions, trade summaries and paper trading signals.",
      problem:
        "Trading experiments become difficult to evaluate when indicators, predictions, trade logs and backtest results are disconnected.",
      results:
        "Created backend logic and React/Vite dashboard screens for prediction review, backtesting and performance discussion.",
      ...defaultStudy,
    },
  },
  {
    slug: "kkc-spices",
    title: "KKC Spices ERP Reports",
    category: "Business Analytics Dashboard",
    short: "Business analytics dashboard for ERP-style reports, inventory, contracts and export workflows.",
    description:
      "ERP-style report dashboard for stock, machines, material loss, sales and purchase contracts, customers and suppliers.",
    tech: ["React", "Dashboard", "Reports", "PDF Export"],
    image: "/images/kkc-spices-material-loss-report.png",
    live: "https://nayantupe.github.io/KKC-Final-Report-/",
    github: "https://github.com/NayanTupe/KKC-Final-Report-.git",
    presentation: profileLinks.portfolioDrive,
    caseStudy: {
      overview:
        "KKC Spices is a business reporting dashboard focused on ERP-style visibility for contracts, stock, machines, customers and suppliers.",
      problem:
        "Business reports are hard to compare when material loss, sales, purchase, inventory and customer data are separated.",
      results:
        "Delivered responsive report pages with practical grouping and PDF/export-ready presentation.",
      ...defaultStudy,
    },
  },
  {
    slug: "credit-score",
    title: "Credit Score Classification",
    category: "Machine Learning Model",
    short: "Credit score classification using feature engineering, Random Forest and XGBoost.",
    description:
      "Classification project using preprocessing, engineered features, Random Forest, XGBoost and model comparison.",
    tech: ["Python", "scikit-learn", "Random Forest", "XGBoost"],
    proofPoints: [
      "Preprocessing and feature engineering workflow",
      "Random Forest and XGBoost model comparison",
      "Evaluation-focused machine learning project",
    ],
    github: "https://github.com/NayanTupe/CREDIT-SCORE-CLASSIFICATION-PROJECT-.git",
    presentation: profileLinks.portfolioDrive,
    caseStudy: {
      overview: "A machine-learning project focused on credit score classification with preprocessing, feature engineering and model comparison.",
      problem: "Credit scoring requires careful preprocessing and evaluation because noisy feature sets can lead to misleading model confidence.",
      results: "Built a comparable training flow with optimized tree-based models and clear evaluation output.",
      ...defaultStudy,
    },
  },
  {
    slug: "hotel-cancellation",
    title: "Hotel Reservation Cancellation",
    category: "ML / EDA Project",
    short: "Predicting booking cancellation risk with exploratory analysis and classification.",
    description:
      "Machine-learning project for hotel booking cancellation prediction using EDA, preprocessing, feature engineering and model evaluation.",
    tech: ["Python", "EDA", "pandas", "Machine Learning"],
    proofPoints: [
      "Exploratory data analysis for booking behavior",
      "Preprocessing and cancellation-risk feature preparation",
      "Classification workflow for hospitality use case",
    ],
    github: "https://github.com/NayanTupe/PREDICTING-HOTEL-RESERVATION-CANCELLATION-PROJECT-.git",
    presentation: profileLinks.portfolioDrive,
    caseStudy: {
      overview: "A data science and EDA project for predicting hotel reservation cancellation risk.",
      problem: "Hospitality teams lose revenue visibility when cancellation risk is not identified early.",
      results: "Produced an end-to-end ML workflow from data exploration through evaluation.",
      ...defaultStudy,
    },
  },
  {
    slug: "smos",
    title: "SMOS",
    category: "Sales Management Operating System",
    short: "A responsive sales and marketing web system with lead capture.",
    description:
      "Built a responsive React/Vite marketing and sales platform with modular sections, EmailJS lead capture, demo booking flow and organized CSS architecture.",
    tech: ["React", "Vite", "EmailJS", "CSS"],
    proofPoints: [
      "Responsive React/Vite business platform",
      "7+ modular sections including Hero, About and BookDemo",
      "EmailJS lead capture and organized CSS architecture",
    ],
    github: "https://github.com/NayanTupe/SMOS---Sales-Management-Operating-System.git",
    presentation: profileLinks.portfolioDrive,
    caseStudy: {
      overview: "SMOS is a React/Vite business platform built with modular sections including Hero, About, Capabilities, Impact and BookDemo.",
      problem: "Business websites need to communicate value quickly while keeping contact actions frictionless.",
      results: "Delivered responsive pages, EmailJS lead capture and a clean CSS/component architecture.",
      ...defaultStudy,
    },
  },
  {
    slug: "moments",
    title: "Moments",
    category: "Response & Analytics App",
    short: "Interactive response flow with tracking, APIs and analytics storage.",
    description:
      "Built a responsive React/Vite app with routed pages, Yes/No flow, Framer Motion animations, localStorage, Firebase action tracking, Express APIs and MongoDB analytics.",
    tech: ["React", "Firebase", "Express", "MongoDB", "Framer Motion"],
    proofPoints: [
      "Interactive Yes/No response flow with Framer Motion",
      "Firebase action and click tracking",
      "Express and MongoDB analytics dashboard foundation",
    ],
    live: "https://moments-lc4dnhdpp-nayantupe699-5450s-projects.vercel.app/",
    github: "https://github.com/NayanTupe/Moments.git",
    presentation: profileLinks.portfolioDrive,
    caseStudy: {
      overview: "Moments is a response and analytics app that tracks visits, clicks and user actions through frontend and backend analytics.",
      problem: "Interactive campaigns need both emotional flow and reliable response collection.",
      results: "Created an interactive response flow and analytics dashboard backed by Express and MongoDB APIs.",
      ...defaultStudy,
    },
  },
];

export const skills: Skill[] = [
  { name: "Python", group: "ML/Data", related: ["Machine Learning", "Data Science", "pandas"] },
  { name: "Machine Learning", group: "ML/Data", related: ["Python", "scikit-learn", "Random Forest"] },
  { name: "Data Science", group: "ML/Data", related: ["Python", "EDA", "Feature Engineering"] },
  { name: "EDA", group: "ML/Data", related: ["pandas", "NumPy", "Data Science"] },
  { name: "Feature Engineering", group: "ML/Data", related: ["Machine Learning", "scikit-learn"] },
  { name: "Random Forest", group: "ML/Data", related: ["Machine Learning", "scikit-learn"] },
  { name: "KMeans", group: "ML/Data", related: ["Machine Learning", "Customer Segmentation"] },
  { name: "scikit-learn", group: "ML/Data", related: ["Python", "Machine Learning"] },
  { name: "pandas", group: "ML/Data", related: ["Python", "EDA"] },
  { name: "NumPy", group: "ML/Data", related: ["Python", "EDA"] },
  { name: "FastAPI", group: "Backend/API", related: ["REST APIs", "Swagger/OpenAPI", "Pydantic"] },
  { name: "REST APIs", group: "Backend/API", related: ["FastAPI", "Swagger/OpenAPI"] },
  { name: "Swagger/OpenAPI", group: "Backend/API", related: ["FastAPI", "REST APIs"] },
  { name: "Pydantic", group: "Backend/API", related: ["FastAPI", "REST APIs"] },
  { name: "Uvicorn", group: "Backend/API", related: ["FastAPI", "Render"] },
  { name: "React", group: "Frontend/Tools", related: ["Vite", "Framer Motion", "Vercel"] },
  { name: "Vite", group: "Frontend/Tools", related: ["React", "Vercel"] },
  { name: "Framer Motion", group: "Frontend/Tools", related: ["React", "Vite"] },
  { name: "Firebase", group: "Analytics", related: ["React", "localStorage"] },
  { name: "Express", group: "Backend/API", related: ["MongoDB", "Analytics"] },
  { name: "MongoDB", group: "Database", related: ["Express", "Analytics"] },
  { name: "Render", group: "Deployment", related: ["FastAPI", "Uvicorn"] },
  { name: "Vercel", group: "Deployment", related: ["React", "Vite"] },
  { name: "Git", group: "Workflow", related: ["GitHub"] },
  { name: "GitHub", group: "Workflow", related: ["Git"] },
];

export const personalityTraits: PersonalityTrait[] = [
  { title: "Data-Focused", copy: "Works with datasets, EDA, features, model output and dashboard-ready insights." },
  { title: "ML Practical", copy: "Builds resume projects with Random Forest, KMeans, evaluation and prediction workflows." },
  { title: "API Builder", copy: "Creates FastAPI REST endpoints, Pydantic schemas and Swagger/OpenAPI testing proof." },
  { title: "Dashboard Mindset", copy: "Turns backend data into React/Vite pages, KPIs, tables and readable business screens." },
  { title: "Proof Oriented", copy: "Maintains GitHub links, live deployments, presentations, screenshots and certificates." },
  { title: "Fast Learner", copy: "Actively improving across data science, AI, frontend dashboards and backend APIs." },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Technology Intern",
    company: "Z-Aksys Solutions, Vashi Navi Mumbai",
    date: "Mar 2026 - Present",
    points: [
      "Developing and maintaining responsive web pages using Git and GitHub.",
      "Supporting QA by identifying, logging and validating website issues.",
      "Managing website content updates and digital campaign support through Mailchimp.",
      "Building practical exposure to production delivery and client-ready polish.",
    ],
  },
  {
    role: "Logistics Clearing & Documentation Executive",
    company: "Ace Clearing And Forwarding, Navi Mumbai",
    date: "Mar 2024 - Nov 2025",
    points: [
      "Handled import/export clearance records and shipping documentation.",
      "Worked with ODEX submission flows and process tracking.",
      "Developed documentation discipline, business context and operational accuracy.",
    ],
  },
];

export const certificates: Certificate[] = [
  { title: "Data Science Diploma", source: "Boston Institute Of Analytics", date: "Mar 2025 - Nov 2025", link: profileLinks.resumeWithCertificates },
  { title: "Artificial Intelligence Diploma", source: "Boston Institute Of Analytics", date: "May 2025 - Nov 2025", link: profileLinks.resumeWithCertificates },
  { title: "Data Science Internship", source: "Spinnaker Analytics Pvt. Ltd.", date: "2-month internship", link: profileLinks.resumeWithCertificates },
];

export const achievements = [
  { label: "Projects Built", value: 7, suffix: "+" },
  { label: "Technologies Learned", value: 17, suffix: "+" },
  { label: "Years of Experience", value: 2, suffix: "+" },
  { label: "Commits", value: 420, suffix: "+" },
  { label: "Coffee", value: 680, suffix: "+" },
  { label: "Learning Hours", value: 1100, suffix: "+" },
];

export const testimonials = [
  {
    quote:
      "Nayan's resume work shows strong practical effort across Python, ML projects, API proof and dashboard presentation.",
    author: "Project Mentor",
    role: "Resume Review",
  },
  {
    quote:
      "The project links make screening easier: GitHub repositories, live dashboards, API deployment and presentations are all available.",
    author: "Peer Review",
    role: "Project Proof Feedback",
  },
];
