import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { ProfessionalExperience } from '../../data/resume';

interface ExperienceCardProps {
  experience: ProfessionalExperience;
  index?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-[24px] border border-white/20 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-slate-700/60 dark:bg-slate-900/60 sm:p-8"
    >
      <div className="mb-1 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
        Professional
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {experience.role}
          </h3>
          <p className="mt-1 text-base font-medium text-slate-600 dark:text-slate-300">
            {experience.company}
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            {experience.description}
          </p>

          {experience.achievements.length > 0 && (
            <ul className="mt-4 space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div className="text-right">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              {experience.startDate} — {experience.endDate}
            </div>
            <div className="mt-1 flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
              <MapPin size={14} />
              {experience.location}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
