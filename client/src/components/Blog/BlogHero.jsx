import React from "react";
import BlogHero from "../../assets/Blog/Bloghero.png";
import JewCareGuide from "../Blog/JewCareGuide";
import RingSection from "../Blog/RingSection";
import BlogConclusion from "../Blog/BlogConclusion";

const HeroSec = () => {
  return (
    <>
      <div
        className="relative overflow-hidden bg-no-repeat pt-16 mt-0 bg-center 
             bg-cover sm:bg-contain p-6 sm:p-12 text-center min-h-[50vh] sm:h-[78vh] w-full"
        style={{
          backgroundImage: `url(${BlogHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-5 p-6 flex flex-col justify-center items-start">
          <h2 className="text-4xl sm:text-7xl md:text-8xl text-white sm:ml-5 font-serif font-normal leading-tight mb-4">
            Amulya
          </h2>

          <h4 className="text-2xl sm:text-2xl md:text-4xl font-serif sm:ml-20 font-normal leading-tight ml-10 mb-6 sm:mb-9 text-black">
            Jewels Blogs
          </h4>

          <p
            className="text-xl font-serif font-thin sm:text-xs md:text-base text-black md:w-80"
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              marginTop: "20px",
              marginLeft: "18px",
              paddingTop: "55px",
            }}
          >
            “Blogs are important because they can provide new information,
            perspectives, and expertise on a topic. They can also help people
            develop analytical thinking, communication skills, and creativity.”
          </p>
        </div>
      </div>
      <JewCareGuide />
      <RingSection />
      <BlogConclusion />
    </>
  );
};

export default HeroSec;
