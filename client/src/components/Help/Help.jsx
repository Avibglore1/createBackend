import React, { useState } from "react";
import helpimg from "../../assets/Help/Rectangle_52.png";
import helpimg2 from "../../assets/Help/pexels-janakukebal-30541179 1.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Help() {
  const [visibleItems, setVisibleItems] = useState({});

  const toggleVisibility = (index) => {
    setVisibleItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="pt-[100px] px-4">
      {/* First Image and Overlay Text */}
      <div className="relative">
        <img src={helpimg} alt="" className="w-full h-[508px] object-cover" />
        <div className="absolute top-28 left-10 sm:top-0 sm:left-0 flex flex-col sm:flex-row items-center justify-center sm:items-start">
          <div className="z-10 font-[Kugile] text-[75px] sm:text-[150px] font-normal leading-[70px] sm:leading-[211.5px] text-white mt-[50px] sm:ml-[370px] sm:mt-[130px]">
            Amulya
          </div>
          <div className="z-0 font-[Kugile] text-[24px] sm:text-[48px] font-normal leading-[30px] sm:leading-[79.31px] mt-[20px] sm:mt-[270px] text-white">
            Is always for you
          </div>
        </div>
      </div>

      {/* Second Image (Positioned on the Right) */}
      <div className="relative">
        <img
          src={helpimg2}
          alt=""
          className="absolute right-4 sm:right-28 top-14 sm:top-0 w-[70px] sm:w-[246px] h-[70px] sm:h-[190px]"
        />
      </div>

      {/* FAQ Section */}
      <div className="pt-8 sm:pl-4">
        <div className="font-[Montserrat] text-[32px] sm:text-[64px] font-semibold leading-[40px] sm:leading-[78.02px] mb-[40px] sm:mb-[70px] text-center sm:text-left">
          Amulya Jewels Help
        </div>

        {/* FAQ Items */}
        {[
          {
            question: "1. What are the 4Cs of diamonds?",
            answer:
              "The 4Cs stand for Cut, Color, Clarity, and Carat weight. These factors determine a diamond’s quality and value.",
          },
          {
            question:
              "2. What is the difference between natural and lab-grown diamonds?",
            answer:
              "Natural diamonds are formed over billions of years in the Earth’s mantle, while lab-grown diamonds are created in a controlled environment but have the same physical and chemical properties.",
          },
          {
            question: "3. Is it better to buy a diamond online or in-store?",
            answer:
              "Buying online from trusted retailers can offer better deals, but in-store allows you to inspect the diamond in person. Always check for return policies and certification.",
          },
        ].map((item, index) => (
          <div key={index} className="py-4">
            <div
              className="flex justify-between font-montserrat text-[15px] sm:text-[32px] font-normal leading-[20px] sm:leading-[10px] cursor-pointer p-[8px] sm:pl-6 sm:py-[10px] border-2 border-black rounded-full sm:rounded-full "
              onClick={() => toggleVisibility(index)}
            >
              {item.question}
              {visibleItems[index] ? (
                <IoIosArrowUp className="text-[15px] sm:text-[32px] sm:mr-[50px]" />
              ) : (
                <IoIosArrowDown className="text-[15px] sm:text-[32px] sm:mr-[50px]" />
              )}
            </div>

            {visibleItems[index] && (
              <div className=" pl-2 font-[Montserrat] text-[13px] sm:text-[24px] font-extralight leading-[12px] sm:leading-[29.26px] mt-2 pb-2 border-b border-gray-400 bg-gray-100" >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
