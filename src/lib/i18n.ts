import { useEffect, useState } from "react";

export type SupportedLanguage = "en" | "es";
export const LANGUAGE_STORAGE_KEY = "portfolio-language";
export const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

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
      description: [
        "Hi, I'm Elmer. I hold a B.S. in Computer Systems and I’m passionate about software development and building scalable enterprise solutions.",
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
      description: [
        "Hola, soy Elmer. Tengo una licenciatura en Sistemas de Computación y me apasiona el desarrollo de software y la creación de soluciones empresariales escalables.",
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
