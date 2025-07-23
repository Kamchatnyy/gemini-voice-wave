import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                AI Voice Gemini
              </span>
            </div>
            <span className="text-muted-foreground text-sm">
              © 2024 All rights reserved
            </span>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">GitHub</span>
            </a>
            
            <a
              href="https://docs.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors duration-300 group"
            >
              <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">Documentation</span>
            </a>

            {/* Gemini Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-secondary/20 border border-secondary/30">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm text-secondary font-medium">
                Powered by Gemini
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Tech Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-border/20 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Built with React, Framer Motion, and Google Gemini AI • Optimized for modern browsers
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </footer>
  );
};