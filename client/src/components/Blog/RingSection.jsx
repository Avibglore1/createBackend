import React from 'react';
import Backpendent from "../../assets/Blog/Backpendent.png";

const RingSection = () => {
  return (
    <>
      {/* Background Image */}
      <div
        className="bg-no-repeat bg-right-top sm:bg-right-top bg-contain w-full py-10"
        style={{
          backgroundImage: `url(${Backpendent})`,
          backgroundSize: "contain",
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          {/* Section 1 */}
          <div className="mt-11">
            <div className="text-center md:text-left text-xl">
              <h1 className="font-bold font-serif mb-4 lg:text-center md:text-left">
                Chemical Shield
              </h1>
              <p className="text-left font-serif font-extralight">
                Your diamonds are sensitive souls. Protect them from harsh
                chemicals that could dim their sparkle:
              </p>
              <ul className="list-disc ml-5 mt-2 font-serif font-extralight">
                <li>
                  Avoid household cleaners, chlorine, and beauty products.
                  Always remove jewelry during these activities to shield
                  against damage.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-11">
            <div className="text-center md:text-left text-xl">
              <h1 className="font-bold font-serif mb-4 lg:text-center md:text-left">
                The Safe Haven
              </h1>
              <p className="text-left font-serif font-extralight">
                A cozy home is essential for your diamonds:
              </p>
              <ul className="list-disc ml-5 mt-2 font-serif font-extralight">
                <li>
                  Storage Spell: Keep your precious pieces in soft pouches or
                  separate compartments of a jewelry box to prevent scratches
                  and tangles.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-11">
            <div className="text-center md:text-left text-xl">
              <h1 className="font-bold font-serif mb-4 lg:text-center md:text-left">
                Wearer’s Wisdom
              </h1>
              <p className="text-left font-serif font-extralight">
                Every diamond wishes to be worn, but caution is key:
              </p>
              <ul className="list-disc ml-5 mt-2 font-serif font-extralight">
                <li>
                  Before Activities: Remove rings and bracelets during rigorous
                  activities or chores to avoid damage or soap build-up.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-11">
            <div className="text-center md:text-left text-xl">
              <h1 className="font-bold font-serif mb-4 lg:text-center md:text-left">
                The Watchful Eye
              </h1>
              <p className="text-left font-serif font-extralight">
                Regular check-ups ensure longevity:
              </p>
              <ul className="list-disc ml-5 mt-2 font-serif font-extralight">
                <li>
                  Annual Inspection: Treat your diamond jewelry to a yearly
                  visit with a professional jeweler to ensure security and
                  intact settings.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-11">
            <div className="text-center md:text-left text-xl">
              <h1 className="font-bold font-serif mb-4 lg:text-center md:text-left">
                Gentle Touch
              </h1>
              <p className="text-left font-serif font-extralight">
                Your diamonds appreciate a soft touch:
              </p>
              <ul className="list-disc ml-5 mt-2 font-serif font-extralight">
                <li>
                  Handle your jewelry delicately, grasping it by the edges
                  rather than the stones to keep it free from oils and dirt.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-11">
            <div className="text-center md:text-left text-xl">
              <h1 className="font-bold font-serif mb-4 lg:text-center md:text-left">
                Healing Powers
              </h1>
              <p className="text-left font-serif font-extralight">
                If your diamond encounters trouble, don’t delay:
              </p>
              <ul className="list-disc ml-5 mt-2 font-serif font-extralight">
                <li>
                  Seek Help: Visit a jeweler for repairs at the first sign of
                  damage or wear. Their skilled hands can restore its glory.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RingSection;
