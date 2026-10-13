import ProjectsSection from '../components/projects/ProjectsSection';

interface ProjectsProps {
  navigate: (path: string) => void;
}

const Projects = ({ navigate }: ProjectsProps) => {
  return (
    <ProjectsSection
      onOpenProject={(slug) => navigate(`/allproject/${slug}`)}
      onViewAll={() => navigate('/allproject')}
    />
  );
};

export default Projects;
