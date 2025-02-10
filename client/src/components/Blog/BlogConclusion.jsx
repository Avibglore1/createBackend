import React from "react";
import conclusionImage from "../../assets/Blog/ConclusionImage.png"; 

const Conclusion = () => {
  return (
    <div className="mx-auto mt-20 mb-8 overflow-hidden bg-white max-w-8xl">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-2/4">
          <img
            className="w-full h-auto object-cover"
            src={conclusionImage}
            alt="Modern building architecture"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-center p-6 sm:p-12 md:p-20 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-5xl md:text-xl font-serif font-bold text-black mb-4">
            In Conclusion...
          </h2>
          <p className="sm:text-base md:text-lg font-light font-serif text-gray-700 leading-relaxed">
            Your diamond jewelry is not just an accessory; it's a cherished
            heirloom filled with memories and emotion. By weaving these care
            tips into your routine, you ensure that your diamonds remain
            vibrant and beautiful, ready to share their magic for years to
            come. At Amulya Jewels, we celebrate the elegance of diamonds and
            are here to assist you in maintaining their mesmerizing beauty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;