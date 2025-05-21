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
       <nav className="w-full h-20 bg-red flex justify-center text-white relative">
          <div className="w-[90%] md:w-[80%] flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold">Atharva Pudale.</h1>
            
            {/* Mobile menu button */}
            <div className="relative md:hidden">
              <button 
                className="z-20"
                onClick={() => {
                  const mobileMenu = document.querySelector('.mobile-menu');
                  mobileMenu.classList.toggle('!block');
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Mobile navigation - hidden by default */}
              <div className="mobile-menu md:hidden absolute top-10 right-0 w-[200px] bg-red py-4 hidden rounded-lg shadow-lg z-10">
                {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
                  <a 
                    key={index} 
                    href={`#${link.toLowerCase()}`} 
                    className="block py-2 px-4 text-right hover:bg-red-700 transition-colors"
                    onClick={() => {
                      const mobileMenu = document.querySelector('.mobile-menu');
                      mobileMenu.classList.remove('!block');
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex text-md gap-10">
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
      <div className="w-full relative min-h-screen font-[Helvetica_Now_Display] flex justify-center items-center">
       
        {data[0].map((canvasdets, index) => (
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
      <div id="projects" className="w-full relative min-h-screen text-white flex flex-col justify-center items-center gap-8 px-4 py-16">
        {/* Canvas background elements */}
        {data[1].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}

        <p className="text-center text-2xl font-light mb-8 text-gray-300">
          "Practice Makes a Man Perfect"
        </p>

        <h2 className="text-5xl font-bold text-center mb-12">My Personal Projects</h2>
        
        {/* Project showcase content */}
        <div className="z-10 w-full md:w-[90%] lg:w-[80%] flex flex-col gap-8">
          {/* Project cards - All follow same mobile layout, alternate on desktop */}
          {[
            {
              number: "01",
              title: "Project Alpha",
              description: "The Next generation Management System.",
              github: "project-alpha",
              image: "/images/Screenshot 2025-05-21 202656.png"
            },
            {
              number: "02",
              title: "Project Beta",
              description: "Innovative Solutions for Modern Challenges.",
              github: "project-beta",
              image: "/images/Screenshot 2025-05-21 202656.png"
            },
            {
              number: "03",
              title: "Project Gamma",
              description: "Revolutionary Tech Infrastructure.",
              github: "project-gamma",
              image: "/images/Screenshot 2025-05-21 202656.png"
            },
            {
              number: "04",
              title: "Project Delta",
              description: "Advanced Cloud Computing Solutions.",
              github: "project-delta",
              image: "/images/Screenshot 2025-05-21 202656.png"
            }
          ].map((project, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center bg-[#36454F]/30 backdrop-blur-md rounded-lg border border-white/10 p-4 md:p-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <a href={`https://github.com/yourusername/${project.github}`} className="absolute top-4 right-4 transition-all duration-300 hover:scale-110">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1f2937] flex items-center justify-center shadow-[0_0_15px_#4299e1] hover:shadow-[0_0_20px_#4299e1] transition-shadow">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#4299e1]" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </div>
              </a>
              <div className={`hidden md:block text-6xl md:text-[120px] lg:text-[220px] font-bold text-white opacity-80 ${index % 2 !== 0 ? 'ml-8' : 'mr-8'}`}>
                {project.number}
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center w-full">
                <div className={`flex flex-col max-w-[600px] text-center ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h2>
                  <p className="text-lg md:text-xl mb-6">{project.description}</p>
                  <div className={`flex justify-center ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <a href="#" className="bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 inline-block w-fit hover:bg-red-600 transition-colors">
                      Case Study <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full md:w-[300px] h-[200px] object-cover rounded-lg brightness-75" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="about" className="w-full relative min-h-screen bg-black text-white px-4 py-16 mt-24">
        {data[4].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-8 md:justify-between">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">About Me</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
              Hello! I'm Atharva Pudale, a passionate DevOps Engineer with a strong foundation in cloud technologies 
              and automation. I specialize in building and maintaining scalable infrastructure solutions that help 
              businesses operate more efficiently.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
              With expertise in tools like Docker, Kubernetes, and various AWS services, I focus on creating 
              robust CI/CD pipelines and implementing infrastructure as code. I'm constantly learning and 
              adapting to new technologies to stay at the forefront of DevOps practices.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              When I'm not coding or managing infrastructure, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the tech community.
            </p>
          </div>
          <div className="relative w-full max-w-[300px] md:max-w-[400px]">
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-white/10">
              <img 
                src="/images/profile.png" 
                alt="Atharva Pudale" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
      <div id="experience" className="w-full relative min-h-screen bg-black text-white px-4 py-16 mt-24 ">
          {data[2].map((canvasdets, index) => (
           <Canvas details={canvasdets} key={index} />
           ))}
        <div className="container mx-auto max-w-6xl  ">
          <p className="text-center text-2xl font-light mb-12 text-gray-300">
           "A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST."
             </p>
    
            <h2 className="text-5xl font-bold text-center mb-8">Skills & Experience</h2>
    
             <p className="text-center text-xl text-gray-300 mb-6 max-w-3xl mx-auto ">
                 The main area of expertise is in DevOps and modern frontend development. I build scalable, automated infrastructures and efficient UIs using Docker, Kubernetes, AWS, and React-based ecosystems.
             </p>
    
             <p className="text-center mb-16">
                   Visit my{" "}
             <a 
                href="https://linkedin.com/in/yourprofile" 
               className="text-blue-400 hover:text-blue-300 underline"
               target="_blank"
              rel="noopener noreferrer"
             >
              LinkedIn
            </a>{" "}
               for more details.
             </p>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
        { name: "Docker", img: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
        { name: "Docker Compose", img: "https://raw.githubusercontent.com/docker/compose/master/logo.png" },
        { name: "Kubernetes", img: "https://kubernetes.io/images/favicon.png" },
        { name: "Jenkins", img: "https://www.jenkins.io/images/logos/jenkins/jenkins.png" },
        { name: "Terraform", img: "https://www.terraform.io/img/logo-hashicorp.svg" },
        { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "AWS CLI", img: "https://raw.githubusercontent.com/aws/aws-cli/develop/doc/source/_static/aws_cli_logo.png" },
        { name: "Linux", img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" },
        { name: "CI/CD", img: "https://about.gitlab.com/images/ci/gitlab-ci-cd-logo_2x.png" },
        { name: "GitHub Actions", img: "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" },
        { name: "Monitoring Tools", img: "https://grafana.com/static/img/grafana_icon.svg" },
        { name: "Bash Scripting", img: "https://raw.githubusercontent.com/odb/official-bash-logo/master/assets/Logos/Icons/PNG/512x512.png" },
        { name: "React", img: "https://reactjs.org/logo-og.png" },
        { name: "Vite", img: "https://vitejs.dev/logo.svg" }
      ].map((skill, index) => (
        <div 
          key={index}
          className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer border border-white/10"
        >
          <div className="w-12 h-12 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
            <img 
              src={skill.img} 
              alt={skill.name} 
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="text-xs font-medium text-center">{skill.name}</span>
        </div>
      ))}
            </div>
            </div>
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">

           <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
    </div>
    </>
  );
}

export default App;
