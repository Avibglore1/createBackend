import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import shopimage from "../../assets/Shopinmages/Rectangle 44.png";

export default function Shop() {
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (index) => {
    setOpenFilter(openFilter === index ? null : index);
  };

  const categories = ["Women", "Men", "Unisex"];
  const buttonClasses = "w-[95px] h-[35px] text-[17px] sm:w-[132px] sm:h-[47px] sm:p-[10px_30px] sm:gap-[10px] sm:text-[17px] sm:items-center rounded-[25px] bg-white text-[rgba(1,23,40,1)] hover:bg-[rgba(1,23,40,1)] border-2 border-[rgba(1,23,40,1)] hover:text-white mr-2 sm:mr-4";
  const filters = ["Style", "Diamond", "Metals", "Width", "Price"];
  const filterOptions = {
    Style: ["Classic", "Modern", "Vintage"],
    Diamond: ["Round", "Princess", "Emerald"],
    Metals: ["Gold", "Silver", "Platinum"],
    Width: ["2mm", "4mm", "6mm"],
    Price: ["Under $100", "$100 - $500", "Above $500"],
  };
  const buttonClasses2 = "flex items-center justify-between w-[90px] h-auto pl-[7px] sm:pl-[10px] sm:text-[13px] rounded-[13.64px] border-[0.55px] border-[rgba(1,23,40,1)]";

  const products = Array(6).fill({
    title: "14k White Gold 2.0mm Slightly Curved Wedding Ring",
    price: "$ 20/-",
    colors: ["rgba(255,255,94,1)", "rgba(255,114,220,1)", "rgba(163,255,114,1)", "rgba(255,122,122,1)"],
  });

  const ProductCard = ({ title, price, colors }) => (
    <div className="w-1/2 pr-2 sm:w-1/3 sm:pr-4">
      <div className="pr-2 pb-8 sm:pr-6 sm:pb-16">
        <img src={shopimage} alt={title} className="w-[230px] h-[190px] sm:w-[426px] sm:h-[280px] py-3" />
        <p className="font-montserrat text-[15px] sm:text-[20px] font-normal leading-[19px] sm:leading-[24.38px] text-left py-1 sm:py-3">{title}</p>
        <h1 className="font-montserrat text-[17px] sm:text-[32px] font-black leading-[20px] sm:leading-[39.01px] text-left py-3">{price}</h1>
        <div className="flex">
          <span className="pr-3 font-nunito text-[15px] font-semibold leading-[20.46px]">Color -</span>
          {colors.map((color, idx) => (
            <span key={idx} className="px-1">
              <div className="rounded-full w-5 h-5" style={{ backgroundColor: color }}></div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return (
    <div className="pl-4 pt-[80px]">
      <div className="py-4">
        <h1 className="font-serif text-2xl sm:text-5xl font-semibold leading-[39.01px] text-left sm:pb-2">
          Classic Wedding Rings for Women
        </h1>
        <p className="font-montserrat text-xs sm:text-sm font-normal leading-[14.63px] text-left pr-2">
          Our wedding rings for women are the perfect way to mark your next chapter together.
        </p>
      </div>
      <div className="flex flex-wrap py-2 sm:py-4 gap-2 sm:gap-4">
        {categories.map((category, index) => (
          <button key={category} className={buttonClasses}>{category}</button>
        ))}
      </div>
      <div className="flex flex-wrap py-4 gap-4">
        {filters.map((filter, index) => (
          <div key={filter} className="relative">
            <button onClick={() => toggleFilter(index)} className={buttonClasses2}>
              <span>{filter}</span>
              {openFilter === index ? (
                <IoIosArrowUp className="text-[15px] sm:text-[18px]" />
              ) : (
                <IoIosArrowDown className="text-[15px] sm:text-[18px]" />
              )}
            </button>
            {openFilter === index && (
              <div className="absolute bg-gray-400 shadow-md border rounded-md mt-2 w-full z-10">
                {filterOptions[filter].map((option, idx) => (
                  <div key={idx} className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-[13px]">
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </div>
  );
}