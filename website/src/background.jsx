import React, { useEffect } from 'react';

const Background = () => {
  useEffect(() => {
    // Function to add background images at canvas edge positions
    const addBackgroundImages = () => {
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.zIndex = '-1';
      
      // Define positions for edge/corner images
      const positions = [
        { top: '0', left: '0' }, // Top-left corner
        { top: '0', right: '0' }, // Top-right corner
        { bottom: '0', left: '0' }, // Bottom-left corner
        { bottom: '0', right: '0' }, // Bottom-right corner
        { top: '50%', left: '0', transform: 'translateY(-50%)' }, // Middle-left
        { top: '50%', right: '0', transform: 'translateY(-50%)' }, // Middle-right
      ];

      positions.forEach((pos, index) => {
        const img = document.createElement('img');
        img.src = `/img/background-${index + 1}.png`; // Assuming images are named background-1.png, background-2.png, etc.
        img.style.position = 'absolute';
        img.style.maxWidth = '200px'; // Adjust size as needed
        
        // Apply position styles
        Object.entries(pos).forEach(([key, value]) => {
          img.style[key] = value;
        });
        
        container.appendChild(img);
      });

      document.body.appendChild(container);
    };

    addBackgroundImages();

    // Cleanup function
    return () => {
      const container = document.querySelector('div[style*="z-index: -1"]');
      if (container) {
        container.remove();
      }
    };
  }, []);

  return null;
};

export default Background;
