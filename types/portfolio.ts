import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  github?: string;
  presentation?: string;
  highlight?: boolean;
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
};

export type Skill = {
  name: string;
  icon: LucideIcon;
  group: string;
};
