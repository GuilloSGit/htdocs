// Main JavaScript functionality for the portfolio website

let currentLanguage = localStorage.getItem('preferred-language') || (navigator.language.startsWith('en') ? 'en' : 'es');

const translations = {
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            experience: "Experiencia",
            projects: "Proyectos",
            contact: "Contacto",
            theme: {
                light: "Modo claro",
                dark: "Modo oscuro",
                toggle: "Cambiar tema"
            },
            themeToggle: 'Cambiar tema',
            animations: "Animaciones",
            animationsOn: 'Animaciones activadas',
            animationsOff: 'Animaciones desactivadas',
            languageTitle: 'Idiomas',
            menuOpen: 'Abrir menú',
            menuClose: 'Cerrar menú'
        },
        hero: {
            greeting: "Hola, soy",
            name: "Guille Andrada",
            title:"Desarrollador Full Stack",
            subtitle: "Desarrollador Full Stack, apasionado creador digital",
            viewProjects: "Ver Proyectos",
            contact: "Contactar"
        },
        about: {
            title: "Sobre mí",
            description1: "Soy un Desarrollador Full Stack con amplia experiencia en la construcción de aplicaciones web, enseñanza de programación y creación de recursos de diseño interactivos. Durante los últimos años, he trabajado en proyectos que van desde servicios del mundo real para municipalidades hasta aplicaciones impulsadas por APIs, así como demos educativas utilizadas en aulas para explicar tecnologías web.",
            description2: "Mi enfoque está en entregar soluciones limpias, eficientes y escalables, mientras también hago que la tecnología sea más accesible a través de ejemplos claros y enseñanza. Me apasionan los frameworks de front-end (React, Vue, Next.js), el desarrollo back-end con Python/Django y Node.js, y las prácticas de diseño modernas (Tailwind, CSS3, layouts responsivos).",
            skills: {
                webDev: {
                    title: "Desarrollo Web",
                    description: "Next.js (SSR/SSG), React, Vue.js, Node.js, Django. Desarrollo de interfaces modernas, dashboards de alto tráfico y aplicaciones web escalables orientadas a producto."
                },
                uiux: {
                    title: "Diseño UI/UX",
                    description: "Tailwind CSS, CSS3, animaciones, diseño responsivo y sistemas de diseño. Enfoque en usabilidad, accesibilidad y consistencia visual en productos reales."
                },
                apis: {
                    title: "Backend y Arquitectura",
                    description: "APIs REST, microservicios, arquitecturas orientadas a eventos y sistemas distribuidos. Experiencia diseñando soluciones end-to-end listas para producción."
                },
                cloudAndDB: {
                    title: "Cloud y DevOps",
                    description: "AWS (Lambda, S3, EC2, CloudWatch), Docker, CI/CD, Vercel, GCP. Despliegue, monitoreo y optimización de sistemas en producción con alta disponibilidad."
                },
                education: {
                    title: "Educación y Mentoría",
                    description: "Creación de recursos educativos y mentoría en programación y diseño. Experiencia enseñando conceptos técnicos complejos de forma clara y práctica."
                },
                integrations: {
                    title: "Integraciones de IA y LLMs",
                    description: "Integraciones con OpenAI API, LangChain, RAG y agentes de IA. Desarrollo de soluciones inteligentes aplicadas a productos reales y automatización de procesos."
                },
                versionControl: {
                    title: "Control de Versiones",
                    description: "Git, GitHub, GitLab, Azure, otros"
                },
                mcpDevelopment: {
                    title: "Desarrollo de MCP Personalizados",
                    description: "Desarrollo de MCPs personalizados que extienden modelos de lenguaje mediante integraciones seguras, modulares y orientadas a producto."
                },
                technologies: {
                    title: "Tecnologías y herramientas"
                },
            }
        },
        projects: {
            title: "Mis Proyectos",
            subtitle: "Este portafolio muestra tanto proyectos profesionales como recursos educativos que destacan mi versatilidad como desarrollador Full Stack + Integraciones de IA",
            categories: {
                realWorld: "🚀 Aplicaciones y Servicios del Mundo Real",
                educational: "🎨 Demos Educativos y de Diseño",
                ai: "🤖 Proyectos de IA y Experimentales"
            },
            disclaimer: "‼️ Nota: los proyectos privados de las empresas en las que trabajé no se pueden incluir aquí debido a acuerdos de confidencialidad.",
            list: {
                realWorld: {
                    busSchedule: {
                        title: "Servicio de Horarios de Colectivos – Media Agua",
                        description: "Una aplicación web simple que muestra los horarios del transporte público para el municipio de Sarmiento. Construida para proporcionar a la comunidad local un acceso rápido a los horarios de colectivos sin necesidad de una base de datos."
                    },
                    passwordsAdmin: {
                        title: "Administrador de Contraseñas – Plataforma Segura",
                        description: "Una aplicación web que permite compartir contraseñas de forma segura entre miembros del equipo. Diseñada para gestionar y compartir credenciales sensibles de manera segura dentro de grupos."
                    },
                    nasaRover: {
                        title: "Buscador de Imágenes del Rover de la NASA",
                        description: "Una aplicación web para buscar y mostrar imágenes capturadas por el Rover de Marte de la NASA. Desarrollada como parte de un desafío de codificación para Nexo, demostrando la integración de APIs y la gestión de estado."
                    },
                    chuckNorris: {
                        title: "App de Chistes de Chuck Norris 💥😂",
                        description: "Una aplicación web con Next.js que ofrece chistes ilimitados de Chuck Norris con interacciones divertidas. Los usuarios pueden marcar chistes como favoritos, calificarlos, ordenarlos e incluso compartirlos en WhatsApp."
                    },
                    unsplash: {
                        title: "Buscador de Imágenes de Unsplash",
                        description: "Un motor de búsqueda que recupera imágenes de la API de Unsplash basado en parámetros del usuario. Construido como una herramienta educativa para enseñar el consumo de APIs y frameworks de front-end."
                    }
                },
                educational: {
                    bouncingBall: {
                        title: "Animación 3D – Pelota Rebotando",
                        description: "Una animación 3D de una pelota rebotando en formas geométricas. Desarrollada como un recurso de enseñanza para clases de diseño, demostrando principios básicos de animación."
                    },
                    neonButtons: {
                        title: "Botones de Neón",
                        description: "Una colección de botones con estilo neón brillante. Creada como un ejemplo educativo para estudiantes de diseño, mostrando un estilo CSS creativo."
                    },
                    glassEffect: {
                        title: "UI de Efecto de Cristal – Compañía de Muestra",
                        description: "Una interfaz de compañía de muestra que muestra tareas con un moderno efecto de 'glassmorphism'. Diseñada como una demo de enseñanza para diseño web, destacando visuales CSS avanzados."
                    },
                    imageBlender: {
                        title: "Mezclador de Imágenes – Modos de Fusión CSS",
                        description: "Una demo que muestra efectos de fusión y enmascaramiento de imágenes con CSS. Utilizada en clases de diseño para ilustrar el poder de los modos de fusión de CSS."
                    },
                    flexbox: {
                        title: "Diseños con Flexbox",
                        description: "Una demostración práctica de CSS Flexbox para crear diseños responsivos. Proyecto educativo para ayudar a los estudiantes a comprender los conceptos de Flexbox."
                    },
                    customCursor: {
                        title: "Ejemplos de Cursor Personalizado",
                        description: "Un conjunto de demos interactivas que muestran diferentes estilos de cursor y sus aplicaciones. Construido con fines de enseñanza para explicar la personalización del cursor con CSS."
                    }
                },
                ai: {
                    aiConsole: {
                        title: "Asistente de Consola con IA",
                        description: "Un asistente de consola simple impulsado por IA que responde preguntas y realiza tareas usando LangChain y OpenAI. Proyecto personal para explorar integraciones de IA en Python con una configuración mínima."
                    },
                    resumeCritique: {
                        title: "App de Crítica de Currículum",
                        description: "Una herramienta de análisis de currículums que los critica usando el modelo GPT-4o-mini de OpenAI. Proporciona retroalimentación estructurada con un tono ligeramente sarcástico. Diseñada para ayudar a los buscadores de empleo ofreciendo críticas de currículums impulsadas por IA con un toque divertido."
                    }
                }
            }
        },
        contact: {
            title: "Contacto",
            subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
            info: {
                locationTitle: "Ubicación",
                gps_url: "Ver mapa",
                socialTitle: "Redes Sociales",
                downloadCV: "Ver CV",
                cvLink: "https://drive.google.com/file/d/1fDw2K8TeveIBcokVy20hgquURtMDmdqh/view?usp=sharing",
                phoneTitle: "Número telefónico",
                emailTitle: "Correo electrónico",
                title: "Información de Contacto",
                cvSelector: {
                  button: "Ver CV",
                  es: "Ver CV en Español",
                  en: "Ver CV en Inglés"
                }
            },
            form: {
                name: "Nombre",
                email: "Email",
                message: "Mensaje",
                send: "Enviar Mensaje",
                sending: "Enviando...",
                success: "¡Mensaje enviado con éxito!",
                error: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."
            }
        },
        languages: {
            title: "Idiomas",
            spanish: "🇦🇷 Español (Nativo)",
            english: "🇺🇸 Inglés (Profesional)",
            portugues: "🇧🇷 Portugués (Avanzado)"
        },
        tools: {
            title: "Herramientas"
        },
        platforms: {
            title: "Plataformas y S.O."
        },
        methodologies: {
            title: "Metodologías ágiles"
        },
        experience: {
            title: "Experiencia profesional",
            subtitle: "Mi trayectoria como desarrollador Full Stack y Frontend en proyectos de alto impacto",
            jobs: {
                electro3: {
                    position: "Full Stack Developer",
                    company: "Electro 3",
                    duration: "Ene 2021 – Jun 2022",
                    location: "💼 Presencial / Argentina",
                    contractType: "Contratado",
                    description: "Desarrollo de aplicaciones empresariales con frontend en Vue.js y backend en Node.js / PHP. Implementación de APIs REST, bases de datos SQL y soporte a sistemas en producción."
                },
                colegium: {
                    position: "Frontend Developer",
                    company: "Colegium",
                    duration: "Ene 2021 – Nov 2022",
                    location: "🌎 Remoto / LATAM",
                    contractType: "Contratado",
                    description: "Implementación de interfaces escolares con Vue.js y PHP. Optimización del rendimiento, mantenimiento de módulos existentes y creación de componentes reutilizables."
                },
                odea: {
                    position: "Frontend Developer",
                    company: "Odea S.A.",
                    duration: "Jun 2022 – Mar 2023",
                    location: "💼 Híbrido / Argentina",
                    contractType: "Contratado",
                    description: "Desarrollo de aplicaciones web con React y PHP. Implementación de soluciones empresariales y mantenimiento de sistemas existentes."
                },
                bahr: {
                    position: "Full Stack Developer",
                    company: "Bahr Company",
                    duration: "Mar 2023 – Nov 2024",
                    location: "🌎 Remoto / USA",
                    contractType: "Contractor",
                    description: "Desarrollo de aplicaciones web modernas con React y Node.js. Implementación de soluciones escalables y mantenimiento de código existente. Integración de IA con LangChain y OpenAI."
                },
                freelance: {
                    position: "Desarrollador Full Stack Freelance",
                    company: "Autónomo",
                    duration: "Nov 2019 – Presente",
                    location: "🌎 Remoto / Global",
                    contractType: "Freelance",
                    description: "Desarrollo de aplicaciones web personalizadas, sitios web y soluciones tecnológicas para diversos clientes. Especialización en JavaScript, React, Node.js y bases de datos."
                }
            }
        },
        footer: {
            role: "Desarrollador Full Stack",
            rights: "Todos los derechos reservados."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
            theme: {
                light: "Light mode",
                dark: "Dark mode",
                toggle: "Toggle theme"
            },
            themeToggle: 'Toggle theme',
            animations: "Animations",
            animationsOn: 'Animations on',
            animationsOff: 'Animations off',
            languageTitle: 'Languages',
            menuOpen: 'Open menu',
            menuClose: 'Close menu'
        },
        hero: {
            greeting: "Hi, I'm",
            name: "Guille Andrada",
            title: "Full Stack Developer",
            subtitle: "Full Stack Developer, passionate digital creator",
            viewProjects: "View Projects",
            contact: "Contact"
        },
        about: {
            title: "About Me",
            description1: "I'm a Full Stack Developer with extensive experience in building web applications, teaching programming, and creating interactive design resources. Over the past few years, I've worked on projects ranging from real-world services for municipalities to API-driven applications, as well as educational demos used in classrooms to explain web technologies.",
            description2: "My focus is on delivering clean, efficient, and scalable solutions while also making technology more accessible through clear examples and teaching. I'm passionate about front-end frameworks (React, Vue, Next.js), back-end development with Python/Django and Node.js, and modern design practices (Tailwind, CSS3, responsive layouts).",
            skills: {
                webDev: {
                    title: "Web Development",
                    description: "Next.js (SSR/SSG), React, Vue.js, Node.js, Django. Development of modern interfaces, high-traffic dashboards, and scalable product-oriented web applications."
                },
                uiux: {
                    title: "UI/UX Design",
                    description: "Tailwind CSS, CSS3, animations, responsive design, and design systems. Focused on usability, accessibility, and visual consistency in real-world products."
                },
                apis: {
                    title: "Backend & Architecture",
                    description: "REST APIs, microservices, event-driven architectures, and distributed systems. Experience designing end-to-end, production-ready solutions."
                },
                cloudAndDB: {
                    title: "Cloud & DevOps",
                    description: "AWS (Lambda, S3, EC2, CloudWatch), Docker, CI/CD, Vercel, GCP. Deployment, monitoring, and optimization of production systems with high availability."
                },
                education: {
                    title: "Education & Mentoring",
                    description: "Creation of educational resources and mentoring in programming and design. Experience teaching complex technical concepts in a clear and practical way."
                },
                integrations: {
                    title: "AI & LLM Integrations",
                    description: "Integrations with OpenAI API, LangChain, RAG, and AI agents. Building intelligent solutions applied to real-world products and process automation."
                },
                versionControl: {
                    title: "Version Control",
                    description: "Git, GitHub, GitLab, Azure, others"
                },
                mcpDevelopment: {
                    title: "Custom MCP Development",
                    description: "Development of custom MCPs that extend language models through secure, modular, product-oriented integrations."
                },
                technologies: {
                    title: "Technologies & Tools"
                },
            }
        },
        projects: {
            title: "My Projects",
            disclaimer: "‼️ Note: private projects from the companies I've worked for cannot be included here due to non-disclosure agreements.",
            subtitle: "This portfolio showcases both professional projects and educational resources that highlight my versatility as a Full Stack + AI Integrations developer",
            categories: {
                realWorld: "🚀 Real-world Apps & Services",
                educational: "🎨 Educational & Design Demos",
                ai: "🤖 AI & Experimental Projects"
            },
            list: {
                realWorld: {
                    busSchedule: {
                        title: "Bus Schedule Service – Media Agua",
                        description: "A simple web application that displays the public transportation schedule for the municipality of Sarmiento. Built to provide the local community with quick access to bus schedules without requiring a database."
                    },
                    passwordsAdmin: {
                        title: "Passwords Admin – Secure Sharing Platform",
                        description: "A web application that enables secure password sharing among team members. Designed to manage and share sensitive credentials safely within groups."
                    },
                    nasaRover: {
                        title: "NASA Rover Image Searcher",
                        description: "A web app to search and display images captured by NASA's Mars Rover. Developed as part of a coding challenge for Nexo, demonstrating API integration and state management."
                    },
                    chuckNorris: {
                        title: "Chuck Norris Jokes App 💥😂",
                        description: "A Next.js web app that delivers unlimited Chuck Norris jokes with fun interactions. Users can favorite jokes, rate them, sort them, and even share them on WhatsApp."
                    },
                    unsplash: {
                        title: "Unsplash Image Searcher",
                        description: "A search engine that retrieves images from the Unsplash API based on user parameters. Built as an educational tool to teach API consumption and front-end frameworks."
                    }
                },
                educational: {
                    bouncingBall: {
                        title: "3D Animation – Bouncing Ball",
                        description: "A 3D animation of a ball bouncing on geometric shapes. Developed as a teaching resource for design classes, demonstrating basic animation principles."
                    },
                    neonButtons: {
                        title: "Neon Buttons",
                        description: "A collection of glowing neon-style buttons. Created as an educational example for design students, showcasing creative CSS styling."
                    },
                    glassEffect: {
                        title: "Glass Effect UI – Mock Company",
                        description: "A mock company interface displaying tasks with a modern glassmorphism effect. Designed as a teaching demo for web design, highlighting advanced CSS visuals."
                    },
                    imageBlender: {
                        title: "Image Blender – CSS Blend Modes",
                        description: "A demo showcasing image blending and masking effects with CSS. Used in design classes to illustrate the power of CSS blend modes."
                    },
                    flexbox: {
                        title: "Flexbox Layouts",
                        description: "A practical demonstration of CSS Flexbox for creating responsive layouts. Educational project to help students understand Flexbox concepts."
                    },
                    customCursor: {
                        title: "Custom Cursor Examples",
                        description: "A set of interactive demos showcasing different cursor styles and their applications. Built for teaching purposes to explain cursor customization with CSS."
                    }
                },
                ai: {
                    aiConsole: {
                        title: "AI Console Assistant",
                        description: "A simple AI-powered console assistant that answers questions and performs tasks using LangChain and OpenAI. Personal project to explore AI integrations in Python with minimal setup."
                    },
                    resumeCritique: {
                        title: "Resume Critique App",
                        description: "A resume analysis tool that critiques resumes using OpenAI's GPT-4o-mini model. Provides structured feedback with a slightly sarcastic tone. Designed to assist job seekers by offering AI-driven resume critiques with a fun twist."
                    }
                }
            }
        },
        contact: {
            title: "Contact",
            subtitle: "Have a project in mind? Let's talk!",
            info: {
                locationTitle: "Current Residence",
                gps_url: "See map",
                socialTitle: "Social Media",
                downloadCV: "View Resume",
                cvLink: "https://drive.google.com/file/d/1wWklQmMN1vlP5mqylDE4Z5A0XgoxYpnT/view?usp=sharing",
                phoneTitle: "Phone Number",
                emailTitle: "Email",
                title: "Contact Information",
                cvSelector: {
                    button: "View Resume",
                    es: "Link to Spanish version",
                    en: "Link to English version"
                }
            },
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send Message",
                sending: "Sending...",
                success: "Message sent successfully!",
                error: "There was an error sending your message. Please try again."
            }
        },
        languages: {
            title: "Languages",
            spanish: "🇦🇷 Spanish (Native)",
            english: "🇺🇸 English (Proficient)",
            portugues: "🇧🇷 Portuguese (Advanced)"
        },
        methodologies: {
            title: "Agile Methodologies"
        },
        experience: {
            title: "Professional Experience",
            subtitle: "My journey as a Full Stack and Frontend developer in high-impact projects",
            jobs: {
                electro3: {
                    position: "Full Stack Developer",
                    company: "Electro 3",
                    duration: "Jan 2021 – Jun 2022",
                    location: "💼 Onsite / Argentina",
                    contractType: "Full-time",
                    description: "Development of enterprise applications with Vue.js frontend and Node.js/PHP backend. Implementation of REST APIs, SQL databases, and production system support."
                },
                colegium: {
                    position: "Frontend Developer",
                    company: "Colegium",
                    duration: "Jan 2021 – Nov 2022",
                    location: "🌎 Remote / LATAM",
                    contractType: "Full-time",
                    description: "Developing school interfaces with Vue.js and PHP. Optimizing performance, maintaining existing modules, and creating reusable components."
                },
                odea: {
                    position: "Frontend Developer",
                    company: "Odea S.A.",
                    duration: "Jun 2022 – Mar 2023",
                    location: "💼 Hybrid / Argentina",
                    contractType: "Full-time",
                    description: "Web application development with React and PHP. Implementation of business solutions and maintenance of existing systems."
                },
                bahr: {
                    position: "Full Stack Developer",
                    company: "Bahr Company",
                    duration: "Mar 2023 – Nov 2024",
                    location: "🌎 Remote / USA",
                    contractType: "Contractor",
                    description: "Development of modern web applications with React and Node.js. Implementation of scalable solutions and maintenance of existing codebase. AI integration with LangChain and OpenAI."
                },
                freelance: {
                    position: "Freelance Full Stack Developer",
                    company: "Self-employed",
                    duration: "2019 – Present",
                    location: "🌎 Remote / Global",
                    contractType: "Freelance",
                    description: "Development of custom web applications, websites, and technological solutions for various clients. Specialization in JavaScript, React, Node.js, and databases."
                }
            }
        },
        tools: {
            title: "Tools"
        },
        platforms: {
            title: "O.S. and Platforms"
        },
        footer: {
            role: "Full Stack Developer",
            rights: "All rights reserved."
        }
    }
};

function applyTranslations(translationData) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translationData, key);
        if (translation) {
            element.textContent = translation;
        }
    });

    const cvLinkElement = document.getElementById('cv-link');
    if (cvLinkElement) {
        const cvLink = getNestedTranslation(translationData, 'contact.info.cvLink');
        if (cvLink) {
            cvLinkElement.href = cvLink;
        }
    }

    // Update page title
    document.title = `${translationData.hero.name} - Full Stack`;

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Get nested translation value
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

function changeLanguage(lang) {
    if (lang === currentLanguage) return;

    currentLanguage = lang;

    if (translations[lang]) {
        applyTranslations(translations[lang]);
        document.getElementById('current-language').textContent = lang.toUpperCase();

        // Actualizar la bandera (src del img)
        const languageIcon = document.getElementById('language-icon');
        if (languageIcon) {
            languageIcon.src = lang === 'es' ? 'https://flagcdn.com/es.svg' : 'https://flagcdn.com/gb.svg';
            languageIcon.alt = lang.toUpperCase();
        }

        localStorage.setItem('preferred-language', lang);
        document.getElementById('language-dropdown').classList.add('hidden');
    }
}

function initializeLanguage() {
    // Check for saved preference or browser language
    const savedLang = localStorage.getItem('preferred-language');
    const browserLang = navigator.language.startsWith('en') ? 'en' : 'es';
    const initialLang = savedLang || browserLang;

    currentLanguage = initialLang;
    applyTranslations(translations[initialLang]);
    document.getElementById('current-language').textContent = initialLang.toUpperCase();

    // Establecer la bandera inicial
    const languageIcon = document.getElementById('language-icon');
    if (languageIcon) {
        languageIcon.src = initialLang === 'es' ? 'https://flagcdn.com/es.svg' : 'https://flagcdn.com/gb.svg';
        languageIcon.alt = initialLang.toUpperCase();
    }

    // Asegurar que el dropdown inicie cerrado
    const dropdown = document.getElementById('language-dropdown');
    if (dropdown && !dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
    }
}

// Language selector events
document.getElementById('language-selector').addEventListener('click', () => {
    document.getElementById('language-dropdown').classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    const languageOption = e.target.closest('.language-option');
    if (languageOption) {
        const lang = languageOption.getAttribute('data-lang');
        changeLanguage(lang);
        // Inicializar
        updateCVSelector();
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const body = document.body;

        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
        if (!mobileMenuOverlay.classList.contains('hidden')) {
            mobileMenuOverlay.classList.add('hidden');
        }
        body.style.overflow = ''; // Restore scroll
        // Close mobile menu properly, updating button icon as well
        closeMobileMenu();
    }
});

// Close language dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('#language-selector') && !e.target.closest('#language-dropdown')) {
        document.getElementById('language-dropdown').classList.add('hidden');
    }
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// Theme variables
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const html = document.documentElement;
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuButton = document.getElementById('mobile-menu-btn');
const body = document.body;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

// Set initial theme
if (initialTheme === 'dark') {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

// Set theme function
function setTheme(theme) {
    const isDark = theme === 'dark';
    if (isDark) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    updateThemeIcon(isDark);
}

// Toggle theme
function toggleTheme() {
    const isDark = html.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');

    // Close mobile menu if open
    if (!mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
}

// Event listeners for theme toggles
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleTheme);
}

// Mobile menu toggle functions
function openMobileMenu() {
    if (!mobileMenu || !mobileMenuOverlay) return;

    mobileMenu.classList.remove('hidden');
    mobileMenuOverlay.classList.remove('hidden');
    body.style.overflow = 'hidden';

    // Update mobile menu button icon to close
    if (mobileMenuButton) {
        mobileMenuButton.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <span class="sr-only" data-translate="nav.menuClose">Cerrar menú</span>
        `;
    }

    // Trigger reflow to enable transition
    void mobileMenu.offsetWidth;
    mobileMenu.classList.remove('-translate-x-full');
}

function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuOverlay) return;

    mobileMenu.classList.add('-translate-x-full');
    body.style.overflow = '';

    // Update mobile menu button icon to menu
    if (mobileMenuButton) {
        mobileMenuButton.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <span class="sr-only" data-translate="nav.menuOpen">Abrir menú</span>
        `;
    }

        // Wait for transition to complete before hiding
    const onTransitionEnd = () => {
        if (mobileMenu) {
            mobileMenu.removeEventListener('transitionend', onTransitionEnd);
            mobileMenu.classList.add('hidden');
        }
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.add('hidden');
        }
    };

    mobileMenu.addEventListener('transitionend', onTransitionEnd, { once: true });
}

// Add click event for mobile menu button
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        if (mobileMenu.classList.contains('hidden')) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });
}

// Add click event for mobile menu overlay
if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

// Add click events for mobile menu links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Theme and animation state
let animationsEnabled = true;

// Update theme icon and text for both desktop and mobile
function updateThemeIcon(isDark) {
    const currentLang = localStorage.getItem('preferred-language') || 'es';
    const currentTranslations = translations[currentLang] || translations['es'];

    // Get theme text based on current theme
    const themeText = isDark
        ? currentTranslations.nav.theme.light
        : currentTranslations.nav.theme.dark;

    // Update desktop theme toggle
    const desktopToggle = document.getElementById('theme-toggle');
    if (desktopToggle) {
        const icon = desktopToggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            icon.classList.add('text-primary-500');
        } else {
            desktopToggle.innerHTML = isDark
                ? '<i class="fas fa-sun text-primary-500"></i>'
                : '<i class="fas fa-moon text-primary-500"></i>';
        }
        desktopToggle.setAttribute('title', themeText);
        desktopToggle.setAttribute('aria-label', themeText);
    }

    // Update mobile theme toggle
    const mobileToggle = document.getElementById('mobile-theme-toggle');
    if (mobileToggle) {
        const icon = mobileToggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            icon.classList.add('text-primary-500', 'mr-2');
        }
        const textSpan = mobileToggle.querySelector('span[data-translate]');
        if (textSpan) {
            textSpan.textContent = themeText;
        } else {
            mobileToggle.innerHTML = `
                <i class="fas fa-${isDark ? 'sun' : 'moon'} text-primary-500 mr-2"></i>
                <span class="text-slate-200" data-translate="nav.theme.toggle">${themeText}</span>
            `;
        }
        mobileToggle.setAttribute('title', themeText);
        mobileToggle.setAttribute('aria-label', themeText);
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('animate-fade-in');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    initializeLanguage();
    // Inicializar
    updateCVSelector();

    // Check for saved animation preference or use system preference
    const savedAnimation = localStorage.getItem('animations');
    const systemPrefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    animationsEnabled = savedAnimation ? savedAnimation === 'enabled' : !systemPrefersReducedMotion;

    // Initialize animations
    if (animationsEnabled) {
        animateOnScroll();
        window.addEventListener('scroll', animateOnScroll);
    }

    // Set initial theme icon
    const savedTheme = localStorage.getItem('theme');
    const preferredLanguage = localStorage.getItem('preferred-language') || 'es';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    // Apply the theme
    if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Update theme icon with proper language
    updateThemeIcon(initialTheme === 'dark');

    // Apply translations
    if (translations[preferredLanguage]) {
        applyTranslations(preferredLanguage);
        // Inicializar
        updateCVSelector();
    }

    // Set initial mobile menu button text
    const menuButton = document.getElementById('mobile-menu-btn');
    if (menuButton) {
        menuButton.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <span class="sr-only" data-translate="nav.menu.open">Abrir menú</span>
        `;
    }
});

const cvButton = document.getElementById("cv-button");
const cvMenu = document.getElementById("cv-menu");
const cvEs = document.getElementById("cv-es");
const cvEn = document.getElementById("cv-en");

function updateCVSelector() {
  const t = translations[currentLanguage].contact.info;
  const selector = t.cvSelector;

  // Texto del botón
  cvButton.textContent = selector.button;

  // Links (fijos)
  cvEs.href = translations.es.contact.info.cvLink;
  cvEn.href = translations.en.contact.info.cvLink;

  // Textos dinámicos
  cvEs.textContent = selector.es;
  cvEn.textContent = selector.en;
}

// Toggle menú
cvButton.addEventListener("click", () => {
  cvMenu.classList.toggle("hidden");
});

// Cerrar al hacer click afuera
document.addEventListener("click", (e) => {
  if (!e.target.closest("#cv-button") && !e.target.closest("#cv-menu")) {
    cvMenu.classList.add("hidden");
  }
});
