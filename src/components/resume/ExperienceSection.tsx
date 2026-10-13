import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import type { ProfessionalExperience } from '../../data/resume';

interface ExperienceSectionProps {
  experiences: ProfessionalExperience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section className="mb-20 scroll-mt-20" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400">
            Career Path
          </h2>
          <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h3>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Professional roles where I've contributed to real products, teams, and engineering projects.
          </p>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400 to-transparent opacity-30 dark:from-cyan-500/30 dark:via-cyan-500/30" />
        <div className="space-y-6 pl-6">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              <div className="absolute -left-9 top-6 h-3 w-3 rounded-full border-2 border-cyan-500 bg-white dark:bg-slate-900" />
              <ExperienceCard experience={experience} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
