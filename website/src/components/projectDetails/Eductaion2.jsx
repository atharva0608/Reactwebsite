import React from 'react';
import Canvas from '../canvas';

const Education = ({ canvasDetails }) => {
  const educationHistory = [
    {
      year: "2020-2024",
      title: "B.E. Computer Science Engineering",
      school: "Dr. D.Y. Patil Institute Of Technology"
    },
    {
      year: "2019-2020",
      title: "Higher Secondary (XII)",
      school: "ASM's Geeta Mata Jr. Science College"
    },
    {
      year: "2017-2018",
      title: "Secondary Education (X)",
      school: "GG International School"
    }
  ];

  return (
    <div id="education" className="w-full relative min-h-screen font-[Helvetica_Now_Display] flex justify-center items-center py-20">
      {canvasDetails.map((canvasdets, index) => (
        <Canvas details={canvasdets} key={index} />
      ))}
      
      <div className="container mx-auto max-w-7xl px-6 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-white">
          Education Journey
        </h2>
        
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-16">
          {/* Mobile Timeline (Vertical) */}
          <div className="block md:hidden">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300"></div>
              
              {educationHistory.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-4">
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-blue-400"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 mb-4 border border-blue-400/30">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {item.school}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Horizontal Line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300"></div>
              
              <div className="grid grid-cols-3 gap-8 lg:gap-12">
                {educationHistory.map((item, index) => (
                  <div key={index} className="relative text-center">
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-10 transform -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)] border-4 border-blue-300/50"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-24">
                      <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 mb-6 border border-blue-400/30">
                        {item.year}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                        {item.school}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
