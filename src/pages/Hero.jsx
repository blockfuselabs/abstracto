import React from 'react';
import Abstracto from "../assets/images/robot-arm-amico.svg"

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6 py-12">
      {/* Container */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
        
        {/* Text Section */}
        <div className="text-center lg:text-left lg:flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Accelerate Your Project with Account Abstraction
          </h1>
          <p className="text-base md:text-lg mb-8">
            Abstracto helps developers streamline their environment setup with a powerful CLI for account abstraction. Choose between diamond or simple contracts, and build with Hardhat or Foundry.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-transparent border border-gray-500 rounded-md hover:bg-gray-700 transition-colors">
              Learn More
            </button>
            <button className="px-6 py-3 bg-[#BF64E7] rounded-md hover:opacity-75 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:flex-1 flex justify-center">
          <img
            src={Abstracto}
            alt="Abstracto illustration"
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full max-w-md"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
