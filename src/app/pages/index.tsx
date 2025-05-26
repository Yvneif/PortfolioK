import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}