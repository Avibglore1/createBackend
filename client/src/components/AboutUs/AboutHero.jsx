import React from 'react';
import aboutMainbg from "../../assets/About/Mainbg.png";
import AboutJewels from "../../components/AboutUs/AboutJewels";
import DesignCustom from "../../components/AboutUs/DesignCustom";

const JewelryHeader = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={aboutMainbg}
          alt="Luxury jewelry background"
          className="w-full h-full object-cover filter grayscale"
        />
        {/* Dark overlay with slightly reduced opacity on larger screens */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>

      {/* Content Container - Removed top margin and adjusted positioning */}
      <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col h-full justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          {/* About text */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-wider font-light mb-2 sm:mb-4">
            About
          </h2>

          {/* Main title group */}
          <div className="relative">
            {/* Amulya text */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white font-extralight tracking-wide leading-none">
              Amuly<span className="relative inline-block">a
                {/* Jewels text - responsive positioning */}
                <span 
                  className="absolute left-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extralight tracking-widest whitespace-nowrap"
                  style={{ 
                    top: 'calc(100% + 0.5rem)',
                    '@media (min-width: 640px)': {
                      top: 'calc(100% + 0.75rem)'
                    },
                    '@media (min-width: 768px)': {
                      top: 'calc(100% + 1rem)'
                    },
                    '@media (min-width: 1024px)': {
                      top: 'calc(100% + 1.25rem)'
                    }
                  }}
                >
                  Jewels
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    <AboutJewels/>
    <DesignCustom/>

    </div>
  );
};

export default JewelryHeader;