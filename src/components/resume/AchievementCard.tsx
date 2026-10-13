import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import type { Achievement } from '../../data/resume';

interface AchievementCardProps {
  achievement: Achievement;
  index?: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-[20px] border border-white/20 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-slate-700/60 dark:bg-slate-900/60"
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10">
        <Trophy size={20} className="text-amber-600 dark:text-amber-400" />
      </div>

      <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
        {achievement.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
        {achievement.organization}
      </p>

      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
        {achievement.date}
      </p>

      {achievement.description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {achievement.description}
        </p>
      )}
    </motion.div>
  );
};

export default AchievementCard;
