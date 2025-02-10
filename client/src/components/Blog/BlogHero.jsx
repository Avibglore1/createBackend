import React from 'react';
import heroImage from '../../assets/Blog/Bloghero.png';
import JewelleryCareGuide from './JewCareGuide';
import RingSection from './RingSection';
import Conclusion from './BlogConclusion';

const HeroSection = () => {
  return (
    <>
    <div className="relative h-[90vh] w-full">
      <img 
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      <div className="relative z-10 bg-black/5 p-6 flex flex-col justify-center items-start h-full">
        <h1 className="text-8xl ml-4 sm:text-7xl md:text-[150px] text-white sm:ml-5 font-serif leading-tight mb-4 pt-20">
          Amulya
        </h1>
        
        <h2 className="text-4xl sm:text-2xl md:text-5xl font-serif sm:ml-[100px] ml-10 mb-6 sm:mb-9 text-black">
          Jewels Blogs
        </h2>
        
        <p className="text-xl font-serif ml-[14px] sm:ml-[75px] pt-14 text-black md:max-w-xs text-center">
          "Blogs are important because they can provide new information,
          perspectives, and expertise on a topic. They can also help people
          develop analytical thinking, communication skills, and creativity."
        </p>
      </div>
      

    </div>
    <JewelleryCareGuide/>
    <RingSection/>
    <Conclusion/>

    </>
  );
};

export default HeroSection;
