import React from "react";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, Globe, FileText } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { useLanguage, translations, localizedContent } from "@/lib/i18n";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const { projects } = localizedContent[language];

  return (
    <section
      id="projects"
      className="py-12 relative scroll-mt-20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
            </motion.span>{" "}
            <span>&#128640;&nbsp;</span>
            {translations[language].sections.projects}
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col">
                <CardHeader className="bg-linear-to-r from-purple-500/5 to-pink-500/5">
                  <CardTitle className="text-center md:text-left group-hover:text-purple-500 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grow">
                  <ul className="list-disc ml-4 space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
                    {project.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground leading-loose"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-3 border-t border-border/30 bg-linear-to-r from-purple-500/5 to-pink-500/5 pt-8">
                  {project.website && (
                    <motion.a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe className="h-4 w-4" />
                      {translations[language].projects.viewSite}
                    </motion.a>
                  )}
                  {project.documentation && (
                    <motion.a
                      href={project.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FileText className="h-4 w-4" />
                      {translations[language].projects.viewDocumentation}
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4" />
                    {translations[language].projects.viewOnGitHub}
                  </motion.a>
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
