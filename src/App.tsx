/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col justify-center items-center p-6 md:p-12 font-sans selection:bg-neutral-900 selection:text-white">
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
            className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900"
          >
            Hector <span className="font-semibold">Guzman</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-lg"
          >
            Estudiante de ingeniería civil en la Universidad Dominicana O&M. 
          </motion.p>
        </section>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="h-px w-full bg-neutral-200" 
        />

        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
            Contacto y Redes
          </h2>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:hello@hectorguzmanr.com"
              className="group flex items-center space-x-3 text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
            >
              <span className="p-2 bg-neutral-100 rounded-full group-hover:bg-neutral-200 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </span>
              <span className="font-medium">Email</span>
            </a>
            
            <a 
              href="https://github.com/hectorguzmanr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
            >
              <span className="p-2 bg-neutral-100 rounded-full group-hover:bg-neutral-200 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </span>
              <span className="font-medium">GitHub</span>
            </a>

            <a 
              href="https://linkedin.com/in/hectorguzmanr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
            >
              <span className="p-2 bg-neutral-100 rounded-full group-hover:bg-neutral-200 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </span>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </section>
      </motion.main>
    </div>
  );
}
