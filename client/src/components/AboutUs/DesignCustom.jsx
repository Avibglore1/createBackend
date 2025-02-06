import React from 'react';
import diamondTweezers from '../../assets/About/diamondTweezers.png';
import jewelrySet from '../../assets/About/jewelrySet.png';
import colorRings from '../../assets/About/colourrings.png';

const JewelryCustomization = () => {
  return (
    <div className="w-full bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-8 sm:mb-12 lg:mb-16 text-center md:text-left">Design Customization</h1>
        
        {/* Metal Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">
          <div className="flex items-center justify-center md:justify-start order-1 md:order-none">
            <img 
              src={diamondTweezers} 
              alt="Diamond in tweezers" 
              className="w-full max-w-sm sm:max-w-xl lg:max-w-2xl transform -rotate-12"
            />
          </div>
          <div className="flex flex-col justify-center order-2 md:order-none mb-8 md:mb-0">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 text-center">By Metal</h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 text-center">Yellow gold, white gold or Rose Gold</p>
          </div>
        </div>

        {/* Gold Purity Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">
          <div className="flex flex-col justify-center mb-8 md:mb-0">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 text-center">By Gold Purity</h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 text-center">18Kt, 14Kt, 22Kt</p>
          </div>
          <div className="flex justify-center md:justify-end items-center">
            <img 
              src={jewelrySet} 
              alt="Gold jewelry set with earrings and pendant" 
              className="w-full max-w-sm sm:max-w-xl lg:max-w-2xl"
            />
          </div>
        </div>

        {/* Diamond Color Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="flex items-center justify-center md:justify-start order-1 md:order-none">
            <img 
              src={colorRings} 
              alt="Diamond rings with different colors" 
              className="w-full max-w-sm sm:max-w-xl lg:max-w-2xl transform -rotate-12"
            />
          </div>
          <div className="flex flex-col justify-center order-2 md:order-none mb-8 md:mb-0">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center">
              By diamond colour<br />& clarity.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryCustomization;