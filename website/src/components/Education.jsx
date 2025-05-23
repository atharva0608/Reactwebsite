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
    <div id="education" className="w-full relative min-h-screen font-[Helvetica_Now_Display] flex justify-center items-center py-16">
      {canvasDetails.map((canvasdets, index) => (
        <Canvas details={canvasdets} key={index} />
      ))}
      
      <div className="container mx-auto max-w-6xl px-4 z-10 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Education Journey</h2>
        
        <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 relative">
            <div className="absolute left-4 md:left-0 top-0 md:top-1/2 h-full md:h-0.5 w-0.5 md:w-full bg-blue-500/20 md:-translate-y-1/2">
              <div className="animate-pulse w-full h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
            </div>

            {educationHistory.map((item, index) => (
              <div key={index} className="relative flex-1 pl-12 md:pl-0">
                <div className="absolute left-4 top-0 md:left-1/2 md:top-0 md:-translate-x-1/2 md:-translate-y-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"></div>
                </div>
                
                <div className="md:text-center md:pt-8 pt-2">
                  <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;