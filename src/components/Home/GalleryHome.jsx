import React from 'react';
import engagement1 from '../../assets/Home/engagement1.png';
import ringBox from '../../assets/Home/ringBox.png';
import ringCase from '../../assets/Home/ringCase.png';
import blackWhiteRing from '../../assets/Home/blackWhiteRing.png';
import mountainRing from '../../assets/Home/mountainRing.png';
import handRing from '../../assets/Home/handRing.png';
import roseRing from '../../assets/Home/roseRing.png';

const HappinessGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-serif tracking-tight mb-2">Your happiness is our's</h1>
        <p className="text-gray-600">View our customers' Happiness moments from around the world</p>
      </div>

      {/* Main grid container */}
      <div className="grid auto-rows-auto gap-4">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* First image */}
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={engagement1}
                alt="Happy engagement moment"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Middle column */}
          <div className="md:col-span-3 grid gap-4">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={ringBox}
                alt="Ring in wooden box"
                className="w-full h-[192px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={blackWhiteRing}
                alt="Ring on dark fabric"
                className="w-full h-[192px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right image */}
          <div className="md:col-span-4">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={ringCase}
                alt="Ring in blue box"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Wide landscape image */}
          <div className="md:col-span-8">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={mountainRing}
                alt="Ring with mountain backdrop"
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right column with two square images */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={handRing}
                alt="Hand wearing ring"
                className="w-full h-[144px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={roseRing}
                alt="Ring on red rose"
                className="w-full h-[144px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappinessGallery;