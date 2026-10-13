import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { isPublicLink, type Project } from '../../data/projects';
import ProjectCover from './ProjectCover';

interface ProjectCardProps {
  project: Project;
  onSelect: (slug: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_12px_40px_rgba(20,20,20,0.05)] dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="relative h-56 overflow-hidden border-b border-slate-200/80 dark:border-slate-700/80">
        <div className="h-full transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectCover project={project} showTitle={false} titleClassName="text-2xl" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
          <span className="rounded-full border border-white/20 bg-slate-950/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            {project.category}
          </span>
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-900">
            {project.access}
          </span>
        </div>
      </div>

      <div className="space-y-5 p-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-400">
            {project.organization}
          </p>
          <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{project.role}</p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-slate-200/80 pt-4 dark:border-slate-700/80">
          <div className="flex items-center gap-3">
            {isPublicLink(project.github) ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open GitHub for ${project.title}`}
                className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-white"
              >
                <Github size={16} />
              </a>
            ) : null}

            {isPublicLink(project.liveDemo) ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live demo for ${project.title}`}
                className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-white"
              >
                <ExternalLink size={16} />
              </a>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => onSelect(project.slug)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            View Details
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
