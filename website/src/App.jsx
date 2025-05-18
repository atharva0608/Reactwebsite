import './index.css'
import React from 'react';
import Canvas from './canvas';
import data from './data';
   

function App() {
 return (
  <>
  <div className="w-full min-h-screen bg-black text-white">
   {data.map((item, index) =>(
     <div key={index}>
      {item.map((canvasdets, index) =>(
        <Canvas details={canvasdets} />
      ))}

     </div>
   ))}
  </div>
  </>
  
 );
}

export default App;
