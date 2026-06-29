export type Project = {
  slug: string;
  title: string;
  category: string;
  short: string;
  description: string;
  tech: string[];
  image?: string;
  gallery?: string[];
  proofPoints?: string[];
  live?: string;
  github?: string;
  presentation?: string;
  highlight?: boolean;
  caseStudy: {
    overview: string;
    problem: string;
    research: string;
    planning: string;
    design: string;
    development: string;
    challenges: string;
    solutions: string;
    results: string;
    performance: string;
    future: string;
  };
};

export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  points: string[];
};

export type Certificate = {
  title: string;
  source: string;
  date: string;
  link?: string;
};

export type Skill = {
  name: string;
  group: string;
  related: string[];
};

export type PersonalityTrait = {
  title: string;
  copy: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
