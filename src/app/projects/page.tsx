import React from 'react'
import ProjectCard from '@/components/ProjectCard'

const ProjectsPage = () => {
  const projects = [
    {
      title: "MagicPath",
      description: "Train AI on any product, style, or mood board",
      tags: ["AI", "LLMs", "Tech Leadership"],
      link: "https://magicpath.ai",
      imageUrl: "/images/magicpath.jpeg"
    },
    {
      title: "EverArt",
      description: "Train AI on any product, style, or mood board",
      tags: ["AI", "Tech Leadership"],
      link: "https://everart.ai",
      imageUrl: "/images/everart.jpeg"
    },
    {
      title: "JackChat",
      description: "The most user friendly AI chatbot assistant",
      tags: ["AI", "LLMs", "Mobile"],
      link: "https://jackchat.ai",
      imageUrl: "/images/jackchat.jpeg"
    },
    {
      title: "DropMeIn",
      description: "Create amazing AI selfies",
      tags: ["AI", "LLMs", "Mobile"],
      link: "https://dropmein.ai",
      imageUrl: "/images/dropmein.jpeg"
    },
    {
      title: "Personal Website",
      description: "What you're viewing right now",
      tags: ["React", "WebApp"],
      link: "https://github.com/jbeoris/personal-website",
      imageUrl: "/images/personal.jpeg"
    },
    {
      title: "Stability AI Node SDK",
      description: "Node SDK to access Stability AI API",
      tags: ["TypeScript", "SDK", "NPM"],
      link: "https://www.npmjs.com/package/stability-ai",
      imageUrl: "/images/stability.jpeg"
    },
    // Add more projects as needed
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage