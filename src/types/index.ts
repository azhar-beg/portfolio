export interface IndustrialExperience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string[];
  domain: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'database';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}