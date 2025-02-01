import React from "react";
import ringImage from "../../assets/Home/Homering.png";
import pendantImage from "../../assets/Home/Pendants.png";
import ringsImage from "../../assets/Home/Rings.png";
import necklaceImage from "../../assets/Home/Necklace.png";

const EngagementRingPage = () => {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      {/* Engagement Ring Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold">Design your own</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2">
            Engagement ring
          </h1>
          <p className="text-gray-600 mt-4 max-w-md">
            Design your engagement ring your way. Start with a ring setting and
            then add the perfect center stone – or vice versa. It’s really up to
            you!
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button className="border border-black py-2 px-4 rounded-full hover:bg-black hover:text-white">
              Start with a setting
            </button>
            <span className="self-center">OR</span>
            <button className="border border-black py-2 px-4 rounded-full hover:bg-black hover:text-white">
              Start with a Diamond
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img src={ringImage} alt="Engagement Ring" className="w-64 md:w-80" />
        </div>
      </div>

      {/* Our Gemstone Section */}
      <div className="mt-14">
        <h2 className="text-4xl font-semibold">Our Gemstone</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative group">
            <img
              src={pendantImage}
              alt="Pendants"
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-14 text-center">
              <h3 className="text-black text-3xl md:text-4xl font-serif font-bold">
                Special Occasion <br /> Pendants
              </h3>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative group">
            <img
              src={ringsImage}
              alt="Rings"
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-14 text-center">
              <h3 className="text-black text-3xl md:text-4xl font-serif font-bold">
                Special Occasion <br /> Rings
              </h3>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative group">
            <img
              src={necklaceImage}
              alt="Necklaces"
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-14 text-center">
              <h3 className="text-black text-3xl md:text-4xl font-serif font-bold">
                Necklace <br /> Sets
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementRingPage;
