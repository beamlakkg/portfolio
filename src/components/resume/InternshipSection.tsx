import React from 'react';
import { motion } from 'framer-motion';
import InternshipCard from './InternshipCard';
import type { Internship } from '../../data/resume';

interface InternshipSectionProps {
  internships: Internship[];
}

const InternshipSection: React.FC<InternshipSectionProps> = ({ internships }) => {
  if (internships.length === 0) {
    return null;
  }

  return (
    <section className="mb-20 scroll-mt-20" id="internships">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
            Early Experience
          </h2>
          <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Internships
          </h3>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Practical experience gained through internships, collaboration, and hands-on product development.
          </p>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 via-violet-400 to-transparent opacity-30 dark:from-violet-500/30 dark:via-violet-500/30" />
        <div className="grid gap-6 pl-6 md:grid-cols-2">
          {internships.map((internship, index) => (
            <div key={internship.id} className="relative">
              <div className="absolute -left-9 top-6 h-3 w-3 rounded-full border-2 border-violet-500 bg-white dark:bg-slate-900" />
              <InternshipCard internship={internship} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
