// Configuración del CV - Personaliza aquí tu información
const CVConfig = {
    // Información Personal
    personal: {
        name: "Willian Ruiz Z",
        title: "Técnico en Desarrollo de Software | Especialista .NET & Angular",
        email: "Wilyd2@hotmail.com",
        phone: "+57 314 774 38 46",
        phone2: "+57 317 862 59 55",
        location: "Bello, Antioquia - Colombia",
        linkedin: "linkedin.com/in/willian-ruiz",
        github: "github.com/willy101Sotfware",
        website: "" // Opcional
    },

    // Resumen Profesional
    summary: `Técnico en Desarrollo de Software con más de 3 años de experiencia especializado en la creación de páginas web 
    completas con Angular y .NET, y desarrollo de aplicaciones WPF para quioscos de pagos. Experto en bases de datos SQL, 
    integraciones con pasarelas de pago y periféricos (datáfonos, lectores QR, biométricos). Me destaco por mi capacidad 
    para desarrollar soluciones completas desde el frontend hasta el backend, con especial enfoque en sistemas de pago 
    y aplicaciones interactivas.`,

    // Habilidades Técnicas
    skills: {
        "Desarrollo Web Completo": [
            "Angular", "TypeScript", ".NET Core", "ASP.NET Web API", "HTML5", "CSS3", "Bootstrap"
        ],
        "Bases de Datos & Backend": [
            "SQL Server", "Entity Framework", "LINQ", "Stored Procedures", "C#"
        ],
        "Aplicaciones WPF & Quioscos": [
            "WPF", "XAML", "MVVM Pattern", "Quioscos de Pagos", "Aplicaciones de Escritorio"
        ],
        "Integraciones & Periféricos": [
            "Pasarelas de Pago", "Datáfonos", "Lectores QR", "Lectores Biométricos", "Lectores de Palma"
        ],
        "Herramientas & Metodologías": [
            "Git", "GitHub", "Scrum", "Visual Studio", "VS Code", "Corel Draw"
        ]
    },

    // Experiencia Laboral
    experience: [
        {
            title: "Desarrollador 101 software",
            company: "101 SOFTWARE",
            period: "Nov 2024 - Presente",
            responsibilities: [
                "Desarrollador de aplicaciones WPF, para quioscos agilizadores, utilizando tecnología como .NET para backend",
                "Las interfaces de usuario en WPF, bases de datos SQL Server, SQLite",
                "Integraciones con múltiples pasarelas de pago, con datáfonos lectores de QR, de palma, biométricos",
                "Trabajando de la mano con el equipo de hardware, en implementaciones diversas y funcionales de este tipo de cajeros"
            ]
        },
        {
            title: "Sotfware developer codeskills solution",
            company: "Codeskills Solution",
            period: "OCT 2022- Sep 2024",
            responsibilities: [
                "Desarrollador de aplicaciones, utilizando tecnologías como .NET, desarrollando API REST con C#",
                "Implementación de interfaces con Angular, las bases de datos se realizan en SQL Server",
                "Realizamos integraciones de pasarelas de pagos, sistema de trabajo remoto con reuniones diarias",
                "Un sistema Scrum para mejor eficiencia, usando Git para control de versiones",
                "Tiempo de obra laboral: 24 meses y 13 días"
            ]
        }
    ],

    // Proyectos Destacados
    projects: [
        {
            title: "Plataforma Web Completa Angular + .NET",
            description: "Desarrollo de páginas web completas con Angular frontend y .NET backend, incluyendo APIs REST y bases de datos SQL Server.",
            technologies: ["Angular", "TypeScript", ".NET Core", "ASP.NET Web API", "SQL Server", "Bootstrap"]
        },
        {
            title: "Sistema de Quioscos Agilizadores",
            description: "Implementación de quioscos para pagos con WPF, integraciones múltiples de pasarelas y conectividad con periféricos biométricos.",
            technologies: ["WPF", "XAML", "MVVM", ".NET", "SQL Server", "SQLite", "Integraciones Hardware"]
        },
        {
            title: "Integraciones con Periféricos de Pago",
            description: "Desarrollo de conectividad con datáfonos, lectores QR, biométricos y de palma para sistemas de pago automatizados.",
            technologies: ["C#", ".NET", "WPF", "Pasarelas de Pago", "Hardware Integration"]
        }
    ],

    // Formación Académica
    education: [
        {
            degree: "Técnico en Desarrollo de Software",
            institution: "CESDE - Centro de Estudios Especializados",
            period: "Oct 2022",
            location: "Medellín, Colombia",
            status: "¡Graduado!",
            description: "Formación especializada en desarrollo de software con enfoque en tecnologías .NET, bases de datos y metodologías ágiles."
        }
    ],

    // Certificaciones
    certifications: [
        {
            title: "Complete C# Masterclass",
            provider: "Udemy",
            year: "2023"
        },
        {
            title: "Angular - The Complete Guide",
            provider: "Udemy",
            year: "2023"
        },
        {
            title: "Flutter de Cero a Experto",
            provider: "Udemy",
            year: "2023"
        },
        {
            title: "ASP.NET Clean Architecture y Domain Driven Design (DDD)",
            provider: "Plataforma Online",
            year: "2023"
        },
        {
            title: "Metodologías Ágiles",
            provider: "Universidad UCO",
            year: "2022"
        }
    ],

    // Idiomas
    languages: [
        {
            language: "Español",
            level: "Nativo"
        }
    ],

    // Intereses y Hobbies
    interests: [
        {
            name: "Fútbol",
            icon: "fas fa-futbol"
        },
        {
            name: "Ajedrez",
            icon: "fas fa-chess"
        },
        {
            name: "Tecnología",
            icon: "fas fa-laptop-code"
        }
    ],

    // Configuración de Colores (Opcional)
    colors: {
        primary: "#3498db",
        secondary: "#2c3e50",
        accent: "#27ae60",
        warning: "#f39c12",
        danger: "#e74c3c",
        purple: "#9b59b6",
        teal: "#1abc9c"
    },

    // Configuración de Animaciones
    animations: {
        enabled: true,
        typingSpeed: 100,
        fadeInDuration: 600,
        hoverEffects: true
    }
};

// Función para aplicar la configuración al CV
function applyConfig() {
    // Aplicar información personal
    if (CVConfig.personal.name) {
        const nameElement = document.querySelector('.name');
        if (nameElement) nameElement.textContent = CVConfig.personal.name;
    }

    if (CVConfig.personal.title) {
        const titleElement = document.querySelector('.title');
        if (titleElement) titleElement.textContent = CVConfig.personal.title;
    }

    // Aplicar información de contacto
    const contactItems = document.querySelectorAll('.contact-item span');
    contactItems.forEach((item, index) => {
        const contactValues = [
            CVConfig.personal.email,
            CVConfig.personal.phone,
            CVConfig.personal.location,
            CVConfig.personal.linkedin,
            CVConfig.personal.github
        ];
        if (contactValues[index]) {
            item.textContent = contactValues[index];
        }
    });

    // Aplicar resumen profesional
    const summaryElement = document.querySelector('.summary');
    if (summaryElement && CVConfig.summary) {
        summaryElement.textContent = CVConfig.summary;
    }

    console.log('Configuración del CV aplicada exitosamente!');
}

// Función para generar habilidades dinámicamente
function generateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = '';

    Object.entries(CVConfig.skills).forEach(([category, skills]) => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        skillCategory.innerHTML = `
            <h4>${category}</h4>
            <div class="skills-list">
                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(skillCategory);
    });
}

// Función para generar experiencia dinámicamente
function generateExperience() {
    const experienceContainer = document.querySelector('.section:has(.experience-item)');
    if (!experienceContainer) return;

    const sectionContent = experienceContainer.querySelector('.section-content');
    sectionContent.innerHTML = '';

    CVConfig.experience.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        
        experienceItem.innerHTML = `
            <div class="experience-header">
                <h4 class="job-title">${exp.title}</h4>
                <span class="company">${exp.company}</span>
                <span class="period">${exp.period}</span>
            </div>
            <ul class="responsibilities">
                ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
        `;
        
        sectionContent.appendChild(experienceItem);
    });
}

// Función para generar proyectos dinámicamente
function generateProjects() {
    const projectsContainer = document.querySelector('.section:has(.project-item)');
    if (!projectsContainer) return;

    const sectionContent = projectsContainer.querySelector('.section-content');
    sectionContent.innerHTML = '';

    CVConfig.projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        
        projectItem.innerHTML = `
            <h4 class="project-title">${project.title}</h4>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        `;
        
        sectionContent.appendChild(projectItem);
    });
}

// Aplicar configuración cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un poco para que el HTML base se cargue
    setTimeout(() => {
        applyConfig();
        generateSkills();
        generateExperience();
        generateProjects();
    }, 100);
});

// Exportar configuración para uso externo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CVConfig;
}

// Hacer disponible globalmente
window.CVConfig = CVConfig;
