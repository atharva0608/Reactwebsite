import React from 'react';
import Canvas from '../canvas';

const Hero = ({ canvasDetails }) => {
  return (
    <div className="w-full relative min-h-screen font-[Helvetica_Now_Display] flex justify-center items-center">
      {canvasDetails.map((canvasdets, index) => (
        <Canvas details={canvasdets} key={index} />
      ))}
      
      <div className="text-container bg-black px-4 sm:px-8 md:px-16 lg:px-[30%] w-full"> 
        <div className="text w-full text-white bg-black text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[-7] px-4">
            Atharva Pudale DevOps Engineer
          </h1>
          <p className='flex justify-center gap-1 text-shadow-md leading-7 text-sm sm:text-base md:text-lg mt-4'>
            hoacsojcajsn odccja
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;