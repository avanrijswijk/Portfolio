import type { Competence, Project, ProjectCategory } from '../types/portfolio';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Tous',
  'Système/Bas-niveau',
  'Web',
  'IA/Data',
  'Gestion & Conduite',
];

export const COMPETENCES: Competence[] = [
  {
    id: 'c1',
    number: 1,
    shortCode: 'C1',
    name: 'Réaliser',
    title: '1. Réaliser : Développer des applications informatiques',
    description: 'Conception, codage, test et intégration d’applications logicielles, web et mobiles.',
  },
  {
    id: 'c2',
    number: 2,
    shortCode: 'C2',
    name: 'Optimiser',
    title: '2. Optimiser : Améliorer les performances d’applications informatiques',
    description: 'Analyse de la complexité algorithmique, sélection et implémentation de structures de données adaptées.',
  },
  {
    id: 'c3',
    number: 3,
    shortCode: 'C3',
    name: 'Administrer',
    title: '3. Administrer : Gérer les systèmes informatiques communicants',
    description: 'Configuration de réseaux virtualisés, déploiement de services sécurisés et administration d’environnements Linux.',
  },
  {
    id: 'c4',
    number: 4,
    shortCode: 'C4',
    name: 'Gérer',
    title: '4. Gérer : Superviser des données de l’information',
    description: 'Conception, normalisation, sécurisation et interrogation de bases de données relationnelles et restitution visuelle.',
  },
  {
    id: 'c5',
    number: 5,
    shortCode: 'C5',
    name: 'Conduire',
    title: '5. Conduire : Piloter des projets informatiques',
    description: 'Méthodologies agiles, recueil méthodique des besoins client, planification budgétaire et suivi du cycle de vie logiciel.',
  },
  {
    id: 'c6',
    number: 6,
    shortCode: 'C6',
    name: 'Collaborer',
    title: '6. Collaborer : Travailler dans une équipe informatique',
    description: 'Pratiques collaboratives avec Git/GitHub, intégration d’équipe de développement et communication professionnelle.',
  },
];

export const PROJECTS: Project[] = [
  // --- C3 : ADMINISTRER (Projet Phare 1) ---
  {
    slug: 'plateforme-ctf-modulaire',
    id: 'stage_CTF_Modulaire',
    index: '001',
    year: '2024',
    title: 'Stage A2 — Plateforme CTF Modulaire & Infrastructure',
    competenceId: 'c3',
    competenceTitle: '3. Administrer : Gérer les systèmes communicants',
    category: 'Système/Bas-niveau',
    shortDescription:
      'Conception et automatisation d’une infrastructure de cybersécurité modulaire, isolée et scalable.',
    technicalProblem:
      'Provisionnement automatisé d’épreuves CTF via conteneurs isolés. Gestion fine du réseau virtuel, persistance des états et rédaction d’une documentation technique structurée pour la DSI.',
    descriptionDetailed:
      'Projet mené au sein de la Direction des Systèmes d’Information (DSI) de l’Université de Limoges en partenariat avec l’école d’ingénieurs 3iL. L’objectif était de concevoir une plateforme d’entraînement à la cybersécurité (Capture The Flag) pérenne, capable d’instancier dynamiquement des environnements vulnérables éphémères pour les étudiants, sans compromettre la sécurité du réseau universitaire.',
    personalRole:
      'Conception de l’architecture d’isolement réseau des épreuves, automatisation du déploiement via conteneurs Docker et recettes d’orchestration, rédaction du guide technique d’exploitation et de maintenance.',
    deliverables:
      'Playbooks d’automatisation, scripts d’orchestration Docker, architecture réseau isolée et documentation technique de passation.',
    criticalLearnings: [
      'AC26.01 | Comprendre la structure, les contraintes et la dimension de l’informatique dans une grande organisation (DSI)',
      'AC23.03 | Sécuriser les services et données d’un système informatique complexe',
      'Isolation réseau d’environnements volontairement vulnérables',
      'Production d’une documentation technique claire pour la pérennité de l’infrastructure',
    ],
    tags: ['Ansible', 'Terraform', 'Docker', 'Kubernetes', 'Linux', 'Cybersécurité'],
    images: [],
    githubUrl: 'https://github.com/avanrijswijk',
    featured: true, // PROJET PHARE N°1
  },

  // --- C1 : RÉALISER (Projet Phare 2) ---
  {
    slug: 'questionnaire-en-ligne',
    id: 'projet_questionnaire',
    index: '002',
    year: '2024',
    title: 'SAE A2 — Questionnaire en Ligne & Tableaux de Bord',
    competenceId: 'c1',
    competenceTitle: '1. Réaliser : Développer des applications informatiques',
    category: 'Web',
    shortDescription:
      'Plateforme web modulaire de création, collecte et restitution dynamique de questionnaires.',
    technicalProblem:
      'Architecture MVC complète avec sérialisation de questionnaires complexes, pipeline de soumission sécurisé et génération de visualisations analytiques interactives côté client.',
    descriptionDetailed:
      'Cette plateforme web permet aux enseignants et administrateurs de composer des questionnaires personnalisés, de collecter les soumissions des étudiants en temps réel et d’analyser les résultats à l’aide de dashboards statistiques intégrés. Le projet a mobilisé l’ensemble du spectre du développement web, du modèle de données SQL à l’interface utilisateur réactive.',
    personalRole:
      'Chef de projet technique : supervision de l’équipe de développement, conception de l’architecture MVC, développement des modules backend en PHP/SQL, interfaçage avec les librairies graphiques JavaScript et configuration du serveur web.',
    deliverables:
      'Code source complet sous Git, base de données relationnelle documentée, application déployée et rapports de gestion de projet.',
    criticalLearnings: [
      'AC11.04 | Développer des interfaces utilisateurs ergonomiques et accessibles',
      'AC21.01 | Élaborer et implémenter les spécifications fonctionnelles et non-fonctionnelles à partir d’un cahier des charges',
      'AC21.02 | Appliquer des principes stricts d’ergonomie et d’accessibilité web',
      'Conception d’architecture logicielle maintenable (séparation Modèle-Vue-Contrôleur)',
      'Coordination technique et collaboration agile avec Git',
    ],
    tags: ['HTML5', 'JavaScript', 'PHP', 'SQL', 'Bulma', 'Chart.js'],
    images: [
      '/images/projects/questionnaire-2.png',
      '/images/projects/questionnaire-3.png',
      '/images/projects/questionnaire-4.png',
      '/images/projects/questionnaire-1.png',
    ],
    image: '/images/projects/questionnaire-2.png',
    githubUrl: 'https://github.com/avanrijswijk',
    featured: true, // PROJET PHARE N°2
  },

  // --- C1 : RÉALISER (Projet Phare 3) ---
  {
    slug: 'tonote-android',
    id: 'projet_todo',
    index: '003',
    year: '2024',
    title: 'R4.11 — Application Android ToNote',
    competenceId: 'c1',
    competenceTitle: '1. Réaliser : Développer des applications informatiques',
    category: 'Système/Bas-niveau',
    shortDescription:
      'Application Android native de gestion de tâches avec architecture déclarative et persistance locale SQLite.',
    technicalProblem:
      'Gestion réactive d’état (State Management) avec Jetpack Compose, synchronisation asynchrone thread-safe via Coroutines et persistance locale avec Room ORM.',
    descriptionDetailed:
      'Conception et développement d’une application mobile native Android moderne sous Android Studio. L’application permet de planifier des tâches, de les classifier par priorité et catégories, et d’assurer une consultation fluide hors-ligne grâce à une synchronisation locale immédiate dans une base SQLite embarquée.',
    personalRole:
      'Projet en binôme : développement de l’interface utilisateur déclarative en Jetpack Compose, structuration des entités et DAO Room, et implémentation des flux asynchrones avec Coroutines Kotlin.',
    deliverables:
      'Package APK testé sur émulateur et appareils physiques, code source Kotlin documenté et architecture MVVM.',
    criticalLearnings: [
      'AC11.04 | Développer des interfaces utilisateurs mobiles fluides et adaptatives',
      'AC21.01 | Élaborer et implémenter les spécifications fonctionnelles et non-fonctionnelles',
      'AC21.02 | Appliquer les standards d’accessibilité et de design système Material',
      'AC21.03 | Adopter des principes stricts de conception logicielle (architecture MVVM, séparation des préoccupations)',
      'Persistance locale hors-ligne et opérations d’E/S asynchrones avec Room',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Room SQLite', 'Android SDK', 'Coroutines'],
    images: [
      '/images/projects/tonote-1.png',
      '/images/projects/tonote-2.png',
      '/images/projects/tonote-3.png',
    ],
    image: '/images/projects/tonote-1.png',
    githubUrl: 'https://github.com/avanrijswijk',
    featured: true, // PROJET PHARE N°3
  },

  // --- C2 : OPTIMISER ---
  {
    slug: 'jeux-python-algorithmique',
    id: 'jeu_python',
    index: '004',
    year: '2023',
    title: 'SAE 1.02 — Algorithmique & Moteur de Jeux en Terminal',
    competenceId: 'c2',
    competenceTitle: '2. Optimiser : Améliorer les performances logicielles',
    category: 'Système/Bas-niveau',
    shortDescription:
      'Moteurs de jeux en terminal avec intelligence artificielle adverse et analyse formelle de complexité.',
    technicalProblem:
      'Modélisation d’arbres d’états pour jeux à somme nulle (morpion, puissance 4), implémentation de robots adverses multi-niveaux (naïf, heuristique) et benchmarking asymptotique Big-O.',
    descriptionDetailed:
      'Développement d’une suite de jeux interactifs en console en Python, avec conception modulaire et refactorisation du code pour optimiser le temps de décision des adversaires automatisés. L’évaluation portait particulièrement sur la formalisation mathématique de la complexité spatiale et temporelle des algorithmes implémentés.',
    personalRole:
      'Développement des moteurs de jeu du morpion et du puissance 4, écriture de l’algorithme de décision des robots joueurs et rédaction des démonstrations de complexité algorithmique.',
    deliverables:
      'Code source Python commenté, compte rendu d’analyse de complexité algorithmique et graphes comparatifs de temps d’exécution.',
    criticalLearnings: [
      'AC12.01 | Analyser un problème avec méthode (découpage en sous-problèmes, structures de données matricielles)',
      'AC12.02 | Comparer des algorithmes pour des problèmes classiques (recherche d’alignements, parcours d’états)',
      'Rigueur de typage et de factorisation de code en Python',
    ],
    tags: ['Python', 'Algorithmique', 'Théorie des Jeux', 'Complexité Big-O', 'CLI'],
    images: [],
    githubUrl: 'https://github.com/njacquet87/S1.02',
    featured: false,
  },

  // --- C3 : ADMINISTRER ---
  {
    slug: 'simulation-reseau-kathara',
    id: 'projet_reseau',
    index: '005',
    year: '2023',
    title: 'SAE 2.03 — Conception & Simulation d’un Réseau Fictif',
    competenceId: 'c3',
    competenceTitle: '3. Administrer : Gérer les systèmes communicants',
    category: 'Système/Bas-niveau',
    shortDescription:
      'Architecture, plan d’adressage VLSM et simulation d’une infrastructure réseau d’entreprise.',
    technicalProblem:
      'Découpage rigoureux de plages d’adresses IP sous contraintes de saturation minimale (VLSM), routage statique inter-réseaux et émulation conteneurisée sous Kathara.',
    descriptionDetailed:
      'Projet d’ingénierie réseau consistant à concevoir l’architecture complète d’un réseau d’entreprise multi-sites. À partir d’un cahier des charges imposant le nombre de machines par service, nous avons calculé les sous-réseaux optimaux et déployé la topologie dans l’émulateur Kathara basé sur des conteneurs Linux légers configurés comme routeurs et passerelles.',
    personalRole:
      'Travail en binôme : calcul du plan d’adressage CIDR/VLSM, configuration des interfaces virtuelles et établissement des tables de routage statique sur chaque équipement.',
    deliverables:
      'Fichiers de topologie Kathara (lab.conf), scripts de démarrage réseau et rapport de validation des tests d’interconnectivité (traceroute, ping, routage).',
    criticalLearnings: [
      'AC23.02 | Utiliser des serveurs et des services réseaux virtualisés',
      'Calcul et découpage de plages d’adresses IP avec optimisation de masques variables (VLSM)',
      'Configuration et diagnostic de tables de routage statique sous Linux',
    ],
    tags: ['Kathara', 'Linux', 'Réseaux', 'CIDR / VLSM', 'Routage IP', 'Bash'],
    images: ['/images/projects/kathara-1.png'],
    image: '/images/projects/kathara-1.png',
    githubUrl: 'https://github.com/avanrijswijk',
    featured: false,
  },

  // --- C3 : ADMINISTRER ---
  {
    slug: 'authentification-cas-securite',
    id: 'authentification_cas',
    index: '006',
    year: '2024',
    title: 'SAE A2 — Intégration Authentification CAS & Sécurité',
    competenceId: 'c3',
    competenceTitle: '3. Administrer : Gérer les systèmes communicants',
    category: 'Web',
    shortDescription:
      'Intégration d’un protocole SSO centralisé (CAS) pour la sécurisation des sessions et des rôles.',
    technicalProblem:
      'Interfaçage des flux de validation de tickets CAS avec l’application web, gestion de l’étanchéité des sessions et contrôle d’accès basé sur les rôles (RBAC).',
    descriptionDetailed:
      'Intégration du système d’authentification unique (Central Authentication Service) de l’Université de Limoges au sein de notre application web. Le système garantit qu’aucun mot de passe ne transite par l’application tierce et délivre des attributs vérifiés permettant d’attribuer dynamiquement les privilèges administrateur, enseignant ou étudiant.',
    personalRole:
      'Responsable exclusif du module d’authentification : paramétrage du protocole client CAS en PHP, gestion des flux de redirection HTTPS, traitement des attributs de session et sécurisation des tokens.',
    deliverables:
      'Module d’authentification réutilisable, documentation des flux d’autorisation et tests de sécurité.',
    criticalLearnings: [
      'AC23.03 | Sécuriser les services et les données d’un système informatique',
      'Intégration de mécanismes d’authentification décentralisée et SSO',
      'Gestion étanche des sessions utilisateur et prévention des failles de session',
    ],
    tags: ['CAS', 'SSO', 'Sécurité Web', 'PHP', 'Gestion Sessions'],
    images: ['/images/projects/cas-1.png'],
    image: '/images/projects/cas-1.png',
    githubUrl: 'https://github.com/avanrijswijk',
    featured: false,
  },

  // --- C4 : GÉRER ---
  {
    slug: 'analyse-graphique-donnees',
    id: 'analyse_graphique',
    index: '007',
    year: '2024',
    title: 'SAE A2 — Traitement & Visualisation de Données d’Enquête',
    competenceId: 'c4',
    competenceTitle: '4. Gérer : Superviser des données de l’information',
    category: 'IA/Data',
    shortDescription:
      'Pipeline d’agrégation SQL et restitution dynamique par tableaux de bord graphiques.',
    technicalProblem:
      'Structuration de requêtes SQL d’agrégation en temps réel, sérialisation JSON optimisée et interfaçage avec les frameworks de data visualization client.',
    descriptionDetailed:
      'Module analytique de l’application de questionnaire en ligne. Les réponses collectées sont agrégées pour dégager des tendances statistiques claires, représentées sous forme d’histogrammes, de camemberts (Chart.js) et de nuages de mots pondérés (WordCloud.js) permettant aux équipes pédagogiques d’interpréter rapidement les retours étudiants.',
    personalRole:
      'Conception des requêtes SQL d’agrégation, développement des endpoints d’extraction de données et intégration des librairies de visualisation réactives.',
    deliverables:
      'Dashboard interactif dynamique, modules graphiques réutilisables et documentation de l’API de métriques.',
    criticalLearnings: [
      'AC24.03 | Organiser la restitution de données à travers la programmation et la visualisation',
      'Interfaçage de données relationnelles avec des librairies graphiques modernes',
      'Ergonomie de restitution des indicateurs clés (KPIs)',
    ],
    tags: ['SQL', 'Chart.js', 'WordCloud.js', 'JavaScript', 'Visualisation'],
    images: [],
    githubUrl: 'https://github.com/avanrijswijk',
    featured: false,
  },

  // --- C4 : GÉRER ---
  {
    slug: 'traitement-donnees-sql',
    id: 'traitement_donnees',
    index: '008',
    year: '2023',
    title: 'SAE 1.04 — Modélisation Relationnelle & Ingestion CSV',
    competenceId: 'c4',
    competenceTitle: '4. Gérer : Superviser des données de l’information',
    category: 'IA/Data',
    shortDescription:
      'Pipeline ETL, normalisation en 3NF et requêtage analytique sous SQL Server.',
    technicalProblem:
      'Modélisation conceptuelle (MCD/MLD) à partir de données brutes volumineuses dénormalisées, élimination des redondances et écriture de requêtes SQL analytiques poussées.',
    descriptionDetailed:
      'Projet d’ingénierie de données consistant à partir d’un jeu de données brut complexe au format CSV pour concevoir une base relationnelle conforme aux formes normales (3NF). Mise en œuvre de scripts d’extraction et de chargement, puis formulation de requêtes SQL complexes répondant à des questions métiers précises.',
    personalRole:
      'Travail en binôme : analyse des dépendances fonctionnelles, modélisation de la base de données, écriture des scripts de peuplement et formulation des requêtes analytiques.',
    deliverables:
      'Schémas MCD et MLD, scripts SQL DDL (création) et DML (insertion/requêtage), et compte rendu technique détaillé.',
    criticalLearnings: [
      'AC14.01 | Mettre à jour et interroger une base de données relationnelle via des requêtes optimisées',
      'AC14.02 | Visualiser et synthétiser des données brutes en indicateurs exploitables',
      'AC14.03 | Concevoir une base de données relationnelle normalisée à partir d’un cahier des charges',
    ],
    tags: ['SQL', 'SQL Server', 'Modélisation BDD', '3NF', 'ETL'],
    images: [],
    githubUrl: 'https://github.com/njacquet87/S1.04',
    featured: false,
  },

  // --- C5 : CONDUIRE ---
  {
    slug: 'recueil-analyse-besoins',
    id: 'recueil_besoins',
    index: '009',
    year: '2023',
    title: 'SAE 2.05 — Recueil & Formalisation des Besoins SI',
    competenceId: 'c5',
    competenceTitle: '5. Conduire : Piloter des projets informatiques',
    category: 'Gestion & Conduite',
    shortDescription:
      'Cahier des charges, cadrage méthodologique, planification Gantt et chiffrage budgétaire.',
    technicalProblem:
      'Application d’outils méthodologiques formels (SWOT, CQQCOQP, SMART, RACI), conception du planning prévisionnel sous contraintes de ressources et estimation financière.',
    descriptionDetailed:
      'Mission de cadrage et de conseil informatique pour la transition numérique d’une agence immobilière fictive. Analyse du contexte concurrentiel, identification des opportunités techniques, formalisation des exigences fonctionnelles et modélisation du déroulement prévisionnel du projet avec jalonnement et budget prévisionnel.',
    personalRole:
      'Application des matrices d’analyse (SWOT, RACI), élaboration du diagramme de Gantt avec chemins critiques et chiffrage des postes de coûts du projet.',
    deliverables:
      'Dossier complet d’expression des besoins, diagramme de Gantt interactif, matrice des responsabilités RACI et budget d’investissement.',
    criticalLearnings: [
      'AC15.01 | Appréhender les besoins du client et de l’utilisateur final',
      'AC15.02 | Mettre en place et exploiter les outils formels de gestion de projet',
      'AC15.03 | Identifier les acteurs, les jalons et les phases du cycle de vie d’un projet',
      'AC25.02 | Formaliser les exigences avec rigueur et clarté contractuelle',
    ],
    tags: ['Gestion de Projet', 'Gantt', 'SWOT', 'CQQCOQP', 'Matrice RACI', 'Budget'],
    images: [],
    githubUrl: 'https://github.com/njacquet87/S2.05',
    featured: false,
  },
];

// Utilitaires d'accès aux données
export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByCompetence(competenceId: string): Project[] {
  return PROJECTS.filter((p) => p.competenceId === competenceId);
}
