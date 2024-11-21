import React from 'react';
import { FaGithub, FaReact, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiTypescript, SiPytorch, SiOpencv } from 'react-icons/si';

const ProjectCard = ({ title, description, image, tags, github, color }) => {
  const getTagIcon = (tag) => {
    switch (tag.toLowerCase()) {
      case 'react':
        return <FaReact className="w-5 h-5" />;
      case 'node.js':
        return <FaNode className="w-5 h-5" />;
      case 'tailwind':
        return <SiTailwindcss className="w-5 h-5" />;
      case 'mongodb':
        return <SiMongodb className="w-5 h-5" />;
      case 'firebase':
        return <SiFirebase className="w-5 h-5" />;
      case 'typescript':
        return <SiTypescript className="w-5 h-5" />;
      case 'pytorch':
        return <SiPytorch className="w-5 h-5" />;
      case 'opencv':
        return <SiOpencv className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="group relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden
                    transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-custom-blue/10 via-purple-500/10 to-pink-500/10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/80 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90
                         group-hover:bg-white group-hover:text-custom-blue transition-all duration-300"
            >
              {getTagIcon(tag)}
              <span className="text-sm font-medium">{tag}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300
                     group-hover:text-white"
          >
            <FaGithub className="w-5 h-5" />
            <span className="text-sm font-medium">View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Lantana Removal and Circular Green Economy",
      description: "An innovative solution that uses AI to detect and map invasive lantana plants from aerial imagery. Features a smart dashboard for environmental monitoring and resource management, making conservation efforts more efficient and data-driven.",
      image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      tags: ["React", "Node.js", "Python"],
      github: "https://github.com/arnvsnigi/JPMC_27",
      color: "#0077b5"
    },
    {
      title: "RailVision: CCTV-guided Railway Management",
      description: "A smart surveillance system that enhances railway safety and management through real-time video analytics. Monitors crowd density, generates heatmaps, and sends instant alerts, helping station managers make informed decisions.",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      tags: ["PyTorch", "OpenCV", "DeepSort"],
      github: "https://github.com/arnvsnigi/RailVision",
      color: "#1DA1F2"
    },
    {
      title: "ASL Interpreter and Translator",
      description: "A real-time sign language translation app that bridges communication gaps. Uses computer vision to recognize and interpret American Sign Language, making conversations more accessible and inclusive for the deaf community.",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Python", "OpenCV"],
      github: "https://github.com/arnvsnigi/Sign-Language-OpenCV-and-React",
      color: "#EA4335"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                      from-custom-blue/20 via-purple-500/10 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-black" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-900 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
