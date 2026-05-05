import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 bg-linear-to-b from-background to-muted/20 backdrop-blur-sm">
      {/* SECCIÓN 1: TU FOOTER PRINCIPAL */}
      <div className="container max-w-4xl mx-auto px-6 md:px-4 py-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm text-muted-foreground text-center md:text-left"
            whileHover={{ scale: 1.01 }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </motion.p>

          <motion.p
            className="text-sm text-muted-foreground mt-4 md:mt-0 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            Built with{" "}
            <motion.span
              className="inline-block"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              💻
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
            >
              ❤️
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

      <div className="w-full bg-black p-4">
        <div className="container max-w-4xl mx-auto px-6 md:px-4">
          <motion.p
            className="text-base! md:text-xs text-white/60 text-center md:text-left tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            This site was generated using a template from{" "}
            <motion.a
              href={"https://github.com/rishikesh2003/my-portfolio"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:text-purple-500/70 transition-colors"
            >
              Rishikesh S.'s repository
            </motion.a>
            .
          </motion.p>
        </div>
      </div>
    </footer>
  );
}