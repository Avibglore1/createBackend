import React from 'react';
import jewelryImage1 from '../../assets/Blog/Dimondpendent.png';
import jewelryImage2 from '../../assets/Blog/DiamondWash.png';


const JewelleryCareGuide = () => {
  return (
    <>
      {/* Title of Jewellery Care Guide */}
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-serif text-center font-medium my-5 mx-5">
        JEWELLERY CARE GUIDE
      </h1>

      {/* Detail of Jewellery Care Guide */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-96">
        <div className="w-full md:ml-12 md:w-1/2 flex justify-center">
          <img
            src={jewelryImage1}
            alt="Jewelry Care Example"
            className="w-full h-auto object-cover drop-shadow-2xl mix-blend-multiply rounded-lg"
          />
        </div>
        <div className="w-full text-center md:text-left md:ml-8 flex flex-col justify-center">
          <h1 className="mt-5 md:mt-14 text-xl text-center md:text-2xl font-serif font-bold">
            Sparkle Sustainably: The Ultimate Care Guide for
            <br />
            Your Diamonds
          </h1>
          <div className="mt-6 text-left ml-4 md:text-left font-serif text-xl md:mr-20 font-light mx-4 md:mx-0">
            Once Upon a Time in a Jewelry Box Every diamond has a story waiting
            to unfold. From the moment it is set, each piece of diamond jewelry
            becomes a timeless treasure. To keep its story radiant, follow these
            enchanted care tips that will ensure your diamonds shine brilliantly
            for generations to come.
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full mt-10 sm:-mt-14 h-auto md:h-96">
        {/* Left Side: Title & Description */}
        <div className="w-full text-center md:text-left md:ml-8 flex flex-col justify-center">
          <h1 className="mt-5 md:mt-14 text-xl text-center md:text-2xl sm:mb-5 font-serif font-bold">
            The Magic Wash
          </h1>
          <p className="text-left font-serif sm:ml-10 ml-4 text-lg font-light">
            Every prince and princess deserve a royal cleansing. Treat your
            diamonds to a gentle bath:
          </p>
          <div className="mt-1 text-center md:text-left text-xl sm:-mt-2 font-light mx-4 md:mx-0">
            <ul className="list-disc sm:ml-10 text-left ml-6 text-lg font-light font-serif mt-3">
              <li className="sm:ml-4">
                The Potion: A mixture of warm water and a few drops of mild dish
                soap.
              </li>
              <li className="sm:ml-4">
                The Ritual: Allow your jewelry to soak for 20-30 minutes. Gently
                brush it with a soft toothbrush, then rinse and dry with a
                lint-free cloth.
              </li>
              <li className="sm:ml-4">
                Voilà! A sparkle that dazzles like the first light of dawn.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full flex justify-center md:-mt-16">
          <img
            src={jewelryImage2}
            alt="Jewelry Cleaning Example"
            className="w-full md:h-auto mr-20 h-1/2 sm:-ml-48 sm:-mt-28 sm:mb-1 -mt-20 drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default JewelleryCareGuide;