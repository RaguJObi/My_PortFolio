import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack';
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="rounded-2xl bg-gray-900 border border-gray-700 p-0 shadow-lg flex flex-col justify-between min-h-[350px] group transition-transform duration-400 hover:scale-[1.02] hover:shadow-2xl"
      style={{ boxShadow: '0 4px 32px 0 rgba(0,255,64,0.08), 0 1.5px 8px 0 #39FF14' }}
    >
      {/* Top Row: Title and Year */}
      <div className="flex items-center justify-between px-6 pt-6">
        <span className="flex items-center text-lime-400 text-base font-medium">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polyline points="17 1 7 11 1 5"></polyline></svg>
          {project.title}
        </span>
        <span className="text-gray-300 text-sm font-mono">2023</span>
      </div>
      {/* Image - Broader aspect ratio */}
      <div className="relative overflow-hidden rounded-xl mx-6 mt-4 mb-4 h-64 bg-gray-800 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center rounded-xl transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 pb-5">
        <p className="text-gray-300 text-base min-h-[48px] text-center" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;