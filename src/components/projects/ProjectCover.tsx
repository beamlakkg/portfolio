import React, { useState } from 'react';
import type { Project } from '../../data/projects';

interface ProjectCoverProps {
  project: Project;
  imageClassName?: string;
  titleClassName?: string;
  loading?: 'eager' | 'lazy';
  showTitle?: boolean;
}

const ProjectCover: React.FC<ProjectCoverProps> = ({
  project,
  imageClassName = 'h-full w-full object-cover',
  titleClassName = 'text-3xl sm:text-4xl',
  loading = 'lazy',
  showTitle = true,
}) => {
  const [failed, setFailed] = useState(!project.image);

  if (!failed && project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className={imageClassName}
        loading={loading}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className={`relative flex h-full min-h-[220px] w-full flex-col justify-between overflow-hidden bg-gradient-to-br ${project.accent} p-6 text-white`}>
      <div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/15 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-black/20 blur-2xl" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative flex items-start justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
        <span className="max-w-[70%]">{project.organization}</span>
        <span>{project.access}</span>
      </div>

      {showTitle ? (
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">{project.role}</p>
          <h3 className={`mt-2 max-w-xl font-black leading-tight tracking-tight ${titleClassName}`}>{project.title}</h3>
        </div>
      ) : (
        <div className="relative h-8" />
      )}
    </div>
  );
};

export default ProjectCover;
