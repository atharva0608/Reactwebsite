import React from 'react';
import Canvas from '../canvas';

const About = ({ canvasDetails }) => {
  return (
    <div id="about" className="w-full relative min-h-screen text-white px-4 py-16 mt-24 overflow-visible">
      {canvasDetails.map((canvasdets, index) => (
        <Canvas details={canvasdets} key={index} />
      ))}
      <div className="container mx-auto max-w-6xl flex flex-col items-center justify-center -z-1">
        <div className="max-w-2xl text-center z-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 z-0">About Me</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6 z-0">
            Hello! I'm Atharva Pudale, a passionate DevOps Engineer with a strong foundation in cloud technologies 
            and automation. I specialize in building and maintaining scalable infrastructure solutions that help 
            businesses operate more efficiently.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
            With expertise in tools like Docker, Kubernetes, and various AWS services, I focus on creating 
            robust CI/CD pipelines and implementing infrastructure as code. I'm constantly learning and 
            adapting to new technologies to stay at the forefront of DevOps practices.
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            When I'm not coding or managing infrastructure, you can find me exploring new technologies, 
            contributing to open-source projects, or sharing knowledge with the tech community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;