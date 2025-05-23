import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-black/30 backdrop-blur-sm fixed top-0 z-50 flex justify-center text-white transition-transform duration-300" 
      style={{
        transform: `translateY(${window.scrollY > 100 && window.scrollY > window.lastScrollY ? '-100%' : '0'})`
      }}
      onLoad={() => {
        window.lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
          const nav = document.querySelector('nav');
          const currentScroll = window.scrollY;
          if (currentScroll > 100) {
            if (currentScroll > window.lastScrollY) {
              nav.style.transform = 'translateY(-100%)';
            } else {
              nav.style.transform = 'translateY(0)';
            }
          }
          window.lastScrollY = currentScroll;
        });
      }}
    >
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
          <div className="mobile-menu md:hidden absolute top-10 right-0 w-[200px] bg-black/30 backdrop-blur-sm py-4 hidden rounded-lg z-10">
            {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
              <a 
                key={index} 
                href={`#${link.toLowerCase()}`} 
                className="block py-2 px-4 text-right hover:bg-black/50 transition-colors"
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
              className="hover:text-gray-300 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;