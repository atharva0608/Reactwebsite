


import './index.css'
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import data from './data';

// Components
import Navbar from './components/Navbar';
import Hero2 from './components/Hero2';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import BackgroundGradient from './components/BackgroundGradient';

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <BackgroundGradient />
      <Navbar />
      <Hero2 canvasDetails={data[0]} />
      <About canvasDetails={data[4]} />
      <Skills canvasDetails={data[2]} />
      <Projects canvasDetails={data[1]} />
      <Education canvasDetails={data[5]} />
      <WorkExperience canvasDetails={data[6]} />
      <Contact />
    </>
  );
}

export default App;
