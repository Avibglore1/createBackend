import React from "react";
import Dimondpendent from "../../assets/Blog/Dimondpendent.png";
import DiamondWash from "../../assets/Blog/DiamondWash.png"; // Correct import for second image

const JewelleryCareGuide = () => {
  return (
    <>
      {/* Title of Jewellery Care Guide */}
      <div className="text-2xl md:text-3xl lg:text-5xl font-serif text-center font-medium my-10 mx-4">
        <h1>JEWELLERY CARE GUIDE</h1>
      </div>

      {/* Detail of Jewellery Care Guide */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-96">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Dimondpendent}
            alt="Diamond Pendant"
            className="w-full h-auto object-cover drop-shadow-2xl rounded-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full text-center md:text-left md:ml-8 flex flex-col justify-center">
          <h1 className="mt-5 md:mt-14 text-xl md:text-2xl font-serif font-bold">
            Sparkle Sustainably: The Ultimate Care Guide for
            <br />
            Your Diamonds
          </h1>

          <p className="mt-6 text-center md:text-left font-serif text-xl font-light mx-4 md:mx-0">
            Once upon a time in a jewelry box, every diamond had a story waiting
            to unfold. From the moment it is set, each piece of diamond jewelry
            becomes a timeless treasure. To keep its story radiant, follow these
            enchanted care tips that will ensure your diamonds shine brilliantly
            for generations to come.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row w-full mt-10 sm:-mt-14 h-auto md:h-96">
        {/* Left Side: Title & Description */}
        <div className="w-full text-center md:text-left md:ml-8 flex flex-col justify-center">
          <h1 className="mt-5 md:mt-14 text-xl md:text-2xl font-serif font-bold">
            The Magic Wash
          </h1>

          <p className="text-left font-serif sm:ml-10 ml-2 text-lg font-light">
            Every prince and princess deserve a royal cleansing. Treat your
            diamonds to a gentle bath:
          </p>

          <ul className="mt-3 list-disc text-left sm:ml-10 ml-6 text-lg font-light font-serif">
            <li>The Potion: A mixture of warm water and a few drops of mild dish soap.</li>
            <li>The Ritual: Allow your jewelry to soak for 20-30 minutes.</li>
            <li>Gently brush it with a soft toothbrush, then rinse and dry with a lint-free cloth.</li>
            <li>Voilà! A sparkle that dazzles like the first light of dawn.</li>
          </ul>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:ml-12">
          <img
            src={DiamondWash} // Using the correct imported image
            alt="Diamond Wash"
            className="w-full h-auto drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default JewelleryCareGuide;
