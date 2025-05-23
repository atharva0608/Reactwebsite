import React from 'react';
import Canvas from '../canvas';

const WorkExperience = ({ canvasDetails }) => {
  return (
    <div id="work-experience" className="w-full relative min-h-screen font-[Helvetica_Now_Display] flex justify-center items-center py-16">
      {canvasDetails.map((canvasdets, index) => (
        <Canvas details={canvasdets} key={index} />
      ))}
      
      <div className="container mx-auto max-w-6xl px-4 z-10 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Work Experience</h2>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-12">
          <div className="relative border-l-2 border-blue-500 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0 shadow-[0_0_15px_#3b82f6]"></div>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <h3 className="text-2xl font-bold text-white">Cloud Associate Intern</h3>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400">
                  3 Months
                </span>
              </div>
              
              <div className="text-gray-400">
                <p className="text-lg mb-4">Company Name • Jan 2024 - Present</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Assisted in managing and maintaining cloud infrastructure using AWS services</li>
                  <li>Participated in the implementation of CI/CD pipelines using Jenkins and GitHub Actions</li>
                  <li>Gained hands-on experience with Docker containerization and Kubernetes orchestration</li>
                  <li>Collaborated with senior engineers on infrastructure automation using Terraform</li>
                  <li>Contributed to monitoring and logging solutions using ELK stack and Prometheus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;