import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCover from '../components/projects/ProjectCover';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectGrid from '../components/projects/ProjectGrid';
import ProjectSearch from '../components/projects/ProjectSearch';
import { isPublicLink, projectCategories, projectMatchesCategory, projects, type ProjectCategory } from '../data/projects';

interface AllProjectsProps {
  currentPath: string;
  navigate: (path: string) => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ currentPath, navigate }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const projectSlug = currentPath.startsWith('/allproject/') ? currentPath.replace('/allproject/', '') : null;
  const selectedProject = projectSlug ? projects.find((project) => project.slug === projectSlug) ?? null : null;

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = projectMatchesCategory(project, activeFilter);
      const search = searchQuery.trim().toLowerCase();
      const matchesSearch =
        search.length === 0 ||
        [
          project.title,
          project.description,
          project.longDescription,
          project.category,
          project.organization,
          project.role,
          ...project.technologies,
          ...project.features,
        ]
          .join(' ')
          .toLowerCase()
          .includes(search);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const relatedProjects = selectedProject
    ? projects
        .filter(
          (project) =>
            project.slug !== selectedProject.slug &&
            (project.organization === selectedProject.organization ||
              project.category === selectedProject.category ||
              project.technologies.some((tech) => selectedProject.technologies.includes(tech))),
        )
        .slice(0, 3)
    : [];

  if (selectedProject) {
    return (
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate('/allproject')}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </button>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-[30px] border border-white/20 bg-white/60 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/60 sm:p-8"
          >
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400">
              <span>{selectedProject.organization}</span>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <span>{selectedProject.access}</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                  {selectedProject.title}
                </h2>
                <p className="mt-3 text-base font-medium text-slate-500 dark:text-slate-400">{selectedProject.role}</p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  {selectedProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                {isPublicLink(selectedProject.liveDemo) ? (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                ) : null}
                {isPublicLink(selectedProject.github) ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>

          <div className="mt-10 h-[300px] overflow-hidden rounded-[30px] border border-white/20 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:h-[420px] dark:border-slate-700/60">
            <ProjectCover project={selectedProject} loading="eager" titleClassName="text-4xl sm:text-5xl" />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[26px] border border-white/20 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] dark:border-slate-700/60 dark:bg-slate-900/60">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
                Overview
              </p>
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                {selectedProject.longDescription}
              </p>
            </div>

            <div className="rounded-[26px] border border-white/20 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] dark:border-slate-700/60 dark:bg-slate-900/60">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                Project metadata
              </p>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                {[
                  ['Year', selectedProject.year],
                  ['Organization', selectedProject.organization],
                  ['Role', selectedProject.role],
                  ['Type', selectedProject.projectType],
                  ['Access', selectedProject.access],
                ].map(([label, value], index, items) => (
                  <div
                    key={label}
                    className={`flex items-start justify-between gap-6 ${index < items.length - 1 ? 'border-b border-slate-200 pb-3 dark:border-slate-700' : ''}`}
                  >
                    <span className="shrink-0">{label}</span>
                    <span className="text-right font-semibold text-slate-900 dark:text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[26px] border border-white/20 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] dark:border-slate-700/60 dark:bg-slate-900/60">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-red-600 dark:text-red-400">
                Key features
              </p>
              <ul className="space-y-3 text-base text-slate-600 dark:text-slate-300">
                {selectedProject.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[26px] border border-white/20 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] dark:border-slate-700/60 dark:bg-slate-900/60">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="rounded-[26px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400">
                My role
              </p>
              <ul className="space-y-3 text-base text-slate-600 dark:text-slate-300">
                {selectedProject.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-300">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {selectedProject.gallery.length > 0 ? (
            <div className="mt-14">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-600 dark:text-fuchsia-400">
                Project gallery
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {selectedProject.gallery.map((image, index) => (
                  <div key={`${selectedProject.slug}-${index}`} className="overflow-hidden rounded-[24px] border border-white/20 bg-white/60 shadow-[0_18px_38px_rgba(15,23,42,0.05)] dark:border-slate-700/60 dark:bg-slate-900/60">
                    <img src={image} alt={`${selectedProject.title} preview ${index + 1}`} className="h-64 w-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {relatedProjects.length > 0 ? (
            <div className="mt-16">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
                More projects
              </p>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {relatedProjects.map((project) => (
                  <div
                    key={project.slug}
                    className="overflow-hidden rounded-[24px] border border-white/20 bg-white/60 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 dark:border-slate-700/60 dark:bg-slate-900/60"
                  >
                    <div className="h-48">
                      <ProjectCover project={project} showTitle={false} />
                    </div>
                    <div className="space-y-3 p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                      <button
                        type="button"
                        onClick={() => navigate(`/allproject/${project.slug}`)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
                      >
                        View project
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/allproject')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
            >
              <ArrowLeft size={15} />
              Back to Projects
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (currentPath.includes('/allproject/') && !selectedProject) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Project not found</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">The project you are looking for does not exist.</p>
          <button
            type="button"
            onClick={() => navigate('/allproject')}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
          >
            <ArrowLeft size={15} />
            Return to project list
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-400">
            Explore All Projects
          </p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            My Complete Portfolio
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Browse through all projects, filtered by category and technology
          </p>
        </motion.div>

        <div className="mb-8 rounded-[30px] border border-white/20 bg-white/60 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/60">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                My projects
              </p>
              <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Explore the work.
              </h3>
            </div>

            <ProjectSearch value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="mt-6">
            <ProjectFilters active={activeFilter} onChange={setActiveFilter} categories={projectCategories} />
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/60 p-12 text-center shadow-[0_18px_40px_rgba(15,23,42,0.04)] dark:border-slate-700 dark:bg-slate-900/50">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">No projects found</h4>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Try searching for another technology, project, or category.
            </p>
          </div>
        ) : (
          <ProjectGrid projects={filteredProjects} onSelect={(slug) => navigate(`/allproject/${slug}`)} />
        )}
      </div>
    </section>
  );
};

export default AllProjects;
