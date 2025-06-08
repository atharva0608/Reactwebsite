import React, { useEffect, useRef } from 'react';
import Canvas from '../canvas';

const Education = ({ canvasDetails }) => {
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItem = entry.target;
            const index = parseInt(timelineItem.dataset.index);
            
            // Animate timeline item container
            setTimeout(() => {
              timelineItem.classList.add('animate-fade-in-up');
            }, index * 200);
            
            // Animate year badge
            const yearBadge = timelineItem.querySelector('.year-badge');
            setTimeout(() => {
              yearBadge.classList.add('animate-slide-left');
            }, index * 200 + 100);
            
            // Animate title
            const title = timelineItem.querySelector('.timeline-title');
            setTimeout(() => {
              title.classList.add('animate-reveal-text');
            }, index * 200 + 300);
            
            // Animate school
            const school = timelineItem.querySelector('.timeline-school');
            setTimeout(() => {
              school.classList.add('animate-slide-right');
            }, index * 200 + 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
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
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes revealText {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideInFromRight 0.8s ease-out forwards;
        }
        
        .animate-reveal-text {
          animation: revealText 0.6s ease-out forwards;
        }
        
        .timeline-item {
          opacity: 0;
        }
        
        .timeline-content {
          opacity: 0;
        }
        
        .year-badge {
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .timeline-title {
          opacity: 0;
        }
        
        .timeline-school {
          opacity: 0;
        }
        
        .year-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }
      `}</style>
      {canvasDetails.map((canvasdets, index) => (
        <Canvas details={canvasdets} key={index} />
      ))}
      
      <div className="container mx-auto max-w-7xl px-6 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-white">
          Education Journey
        </h2>
        
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-16 border border-white/10 shadow-2xl">
          {/* Mobile Timeline (Vertical) */}
          <div className="block md:hidden">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              
              {educationHistory.map((item, index) => (
                <div 
                  key={index} 
                  ref={(el) => (itemsRef.current[index] = el)}
                  data-index={index}
                  className="relative flex items-start mb-12 last:mb-0 timeline-item"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-4">
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-blue-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <span className="year-badge inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 mb-4 border border-blue-400/30 backdrop-blur-sm">
                      {item.year}
                    </span>
                    <h3 className="timeline-title text-xl font-bold text-white mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="timeline-school text-gray-300 text-base leading-relaxed">
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
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              
              <div className="grid grid-cols-3 gap-8 lg:gap-12">
                {educationHistory.map((item, index) => (
                  <div 
                    key={index} 
                    ref={(el) => (itemsRef.current[index + 3] = el)}
                    data-index={index}
                    className="relative text-center timeline-item"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-10 transform -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)] border-4 border-blue-300/50"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-24">
                      <span className="year-badge inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 mb-6 border border-blue-400/30 backdrop-blur-sm">
                        {item.year}
                      </span>
                      <h3 className="timeline-title text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="timeline-school text-gray-300 text-base lg:text-lg leading-relaxed">
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