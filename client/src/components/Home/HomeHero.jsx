import React from "react";
import Homeheroimg from "../../assets/Home/Homeheroimg.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden pt-20 ">
      <img
        src={Homeheroimg}
        alt="Jewelry Showcase"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default HeroSection;