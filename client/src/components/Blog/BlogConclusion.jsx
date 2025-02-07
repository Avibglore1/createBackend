import React from "react";
import ConclusionImage from "../../assets/Blog/ConclusionImage.png"; // Correctly import the image

const Conclusion = () => {
  return (
    <div className="mx-auto mt-20 mb-8 overflow-hidden bg-white md:max-w-7xl">
      <div className="md:flex">
        {/* Left Side: Image */}
        <div className="md:shrink-0">
          <img
            className="h-full w-full object-cover md:h-full md:w-96"
            src={ConclusionImage} // Use imported image
            alt="Modern building architecture"
          />
        </div>

        {/* Right Side: Text */}
        <div className="p-8 text-center">
          <a href="#" className="mt-1 block text-lg font-serif font-bold text-black">
            In Conclusion...
          </a>
          <p className="mt-2 font-light font-serif text-xl">
            Your diamond jewelry is not just an accessory; it’s a cherished
            heirloom filled with memories and emotion. By weaving these care
            tips into your routine, you ensure that your diamonds remain
            vibrant and beautiful, ready to share their magic for years to
            come. At Amulya Jewels, we celebrate the elegance of diamonds and
            are here to assist you in maintaining their mesmerizing beauty.
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just
            that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
