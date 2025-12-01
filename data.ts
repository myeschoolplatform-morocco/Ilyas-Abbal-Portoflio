
import { 
  Layers, 
  Shield, 
  Monitor, 
  Users, 
  Server, 
  Cloud, 
  Box, 
  GitBranch, 
  Terminal, 
  Cpu, 
  Globe, 
  Database,
  Code,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Languages,
  Heart
} from 'lucide-react';

// --- PROFILE SECTION ---
export const profileData = {
  name: "Ilyas Abbal",
  title: "Ingénieur Intégration Systèmes & DevOps",
  email: "ilyas.abbal10@gmail.com",
  phone: "+212708726791",
  linkedin: "https://linkedin.com/in/ilyas-abbal",
  github: "https://github.com/ilyas-abbal",
  location: "Maroc",
  summary: "Ingénieur Intégration Systèmes & DevOps, avec expérience dans l’automatisation (Ansible, Script Shell, Python) la Virtualisation, Déploiement et Intégration des solutions d’entreprises, avec la maitrise de la conteneurisation et l’orchestrations des conteneurs (Docker, Kubernetes), et la mise en place de pipelines CI/CD (Jenkins).",
  avatarUrl: "/profile.jpg"
};

// --- EDUCATION SECTION ---
export const educationData = [
  {
    degree: "Master spécialisée en Ingénierie Informatique (M2I)",
    school: "Faculté des Sciences d'Oujda",
    year: "2025",
    description: ""
  },
  {
    degree: "License en Mathématiques et Informatique (SMI)",
    school: "Faculté des Sciences d'Oujda",
    year: "2023",
    description: ""
  },
  {
    degree: "Baccalauréat International Science Physique Option Français",
    school: "Lycée Cadi Ayad - Bouarfa",
    year: "2020",
    description: "Maroc"
  }
];

// --- SKILLS SECTION ---
export const skillsData = [
  {
    category: "Langages",
    icon: Code,
    skills: ["Java (+Spring Boot)", "Python", "SQL", "CQL", "Javascript"]
  },
  {
    category: "Bases de données",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Neo4j", "Cassandra"]
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Argocd", "Helm charts", "Git", "Azure", "GCP", "AWS", "Ansible"]
  },
  {
    category: "Scripting",
    icon: Terminal,
    skills: ["Shell (Linux)", "PowerShell", "Batch"]
  },
  {
    category: "Monitoring",
    icon: Monitor,
    skills: ["Prometheus", "Grafana", "Centreon"]
  },
  {
    category: "IA / ML",
    icon: Cpu,
    skills: ["Keras", "TensorFlow", "OpenCV", "NLTK", "NLP", "DATA MINING"]
  },
  {
    category: "Gestion de projet",
    icon: Users,
    skills: ["Scrum", "Jira", "GitLab", "Github", "Git"]
  },
  {
    category: "Virtualization",
    icon: Server,
    skills: ["KVM", "Proxmox", "Vmware vsphere"]
  }
];

// --- CERTIFICATIONS SECTION ---
export const certificationsData = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "",
    icon: Globe,
    color: "text-blue-600",
    bg: "bg-blue-600/10"
  },
  {
    title: "Container Management Using Docker",
    issuer: "Educative",
    date: "",
    icon: Box,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    title: "L’essentiel de SQL",
    issuer: "LinkedIn Learning",
    date: "",
    icon: Database,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "L’essentiel de Spring Boot",
    issuer: "LinkedIn Learning",
    date: "",
    icon: Code,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Fundamentals of Agile Project Management",
    issuer: "Project Management Institute",
    date: "",
    icon: Users,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Scrum Foundation Professional Certification (SFPC™)",
    issuer: "CertiProf",
    date: "",
    icon: Award,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    title: "Version Control with Git",
    issuer: "Coursera",
    date: "",
    icon: GitBranch,
    color: "text-red-500",
    bg: "bg-red-500/10"
  }
];

// --- LANGUAGES & INTERESTS ---
export const languagesData = [
  { language: "Français", level: "Courant" },
  { language: "Anglais", level: "Technique / Professionnel" },
  { language: "Arabe", level: "Langue maternelle" }
];

export const interestsData = [
  "Photographie",
  "Conférence",
  "Natation",
  "Échecs"
];

// --- PROJECTS / EXPERIENCES ---
// This object combines both "Expériences Professionnelles" and "Expérience Académique"
// The 'type' field distinguishes them.

export const projectsData = {
  // --- PROFESSIONAL EXPERIENCES ---
  'ing-ops-tessi': {
    id: 'ing-ops-tessi',
    type: 'professional',
    title: 'Ingénieur Ops / Intégrateur GED',
    company: 'TESSI Maroc',
    shortDescription: 'Déploiement de la solution Sqalia Global XP sur Windows / Linux.',
    fullDescription: `Déploiement de la solution Sqalia Global XP sur Windows / Linux.
Effectuer des tests d’intégration, vérifier la cohérence des données et la stabilité du système.`,
    icon: Server,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop', // Placeholder
    technologies: ['Windows', 'Linux', 'Nginx', 'Tomcat', 'SSL/TLS', 'Shell', 'PowerShell'],
    duration: 'Depuis Juin 2025',
    date: '2025',
    category: 'CDI',
    // Mapping specific missions from CV to 'challenges' or 'solutions' for display
    challenges: [
      {
        title: 'Analyse & Traduction',
        description: 'Analyser les besoins fonctionnels et techniques (spécifications) et les traduire en exigences techniques concrètes.'
      },
      {
        title: 'Installation & Paramétrage',
        description: 'Installer, paramétrer et connecter différents composants logiciels (web services, bases de données, systèmes tiers…). Paramétrer les règles de conservation, d’indexation automatique, d’accès et de sécurité.'
      },
      {
        title: 'Workflows',
        description: 'Conception et configuration de workflows de validation (circuit de signature, approbation de factures…).'
      },
      {
        title: 'Accompagnement',
        description: 'Accompagnement au changement : assistance post-formation, réponses aux questions métiers.'
      }
    ],
    solutions: [
      {
        title: 'Maintenance & Migration',
        description: 'Gestion des montées de version applicatives et migration (analyse d’impact, sauvegardes, déploiement, recette technique et fonctionnelle).'
      },
      {
        title: 'Automatisation',
        description: 'Élaboration de scripts d’automatisation des tâches systèmes liées aux activités applicatives.'
      },
      {
        title: 'Sécurité',
        description: 'Génération, renouvellement et installation de certificats SSL/TLS. Intégration des certificats sur les serveurs web (Nginx, Tomcat).'
      },
      {
        title: 'Support',
        description: 'Installation, configuration et mise à jour d’outils systèmes (Linux / Windows) et utilitaires Linux. Diagnostic et résolution d’incidents techniques sur les environnements serveurs.'
      }
    ],
    results: [
      'Stabilité du système',
      'Processus de validation optimisés',
      'Sécurité renforcée (SSL/TLS)',
      'Automatisation des tâches récurrentes'
    ],
    links: { github: null, demo: null }
  },
  'stage-pfe-tessi': {
    id: 'stage-pfe-tessi',
    type: 'professional',
    title: 'Ingénieur d’exploitation - Stage PFE',
    company: 'TESSI Maroc',
    shortDescription: 'Migration : Déploiement et supervision de la solution Sqalia archive sur Kubernetes.',
    fullDescription: `Migration : Déploiement et supervision de la solution Sqalia archive sur Kubernetes (Ex - DATACONTENT).`,
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1667372393119-c81c0cda0560?w=1200&h=600&fit=crop', // Placeholder
    technologies: ['Kubernetes', 'Docker', 'ArgoCD', 'Helm', 'Prometheus', 'Grafana', 'PowerShell'],
    duration: 'Février - juin 2025',
    date: '2025',
    category: 'Stage PFE',
    challenges: [
      {
        title: 'Installation',
        description: 'Installation et configuration de la solution Sqalia Archive sur Linux (ex DATACONTENT).'
      },
      {
        title: 'Automatisation Windows',
        description: 'Automatisation des tâches d’administration Windows avec PowerShell et scripts batch (gestion de services, fichiers, utilisateurs).'
      },
      {
        title: 'Diagnostic',
        description: 'Analyse de logs applicatifs (Tomcat) pour diagnostic et résolution de problèmes.'
      },
      {
        title: 'Virtualisation & Conteneurisation',
        description: 'Création et gestion de machines virtuelles (VM). Conteneurisation des composants applicatifs pour compatibilité avec l’orchestration Kubernetes.'
      }
    ],
    solutions: [
      {
        title: 'Kubernetes',
        description: 'Installation et configuration d’un cluster Kubernetes. Optimisation de la haute disponibilité et de la scalabilité (autoscaling, affinities, probes, etc.).'
      },
      {
        title: 'Supervision',
        description: 'Supervision de l’état du cluster avec Prometheus + Grafana.'
      },
      {
        title: 'GitOps',
        description: 'Adoption de la démarche GitOps avec ArgoCD et gestion des déploiements via Helm charts.'
      }
    ],
    results: [
      'Migration réussie vers Kubernetes',
      'Supervision proactive en place',
      'Déploiements automatisés via GitOps'
    ],
    links: { github: null, demo: null }
  },

  // --- ACADEMIC PROJECTS ---
  'projet-agile': {
    id: 'projet-agile',
    type: 'academic',
    title: 'Gestion d’un projet académique Agile / Scrum',
    company: 'Projet Académique',
    shortDescription: 'Adoption des méthodologies Agile / Scrum (suivi avec Jira, gestion des sprints, Daily meetings).',
    fullDescription: `Gestion d’un projet académique avec adoption des méthodologies Agile / Scrum.`,
    icon: Users,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    technologies: ['Jira', 'Scrum'],
    duration: 'Académique',
    date: '2024',
    category: 'Gestion de Projet',
    challenges: [
      {
        title: 'Organisation',
        description: 'Découpage du travail en sprints, organisation de daily meetings.'
      }
    ],
    solutions: [
      {
        title: 'Cérémonies Scrum',
        description: 'Animation des réunions de sprint planning et de rétrospectives afin d’optimiser la collaboration et l’efficacité de l’équipe.'
      },
      {
        title: 'Suivi',
        description: 'Mise en place d’un backlog produit structuré et suivi régulier de l’avancement pour garantir la livraison des objectifs dans les délais.'
      }
    ],
    results: [
      'Livraison dans les délais',
      'Processus Agile maîtrisé'
    ],
    links: { github: null, demo: null }
  },
  'nginx-lb': {
    id: 'nginx-lb',
    type: 'academic',
    title: 'Nginx avec Reverse Proxy et Load Balancing',
    company: 'Projet Académique',
    shortDescription: 'Configuration Nginx pour répartir le trafic et assurer la haute disponibilité.',
    fullDescription: `Mise en place d'une architecture Nginx Reverse Proxy et Load Balancing.`,
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1607799275518-d58665d096b1?w=1200&h=600&fit=crop',
    technologies: ['Nginx', 'Docker', 'Docker Compose', 'Linux (Ubuntu)'],
    duration: 'Académique',
    date: '2024',
    category: 'Infrastructure',
    challenges: [
      {
        title: 'Configuration',
        description: 'Configuration d’un serveur Nginx permettant de répartir le trafic entre plusieurs instances de l’application en backend.'
      }
    ],
    solutions: [
      {
        title: 'HA & Scalabilité',
        description: 'Mise en place d’un reverse proxy et d’un système de load balancing afin de garantir la scalabilité et la haute disponibilité du service.'
      }
    ],
    results: [
      'Load balancing fonctionnel',
      'Haute disponibilité assurée'
    ],
    links: { github: null, demo: null }
  },
  'secure-web': {
    id: 'secure-web',
    type: 'academic',
    title: 'Serveur Web sécurisé avec HTTPS et pare-feu',
    company: 'Projet Académique',
    shortDescription: 'Sécurisation serveur Linux : SSL/TLS, UFW, Fail2Ban.',
    fullDescription: `Sécurisation d'un serveur Web Linux.`,
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop',
    technologies: ['Nginx', 'OpenSSL', 'UFW', 'SSH'],
    duration: 'Académique',
    date: '2024',
    category: 'Sécurité',
    challenges: [
      {
        title: 'Chiffrement',
        description: 'Configuration d’un serveur Linux sécurisé avec chiffrement SSL/TLS et règles de pare-feu adaptées.'
      }
    ],
    solutions: [
      {
        title: 'Durcissement',
        description: 'Mise en œuvre de UFW et Fail2Ban pour la prévention des intrusions et le durcissement de la connexion SSH.'
      }
    ],
    results: [
      'Serveur sécurisé',
      'Protection contre les intrusions'
    ],
    links: { github: null, demo: null }
  },
  'monitoring-infra': {
    id: 'monitoring-infra',
    type: 'academic',
    title: 'Supervision et Monitoring d’Infrastructure',
    company: 'Projet Académique',
    shortDescription: 'Collecte métriques, tableaux de bord et alertes.',
    fullDescription: `Mise en place d'une stack de monitoring complète.`,
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    technologies: ['Prometheus', 'Grafana', 'Node Exporter', 'Linux (Ubuntu)', 'Git'],
    duration: 'Académique',
    date: '2024',
    category: 'Monitoring',
    challenges: [
      {
        title: 'Collecte',
        description: 'Installation et configuration d’outils de monitoring pour collecter des métriques système (CPU, RAM, disque, réseau).'
      }
    ],
    solutions: [
      {
        title: 'Visualisation',
        description: 'Création de tableaux de bord permettant de visualiser en temps réel les performances et l’utilisation des ressources.'
      },
      {
        title: 'Alerting',
        description: 'Mise en place d’alertes automatisées envoyées par email ou webhook en cas de dépassement de seuils.'
      }
    ],
    results: [
      'Visibilité infrastructure',
      'Alertes proactives'
    ],
    links: { github: null, demo: null }
  }
};
