import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import type { Project } from '../../data/projects';

interface ProjectGridProps {
  projects: Project[];
  onSelect: (slug: string) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelect }) => {
  return (
    <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onSelect={onSelect} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectGrid;
