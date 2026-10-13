import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { isPublicLink, type Project } from '../../data/projects';
import ProjectCover from './ProjectCover';

interface FeaturedProjectProps {
  project: Project;
  onSelect: (slug: string) => void;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, onSelect }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_16px_50px_rgba(20,20,20,0.06)] dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative min-h-[340px] overflow-hidden bg-slate-200 dark:bg-slate-800 lg:min-h-full">
          <div className="absolute inset-0">
            <ProjectCover project={project} loading="eager" imageClassName="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400">
            {project.organization} · {project.category}
          </p>

          <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{project.role}</p>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onSelect(project.slug)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              View Project
              <ArrowUpRight size={16} />
            </button>

            {isPublicLink(project.liveDemo) ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <ExternalLink size={16} />
                Live site
              </a>
            ) : null}

            {isPublicLink(project.github) ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <Github size={16} />
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
