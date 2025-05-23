import React from 'react';
import Canvas from '../canvas';

const About = ({ canvasDetails }) => {
  return (
    <div id="about" className="w-full relative min-h-screen bg-black text-white px-4 py-16 mt-24 overflow-visible">
      {canvasDetails.map((canvasdets, index) => (
        <Canvas details={canvasdets} key={index} />
      ))}
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-8 md:justify-between -z-1">
        <div className="max-w-2xl text-center md:text-left z-0">
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
        <div className="relative w-full max-w-[300px] md:max-w-[400px]">
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-white/10">
            <img 
              src="/images/profile.png" 
              alt="Atharva Pudale" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500 rounded-2xl -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default About;