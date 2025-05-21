import './index.css'
import Canvas from './canvas';
import { useEffect } from 'react';
import data from './data';
import LocomotiveScroll from 'locomotive-scroll';
 

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <>
       <nav className="w-full h-20 bg-red flex  justify-center text-white">
          <div className="w-[80%] flex justify-between items-center">
            <h1 className=" text-2xl font-bold">Atharva Pudale.</h1>
            <div className=" text-md flex gap-10">
              {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
                <a 
                  key={index} 
                  href={`#${link.toLowerCase()}`} 
                  className="hover:text-gray-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </nav>
      <div className="w-full relative min-h-screen font-[Helvetica_Now_Display] flex justify-center items-center  ">
       
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
       
        <div className="text-container bg-black px-[30%]"> 
          <div className="text w-[100%] text-white bg-black "  >
          <h1 className="text-4xl leading-[-7]">
            Atharva Pudale DevOps Engineer </h1>
            <p className='flex justify-center gap-1 text-shadow-md leading-7 '>hoacsojcajsn odccja</p>

        </div>
        </div>
       
      </div>
      <div id="projects" className="w-full relative min-h-screen text-white flex flex-col justify-center items-center gap-8">
        {/* Canvas background elements */}
        {data[1].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        
        {/* Project showcase content */}
        <div className="z-10 w-[80%] flex flex-col gap-8">
          {/* Project 1 - Left aligned */}
          <div className="relative flex items-center bg-[#36454F]/30 backdrop-blur-md rounded-lg border border-white/10 p-8">
            <a href="https://github.com/yourusername/project-alpha" className="absolute top-4 right-4 transition-all duration-300 hover:scale-110">
              <div className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center shadow-[0_0_15px_#4299e1] hover:shadow-[0_0_20px_#4299e1] transition-shadow">
                <svg className="w-6 h-6 text-[#4299e1]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
            </a>
            <div className="text-[220px] font-bold text-white opacity-80 mr-8">01</div>
            <div className="flex gap-8 items-center">
              <div className="flex flex-col max-w-[600px]">
                <h2 className="text-5xl font-bold mb-4">Project Alpha</h2>
                <p className="text-xl mb-6">The Next generation Management System.</p>
                <a href="#" className="bg-red-500 text-white px-6 py-3 inline-block w-fit hover:bg-red-600 transition-colors">
                  Case Study <span className="ml-2">→</span>
                </a>
              </div>
              <img src="/images/Screenshot 2025-05-21 202656.png" alt="Project Alpha" className="w-[300px] h-[200px] object-cover rounded-lg brightness-75" />
            </div>
          </div>

          {/* Project 2 - Right aligned */}
          <div className="relative flex items-center justify-end bg-[#36454F]/30 backdrop-blur-md rounded-lg border border-white/10 p-8">
            <a href="https://github.com/yourusername/project-beta" className="absolute top-4 right-4 transition-all duration-300 hover:scale-110">
              <div className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center shadow-[0_0_15px_#4299e1] hover:shadow-[0_0_20px_#4299e1] transition-shadow">
                <svg className="w-6 h-6 text-[#4299e1]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
            </a>
            <div className="flex gap-8 items-center">
              <img src="/images/Screenshot 2025-05-21 202656.png" alt="Project Beta" className="w-[300px] h-[200px] object-cover rounded-lg brightness-75" />
              <div className="flex flex-col max-w-[600px] text-right">
                <h2 className="text-5xl font-bold mb-4">Project Beta</h2>
                <p className="text-xl mb-6">Innovative Solutions for Modern Challenges.</p>
                <div className="flex justify-end">
                  <a href="#" className="bg-red-500 text-white px-6 py-3 inline-block w-fit hover:bg-red-600 transition-colors">
                    Case Study <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-[220px] font-bold text-white opacity-80 ml-8">02</div>
          </div>

          {/* Project 3 - Left aligned */}
          <div className="relative flex items-center bg-[#36454F]/30 backdrop-blur-md rounded-lg border border-white/10 p-8">
            <a href="https://github.com/yourusername/project-gamma" className="absolute top-4 right-4 transition-all duration-300 hover:scale-110">
              <div className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center shadow-[0_0_15px_#4299e1] hover:shadow-[0_0_20px_#4299e1] transition-shadow">
                <svg className="w-6 h-6 text-[#4299e1]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
            </a>
            <div className="text-[220px] font-bold text-white opacity-80 mr-8">03</div>
            <div className="flex gap-8 items-center">
              <div className="flex flex-col max-w-[600px]">
                <h2 className="text-5xl font-bold mb-4">Project Gamma</h2>
                <p className="text-xl mb-6">Revolutionary Tech Infrastructure.</p>
                <a href="#" className="bg-red-500 text-white px-6 py-3 inline-block w-fit hover:bg-red-600 transition-colors">
                  Case Study <span className="ml-2">→</span>
                </a>
              </div>
              <img src="/images/Screenshot 2025-05-21 202656.png" alt="Project Gamma" className="w-[300px] h-[200px] object-cover rounded-lg brightness-75" />
            </div>
          </div>

          {/* Project 4 - Right aligned */}
          <div className="relative flex items-center justify-end bg-[#36454F]/30 backdrop-blur-md rounded-lg border border-white/10 p-8">
            <a href="https://github.com/yourusername/project-delta" className="absolute top-4 right-4 transition-all duration-300 hover:scale-110">
              <div className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center shadow-[0_0_15px_#4299e1] hover:shadow-[0_0_20px_#4299e1] transition-shadow">
                <svg className="w-6 h-6 text-[#4299e1]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
            </a>
            <div className="flex gap-8 items-center">
              <img src="/images/Screenshot 2025-05-21 202656.png" alt="Project Delta" className="w-[300px] h-[200px] object-cover rounded-lg brightness-75" />
              <div className="flex flex-col max-w-[600px] text-right">
                <h2 className="text-5xl font-bold mb-4">Project Delta</h2>
                <p className="text-xl mb-6">Advanced Cloud Computing Solutions.</p>
                <div className="flex justify-end">
                  <a href="#" className="bg-red-500 text-white px-6 py-3 inline-block w-fit hover:bg-red-600 transition-colors">
                    Case Study <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-[220px] font-bold text-white opacity-80 ml-8">04</div>
          </div>
        </div>
      </div>
     <div className="w-full relative min-h-screen bg-black text-white">
       
       {data[2].map((canvasdets, index) => (
         <Canvas details={canvasdets} key={index} />
       ))}
     </div>
    </>
  );
}

export default App;
