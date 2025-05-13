import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const svgIcons = {
  Docker: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="10" fill="#2496ED"/>
      <circle cx="32" cy="32" r="12" fill="#0db7ed"/>
    </svg>
  ),
  Kubernetes: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#326CE5"/>
      <path d="M32 10L36 22L48 24L38 32L42 44L32 38L22 44L26 32L16 24L28 22L32 10Z" fill="#FFFFFF"/>
    </svg>
  ),
  Jenkins: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#D33833"/>
      <path d="M20 44L28 36L36 44L44 36L36 28L44 20L36 20L28 28L20 20L20 44Z" fill="#FFFFFF"/>
    </svg>
  ),
  Terraform: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="10" fill="#7B42BC"/>
      <path d="M20 44L44 20" stroke="#FFFFFF" strokeWidth="4"/>
      <path d="M44 44L20 20" stroke="#FFFFFF" strokeWidth="4"/>
    </svg>
  ),
  AWS: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#FF9900"/>
      <path d="M20 44L44 20" stroke="#FFFFFF" strokeWidth="4"/>
      <path d="M44 44L20 20" stroke="#FFFFFF" strokeWidth="4"/>
    </svg>
  ),
  Git: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="10" fill="#F05032"/>
      <circle cx="32" cy="32" r="10" fill="#FFFFFF"/>
      <path d="M32 22V42" stroke="#F05032" strokeWidth="4"/>
      <path d="M22 32H42" stroke="#F05032" strokeWidth="4"/>
    </svg>
  ),
  Linux: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#FCC624"/>
      <path d="M20 44L44 20" stroke="#000000" strokeWidth="4"/>
      <path d="M44 44L20 20" stroke="#000000" strokeWidth="4"/>
    </svg>
  ),
};

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const icons = containerRef.current.querySelectorAll('.skill-icon');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });

    tl.fromTo(
      icons,
      { rotationY: 0, rotationX: 0, scale: 0.8, opacity: 0, transformPerspective: 800 },
      {
        rotationY: 360,
        rotationX: 360,
        scale: 1,
        opacity: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        transformOrigin: 'center center',
        repeat: -1,
        yoyo: true,
        duration: 4,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(icons);
    };
  }, []);

  const skills = Object.keys(svgIcons);

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container" ref={containerRef}>
        {skills.map((skill) => (
          <div key={skill} className="skill-icon" title={skill}>
            {svgIcons[skill]}
            <span className="skill-label">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
