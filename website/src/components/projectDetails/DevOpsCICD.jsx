import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DevOpsCICD = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectDetails = {
    title: "Complete Production CI/CD Pipeline",
    description: "The Complete Production CI/CD Pipeline Project is a real-world, cloud-native DevOps project that demonstrates a complete CI/CD pipeline and infrastructure automation for deploying a scalable travel booking application.The project is built on a microservices architecture with a React.js frontend and a Node.js (Express) backend, fully containerized using Docker and deployed on a Kubernetes cluster (AKS/EKS). Infrastructure and application lifecycle management is done through Terraform, Helm, and ArgoCD, ensuring a production-grade setup.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "ArgoCD",
      "Helm",
      "Prometheus",
      "Grafana",
      "SonarQube"
    ],
    features: [
      "Microservices Architecture with React frontend and Node.js backend",
      "Containerization with Docker and Kubernetes orchestration",
      "Infrastructure as Code using Terraform",
      "CI/CD pipeline with Jenkins and ArgoCD",
      "GitOps workflow with Helm charts",
      "Security scanning with Trivy and OWASP",
      "Monitoring and alerting with Prometheus-Grafana",
      "Code quality enforcement via SonarQube",
      "NGINX Ingress Controller for traffic routing",
      "Automated deployment and scaling"
    ],
    workflow: [
      "Code commit triggers Jenkins pipeline",
      "Security scans and quality checks",
      "Docker image build and push",
      "ArgoCD syncs Helm charts",
      "Kubernetes deployment and scaling",
      "Continuous monitoring and alerts"
    ],
    github: "DevOps-CI-CD-Pipeline-with-Jenkins-Docker-Kubernetes-ArgoCD",
    images: ["/images/cicd-1.png", "/images/cicd-2.png", "/images/cicd-3.png"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-6xl"
      >
        <Link to="/#projects" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {projectDetails.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-gray-300 mb-12"
        >
          {projectDetails.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectDetails.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className="relative group"
              >
                <img
                  src={image}
                  alt={`Project screenshot ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg brightness-90 group-hover:brightness-110 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Tech Stack & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {projectDetails.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {projectDetails.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">DevOps Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectDetails.workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="bg-gray-700/30 rounded-lg p-4 flex items-center"
              >
                <span className="w-8 h-8 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                <span>{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex justify-center"
        >
          <a
            href={`https://github.com/atharva0608/${projectDetails.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-colors"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            View on GitHub
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DevOpsCICD;