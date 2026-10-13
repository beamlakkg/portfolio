import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import { projectCategories, projectMatchesCategory, projects, type ProjectCategory } from '../../data/projects';

interface ProjectsSectionProps {
  onOpenProject: (slug: string) => void;
  onViewAll: () => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject, onViewAll }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const visibleProjects = useMemo(
    () =>
      projects.filter((project) => projectMatchesCategory(project, activeFilter)),
    [activeFilter],
  );

  const featuredProject = useMemo(() => {
    if (activeFilter === 'All') {
      return projects.find((project) => project.featured) ?? projects[0];
    }

    return visibleProjects.find((project) => project.featured) ?? visibleProjects[0];
  }, [activeFilter, visibleProjects]);

  const secondaryProjects = useMemo(() => {
    if (!featuredProject) {
      return [];
    }

    const pool =
      activeFilter === 'All'
        ? projects.filter((project) => project.featured && project.slug !== featuredProject.slug)
        : visibleProjects.filter((project) => project.slug !== featuredProject.slug);

    return pool.slice(0, 3);
  }, [activeFilter, featuredProject, visibleProjects]);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.18em] text-cyan-700 uppercase dark:text-cyan-300">
            Work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
            Selected projects
          </h2>
        </motion.div>

        <div className="mb-8">
          <ProjectFilters active={activeFilter} onChange={setActiveFilter} categories={projectCategories} />
        </div>

        {featuredProject ? (
          <div className="mb-10">
            <FeaturedProject project={featuredProject} onSelect={onOpenProject} />
          </div>
        ) : (
          <div className="mb-10 rounded-[28px] border border-dashed border-slate-300 bg-white/60 p-12 text-center dark:border-slate-700 dark:bg-slate-900/50">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">No projects in this category yet</h3>
          </div>
        )}

        <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} onSelect={onOpenProject} />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            View All Projects
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
