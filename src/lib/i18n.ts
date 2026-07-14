import { useEffect, useState } from "react";

export type SupportedLanguage = "en" | "es";
export const LANGUAGE_STORAGE_KEY = "portfolio-language";
export const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

export interface ProjectData {
  title: string;
  github: string;
  website: string;
  documentation: string;
  description: string[];
}

export interface EducationData {
  institution: string;
  location: string;
  degree: string;
  period: string;
}

export interface WorkExperienceData {
  company: string;
  location: string;
  position: string;
  period: string;
}

export interface SkillsData {
  programmingLanguages: string[];
  frontendDevelopment: string[];
  backendDevelopment: string[];
  databaseAndStorage: string[];
  cloudAndDevOps: string[];
  toolsAndServices: string[];
}

export interface LocalizedContent {
  projects: ProjectData[];
  education: EducationData[];
  workExperience: WorkExperienceData[];
  skills: SkillsData;
}

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
    },
    sections: {
      projects: "Projects",
      skills: "Skills",
      experience: "Work Experience",
      education: "Education",
    },
    projects: {
      viewSite: "View site",
      viewDocumentation: "View documentation",
      viewOnGitHub: "View on GitHub",
    },
    skills: {
      programmingLanguages: "Programming Languages",
      frontendDevelopment: "Frontend Development",
      backendDevelopment: "Backend Development",
      databaseAndStorage: "Database & Storage",
      cloudAndDevOps: "Cloud & DevOps",
      toolsAndServices: "Tools & Services",
    },
    footer: {
      copyRight: "All rights reserved.",
      builtWith: "Built with",
      and: "and",
      source: "This site was generated using a template from",
      repository: "Rishikesh S.'s repository",
    },
    hero: {
      title: "Computer Systems",
      location: "Panama, Panama City",
      description: [
        "Hi, I'm Elmer, I hold a B.S. in Computer Systems. I'm passionate about software development and building scalable enterprise solutions.",
        "As an Information Technology professional, I understand the importance of providing solutions that are not only effective but also accurately aligned with requirements. Furthermore, I strive to look beyond the immediate context, mitigating risks derived from systems implementation.",
      ],
      profileAlt: "Profile picture",
    },
    header: {
      toggleTheme: "Toggle theme",
      toggleLanguage: "Toggle language",
    },
  },
  es: {
    nav: {
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia laboral",
      education: "Educación",
    },
    sections: {
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia laboral",
      education: "Educación",
    },
    projects: {
      viewSite: "Ver sitio",
      viewDocumentation: "Ver documentación",
      viewOnGitHub: "Ver en GitHub",
    },
    skills: {
      programmingLanguages: "Lenguajes de programación",
      frontendDevelopment: "Desarrollo frontend",
      backendDevelopment: "Desarrollo backend",
      databaseAndStorage: "Bases de datos y almacenamiento",
      cloudAndDevOps: "Nube y DevOps",
      toolsAndServices: "Herramientas y servicios",
    },
    footer: {
      copyRight: "Todos los derechos reservados.",
      builtWith: "Construido con",
      and: "y",
      source: "Este sitio fue generado usando una plantilla de",
      repository: "el repositorio de Rishikesh S.",
    },
    hero: {
      title: "Sistemas Computacionales",
      location: "Panama, Ciudad de Panama",
      description: [
        "Hola, soy Elmer Gonzalez, licenciado en Sistemas Computacionales. Me apasiona el desarrollo de software y la creación de soluciones empresariales escalables.",
        "Como profesional de Tecnologías de la Información, entiendo la importancia de proveer soluciones que no solo sean efectivas, sino que también estén alineadas con los requisitos. Además, me esfuerzo por mirar más allá del contexto inmediato, mitigando riesgos derivados de la implementación de sistemas.",
      ],
      profileAlt: "Foto de perfil",
    },
    header: {
      toggleTheme: "Cambiar tema",
      toggleLanguage: "Cambiar idioma",
    },
  },
};

export const localizedContent: Record<SupportedLanguage, LocalizedContent> = {
  en: {
    projects: [
      {
        title: "Movish",
        github: "https://github.com/elmergj/Movish",
        website: "https://github.com/elmergj/Movish",
        documentation: "https://github.com/elmergj/Movish#readme",
        description: [
          "Movish is the core of my personal project for tracking movies and TV shows.",
          "It contains the business logic, security controls, integration features, and everything else needed for this platform to be used by mobile and web users.",
        ],
      },
      {
        title: "Movish - Android Client",
        github: "https://github.com/elmergj/Movish-app",
        website: "https://github.com/elmergj/Movish-app",
        documentation: "https://github.com/elmergj/Movish-app#readme",
        description: [
          "My first mobile client for Movish. This project is an Android client that provides a simple and user-friendly interface for using the platform.",
          "Developed using best practices from the Android SDK and Jetpack Compose.",
        ],
      },
    ],
    education: [
      {
        institution: "Universidad Interamericana de Panamá",
        location: "Panama, Panama City",
        degree: "Bachelor of Science in Computer Systems with a concentration in Networking and Software Development",
        period: "2019 - 2025",
      },
    ],
    workExperience: [
      {
        company: "Sherwin-Williams de C.A.",
        location: "Panama, Panama City",
        position: "Sales Assistant",
        period: "Oct 2020 - Sep 2025",
      },
    ],
    skills: {
      programmingLanguages: ["Java", "Kotlin"],
      frontendDevelopment: ["HTML", "CSS"],
      backendDevelopment: ["Spring Framework"],
      databaseAndStorage: ["MariaDB", "MySQL", "PostgreSQL"],
      cloudAndDevOps: ["AWS Cloud", "Git/Github"],
      toolsAndServices: ["Figma", "Miro", "Microsoft 365"],
    },
  },
  es: {
    projects: [
      {
        title: "Movish",
        github: "https://github.com/elmergj/Movish",
        website: "https://github.com/elmergj/Movish",
        documentation: "https://github.com/elmergj/Movish#readme",
        description: [
          "Movish es el núcleo de mi proyecto personal para rastrear películas y series de televisión.",
          "Contiene la lógica de negocio, controles de seguridad, funciones de integración y todo lo necesario para que esta plataforma sea utilizada por usuarios móviles y web.",
        ],
      },
      {
        title: "Movish - Cliente Android",
        github: "https://github.com/elmergj/Movish-app",
        website: "https://github.com/elmergj/Movish-app",
        documentation: "https://github.com/elmergj/Movish-app#readme",
        description: [
          "Mi primer cliente móvil para Movish. Este proyecto es un cliente Android que ofrece una interfaz sencilla y fácil de usar para emplear la plataforma.",
          "Desarrollado con las mejores prácticas del Android SDK y Jetpack Compose.",
        ],
      },
    ],
    education: [
      {
        institution: "Universidad Interamericana de Panamá",
        location: "Panama, Panama City",
        degree: "Licenciatura en Sistemas Computacionales con énfasis en Redes y Desarrollo de Software",
        period: "2019 - 2025",
      },
    ],
    workExperience: [
      {
        company: "Sherwin-Williams de C.A.",
        location: "Panama, Panama City",
        position: "Asistente de ventas",
        period: "Oct 2020 - Sep 2025",
      },
    ],
    skills: {
      programmingLanguages: ["Java", "Kotlin"],
      frontendDevelopment: ["HTML", "CSS"],
      backendDevelopment: ["Spring Framework"],
      databaseAndStorage: ["MariaDB", "MySQL", "PostgreSQL"],
      cloudAndDevOps: ["AWS Cloud", "Git/Github"],
      toolsAndServices: ["Figma", "Miro", "Microsoft 365"],
    },
  },
};

export const getStoredLanguage = (): SupportedLanguage => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored === "es" ? "es" : "en";
};

export const dispatchLanguageChange = (language: SupportedLanguage) => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(LANGUAGE_CHANGE_EVENT, { detail: language })
  );
};

export const animateLanguageSwitch = (targetLanguage: SupportedLanguage) => {
  if (typeof window === "undefined") return;
  const element = document.getElementById("content-wrapper");
  const className =
    targetLanguage === "es"
      ? "language-refreshed-from-right"
      : "language-refreshed-from-left";
  if (!element) return;
  if (element.classList.contains(className)) {
    element.classList.remove(className);
    void element.offsetWidth;
  }
  element.classList.add(className);
  window.setTimeout(() => {
    element.classList.remove(className);
  }, 420);
};

export function useLanguage() {
  const [language, setLanguageState] = useState<SupportedLanguage>(() =>
    getStoredLanguage()
  );

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<SupportedLanguage>;
      setLanguageState(customEvent.detail);
    };

    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
    return () => {
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
    };
  }, []);

  const setLanguage = (language: SupportedLanguage) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    setLanguageState(language);
    dispatchLanguageChange(language);
  };

  return { language, setLanguage };
}
