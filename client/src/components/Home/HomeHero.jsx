import React from "react";
import Homeheroimg from "../../assets/Home/Homeheroimg.png";
import Pattern from "../../assets/Home/Pattern.png"
import Background from "../../assets/Home/background.png"

const HeroSection = () => {
  return (
    <div className="relative pt-16">
      <img src={Pattern} alt="pattern" className="sm:w-screen sm:h-screen object-cover hidden sm:block" />
      <div className=" absolute top-[150px]  left-1/2 transform  -translate-x-1/2 -translate-y-1/2 sm:-translate-x-0 sm:-translate-y-0 sm:top-[25px] sm:left-[45px] z-10">
        <h1 className="sm:text-[223px] text-[60px] font-Montserrat font-normal ">Amulya</h1>
      </div>
      <div className="absolute left-1/2 transform  -translate-x-1/2 -translate-y-1/2 sm:-translate-x-0 sm:-translate-y-0 sm:top-[165px] top-[230px] z-10 sm:left-[840px] font-normal">
        <h1 className="sm:rotate-90 text-[100px] sm:text-[45px] font-normal font-Montserrat">Jewels</h1>
      </div>
      <div className="">
        <img src={Background} alt="back" className=" relative sm:absolute sm:bottom-0 sm:left-1/2 h-[60vh] sm:h-[480px] sm:z-0 object-cover w-screen sm:px-[40px] sm:transform sm:-translate-x-1/2 " />
      </div>
      <div className="absolute left-1/2 text-black transform  -translate-x-1/2 -translate-y-1/2 sm:-translate-x-0 sm:-translate-y-0 sm:bottom-[60px] bottom-[0px] text-center sm:left-[70px]">
        <h1 className="sm:text-[50px] text-[30px] font-Montserrat font-normal">Top Jewels</h1>
        <p className="sm:text-[23px] text-[20px] font-Montserrat font-normal">We spread happiness with Gold</p>

      </div>
      
      
      
    </div>
  );
};

export default HeroSection;