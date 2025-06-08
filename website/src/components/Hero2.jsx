import React from 'react';
import { motion } from 'framer-motion';

const Hero2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 md:py-16 mt-16 sm:mt-20 md:mt-0">
      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left mt-8 md:mt-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Atharva Pudale
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-300 mb-6 md:mb-8">
            DevOps Engineer & Cloud Enthusiast
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0">
            Transforming infrastructure into code and building scalable solutions 
            that power the future of cloud computing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              View Projects
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-full font-semibold hover:bg-blue-600/10 transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Animated Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full md:w-auto"
        >
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
            <div className="w-full aspect-square rounded-full bg-blue-500/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse "></div>
            <div className="w-full aspect-square rounded-full overflow-hidden relative z-10 drop-shadow-2xl mx-auto">
              <img 
                src="/images/profile.png"
                alt="Hero Illustration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -z-10 w-48 h-48 bg-blue-500/30 rounded-full blur-2xl -top-10 -right-10"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero2;
