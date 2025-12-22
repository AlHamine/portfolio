import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, Code, Briefcase, Award, ChevronRight, Menu, X, ExternalLink, Database, Cloud, Cpu, TrendingUp, Linkedin, Calendar, BookOpen, Zap } from 'lucide-react';

const App = () => {
  type Section = 'home' | 'experience' | 'projects' | 'education' | 'contact';

  const [activeSection, setActiveSection] = useState<Section>('home');

  // const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // const [language, setLanguage] = useState('fr');
  type Language = 'fr' | 'en';

  const [language, setLanguage] = useState<Language>('fr');




  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        experience: 'Expérience',
        projects: 'Projets',
        education: 'Formation',
        contact: 'Contact'
      },
      hero: {
        available: 'Disponible pour missions freelance',
        title1: 'Seydina Mouhamadou',
        title2: 'Al Hamine NDIAYE',
        subtitle: 'Développeur Full Stack & IA • Architecte Microservices • Data Engineer',
        description: 'Dev Full Stack autodidacte, 2,5 ans d\'expérience pro intensive. 27 mois en production : YATOUT SARL (microservices + Kafka) et UASZ-Baobab (plateforme universitaire complète). Expert React • Spring Boot • Architecture distribuée. Master Génie Logiciel en cours.',
        contact: 'Me contacter',
        viewProjects: 'Voir mes projets',
        rate: 'Tarif indicatif',
        perHour: '$/h',
        rateNote: 'selon complexité du projet'
      },
      achievements: {
        title: 'Distinctions & ',
        titleHighlight: 'Récompenses',
        items: [
          { title: '1ʳᵉ place', event: 'Concours Innovation Digitale', project: 'Amara' },
          { title: '2ᵉ place', event: 'Hackathon Agridigital Marathon', project: 'Gaynako' },
          { title: 'Gagnant Finale', event: 'Lamb-Tech Génie Logiciel 2024', project: 'Équipe UASZ' },
          { title: '3ᵉ Finaliste', event: 'Orange Digital ODC (Coding Game)', project: 'Équipe UASZ - National' },
          { title: 'Major de promotion', event: 'Licence en Informatique', project: '' }
        ]
      },
      experience: {
        title: 'Expérience ',
        titleHighlight: 'Professionnelle',
        intensive: 'Production intensive',
        maintenance: 'Production & Maintenance',
        internship: 'Stage académique',
        jobs: [
          {
            role: 'Développeur Full Stack',
            company: 'YATOUT SARL',
            period: 'Mars 2024 - Déc 2025 (21 mois)',
            tasks: [
              'Refonte complète de la plateforme interne via microservices',
             'DEVOPS: Operation (incluant test et deploiement via les VPS de l\'entreprise )',
              'Intégration Kafka pour communication asynchrone temps réel',
              'Développement JCaisse : automatisation CSV, algorithmes de recherche profonde pour détection multi-formats',
              'Optimisation avancée de requêtes et missions remote (PHP)',
              'Collaboration continue sur maintenance et évolutions'
            ]
          },
          {
            role: 'Développeur Full Stack Freelance & Co-fondateur',
            company: 'UASZ - Département d\'Informatique',
            period: '2025 (6 mois dev + maintenance continue)',
            tasks: [
              'Co-fondateur et développeur principal de Baobab Platform',
              'Architecture microservices complète : React + Spring Boot + MariaDB',
              'Optimisation avancée de requêtes et performance',
              'DEVOPS: Operation (incluant test et deploiement via les VPS de l\'université )',
              'Plateforme en production, maintenance et évolutions continues',
              'Lien : depinfo-dev.tech:3093'
            ]
          },
          {
            role: 'Stagiaire Développeur',
            company: 'DISI, Université Assane SECK',
            period: 'Déc 2023 - Fév 2024 (3 mois)',
            tasks: [
              'Maintenance et développement d\'applications internes',
              'Modélisation UML et conception système',
              'Ajout de fonctionnalités critiques'
            ]
          }
        ]
      },
      projects: {
        professional: 'Projets ',
        professionalHighlight: 'Professionnels',
        academic: 'Projets ',
        academicHighlight: 'Académiques',
        viewProject: 'Voir le projet',
        viewOnGithub: 'Voir sur GitHub'
      },
      education: {
        title: 'Formation ',
        titleHighlight: '& Certifications',
        inProgress: 'En cours',
        graduated: 'Diplômé',
        certified: 'Certifié'
      },
      skills: {
        title: 'Stack ',
        titleHighlight: 'Technique'
      },
      contact: {
        title: 'Discutons de votre ',
        titleHighlight: 'Projet',
        availability: 'Disponible immédiatement pour missions freelance • Remote ou onsite Montréal',
        experience: '2,5 ans d\'expérience • 27 mois en production active',
        phone: 'Téléphone',
        email: 'Email',
        github: 'GitHub',
        githubText: 'Portfolio & Code',
        linkedin: 'LinkedIn',
        linkedinText: 'Profil',
        languages: 'Langues',
        languagesList: [
          { name: 'Français', level: 'Professionnel' },
          { name: 'Anglais', level: 'Fonctionnel' },
          { name: 'Arabe', level: 'Bases' }
        ]
      },
      footer: {
        text: '© 2025 Seydina M. Al Hamine Ndiaye • Développeur Full Stack & IA',
        subtext: '2,5 ans d\'expérience • 27 mois en production • Major de promotion • Master en Génie Logiciel en cours'
      }
    },
    en: {
      nav: {
        home: 'Home',
        experience: 'Experience',
        projects: 'Projects',
        education: 'Education',
        contact: 'Contact'
      },
      hero: {
        available: 'Available for freelance missions',
        title1: 'Seydina Mouhamadou',
        title2: 'Al Hamine NDIAYE',
        subtitle: 'Full Stack Developer & AI • Microservices Architect • Data Engineer',
        description: 'Self-taught Full Stack Developer, 2.5 years of intensive professional experience. 27 months in production: YATOUT SARL (microservices + Kafka) and UASZ-Baobab (complete university platform). Expert in React • Spring Boot • Distributed Architecture. Master\'s in Software Engineering in progress.',
        contact: 'Contact me',
        viewProjects: 'View my projects',
        rate: 'Indicative rate',
        perHour: '$/h',
        rateNote: 'depending on project complexity'
      },
      achievements: {
        title: 'Awards & ',
        titleHighlight: 'Achievements',
        items: [
          { title: '1st Place', event: 'Digital Innovation Contest', project: 'Amara' },
          { title: '2nd Place', event: 'Agridigital Hackathon Marathon', project: 'Gaynako' },
          { title: 'Winner', event: 'Lamb-Tech Software Engineering 2024', project: 'UASZ Team' },
          { title: '3rd Finalist', event: 'Orange Digital ODC (Coding Game)', project: 'UASZ Team - National' },
          { title: 'Top of Class', event: 'Computer Science Degree', project: '' }
        ]
      },
      experience: {
        title: 'Professional ',
        titleHighlight: 'Experience',
        intensive: 'Intensive Production',
        maintenance: 'Production & Maintenance',
        internship: 'Academic Internship',
        jobs: [
          {
            role: 'Full Stack Developer',
            company: 'YATOUT SARL',
            period: 'March 2024 - Dec 2025 (21 months)',
            tasks: [
              'Complete refactoring of internal platform via microservices',
             'DEVOPS: Operations (including testing and deployment on the university VPS infrastructure)',
              'Kafka integration for real-time asynchronous communication',
              'JCaisse development: CSV automation, deep search algorithms for multi-format detection',
              'Advanced query optimization and remote missions (PHP)',
              'Ongoing collaboration on maintenance and evolutions'
            ]
          },
          {
            role: 'Full Stack Freelance Developer & Co-founder',
            company: 'UASZ - Computer Science Department',
            period: '2025 (6 months dev + ongoing maintenance)',
            tasks: [
              'Co-founder and lead developer of Baobab Platform',
              'Complete microservices architecture: React + Spring Boot + MariaDB',
              'DEVOPS: Operations (including testing and deployment on the enterprise VPS infrastructure)',
              'Advanced query and performance optimization',
              'Platform in production, ongoing maintenance and evolutions',
              'Link: depinfo-dev.tech:3093'
            ]
          },
          {
            role: 'Developer Intern',
            company: 'DISI, Assane SECK University',
            period: 'Dec 2023 - Feb 2024 (3 months)',
            tasks: [
              'Maintenance and development of internal applications',
              'UML modeling and system design',
              'Critical feature additions'
            ]
          }
        ]
      },
      projects: {
        professional: 'Professional ',
        professionalHighlight: 'Projects',
        academic: 'Academic ',
        academicHighlight: 'Projects',
        viewProject: 'View project',
        viewOnGithub: 'View on GitHub'
      },
      education: {
        title: 'Education ',
        titleHighlight: '& Certifications',
        inProgress: 'In Progress',
        graduated: 'Graduated',
        certified: 'Certified'
      },
      skills: {
        title: 'Technical ',
        titleHighlight: 'Stack'
      },
      contact: {
        title: 'Let\'s discuss your ',
        titleHighlight: 'Project',
        availability: 'Immediately available for freelance missions • Remote or onsite Montreal',
        experience: '2.5 years experience • 27 months in active production',
        phone: 'Phone',
        email: 'Email',
        github: 'GitHub',
        githubText: 'Portfolio & Code',
        linkedin: 'LinkedIn',
        linkedinText: 'Profile',
        languages: 'Languages',
        languagesList: [
          { name: 'French', level: 'Professional' },
          { name: 'English', level: 'Functional' },
          { name: 'Arabic', level: 'Basic' }
        ]
      },
      footer: {
        text: '© 2025 Seydina M. Al Hamine Ndiaye • Full Stack Developer & AI',
        subtext: '2.5 years experience • 27 months in production • Top of class • Master\'s in Software Engineering in progress'
      }
    }
  };

  // const t = translations[language];

  const t = translations[language];
  const navItems: { key: Section; label: string }[] = [
    { key: 'home', label: t.nav.home },
    { key: 'experience', label: t.nav.experience },
    { key: 'projects', label: t.nav.projects },
    { key: 'education', label: t.nav.education },
    { key: 'contact', label: t.nav.contact }
  ];

  useEffect(() => {
    const el = document.getElementById(activeSection);
    el?.scrollIntoView({ behavior: 'smooth' });
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const professionalProjects = language === 'fr' ? [
    {
      title: "Plateforme Interne YATOUT",
      company: "YATOUT SARL",
      period: "Mars 2024 - Déc 2025",
      type: "Production",
      desc: "Refonte complète via microservices + Kafka. JCaisse : automatisation CSV, algorithmes de recherche et comparaison de données. Optimisation requêtes. Collaboration continue sur maintenance et évolutions.",
      tech: ["React", "Spring Boot", "Kafka", "PHP", "Algorithms", "Microservices"],
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Baobab Platform",
      company: "UASZ - Département d'Informatique (Co-fondateur)",
      period: "2025 (6 mois + maintenance)",
      type: "Production",
      desc: "Co-fondateur et développeur principal. Plateforme universitaire complète avec architecture microservices. Optimisation avancée de requêtes et performance.",
      tech: ["React", "Spring Boot", "MariaDB", "Microservices", "Query Optimization"],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      link: "http://depinfo-dev.tech:3093"
    },
    {
      title: "Gaynako",
      award: "2ᵉ place Hackathon Agridigital",
      year: "2024",
      type: "Hackathon",
      desc: "Gestion intelligente de l'élevage et ventes agricoles",
      tech: ["React", "Spring Boot", "PostgreSQL", "JWT"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Amara",
      award: "1ʳᵉ place Innovation Digitale",
      year: "2024",
      type: "Hackathon",
      desc: "Application agricole IoT avec analyse de données capteurs en temps réel",
      tech: ["React Native", "Django", "ML", "IoT"],
      icon: <Cpu className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ] : [
    {
      title: "YATOUT Internal Platform",
      company: "YATOUT SARL",
      period: "March 2024 - Dec 2025",
      type: "Production",
      desc: "Complete refactoring via microservices + Kafka. JCaisse: CSV automation, search algorithms and data comparison. Query optimization. Ongoing collaboration on maintenance and evolutions.",
      tech: ["React", "Spring Boot", "Kafka", "PHP", "Algorithms", "Microservices"],
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Baobab Platform",
      company: "UASZ - Computer Science Dept (Co-founder)",
      period: "2025 (6 months + maintenance)",
      type: "Production",
      desc: "Co-founder and lead developer. Complete university platform with microservices architecture. Advanced query and performance optimization.",
      tech: ["React", "Spring Boot", "MariaDB", "Microservices", "Query Optimization"],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      link: "http://depinfo-dev.tech:3093"
    },
    {
      title: "Gaynako",
      award: "2nd place Agridigital Hackathon",
      year: "2024",
      type: "Hackathon",
      desc: "Smart livestock management and agricultural sales platform",
      tech: ["React", "Spring Boot", "PostgreSQL", "JWT"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Amara",
      award: "1st place Digital Innovation",
      year: "2024",
      type: "Hackathon",
      desc: "IoT agricultural application with real-time sensor data analysis",
      tech: ["React Native", "Django", "ML", "IoT"],
      icon: <Cpu className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const academicProjects = language === 'fr' ? [
    {
      title: "Gestion RH Universitaire",
      year: "2024",
      desc: "Plateforme de gestion des personnels (PER, PATS), emplois du temps et répartition des cours",
      tech: ["React", "Spring Boot", "Microservices"],
      github: "Gestion_DAOS"
    },
    {
      title: "Plateforme Gestion d'Évènements",
      year: "2023",
      desc: "Solution full stack de mise en relation clients-prestataires avec messagerie et système de notation",
      tech: ["React", "Spring Boot", "WebSocket"],
      github: "GestionEvent"
    },
    {
      title: "My WeatherApp",
      year: "2023",
      desc: "Application météo interactive avec intégration d'APIs et carte dynamique",
      tech: ["React", "Weather API", "Mapbox"],
      github: "MonMeteo"
    },
    {
      title: "Site L2I (v1 & v2)",
      year: "2022-2024",
      desc: "Site institutionnel de la Licence en Ingénierie Informatique. Refonte complète en 2024 pour moderniser l'UX",
      tech: ["Django → Spring Boot", "React", "HTML/CSS/JS"],
      github: "Project_Site_L2i"
    }
  ] : [
    {
      title: "University HR Management",
      year: "2024",
      desc: "Platform for managing personnel (PER, PATS), schedules and course allocation",
      tech: ["React", "Spring Boot", "Microservices"],
      github: "Gestion_DAOS"
    },
    {
      title: "Event Management Platform",
      year: "2023",
      desc: "Full stack solution connecting clients-providers with messaging and rating system",
      tech: ["React", "Spring Boot", "WebSocket"],
      github: "GestionEvent"
    },
    {
      title: "My WeatherApp",
      year: "2023",
      desc: "Interactive weather application with API integration and dynamic map",
      tech: ["React", "Weather API", "Mapbox"],
      github: "MonMeteo"
    },
    {
      title: "L2I Website (v1 & v2)",
      year: "2022-2024",
      desc: "Institutional website for Computer Engineering Degree. Complete redesign in 2024 to modernize UX",
      tech: ["Django → Spring Boot", "React", "HTML/CSS/JS"],
      github: "Project_Site_L2i"
    }
  ];


  const education = language === 'fr' ? [
    {
      degree: "Master en Informatique",
      specialization: "Génie Logiciel",
      institution: "Université Assane SECK, Ziguinchor",
      period: "2024 - Présent",
      status: "En cours"
    },
    {
      degree: "Licence en Ingénierie Informatique",
      specialization: "Mention Bien, Major de promotion",
      institution: "Université Assane SECK, Ziguinchor",
      period: "2021 - 2024",
      status: "Diplômé"
    },
    {
      degree: "Certificat DevOps Essentials",
      institution: "IBM via Coursera",
      period: "2024",
      status: "Certifié"
    }
  ] : [
    {
      degree: "Master's in Computer Science",
      specialization: "Software Engineering",
      institution: "Assane SECK University, Ziguinchor",
      period: "2024 - Present",
      status: "In Progress"
    },
    {
      degree: "Bachelor's in Computer Engineering",
      specialization: "High Honors, Top of Class",
      institution: "Assane SECK University, Ziguinchor",
      period: "2021 - 2024",
      status: "Graduated"
    },
    {
      degree: "DevOps Essentials Certificate",
      institution: "IBM via Coursera",
      period: "2024",
      status: "Certified"
    }
  ];

  const skills = [
    { category: "Backend", items: ["Spring Boot", "Django", "PHP", "Microservices", "REST APIs", "JWT/OAuth2", "Kafka"], color: "bg-blue-500" },
    { category: "Frontend", items: ["React.js", "React Native", "Angular", "Material-UI", "TailwindCSS"], color: "bg-green-500" },
    { category: "Database", items: ["PostgreSQL", "MariaDB", "MySQL", "H2", "Query Optimization"], color: "bg-purple-500" },
    { category: "Data & Algorithms", items: ["Deep Search Algorithms", "Data Comparison", "ETL Pipelines", "CSV Automation"], color: "bg-orange-500" },
    { category: "DevOps", items: ["Docker", "Linux", "CI/CD", "Kafka"], color: "bg-cyan-500" }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            S.M.A.H Ndiaye
          </div>

          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`transition-colors duration-300
        ${activeSection === item.key ? 'text-cyan-400' : 'hover:text-cyan-400'}
      `}
              >
                {item.label}
              </button>
            ))}
          </div>



          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300 text-sm font-semibold"
            >
              {language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => {
                  setActiveSection(item.key);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-3 hover:bg-slate-800"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                {t.hero.available}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {t.hero.title1}
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {t.hero.title2}
                </span>
              </h1>
              <p className="text-xl text-slate-300">
                {t.hero.subtitle}
              </p>
              <p className="text-slate-400">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2">
                  {t.hero.contact} <ChevronRight className="w-4 h-4" />
                </a>
                <a href="https://github.com/AlHamine" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-slate-600 rounded-lg hover:border-cyan-500 transition-all duration-300 flex items-center gap-2">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Montréal, QC</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 514-829-8442</span>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-all">seydinaalhaminendiaye24@gmail.com</span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <a href="https://linkedin.com/in/seydina-mouhamadou-al-hamine-ndiaye-28a914246" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cyan-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-sm text-slate-400 mb-2">{t.hero.rate}</div>
                  <div className="text-3xl font-bold text-cyan-400">25-40 {t.hero.perHour}</div>
                  <div className="text-sm text-slate-500 mt-1">{t.hero.rateNote}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t.achievements.title}<span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{t.achievements.titleHighlight}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.achievements.items.map((achievement, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-5xl mb-4">{['🥇', '🥈', '🏆', '🥉', '🎓'][idx]}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{achievement.title}</h3>
                <p className="text-slate-300 mb-1 text-sm">{achievement.event}</p>
                {achievement.project && <p className="text-xs text-slate-500">{achievement.project}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t.experience.title}<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t.experience.titleHighlight}</span>
          </h2>
          <div className="space-y-6">
            {t.experience.jobs.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                      <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs">
                        {idx === 0 ? t.experience.intensive : idx === 1 ? t.experience.maintenance : t.experience.internship}
                      </span>
                    </div>
                    <p className="text-slate-300 text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Projects */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t.projects.professional}<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t.projects.professionalHighlight}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalProjects.map((project, idx) => (
              <div key={idx} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${project.color} rounded-xl`}>
                      {project.icon}
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 mb-2">
                        {project.type}
                      </span>
                      <p className="text-sm text-slate-500">{project.year || project.period}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  {project.company && <p className="text-cyan-400 text-sm mb-2">{project.company}</p>}
                  {project.award && (
                    <div className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs mb-3">
                      {project.award}
                    </div>
                  )}
                  <p className="text-slate-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">{t.projects.viewProject}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center mt-20">
            {t.projects.academic}<span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{t.projects.academicHighlight}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {academicProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                  <span className="text-sm text-slate-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={`https://github.com/AlHamine/${project.github}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm">
                  <Github className="w-4 h-4" />
                  <span>{t.projects.viewOnGithub}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t.education.title}<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t.education.titleHighlight}</span>
          </h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-cyan-400">{edu.degree}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs ${edu.status === (language === 'fr' ? 'En cours' : 'In Progress')
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                        : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                        }`}>
                        {edu.status}
                      </span>
                    </div>
                    {edu.specialization && <p className="text-slate-300 mb-2">{edu.specialization}</p>}
                    <p className="text-slate-400">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-4 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t.skills.title}<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t.skills.titleHighlight}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 ${skill.color} rounded-full`}></div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            {t.contact.title}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.contact.titleHighlight}
            </span>
          </h2>

          <p className="text-xl text-slate-400 mb-12">
            {t.contact.availability}
            <br />
            <span className="text-cyan-400 font-semibold">
              {t.contact.experience}
            </span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            <a
              href="tel:+15148298442"
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-sm text-slate-400 mb-1">{t.contact.phone}</div>
              <div className="font-semibold text-sm">+1 514-829-8442</div>
            </a>

            <a
              href="mailto:seydinaalhaminendiaye24@gmail.com"
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-sm text-slate-400 mb-1">{t.contact.email}</div>

              <div className="font-semibold text-xs break-words text-center">

                seydinaalhaminendiaye24@gmail.com
              </div>

            </a>

            <a
              href="https://github.com/AlHamine"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Github className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-sm text-slate-400 mb-1">{t.contact.github}</div>
              <div className="font-semibold text-sm">{t.contact.githubText}</div>
            </a>

            <a
              href="https://linkedin.com/in/seydina-mouhamadou-al-hamine-ndiaye-28a914246"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-sm text-slate-400 mb-1">{t.contact.linkedin}</div>
              <div className="font-semibold text-sm">{t.contact.linkedinText}</div>
            </a>

          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">{t.contact.languages}</h3>

            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
              {t.contact.languagesList.map(
                (lang: { name: string; level: string }, idx: number) => (
                  <div key={idx}>
                    <span className="font-semibold text-cyan-400">{lang.name}</span>
                    {" "}• {lang.level}
                  </div>
                )
              )}
            </div>
          </div>

        </div>
      </section>



      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>{t.footer.text}</p>
          <p className="text-sm mt-2">{t.footer.subtext}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;