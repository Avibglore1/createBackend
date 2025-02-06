import React from "react";

const TeamSection = () => {
  return (
    <div className="absolute w-full flex flex-col items-center">
      <h1 className="text-6xl font-serif text-[#011728] relative px-8">Our Team</h1>
      <div className="bg-[#011728] rounded-t-3xl py-24 px-16 w-full -mt-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-24">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-32">
            <div className="w-64 h-64 bg-gray-300 rounded-full"></div>
            <div className="text-center md:text-center max-w-xl">
              <h2 className="text-4xl font-light text-white">Mr. ABC</h2>
              <h3 className="text-2xl text-gray-400 mb-6">CEO of Amulya Jewels</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-32">
            <div className="w-64 h-64 bg-gray-300 rounded-full"></div>
            <div className="text-center md:text-center max-w-xl">
              <h2 className="text-4xl font-light text-white">Mr. ABC</h2>
              <h3 className="text-2xl text-gray-400 mb-6">CEO of Amulya Jewels</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;