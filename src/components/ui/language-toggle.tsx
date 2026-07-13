import { Globe } from "lucide-react";
import { Button } from "./button";
import { useLanguage, translations, animateLanguageSwitch } from "@/lib/i18n";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "es" : "en";

  const handleLanguageToggle = () => {
    setLanguage(nextLanguage);
    animateLanguageSwitch(nextLanguage);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLanguageToggle}
      className="rounded-full cursor-pointer px-2"
      aria-label={translations[language].header.toggleLanguage}
    >
      <span className="flex items-center gap-2">
        <Globe className="h-4 w-4" />
        <span className="font-semibold">{language.toUpperCase()}</span>
      </span>
    </Button>
  );
}
