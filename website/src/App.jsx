import './index.css'
import Canvas from './Canvas';
import React from 'react';
import data from './data';
import Background from './background';

function App() {
  return (
    <>
      <div className="w-full relative min-h-screen bg-black text-white">
        <Background />
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
