import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';
import type { Education } from '../../data/resume';

interface EducationSectionProps {
  educations: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ educations }) => {
  if (educations.length === 0) {
    return null;
  }

  return (
    <section className="mb-20 scroll-mt-20" id="education">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
            Academic Foundation
          </h2>
          <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Education
          </h3>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Software Engineering at AASTU, and a Management degree at Unity University.
          </p>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-400 to-transparent opacity-30 dark:from-emerald-500/30 dark:via-emerald-500/30" />
        <div className="space-y-6 pl-6">
          {educations.map((education, index) => (
            <div key={education.id} className="relative">
              <div className="absolute -left-9 top-6 h-3 w-3 rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-900" />
              <EducationCard education={education} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
