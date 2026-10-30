export type CompetenceId = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6';

export type ProjectCategory = 'Tous' | 'Système/Bas-niveau' | 'Web' | 'IA/Data' | 'Gestion & Conduite';

export interface Competence {
  id: CompetenceId;
  number: number;
  shortCode: string; // 'C1', 'C2', ...
  title: string; // '1. Réaliser : Développer des applications informatiques'
  name: string; // 'Réaliser'
  description: string;
}

export interface Project {
  slug: string;
  id: string;
  index: string; // "001", "002", etc.
  year: string;
  title: string;
  competenceId: CompetenceId;
  competenceTitle: string;
  category: 'Système/Bas-niveau' | 'Web' | 'IA/Data' | 'Gestion & Conduite';
  shortDescription: string;
  technicalProblem: string;
  descriptionDetailed: string;
  personalRole: string;
  deliverables: string;
  criticalLearnings: string[];
  tags: string[];
  images: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean; // Flagship project on homepage
}

export interface SkillGroup {
  id: string;
  index: string; // "01", "02", etc.
  title: string;
  items: string[];
}

export interface ProfileData {
  fullName: string;
  role: string;
  statusText: string;
  isAvailable: boolean;
  heroHeadline: string;
  heroBio: string;
  academicPath: string[];
  hobbies: string;
  lookingFor: string;
  contacts: {
    email: string;
    studentEmail: string;
    github: string;
    githubHandle: string;
    linkedin: string;
    linkedinHandle: string;
    cvUrl: string;
  };
  skillGroups: SkillGroup[];
}
