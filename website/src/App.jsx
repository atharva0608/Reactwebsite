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
      <div className="w-full relative min-h-screen font-[Helvetica_Now_Display] text-white">
       
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        <nav className="w-full h-20 bg-red flex  justify-center">
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
        <div className="text-container bg-white px-[30%]"> 
          <div className="text w-[100%] text-white bg-amber-600 flex justify-center"  >
          <h1 className="text-4xl ">
            Atharva Pudale DevOps Engineer </h1>

        </div>
        </div>
       
      </div>
      {/* <div className="w-full relative min-h-screen bg-black text-white">
       
       {data[1].map((canvasdets, index) => (
         <Canvas details={canvasdets} key={index} />
       ))}
     </div>
     <div className="w-full relative min-h-screen bg-black text-white">
       
       {data[2].map((canvasdets, index) => (
         <Canvas details={canvasdets} key={index} />
       ))}
     </div> */}
    </>
  );
}

export default App;
