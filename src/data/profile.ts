import type { ProfileData } from '../types/portfolio';

export const PROFILE: ProfileData = {
  fullName: 'Adrian van Rijswijk',
  role: '// ÉTUDIANT INFORMATIQUE',
  statusText: 'STATUT : ACTUELLEMENT À LA RECHERCHE DE STAGE',
  isAvailable: true,
  heroHeadline: 'CONCEPTION LOGICIELLE, ARCHITECTURES WEB & SYSTÈMES DISTRIBUÉS.',
  heroBio:
    'Étudiant en BUT Informatique (Parcours RACDV) à l’Université de Limoges. Orienté conception modulaire, environnements Linux/DevOps et interfaces précises.',
  academicPath: [
    'Étudiant en 3ème année de BUT Informatique (Parcours RACDV) · Université de Limoges / IUT du Limousin.',
    'Formation axée sur la rigueur algorithmique, la conduite de projets (gestion et méthodes Agiles), l’administration système sous Linux, le génie logiciel et la sécurité.',
  ],
  hobbies:
    'Passionné par la culture musicale et le cinéma, j\'aime également la cuisine et les jeux d\'échecs.',
  lookingFor:
    'À la recherche d’un stage de fin d’études (12 à 16 semaines) orienté Développement Web / Logiciel, Ingénierie Full-Stack ou Culture DevOps.',
  contacts: {
    email: 'adrian.vanrijswijk@gmail.com',
    studentEmail: 'adrian.van-rijswijk@etu.unilim.fr',
    github: 'https://github.com/avanrijswijk',
    githubHandle: 'github.com/avanrijswijk',
    linkedin: 'https://www.linkedin.com/in/adrian-vanrijswijk',
    linkedinHandle: 'linkedin.com/in/adrian-vanrijswijk',
    cvUrl: '#',
  },
  skillGroups: [
    {
      id: 'languages',
      index: '01',
      title: 'Langages',
      items: [
        'TypeScript',
        'JavaScript (ESNext)',
        'Python',
        'Kotlin',
        'C',
        'PHP',
        'SQL (PostgreSQL / SQL Server)',
        'Bash',
      ],
    },
    {
      id: 'frameworks',
      index: '02',
      title: 'Frameworks & Outils',
      items: [
        'Astro',
        'React',
        'Node.js',
        'Tailwind CSS',
        'Jetpack Compose (Android)',
        'Room ORM',
        'Git & GitHub Workflows',
      ],
    },
    {
      id: 'infra',
      index: '03',
      title: 'Environnement & OS',
      items: [
        'Linux (Debian / Arch / Ubuntu)',
        'Docker & Conteneurs',
        'Ansible & Terraform (bases)',
        'Kathara (Émulation réseau)',
        'Serveurs HTTP (Nginx / Apache)',
        'Virtualisation (KVM / VirtualBox)',
      ],
    },
    {
      id: 'interests',
      index: '04',
      title: 'Centres d’intérêt techniques',
      items: [
        'Culture DevOps & Intégration Continue',
        'Architecture logicielle & DDD',
        'Cybersécurité & Pratiques CTF',
        'Algorithmique & Complexité',
        'Rendu graphique 1-bit, Dithering & Shaders',
      ],
    },
  ],
};
