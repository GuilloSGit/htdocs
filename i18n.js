/* ============================================================
   i18n.js — Traducciones (EN, FR, PT).
   El español es el contenido por defecto del HTML (se cachea al
   cargar). Cada bloque contiene SOLO el override para ese idioma,
   mapeado por el atributo data-i18n de cada elemento.
   ============================================================ */
window.I18N_EN = {
  /* ---- Nav ---- */
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.contact": "Contact",

  /* ---- Hero ---- */
  "hero.eyebrow": "FULL STACK · SYSTEMS ENGINEERING",
  "hero.h1": "I build <em>real software</em>, end to end.",
  "hero.lead": "I'm <b>Guille Andrada</b>, a Full Stack Developer and Systems Engineer. I design, build and ship complete products — backend, frontend, data, and AI when it adds real value.",
  "hero.cta1": "View projects",
  "hero.cta2": "Let's talk",
  "hero.card1.t": "Architecture & Backend",
  "hero.card1.d": "REST APIs, relational databases and event-driven systems, production-ready.",
  "hero.card2.t": "Full stack apps",
  "hero.card2.d": "End-to-end scalable web products: React/Next on the front, Node/Fastify on the back.",
  "hero.card3.t": "AI integration",
  "hero.card3.d": "LLMs wired into business logic when they solve a real problem, not as an end in itself.",
  "hero.strip": "Stack",

  /* ---- About ---- */
  "about.eyebrow": "ABOUT",
  "about.title": "About me",
  "about.p1": "I'm a Full Stack Developer and Systems Engineer, experienced in building complete web products: from the data model and backend architecture to the final interface. I've worked on projects ranging from healthcare SaaS handling sensitive data to my own platforms in production for businesses and SMBs.",
  "about.p2": "My focus is on delivering clean, efficient and scalable solutions. I'm passionate about front-end frameworks (React, Vue, Next.js), back-end with Node.js and Python/Django, event-driven architectures and relational databases. I also integrate AI (LLMs, MCPs) when it solves a concrete product problem.",

  /* ---- Skills ---- */
  "sk.web.t": "Web Development",
  "sk.web.d": "Next.js (SSR/SSG), React, Vue.js, Node.js, Django. Modern interfaces, high-traffic dashboards and scalable, product-oriented web apps.",
  "sk.ui.t": "UI/UX Design",
  "sk.ui.d": "Modern CSS, animations, responsive design and design systems. Focused on usability, accessibility and visual consistency in real products.",
  "sk.api.t": "Backend & Architecture",
  "sk.api.d": "REST APIs, microservices, event-driven architectures and distributed systems. End-to-end, production-ready solutions.",
  "sk.cloud.t": "Cloud & DevOps",
  "sk.cloud.d": "AWS (Lambda, S3, EC2, Cognito, SES), Docker, CI/CD, Vercel, GCP. Deployment, monitoring and optimization of production systems.",
  "sk.db.t": "Databases",
  "sk.db.d": "PostgreSQL, MySQL, Prisma and Sequelize. Relational modeling, migrations, multi-tenancy and consistent transactions in production systems.",
  "sk.ai.t": "AI Integration",
  "sk.ai.d": "Integrating LLMs (OpenAI, Anthropic) and custom MCPs into real products, when they solve a concrete business problem.",
  "sk.tech": "Technologies & tools",

  /* ---- Meta ---- */
  "meta.lang.t": "Languages",
  "meta.lang.es": "🇦🇷 Spanish (Native)",
  "meta.lang.en": "🇺🇸 English (Proficient)",
  "meta.lang.pt": "🇧🇷 Portuguese (Advanced)",
  "meta.method.t": "Agile methodologies",
  "meta.method.1": "Scrum · Kanban · XP",
  "meta.tools.t": "Tools",
  "meta.tools.1": "Git (GitHub / GitLab)",
  "meta.tools.2": "Docker · Postman",
  "meta.tools.3": "VS Code · Cursor · Windsurf",
  "meta.plat.t": "OS & platforms",
  "meta.plat.1": "macOS · Windows · Linux",
  "meta.plat.2": "iOS · Android",

  /* ---- Experience ---- */
  "exp.eyebrow": "EXPERIENCE",
  "exp.title": "Professional experience",
  "exp.subtitle": "My path as a Full Stack and Frontend Developer across high-impact projects.",
  "exp.new": "LATEST",

  /* CaseBridge */
  "exp.cb.pos": "Full Stack Developer (Backend focus)",
  "exp.cb.co": "CaseBridge — Scylla Technologies",
  "exp.cb.meta": "Apr 2026 – May 2026 · 🌎 Remote",
  "exp.cb.desc": "Healthcare SaaS platform for clinical case management, medical documentation and referrals, handling sensitive patient data (PHI). I was one of the main backend contributors (189 commits across both repos, ~75% backend / 25% frontend) on a hexagonal architecture with CQRS, an in-process event bus and a transactional Unit of Work.",
  "exp.cb.h1": "What I did",
  "exp.cb.b1": "Built the clinical notes (SOAP) module from scratch: domain model, Prisma persistence, OpenAPI docs and test suite.",
  "exp.cb.b2": "Fully migrated the AWS integration from SDK v2 to v3 (Cognito, S3, SES) and replaced in-memory buffers with file streaming to S3.",
  "exp.cb.b3": "Implemented analytics caching in Redis with invalidation driven by domain events.",
  "exp.cb.b4": "Applied backend security hardening: SSRF, XSS and injection mitigation, plus auth and session hardening.",
  "exp.cb.b5": "On the frontend: Document Center with uploads, case archive/restore and CSV lead import.",

  /* Usados Europa */
  "exp.ue.pos": "Full Stack Developer",
  "exp.ue.co": "Usados Europa",
  "exp.ue.meta": "2026 – Present · 🌎 Remote / Antwerp, Belgium",
  "exp.ue.sub": "Strategic Engineering & Technical Product Ownership",
  "exp.ue.desc": "I lead the full lifecycle of the Usados Europa platform, acting as the bridge between business vision and high-level technical execution, focused on product scalability and engineering efficiency.",
  "exp.ue.b1": "Technical roadmap & strategy: I turn complex business requirements into scalable technical architectures, managing the project from stakeholder agreements to production deployment.",
  "exp.ue.b2": "MERN stack mastery: I design and oversee robust architectures with MongoDB, Express, React and Node.js, ensuring data integrity and high-concurrency performance.",
  "exp.ue.b3": "Engineering leadership: I mentor the dev team under Agile, promoting Clean Code, peer reviews and continuous improvement.",
  "exp.ue.b4": "Stakeholder management: direct communication with strategic partners to keep the technical roadmap aligned with business KPIs.",

  /* Self Employed (reencuadrado: integración, no creación) */
  "exp.se.pos": "Full Stack Developer",
  "exp.se.co": "Self-employed",
  "exp.se.meta": "2024 – Present · 🌎 Remote",
  "exp.se.sub": "AI Integration & Automation",
  "exp.se.desc": "I evolved my workflow by integrating generative AI and automation, achieving a 30–40% reduction in MVP delivery times and improving architectural robustness.",
  "exp.se.b1": "AI integration & automation: I integrate Language Model APIs (OpenAI, Anthropic) into workflows for text processing, content generation and custom assistants.",
  "exp.se.b2": "Prompt engineering & tooling: advanced use of GitHub Copilot and Cursor, plus custom automations to speed up coding, debugging and testing.",
  "exp.se.b3": "Full stack core: end-to-end solutions across React/Vue front-ends, Node.js/PHP back-ends and cloud deployment.",
  "exp.se.b4": "Efficiency: process optimization through automation scripts, reducing manual errors by 25%.",

  /* AIometrix */
  "exp.ax.pos": "Full Stack Developer",
  "exp.ax.co": "AIometrix — Bahr & Co",
  "exp.ax.meta": "2024 · 🌎 Remote / USA",
  "exp.ax.b1": "Scalable modern architecture: architected and deployed high-performance web apps with Next.js, improving SEO and cutting load times by 30% via SSR/SSG.",
  "exp.ax.b2": "AI-driven logic: connected LLMs with business logic, enabling features like automated product queries and intelligent order processing.",
  "exp.ax.b3": "Performance at scale: optimized AI operations for high request volumes, refining APIs and caching to reduce infrastructure overhead by 20%.",

  /* ODEA */
  "exp.od.pos": "Frontend & Architecture Engineer",
  "exp.od.co": "ODEA",
  "exp.od.meta": "2023 – 2024 · 🌎 Remote / Argentina",
  "exp.od.sub": "Strategic Development & Performance Optimization",
  "exp.od.b1": "Scalable vanilla JS: framework-less web apps using advanced modular JavaScript (ES6+).",
  "exp.od.b2": "Geospatial intelligence (GIS): custom map interfaces and GIS layers, parsing and projecting spatial data from CSV into interactive visualizations.",
  "exp.od.b3": "State & event management: reactive programming via custom event listeners, triggers and Pub/Sub patterns.",
  "exp.od.b4": "Engineering best practices: scalable folder structures (Atomic Design / Clean Architecture) and a 40% bundle-size reduction vs. standard frameworks.",

  /* Colegium */
  "exp.cg.pos": "Full Stack Developer",
  "exp.cg.co": "Colegium",
  "exp.cg.meta": "2022 – 2023 · 🌎 Remote / LATAM",
  "exp.cg.sub": "AI Integration & Education Intelligence",
  "exp.cg.desc": "I led the integration of generative AI and data analytics to optimize the educational ecosystem for four key user segments:",
  "exp.cg.b1": "Teachers: an AI assistant that cuts lesson-planning time by 40%, aligning content with pedagogical standards.",
  "exp.cg.b2": "Students: an NLP engine that generates high-fidelity study summaries from class materials.",
  "exp.cg.b3": "Executives: a dashboard turning raw academic data into predictive insights, flagging at-risk students with 90% accuracy.",
  "exp.cg.b4": "Staff: streamlined administrative workflows via AI integrations, reducing manual-entry errors by 25%.",

  /* Electro3 */
  "exp.e3.pos": "Full Stack Developer",
  "exp.e3.co": "Electro3",
  "exp.e3.meta": "Jan 2021 – May 2023 · 💼 Onsite / Argentina",
  "exp.e3.b1": "Frontend: advanced UI components with Vue.js and Vuex, RESTful API consumption via Axios, and E2E testing with Cypress (near-zero regression rate).",
  "exp.e3.b2": "Backend & data: scalable services with Node.js (Express) and PHP (CodeIgniter); SQL schema design and optimization with MySQL.",
  "exp.e3.b3": "Methodologies: Scrum with Jira/Trello, advanced version control with Git and CI workflows on GitLab.",
  "exp.e3.b4": "Key projects: SIIS (San Juan Police office app), Totems Admin (self-service terminals) and Punteros BL.",

  /* ---- Projects ---- */
  "pj.eyebrow": "PROJECTS",
  "pj.title": "My projects",
  "pj.subtitle": "My own products in production, plus projects that show my versatility as a Full Stack developer.",
  "pj.disclaimer": "Note: private projects from companies I've worked with can't be shown here due to NDAs.",
  "pj.cat.real": "Real-world apps & services",
  "pj.cat.edu": "Educational & design demos",
  "pj.pa.t": "Pay Alert – Verified payment alerts",
  "pj.pa.d": "SaaS platform that connects a business's Mercado Pago account via OAuth and notifies every payment in real time (WebSocket + native push), without sharing the account with employees. Granular roles, payment export and AFIP tax-ID validation.",
  "pj.gd.t": "Galpón Digital – Hardware store management",
  "pj.gd.d": "Inventory and traceability software for hardware stores, focused on an immutable Kardex and counter-search speed. Includes invoicing, delivery notes, cash-register control and AI-assisted catalog search.",
  "pj.pass.t": "Passwords Admin – Secure Sharing",
  "pj.pass.d": "Web app for securely sharing credentials among team members, managing sensitive data within groups.",
  "pj.glass.t": "Glass Effect UI",
  "pj.glass.d": "A mock company interface with a modern glassmorphism effect — a web design teaching demo.",
  "pj.flex.t": "Flexbox Layouts",
  "pj.flex.d": "A practical demonstration of CSS Flexbox for responsive layouts.",
  "pj.link": "Open ↗",

  /* ---- Contact ---- */
  "ct.eyebrow": "CONTACT",
  "ct.title": "Have a project in mind?",
  "ct.subtitle": "Let's talk.",
  "ct.schedule.t": "Schedule a meeting",
  "ct.schedule.l": "Schedule",
  "ct.phone.t": "Phone",
  "ct.email.t": "Email",
  "ct.loc.t": "Current residence",
  "ct.loc.v": "San Juan, Argentina",
  "ct.social.t": "Social media",
  "ct.cv.t": "Résumé",
  "ct.cv.en": "Download Resume (EN)",
  "ct.cv.es": "Download Resume (ES)",
  "ct.form.name": "Name",
  "ct.form.email": "Email",
  "ct.form.msg": "Message",
  "ct.form.send": "Send message",
  "ct.form.sending": "Sending...",
  "ct.form.ok": "Message sent successfully.",
  "ct.form.err": "There was an error. Please try again.",

  /* ---- Footer ---- */
  "ft.role": "Full Stack Developer · Systems Engineer",
  "ft.rights": "All rights reserved."
};

window.I18N_FR = {
  /* ---- Nav ---- */
  "nav.about": "À propos",
  "nav.experience": "Expérience",
  "nav.projects": "Projets",
  "nav.contact": "Contact",

  /* ---- Hero ---- */
  "hero.eyebrow": "FULL STACK · INGÉNIERIE SYSTÈME",
  "hero.h1": "Je construis des <em>logiciels réels</em>, de bout en bout.",
  "hero.lead": "Je suis <b>Guille Andrada</b>, développeur Full Stack et ingénieur en systèmes. Je conçois, construis et livre des produits complets — backend, frontend, données, et IA quand elle apporte une réelle valeur.",
  "hero.cta1": "Voir les projets",
  "hero.cta2": "Discutons",
  "hero.card1.t": "Architecture & Backend",
  "hero.card1.d": "APIs REST, bases de données relationnelles et systèmes événementiels, prêts pour la production.",
  "hero.card2.t": "Applications full stack",
  "hero.card2.d": "Des produits web évolutifs de bout en bout : React/Next côté front, Node/Fastify côté back.",
  "hero.card3.t": "Intégration de l'IA",
  "hero.card3.d": "Des LLMs connectés à la logique métier quand ils résolvent un vrai problème, pas comme une fin en soi.",
  "hero.strip": "Stack",

  /* ---- About ---- */
  "about.eyebrow": "À PROPOS",
  "about.title": "À propos de moi",
  "about.p1": "Je suis développeur Full Stack et ingénieur en systèmes, avec de l'expérience dans la construction de produits web complets : du modèle de données et de l'architecture backend jusqu'à l'interface finale. J'ai travaillé sur des projets allant d'un SaaS de santé traitant des données sensibles à mes propres plateformes en production pour des commerces et des PME.",
  "about.p2": "Mon objectif est de livrer des solutions propres, efficaces et évolutives. Je suis passionné par les frameworks front-end (React, Vue, Next.js), le back-end avec Node.js et Python/Django, les architectures événementielles et les bases de données relationnelles. J'intègre aussi l'IA (LLMs, MCPs) quand elle résout un problème concret du produit.",

  /* ---- Skills ---- */
  "sk.web.t": "Développement Web",
  "sk.web.d": "Next.js (SSR/SSG), React, Vue.js, Node.js, Django. Interfaces modernes, tableaux de bord à fort trafic et applications web évolutives orientées produit.",
  "sk.ui.t": "Design UI/UX",
  "sk.ui.d": "CSS moderne, animations, design responsive et design systems. Focus sur l'utilisabilité, l'accessibilité et la cohérence visuelle dans des produits réels.",
  "sk.api.t": "Backend & Architecture",
  "sk.api.d": "APIs REST, microservices, architectures événementielles et systèmes distribués. Solutions de bout en bout, prêtes pour la production.",
  "sk.cloud.t": "Cloud & DevOps",
  "sk.cloud.d": "AWS (Lambda, S3, EC2, Cognito, SES), Docker, CI/CD, Vercel, GCP. Déploiement, monitoring et optimisation de systèmes en production.",
  "sk.db.t": "Bases de données",
  "sk.db.d": "PostgreSQL, MySQL, Prisma et Sequelize. Modélisation relationnelle, migrations, multi-tenancy et transactions cohérentes dans des systèmes en production.",
  "sk.ai.t": "Intégration de l'IA",
  "sk.ai.d": "Intégration de LLMs (OpenAI, Anthropic) et de MCPs sur mesure dans des produits réels, quand ils résolvent un problème métier concret.",
  "sk.tech": "Technologies & outils",

  /* ---- Meta ---- */
  "meta.lang.t": "Langues",
  "meta.lang.es": "🇦🇷 Espagnol (Natif)",
  "meta.lang.en": "🇺🇸 Anglais (Courant)",
  "meta.lang.pt": "🇧🇷 Portugais (Avancé)",
  "meta.method.t": "Méthodologies agiles",
  "meta.method.1": "Scrum · Kanban · XP",
  "meta.tools.t": "Outils",
  "meta.tools.1": "Git (GitHub / GitLab)",
  "meta.tools.2": "Docker · Postman",
  "meta.tools.3": "VS Code · Cursor · Windsurf",
  "meta.plat.t": "OS & plateformes",
  "meta.plat.1": "macOS · Windows · Linux",
  "meta.plat.2": "iOS · Android",

  /* ---- Expérience ---- */
  "exp.eyebrow": "EXPÉRIENCE",
  "exp.title": "Expérience professionnelle",
  "exp.subtitle": "Mon parcours en tant que développeur Full Stack et Frontend sur des projets à fort impact.",
  "exp.new": "RÉCENT",

  /* CaseBridge */
  "exp.cb.pos": "Développeur Full Stack (orienté Backend)",
  "exp.cb.co": "CaseBridge — Scylla Technologies",
  "exp.cb.meta": "Avr. 2026 – Mai 2026 · 🌎 Remote",
  "exp.cb.desc": "Plateforme SaaS de santé pour la gestion de dossiers cliniques, la documentation médicale et les orientations, traitant des données patients sensibles (PHI). J'ai été l'un des principaux contributeurs backend (189 commits sur les deux dépôts, ~75 % backend / 25 % frontend) sur une architecture hexagonale avec CQRS, un event bus in-process et un Unit of Work transactionnel.",
  "exp.cb.h1": "Ce que j'ai fait",
  "exp.cb.b1": "Construction du module de notes cliniques (SOAP) depuis zéro : modèle de domaine, persistance Prisma, documentation OpenAPI et suite de tests.",
  "exp.cb.b2": "Migration complète de l'intégration AWS du SDK v2 au v3 (Cognito, S3, SES) et remplacement des buffers en mémoire par du streaming de fichiers vers S3.",
  "exp.cb.b3": "Mise en place d'un cache d'analytics dans Redis avec invalidation pilotée par des événements de domaine.",
  "exp.cb.b4": "Renforcement de la sécurité backend : mitigation SSRF, XSS et injection, ainsi que durcissement de l'authentification et des sessions.",
  "exp.cb.b5": "Côté frontend : Document Center avec uploads, archivage/restauration de dossiers et import de leads par CSV.",

  /* Usados Europa */
  "exp.ue.pos": "Développeur Full Stack",
  "exp.ue.co": "Usados Europa",
  "exp.ue.meta": "2026 – Présent · 🌎 Remote / Anvers, Belgique",
  "exp.ue.sub": "Ingénierie stratégique & Product Ownership technique",
  "exp.ue.desc": "Je pilote l'ensemble du cycle de vie de la plateforme Usados Europa, en faisant le pont entre la vision business et l'exécution technique de haut niveau, avec un focus sur la scalabilité du produit et l'efficacité d'ingénierie.",
  "exp.ue.b1": "Feuille de route technique & stratégie : je transforme des besoins métier complexes en architectures techniques évolutives, en gérant le projet des accords avec les parties prenantes jusqu'au déploiement en production.",
  "exp.ue.b2": "Maîtrise de la stack MERN : je conçois et supervise des architectures robustes avec MongoDB, Express, React et Node.js, en garantissant l'intégrité des données et la performance en forte concurrence.",
  "exp.ue.b3": "Leadership d'ingénierie : j'accompagne l'équipe de développement en Agile, en promouvant le Clean Code, les peer reviews et l'amélioration continue.",
  "exp.ue.b4": "Gestion des parties prenantes : communication directe avec les partenaires stratégiques pour garder la feuille de route technique alignée avec les KPIs business.",

  /* Self Employed */
  "exp.se.pos": "Développeur Full Stack",
  "exp.se.co": "Indépendant",
  "exp.se.meta": "2024 – Présent · 🌎 Remote",
  "exp.se.sub": "Intégration IA & Automatisation",
  "exp.se.desc": "J'ai fait évoluer mon flux de travail en intégrant l'IA générative et l'automatisation, obtenant une réduction de 30 à 40 % des délais de livraison des MVP et une meilleure robustesse architecturale.",
  "exp.se.b1": "Intégration IA & automatisation : j'intègre des APIs de modèles de langage (OpenAI, Anthropic) dans des workflows de traitement de texte, de génération de contenu et d'assistants sur mesure.",
  "exp.se.b2": "Prompt engineering & outillage : usage avancé de GitHub Copilot et Cursor, ainsi que des automatisations sur mesure pour accélérer le codage, le débogage et les tests.",
  "exp.se.b3": "Cœur full stack : solutions de bout en bout avec des front-ends React/Vue, des back-ends Node.js/PHP et un déploiement cloud.",
  "exp.se.b4": "Efficacité : optimisation des processus grâce à des scripts d'automatisation, réduisant les erreurs manuelles de 25 %.",

  /* AIometrix */
  "exp.ax.pos": "Développeur Full Stack",
  "exp.ax.co": "AIometrix — Bahr & Co",
  "exp.ax.meta": "2024 · 🌎 Remote / États-Unis",
  "exp.ax.b1": "Architecture moderne évolutive : conception et déploiement d'applications web hautes performances avec Next.js, améliorant le SEO et réduisant les temps de chargement de 30 % via SSR/SSG.",
  "exp.ax.b2": "Logique pilotée par l'IA : connexion des LLMs à la logique métier, permettant des fonctionnalités comme les requêtes produit automatisées et le traitement intelligent des commandes.",
  "exp.ax.b3": "Performance à grande échelle : optimisation des opérations d'IA pour de forts volumes de requêtes, en affinant les APIs et le cache pour réduire de 20 % la charge d'infrastructure.",

  /* ODEA */
  "exp.od.pos": "Ingénieur Frontend & Architecture",
  "exp.od.co": "ODEA",
  "exp.od.meta": "2023 – 2024 · 🌎 Remote / Argentine",
  "exp.od.sub": "Développement stratégique & Optimisation des performances",
  "exp.od.b1": "JavaScript vanilla évolutif : applications web sans framework utilisant du JavaScript modulaire avancé (ES6+).",
  "exp.od.b2": "Intelligence géospatiale (GIS) : interfaces de cartes sur mesure et couches GIS, analysant et projetant des données spatiales issues de CSV vers des visualisations interactives.",
  "exp.od.b3": "Gestion d'état & d'événements : programmation réactive via des event listeners personnalisés, des triggers et des patterns Pub/Sub.",
  "exp.od.b4": "Bonnes pratiques d'ingénierie : structures de dossiers évolutives (Atomic Design / Clean Architecture) et une réduction de 40 % de la taille des bundles par rapport aux frameworks standards.",

  /* Colegium */
  "exp.cg.pos": "Développeur Full Stack",
  "exp.cg.co": "Colegium",
  "exp.cg.meta": "2022 – 2023 · 🌎 Remote / Amérique latine",
  "exp.cg.sub": "Intégration IA & Intelligence éducative",
  "exp.cg.desc": "J'ai dirigé l'intégration de l'IA générative et de l'analyse de données pour optimiser l'écosystème éducatif pour quatre segments d'utilisateurs clés :",
  "exp.cg.b1": "Enseignants : un assistant IA qui réduit de 40 % le temps de planification des cours, en alignant le contenu sur les standards pédagogiques.",
  "exp.cg.b2": "Étudiants : un moteur NLP qui génère des résumés d'étude fidèles à partir du matériel de cours.",
  "exp.cg.b3": "Direction : un tableau de bord transformant des données académiques brutes en insights prédictifs, identifiant les étudiants à risque avec 90 % de précision.",
  "exp.cg.b4": "Personnel administratif : workflows optimisés grâce à des intégrations IA, réduisant les erreurs de saisie manuelle de 25 %.",

  /* Electro3 */
  "exp.e3.pos": "Développeur Full Stack",
  "exp.e3.co": "Electro3",
  "exp.e3.meta": "Janv. 2021 – Mai 2023 · 💼 Présentiel / Argentine",
  "exp.e3.b1": "Frontend : composants UI avancés avec Vue.js et Vuex, consommation d'APIs RESTful via Axios, et tests E2E avec Cypress (taux de régression quasi nul).",
  "exp.e3.b2": "Backend & données : services évolutifs avec Node.js (Express) et PHP (CodeIgniter) ; conception et optimisation de schémas SQL avec MySQL.",
  "exp.e3.b3": "Méthodologies : Scrum avec Jira/Trello, gestion de versions avancée avec Git et workflows CI sur GitLab.",
  "exp.e3.b4": "Projets clés : SIIS (application pour la police de San Juan), Totems Admin (bornes libre-service) et Punteros BL.",

  /* ---- Projets ---- */
  "pj.eyebrow": "PROJETS",
  "pj.title": "Mes projets",
  "pj.subtitle": "Mes propres produits en production, ainsi que des projets qui montrent ma polyvalence en tant que développeur Full Stack.",
  "pj.disclaimer": "Remarque : les projets privés des entreprises avec lesquelles j'ai travaillé ne peuvent pas être présentés ici en raison d'accords de confidentialité.",
  "pj.cat.real": "Applications & services réels",
  "pj.cat.edu": "Démos éducatives et de design",
  "pj.pa.t": "Pay Alert – Alertes de paiement vérifiées",
  "pj.pa.d": "Plateforme SaaS qui connecte le compte Mercado Pago d'un commerce via OAuth et notifie chaque paiement en temps réel (WebSocket + notifications push natives), sans partager le compte avec les employés. Rôles granulaires, export des paiements et validation fiscale AFIP.",
  "pj.gd.t": "Galpón Digital – Gestion pour quincailleries",
  "pj.gd.d": "Logiciel de gestion des stocks et de traçabilité pour quincailleries, centré sur un Kardex immuable et la rapidité de recherche au comptoir. Inclut la facturation, les bons de livraison, le contrôle de caisse et une recherche de catalogue assistée par IA.",
  "pj.pass.t": "Passwords Admin – Partage sécurisé",
  "pj.pass.d": "Application web pour partager des identifiants en toute sécurité entre membres d'une équipe, gérant des données sensibles au sein de groupes.",
  "pj.glass.t": "Glass Effect UI",
  "pj.glass.d": "Une interface d'entreprise fictive avec un effet glassmorphism moderne — une démo pédagogique de design web.",
  "pj.flex.t": "Flexbox Layouts",
  "pj.flex.d": "Une démonstration pratique de CSS Flexbox pour des mises en page responsives.",
  "pj.link": "Ouvrir ↗",

  /* ---- Contact ---- */
  "ct.eyebrow": "CONTACT",
  "ct.title": "Un projet en tête ?",
  "ct.subtitle": "Discutons.",
  "ct.schedule.t": "Planifier un rendez-vous",
  "ct.schedule.l": "Planifier",
  "ct.phone.t": "Téléphone",
  "ct.email.t": "Email",
  "ct.loc.t": "Résidence actuelle",
  "ct.loc.v": "San Juan, Argentine",
  "ct.social.t": "Réseaux sociaux",
  "ct.cv.t": "CV",
  "ct.cv.en": "Télécharger le CV (EN)",
  "ct.cv.es": "Télécharger le CV (ES)",
  "ct.form.name": "Nom",
  "ct.form.email": "Email",
  "ct.form.msg": "Message",
  "ct.form.send": "Envoyer le message",
  "ct.form.sending": "Envoi en cours...",
  "ct.form.ok": "Message envoyé avec succès.",
  "ct.form.err": "Une erreur s'est produite. Veuillez réessayer.",

  /* ---- Footer ---- */
  "ft.role": "Développeur Full Stack · Ingénieur Systèmes",
  "ft.rights": "Tous droits réservés."
};

window.I18N_PT = {
  /* ---- Nav ---- */
  "nav.about": "Sobre mim",
  "nav.experience": "Experiência",
  "nav.projects": "Projetos",
  "nav.contact": "Contato",

  /* ---- Hero ---- */
  "hero.eyebrow": "FULL STACK · ENGENHARIA DE SISTEMAS",
  "hero.h1": "Eu construo <em>software real</em>, de ponta a ponta.",
  "hero.lead": "Sou <b>Guille Andrada</b>, Desenvolvedor Full Stack e Engenheiro de Sistemas. Eu projeto, construo e entrego produtos completos — backend, frontend, dados e IA quando ela agrega valor real.",
  "hero.cta1": "Ver projetos",
  "hero.cta2": "Vamos conversar",
  "hero.card1.t": "Arquitetura & Backend",
  "hero.card1.d": "APIs REST, bancos de dados relacionais e sistemas orientados a eventos, prontos para produção.",
  "hero.card2.t": "Aplicações full stack",
  "hero.card2.d": "Produtos web escaláveis de ponta a ponta: React/Next no front, Node/Fastify no back.",
  "hero.card3.t": "Integração de IA",
  "hero.card3.d": "LLMs conectados à lógica de negócio quando resolvem um problema real, não como um fim em si mesmo.",
  "hero.strip": "Stack",

  /* ---- Sobre ---- */
  "about.eyebrow": "SOBRE",
  "about.title": "Sobre mim",
  "about.p1": "Sou Desenvolvedor Full Stack e Engenheiro de Sistemas, com experiência na construção de produtos web completos: do modelo de dados e da arquitetura do backend até a interface final. Trabalhei em projetos que vão desde um SaaS de saúde com dados sensíveis até plataformas próprias em produção para comércios e PMEs.",
  "about.p2": "Meu foco é entregar soluções limpas, eficientes e escaláveis. Sou apaixonado por frameworks de front-end (React, Vue, Next.js), back-end com Node.js e Python/Django, arquiteturas orientadas a eventos e bancos de dados relacionais. Também integro IA (LLMs, MCPs) quando ela resolve um problema concreto do produto.",

  /* ---- Habilidades ---- */
  "sk.web.t": "Desenvolvimento Web",
  "sk.web.d": "Next.js (SSR/SSG), React, Vue.js, Node.js, Django. Interfaces modernas, dashboards de alto tráfego e apps web escaláveis orientadas a produto.",
  "sk.ui.t": "Design UI/UX",
  "sk.ui.d": "CSS moderno, animações, design responsivo e design systems. Foco em usabilidade, acessibilidade e consistência visual em produtos reais.",
  "sk.api.t": "Backend & Arquitetura",
  "sk.api.d": "APIs REST, microsserviços, arquiteturas orientadas a eventos e sistemas distribuídos. Soluções end-to-end, prontas para produção.",
  "sk.cloud.t": "Cloud & DevOps",
  "sk.cloud.d": "AWS (Lambda, S3, EC2, Cognito, SES), Docker, CI/CD, Vercel, GCP. Deploy, monitoramento e otimização de sistemas em produção.",
  "sk.db.t": "Bancos de dados",
  "sk.db.d": "PostgreSQL, MySQL, Prisma e Sequelize. Modelagem relacional, migrations, multi-tenancy e transações consistentes em sistemas produtivos.",
  "sk.ai.t": "Integração de IA",
  "sk.ai.d": "Integração de LLMs (OpenAI, Anthropic) e MCPs sob medida em produtos reais, quando resolvem um problema concreto de negócio.",
  "sk.tech": "Tecnologias & ferramentas",

  /* ---- Meta ---- */
  "meta.lang.t": "Idiomas",
  "meta.lang.es": "🇦🇷 Espanhol (Nativo)",
  "meta.lang.en": "🇺🇸 Inglês (Fluente)",
  "meta.lang.pt": "🇧🇷 Português (Avançado)",
  "meta.method.t": "Metodologias ágeis",
  "meta.method.1": "Scrum · Kanban · XP",
  "meta.tools.t": "Ferramentas",
  "meta.tools.1": "Git (GitHub / GitLab)",
  "meta.tools.2": "Docker · Postman",
  "meta.tools.3": "VS Code · Cursor · Windsurf",
  "meta.plat.t": "SO & plataformas",
  "meta.plat.1": "macOS · Windows · Linux",
  "meta.plat.2": "iOS · Android",

  /* ---- Experiência ---- */
  "exp.eyebrow": "EXPERIÊNCIA",
  "exp.title": "Experiência profissional",
  "exp.subtitle": "Minha trajetória como desenvolvedor Full Stack e Frontend em projetos de alto impacto.",
  "exp.new": "NOVO",

  /* CaseBridge */
  "exp.cb.pos": "Desenvolvedor Full Stack (foco em Backend)",
  "exp.cb.co": "CaseBridge — Scylla Technologies",
  "exp.cb.meta": "Abr 2026 – Mai 2026 · 🌎 Remoto",
  "exp.cb.desc": "Plataforma SaaS de saúde para gestão de casos clínicos, documentação médica e encaminhamentos, lidando com dados sensíveis de pacientes (PHI). Fui um dos principais contribuidores do backend (189 commits nos dois repositórios, ~75% backend / 25% frontend) sobre uma arquitetura hexagonal com CQRS, event bus in-process e Unit of Work transacional.",
  "exp.cb.h1": "O que eu fiz",
  "exp.cb.b1": "Construí do zero o módulo de notas clínicas (SOAP): modelo de domínio, persistência com Prisma, documentação OpenAPI e suíte de testes.",
  "exp.cb.b2": "Migrei completamente a integração AWS do SDK v2 para v3 (Cognito, S3, SES) e substituí buffers em memória por streaming de arquivos para o S3.",
  "exp.cb.b3": "Implementei cache de analytics no Redis com invalidação orientada por eventos de domínio.",
  "exp.cb.b4": "Apliquei hardening de segurança no backend: mitigação de SSRF, XSS e injeção, além de reforço de autenticação e sessões.",
  "exp.cb.b5": "No frontend: Document Center com upload, arquivamento/restauração de casos e importação de leads via CSV.",

  /* Usados Europa */
  "exp.ue.pos": "Desenvolvedor Full Stack",
  "exp.ue.co": "Usados Europa",
  "exp.ue.meta": "2026 – Presente · 🌎 Remoto / Antuérpia, Bélgica",
  "exp.ue.sub": "Engenharia Estratégica & Product Ownership Técnico",
  "exp.ue.desc": "Lidero todo o ciclo de vida da plataforma Usados Europa, atuando como ponte entre a visão de negócio e a execução técnica de alto nível, com foco em escalabilidade do produto e eficiência de engenharia.",
  "exp.ue.b1": "Roadmap e estratégia técnica: transformo requisitos de negócio complexos em arquiteturas técnicas escaláveis, gerenciando o projeto desde os acordos com stakeholders até o deploy em produção.",
  "exp.ue.b2": "Domínio do stack MERN: projeto e superviso arquiteturas robustas com MongoDB, Express, React e Node.js, garantindo integridade de dados e performance em alta concorrência.",
  "exp.ue.b3": "Liderança de engenharia: mentorio a equipe de dev sob Agile, promovendo Clean Code, peer reviews e melhoria contínua.",
  "exp.ue.b4": "Gestão de stakeholders: comunicação direta com parceiros estratégicos para manter o roadmap técnico alinhado aos KPIs de negócio.",

  /* Self Employed */
  "exp.se.pos": "Desenvolvedor Full Stack",
  "exp.se.co": "Autônomo",
  "exp.se.meta": "2024 – Presente · 🌎 Remoto",
  "exp.se.sub": "Integração de IA & Automação",
  "exp.se.desc": "Evoluí meu fluxo de trabalho integrando IA generativa e automação, alcançando uma redução de 30–40% nos prazos de entrega de MVPs e maior robustez arquitetural.",
  "exp.se.b1": "Integração de IA e automação: integro APIs de modelos de linguagem (OpenAI, Anthropic) em fluxos de trabalho para processamento de texto, geração de conteúdo e assistentes personalizados.",
  "exp.se.b2": "Prompt engineering e ferramentas: uso avançado de GitHub Copilot e Cursor, além de automações próprias para acelerar coding, debugging e testes.",
  "exp.se.b3": "Full Stack core: soluções end-to-end com React/Vue no front, Node.js/PHP no back e deploy na nuvem.",
  "exp.se.b4": "Eficiência: otimização de processos com scripts de automação, reduzindo erros manuais em 25%.",

  /* AIometrix */
  "exp.ax.pos": "Desenvolvedor Full Stack",
  "exp.ax.co": "AIometrix — Bahr & Co",
  "exp.ax.meta": "2024 · 🌎 Remoto / EUA",
  "exp.ax.b1": "Arquitetura moderna e escalável: arquitetei e implantei aplicações web de alta performance com Next.js, melhorando o SEO e reduzindo o tempo de carregamento em 30% via SSR/SSG.",
  "exp.ax.b2": "Lógica orientada por IA: conectei LLMs à lógica de negócio, viabilizando funcionalidades como consultas automatizadas de produtos e processamento inteligente de pedidos.",
  "exp.ax.b3": "Performance em escala: otimizei operações de IA para altos volumes de requisições, refinando APIs e cache para reduzir o overhead de infraestrutura em 20%.",

  /* ODEA */
  "exp.od.pos": "Engenheiro de Frontend & Arquitetura",
  "exp.od.co": "ODEA",
  "exp.od.meta": "2023 – 2024 · 🌎 Remoto / Argentina",
  "exp.od.sub": "Desenvolvimento Estratégico & Otimização de Performance",
  "exp.od.b1": "Vanilla JS escalável: aplicações web sem framework usando JavaScript modular avançado (ES6+).",
  "exp.od.b2": "Inteligência geoespacial (GIS): interfaces de mapas personalizadas e camadas GIS, processando e projetando dados espaciais de CSV em visualizações interativas.",
  "exp.od.b3": "Gestão de estado e eventos: programação reativa via event listeners personalizados, triggers e padrões Pub/Sub.",
  "exp.od.b4": "Boas práticas de engenharia: estruturas de pastas escaláveis (Atomic Design / Clean Architecture) e redução de 40% no tamanho dos bundles em relação a frameworks padrão.",

  /* Colegium */
  "exp.cg.pos": "Desenvolvedor Full Stack",
  "exp.cg.co": "Colegium",
  "exp.cg.meta": "2022 – 2023 · 🌎 Remoto / América Latina",
  "exp.cg.sub": "Integração de IA & Inteligência Educacional",
  "exp.cg.desc": "Liderei a integração de IA generativa e data analytics para otimizar o ecossistema educacional em quatro segmentos-chave de usuários:",
  "exp.cg.b1": "Docentes: um assistente de IA que reduz em 40% o tempo de planejamento de aulas, alinhando o conteúdo aos padrões pedagógicos.",
  "exp.cg.b2": "Estudantes: um motor de NLP que gera resumos de estudo de alta fidelidade a partir do material de aula.",
  "exp.cg.b3": "Diretores: um dashboard que transforma dados acadêmicos brutos em insights preditivos, identificando estudantes em risco com 90% de precisão.",
  "exp.cg.b4": "Equipe: fluxos administrativos otimizados via integrações de IA, reduzindo erros de digitação manual em 25%.",

  /* Electro3 */
  "exp.e3.pos": "Desenvolvedor Full Stack",
  "exp.e3.co": "Electro3",
  "exp.e3.meta": "Jan 2021 – Mai 2023 · 💼 Presencial / Argentina",
  "exp.e3.b1": "Frontend: componentes de UI avançados com Vue.js e Vuex, consumo de APIs RESTful via Axios e testes E2E com Cypress (taxa de regressão quase nula).",
  "exp.e3.b2": "Backend e dados: serviços escaláveis com Node.js (Express) e PHP (CodeIgniter); design e otimização de esquemas SQL com MySQL.",
  "exp.e3.b3": "Metodologias: Scrum com Jira/Trello, controle de versão avançado com Git e workflows de CI no GitLab.",
  "exp.e3.b4": "Projetos-chave: SIIS (app da Polícia de San Juan), Totems Admin (terminais self-service) e Punteros BL.",

  /* ---- Projetos ---- */
  "pj.eyebrow": "PROJETOS",
  "pj.title": "Meus projetos",
  "pj.subtitle": "Meus próprios produtos em produção, além de projetos que mostram minha versatilidade como desenvolvedor Full Stack.",
  "pj.disclaimer": "Nota: os projetos privados das empresas com as quais trabalhei não podem ser incluídos aqui devido a acordos de confidencialidade.",
  "pj.cat.real": "Aplicações e serviços reais",
  "pj.cat.edu": "Demos educacionais e de design",
  "pj.pa.t": "Pay Alert – Alertas de pagamento verificados",
  "pj.pa.d": "Plataforma SaaS que conecta a conta Mercado Pago de um comércio via OAuth e notifica cada pagamento em tempo real (WebSocket + push nativo), sem compartilhar a conta com funcionários. Papéis granulares, exportação de pagamentos e validação fiscal via AFIP.",
  "pj.gd.t": "Galpón Digital – Gestão para lojas de ferragens",
  "pj.gd.d": "Software de gestão de estoque e rastreabilidade para lojas de ferragens, com foco em um Kardex imutável e velocidade de busca no balcão. Inclui faturamento, notas de remessa, controle de caixa e busca de catálogo assistida por IA.",
  "pj.pass.t": "Passwords Admin – Compartilhamento seguro",
  "pj.pass.d": "App web para compartilhar credenciais com segurança entre membros de uma equipe, gerenciando dados sensíveis dentro de grupos.",
  "pj.glass.t": "Glass Effect UI",
  "pj.glass.d": "Uma interface de empresa fictícia com efeito glassmorphism moderno — uma demo educativa de design web.",
  "pj.flex.t": "Flexbox Layouts",
  "pj.flex.d": "Uma demonstração prática de CSS Flexbox para layouts responsivos.",
  "pj.link": "Abrir ↗",

  /* ---- Contato ---- */
  "ct.eyebrow": "CONTATO",
  "ct.title": "Tem um projeto em mente?",
  "ct.subtitle": "Vamos conversar.",
  "ct.schedule.t": "Agendar uma reunião",
  "ct.schedule.l": "Agendar",
  "ct.phone.t": "Telefone",
  "ct.email.t": "Email",
  "ct.loc.t": "Residência atual",
  "ct.loc.v": "San Juan, Argentina",
  "ct.social.t": "Redes sociais",
  "ct.cv.t": "Currículo",
  "ct.cv.en": "Baixar currículo (EN)",
  "ct.cv.es": "Baixar currículo (ES)",
  "ct.form.name": "Nome",
  "ct.form.email": "Email",
  "ct.form.msg": "Mensagem",
  "ct.form.send": "Enviar mensagem",
  "ct.form.sending": "Enviando...",
  "ct.form.ok": "Mensagem enviada com sucesso.",
  "ct.form.err": "Ocorreu um erro. Tente novamente.",

  /* ---- Rodapé ---- */
  "ft.role": "Full Stack Developer · Engenheiro de Sistemas",
  "ft.rights": "Todos os direitos reservados."
};
