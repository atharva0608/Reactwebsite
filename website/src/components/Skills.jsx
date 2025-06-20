import React from 'react';
import Canvas from '../canvas';

const Skills = ({ canvasDetails }) => {
  const skillsList = [
    { name: "Linux", img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" },
    { name: "Bash Scripting", img: "https://raw.githubusercontent.com/odb/official-bash-logo/master/assets/Logos/Icons/PNG/512x512.png" },
    { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Terraform", img: "https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg" },
    { name: "Docker", img: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
    { name: "Docker Compose", img: "https://raw.githubusercontent.com/docker/compose/master/logo.png" },
    { name: "Kubernetes", img: "https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.svg" },
    { name: "Helm", img: "https://helm.sh/img/helm.svg" },
    { name: "Prometheus", img: "https://raw.githubusercontent.com/prometheus/prometheus/main/documentation/images/prometheus-logo.svg" },
    { name: "Grafana", img: "https://raw.githubusercontent.com/grafana/grafana/main/public/img/grafana_icon.svg" },
    { name: "Argo CD", img: "https://argo-cd.readthedocs.io/en/stable/assets/logo.png" },
    { name: "CI/CD", img: "https://about.gitlab.com/images/ci/gitlab-ci-cd-logo_2x.png" },
    { name: "Jenkins", img: "https://www.jenkins.io/images/logos/jenkins/jenkins.png" },
    { name: "Git/Github", img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
    { name: "Apache APISIX", img: "https://apache.org/logos/res/apisix/default.png" },
    { name: "HashiCorp Consul", img: "https://www.vectorlogo.zone/logos/consulio/consulio-icon.svg" },
    { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Vite", img: "https://vitejs.dev/logo.svg" },
    { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  ];

  return (
    <div id="skills" className="w-full relative min-h-screen text-white px-4 py-16 mt-24 overflow-visible -z-2">
      {canvasDetails.map((canvasdets, index) => (
        <Canvas details={canvasdets} key={index} />
      ))}
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-2xl font-light mb-12 text-gray-300 bg-transparent z-1">
          "A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST."
        </p>

        <h2 className="text-5xl font-bold text-center mb-8">Skills & Experience</h2>

        <p className="text-center text-xl text-gray-300 mb-6 max-w-3xl mx-auto bg-transparent">
          The main area of expertise is in DevOps and modern frontend development. I build scalable, automated infrastructures and efficient UIs using Docker, Kubernetes, AWS, and React-based ecosystems.
        </p>

        <p className="text-center mb-16">
          Visit my{" "}
          <a 
            href="https://linkedin.com/in/atharva608"
            className="text-blue-400 hover:text-blue-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          for more details.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsList.map((skill, index) => (
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
  );
};

export default Skills;