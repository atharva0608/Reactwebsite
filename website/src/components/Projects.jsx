import React from 'react';
import Canvas from '../canvas';

const Projects = ({ canvasDetails }) => {
  const projects = [
    {
      number: "01",
      title: "DevOps CI/CD",
      description: "Jenkins-Docker-Kubernetes-ArgoCD",
      github: "DevOps-CI-CD-Pipeline-with-Jenkins-Docker-Kubernetes-ArgoCD",
      image: "/images/Project 1.png"
    },
    {
      number: "02",
      title: "Automating Deployment of a Two-Tier Flask Application",
      description: "Jenkins-Docker-DockerCompose.",
      github: "project-beta",
      image: "/images/project2.png"
    },
    {
      number: "03",
      title: "Project Gamma",
      description: "Revolutionary Tech Infrastructure.",
      github: "project-gamma",
      image: "/images/Project 3.png"
    },
    {
      number: "04",
      title: "Containerization of Django Notes App with Docker and Docker Compose",
      description: "Docker-DockerCompose",
      github: "project-delta",
      image: "/images/Project 3.png"
    }
  ];

  return (
    <div id="projects" className="w-full relative min-h-screen text-white flex flex-col justify-center items-center gap-8 px-4 py-16">
      {canvasDetails.map((canvasdets, index) => (
        <Canvas details={canvasdets} key={index} />
      ))}

      <p className="text-center text-2xl font-light mb-8 text-gray-300">
        "Practice Makes a Man Perfect"
      </p>

      <h2 className="text-5xl font-bold text-center mb-12">My Personal Projects</h2>
      
      <div className="z-10 w-full md:w-[90%] lg:w-[80%] flex flex-col gap-8 mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="relative flex flex-col items-center bg-[#36454F]/30 backdrop-blur-md rounded-lg border border-white/10 p-4 md:p-8">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full items-center`}>
              <a href={`https://github.com/atharva0608/${project.github}`} className="absolute top-4 right-4 transition-all duration-300 hover:scale-110">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1f2937] flex items-center justify-center shadow-[0_0_15px_#4299e1] hover:shadow-[0_0_20px_#4299e1] transition-shadow">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#4299e1]" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </div>
              </a>
              <div className={`hidden md:block text-6xl md:text-[120px] lg:text-[220px] font-bold text-white opacity-80 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                {project.number}
              </div>
              <div className={`flex flex-col max-w-[600px] text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h2>
                <p className="text-lg md:text-xl mb-6">{project.description}</p>
                <div className={`flex justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <a href="#" className="bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 inline-block w-fit hover:bg-red-600 transition-colors">
                    More <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full md:w-[300px] h-[200px] object-cover rounded-lg brightness-75 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;