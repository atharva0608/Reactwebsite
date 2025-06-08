


import './index.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import data from './data';

// Components
import Navbar from './components/Navbar';
import Hero2 from './components/Hero2';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DevOpsCICD from './components/projectDetails/DevOpsCICD';
import FlaskApp from './components/projectDetails/FlaskApp';
import ProjectGamma from './components/projectDetails/ProjectGamma';
import DjangoNotesApp from './components/projectDetails/DjangoNotesApp';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import BackgroundGradient from './components/BackgroundGradient';

const MainLayout = () => (
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

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project/devops-cicd" element={<DevOpsCICD />} />
        <Route path="/project/flask-app" element={<FlaskApp />} />
        <Route path="/project/project-gamma" element={<ProjectGamma />} />
        <Route path="/project/django-notes-app" element={<DjangoNotesApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
