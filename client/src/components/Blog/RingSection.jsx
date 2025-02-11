import React from 'react'
import diamondImage from '../../assets/Blog/Backpendent.png';

const RingSection = () => {
  return (
    <>
      <img 
        src={diamondImage} 
        alt="Background" 
        className="bg-right-top absolute mt-[75px] right-[60px] sm:right-[140px] sm:bg-right-top md:bg-right-top lg:bg-right-top bg-contain"
      />
      <div>
        <div className="flex mt-11 relative">
          <div className="w-full h-50 mb-4 text-center md:text-left md:mt-7 text-xl ml-5 md:ml-20">
            <h1 className="font-bold font-serif w-10/12 mb-6 lg:text-center md:text-left">
              Chemical Shield
            </h1>
            <p className="text-left font-serif font-extralight md:text-lg/1">
              Your diamonds are sensitive souls. Protect them from harsh chemicals that could dim their sparkle:
            </p>
            <li className="text-left font-serif font-extralight">
              Avoid: Household cleaners, chlorine, and beauty products. Always remove jewelry during these activities to shield against a dark fate.
            </li>
          </div>
        </div>

        <div className="flex mt-11">
          <div className="w-full h-50 mb-4 text-center md:text-left md:mt-7 text-xl ml-5 md:ml-20">
            <h1 className="font-bold font-serif w-10/12 mb-6 lg:text-center md:text-left">
              The Safe Haven
            </h1>
            <p className="text-left font-serif font-extralight">
              A cozy home is essential for your diamonds:
            </p>
            <li className="font-extralight font-serif text-left">
              Storage Spell: Keep your precious pieces in soft pouches or separate compartments of a jewelry box. This prevents them from getting
            </li>
            <li className="font-extralight font-serif text-left">
              scratched or tangled in a tangled mess of jewelry.
            </li>
          </div>
        </div>

        <div className="flex mt-11">
          <div className="w-full h-50 mb-4 text-center md:text-left md:mt-7 text-xl ml-5 md:ml-20">
            <h1 className="font-bold font-serif w-10/12 mb-6 lg:text-center md:text-left">
              Wearer's Wisdom
            </h1>
            <p className="text-left font-serif font-extralight">
              Every diamond wishes to be worn, but caution is key:
            </p>
            <li className="text-left font-serif font-extralight">
              Before Activities: Remove rings and bracelets during rigorous activities or chores. This keeps them safe from unplanned mishaps and
            </li>
            <li className="text-left font-serif font-extralight">
              soap build-up!
            </li>
          </div>
        </div>

        <div className="flex mt-11">
          <div className="w-full h-50 mb-4 text-center md:text-left md:mt-7 text-xl ml-5 md:ml-20">
            <h1 className="font-bold font-serif w-10/12 mb-6 lg:text-center md:text-left">
              The Watchful Eye
            </h1>
            <p className="text-left font-serif font-extralight">
              Regular check-ups ensure longevity:
            </p>
            <li className="text-left font-serif font-extralight">
              Annual Inspection: Treat your diamond jewelry to a yearly visit with a professional jeweler. They'll make sure your gems stay secure and
            </li>
            <li className="font-extralight font-serif text-left">
              settings remain intact.
            </li>
          </div>
        </div>

        <div className="flex mt-11">
          <div className="w-full h-50 mb-4 text-center md:text-left md:mt-7 text-xl ml-5 md:ml-20">
            <h1 className="font-bold w-10/12 font-serif mb-6 lg:text-center md:text-left">
              Gentle Touch
            </h1>
            <p className="text-left font-serif font-extralight">
              Your diamonds appreciate a soft touch:
            </p>
            <li className="text-left font-serif font-extralight">
              Handle your jewelry delicately, grasping it by the edges rather than the stones. This keeps the beauty untouched by oils and dirt.
            </li>
          </div>
        </div>

        <div className="flex mt-11">
          <div className="w-full h-50 mb-4 text-center md:text-left md:mt-7 text-xl ml-5 md:ml-20">
            <h1 className="font-bold font-serif w-10/12 mb-6 lg:text-center md:text-left">
              Healing Powers
            </h1>
            <p className="text-left font-serif font-extralight">
              If your diamond encounters trouble, don't delay:
            </p>
            <li className="text-left font-serif font-extralight">
              Seek Help: Visit a jeweler for repairs at the first sign of damage or wear. Their skilled hands can restore its glory, ensuring the story continues.
            </li>
          </div>
        </div>
      </div>
    </>
  )
}

export default RingSection