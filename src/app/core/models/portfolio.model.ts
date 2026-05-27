export interface BilingualText {
  es: string;
  en: string;
}

export interface Project {
  id: string;
  number: string;
  client: string;
  title: BilingualText;
  tag: BilingualText;
  description: BilingualText;
  metricNum: string;
  metricLabel: BilingualText;
  stack: string[];
}

export interface ExperienceItem {
  role: BilingualText;
  period: string;
  company: string;
  companySub?: string;
  description: BilingualText;
  dim?: boolean;
}

export interface TechnicalNote {
  id: string;
  title: BilingualText;
  excerpt: BilingualText;
  date: string;
  readTime: BilingualText;
  category: BilingualText;
  slug: string;
}

export interface CaseStudy {
  id: string;
  title: BilingualText;
  client: string;
  period: string;
  role: BilingualText;
  overview: BilingualText;
  challenge: BilingualText;
  solution: BilingualText;
  impact: BilingualText;
  stats: { value: string; label: BilingualText }[];
  stack: string[];
}
