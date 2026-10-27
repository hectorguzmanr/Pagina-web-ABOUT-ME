/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Mail } from 'lucide-react';
import { MotionConfig, motion } from 'motion/react';
import ThemeToggle from './ThemeToggle';

const linkClass =
  'group flex min-h-11 items-center space-x-3 rounded-lg text-neutral-600 transition-colors duration-300 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:text-neutral-400 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-50 dark:focus-visible:ring-offset-neutral-950';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col justify-center items-center p-6 md:p-12 font-sans transition-colors duration-300 selection:bg-neutral-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-white dark:selection:text-neutral-900">
        <ThemeToggle />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl w-full space-y-12"
        >
          <section className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 transition-colors duration-300 dark:text-neutral-50"
            >
              Héctor <span className="font-semibold">Guzmán</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-lg transition-colors duration-300 dark:text-neutral-400"
            >
              Estudiante de ingeniería civil en la Universidad Dominicana O&M.
            </motion.p>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="h-px w-full bg-neutral-200 transition-colors duration-300 dark:bg-neutral-800"
          />

          <section className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 transition-colors duration-300 dark:text-neutral-400">
              Contacto y Redes
            </h2>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <a href="mailto:hello@hectorguzmanr.com" className={linkClass}>
                <span className="p-2 bg-neutral-100 rounded-full group-hover:bg-neutral-200 transition-colors duration-300 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="font-medium">Email</span>
              </a>

              <a
                href="https://github.com/hectorguzmanr"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <span className="p-2 bg-neutral-100 rounded-full group-hover:bg-neutral-200 transition-colors duration-300 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                  <Github className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/hectorguzmanr"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <span className="p-2 bg-neutral-100 rounded-full group-hover:bg-neutral-200 transition-colors duration-300 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </section>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-sm text-neutral-500 pt-8 transition-colors duration-300 dark:text-neutral-400"
          >
            © {new Date().getFullYear()} Héctor Guzmán. Con mucho Amor.
          </motion.footer>
        </motion.main>
      </div>
    </MotionConfig>
  );
}
