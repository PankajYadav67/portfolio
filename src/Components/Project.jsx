import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const ProjectSection = () => {
  const projects = [
    {
      title: "Zepto Clone",
      description: "Zepto is an Quick-Commerce platform to shop.",
      githubLink: "https://github.com/your-major-project-1",
      liveLink: "https://your-major-project-1-live-link.com",
      techStack: ["React", "Javascript", "Redux", "Material UI", "Tailwind CSS"],
      isMajor: true,
    },
    {
      title: "Major Project 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      githubLink: "https://github.com/your-major-project-2",
      liveLink: "https://your-major-project-2-live-link.com",
      techStack: ["Angular", "Express.js", "MySQL"],
      isMajor: true,
    },
    {
      title: "Minor Project 1",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      githubLink: "https://github.com/your-minor-project-1",
      liveLink: "https://your-minor-project-1-live-link.com",
      techStack: ["Vue.js", "Firebase"],
      isMajor: false,
    },
    {
      title: "Minor Project 2",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      githubLink: "https://github.com/your-minor-project-2",
      liveLink: "https://your-minor-project-2-live-link.com",
      techStack: ["React", "Firebase"],
      isMajor: false,
    },
  ];


  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 id="projects" className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between items-center">
                <h3 className="text-xl font-semibold mb-4 md:mb-0 md:mr-4">{project.title}</h3>
                <div className="flex space-x-2 mt-4 md:mt-0">
                  {/* GitHub icon */}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: "30px" }} className="text-gray-700 hover:text-blue-500">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  {/* Live button */}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" style={{ fontSize: "20px" }} rel="noopener noreferrer" className="flex items-center">
                      <button className="bg-gray-300 hover:bg-gray-600 text-black-700 hover:text-white py-1 px-4 rounded-lg">
                        Preview
                      </button>
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-end">
                <div className="flex flex-wrap space-x-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-gray-500 mt-4 md:mt-0">
                  {project.isMajor ? <span className="font-semibold">Major Project</span> : <span>Minor Project</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};