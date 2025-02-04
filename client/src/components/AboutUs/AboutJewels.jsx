import React from 'react';
import AboutJewels from "../../assets/About/AboutJewels.png";

const JewelsComponent = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-400 opacity-5"></div>
      
      <div className="relative w-full flex flex-col md:flex-row items-center">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={AboutJewels}
            alt="Luxury jewels necklace"
            className="w-full h-auto"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 px-8 md:px-16 lg:px-24">
          <h1 className="text-7xl font-extralight font-serif mb-8 text-center">Jewels</h1>
          <div className="space-y-6 max-w-xl">
            <p className="text-gray-600 text-justify">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-600 text-justify">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelsComponent;