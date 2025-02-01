import React from 'react';
import Rtiimage from "../../assets/Home/RTI Image.png";

const KnowYourDiamond = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full max-w-md mx-auto overflow-hidden">
            {/* Blurred edges overlay */}
            <div className="absolute inset-0 z-10">
              {/* Top blur */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-white/30 backdrop-blur-sm" />
              {/* Right blur */}
              <div className="absolute top-0 right-0 w-16 h-full bg-white/30 backdrop-blur-sm" />
              {/* Bottom blur */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/30 backdrop-blur-sm" />
              {/* Left blur */}
              <div className="absolute top-0 left-0 w-16 h-full bg-white/30 backdrop-blur-sm" />
            </div>
            
            {/* Main image */}
            <img 
              src={Rtiimage} 
              alt="Diamond ring in blue box" 
              className="w-full h-auto rounded-lg shadow-lg relative z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-lg" />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="space-y-6 max-w-xl">
            <div className="space-y-2">
              <h2 className="text-2xl font-normal text-gray-700">REAL-TIME INTERACTIVE</h2>
              <h1 className="text-4xl md:text-5xl font-serif">Know Your Diamond</h1>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <div className="pt-4">
              <button className="group inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <span className="mr-2">Read more</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowYourDiamond;