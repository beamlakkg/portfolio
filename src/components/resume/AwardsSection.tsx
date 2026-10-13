import React from 'react';
import { motion } from 'framer-motion';
import AchievementCard from './AchievementCard';
import type { Achievement } from '../../data/resume';

interface AwardsSectionProps {
  awards: Achievement[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
  if (awards.length === 0) {
    return null;
  }

  return (
    <section className="mb-20 scroll-mt-20" id="awards">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
            Recognition
          </h2>
          <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Awards & Achievements
          </h3>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Recognition, certifications, and milestones throughout my professional journey.
          </p>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-amber-400 to-transparent opacity-30 dark:from-amber-500/30 dark:via-amber-500/30" />
        <div className="grid gap-6 pl-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <div key={award.id} className="relative">
              <div className="absolute -left-9 top-6 h-3 w-3 rounded-full border-2 border-amber-500 bg-white dark:bg-slate-900" />
              <AchievementCard achievement={award} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
