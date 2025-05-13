import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'CI/CD Pipeline Automation',
      description: 'Automated build, test, and deployment pipelines using Jenkins and Docker.',
      link: '#'
    },
    {
      name: 'Kubernetes Cluster Setup',
      description: 'Designed and deployed scalable Kubernetes clusters on AWS.',
      link: '#'
    },
    {
      name: 'Infrastructure as Code',
      description: 'Managed cloud infrastructure using Terraform for repeatable deployments.',
      link: '#'
    }
  ];

  return (
    <section style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.name} style={{ marginBottom: '1rem' }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
