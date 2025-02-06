import React from "react";
import shopimage from "../../assets/Shopinmages/Rectangle 44.png"
// import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function shop() {
  const categories = ["Women", "Men", "Unisex"];
const buttonClasses = "w-[50px] h-[25px] text-[10px]  sm:w-[132px] sm:h-[47px] sm:p-[10px_30px] sm:gap-[10px] sm:text-[17px] sm:items-center rounded-[25px] bg-white text-[rgba(1,23,40,1)] hover:bg-[rgba(1,23,40,1)] border-2 border-[rgba(1,23,40,1)] hover:text-white";
const filters = ["Style", "Diamond", "Metals", "Width", "Price"];
const buttonClasses2 = "w-[35px] h-[10px] text-[5px] sm:w-[94px] sm:h-[25.91px] sm:px-[5.45px_16.36px] sm:text-[13px] gap-[12px] rounded-[13.64px] border-[0.55px] border-[rgba(1,23,40,1)]";
const products = Array(6).fill({
  
  title: "14k White Gold 2.0mm Traditional Slightly Curved Wedding Ring",
  price: "$ 20/-",
  colors: [
    "rgba(255,255,94,1)",
    "rgba(255,114,220,1)",
    "rgba(163,255,114,1)",
    "rgba(255,122,122,1)"
  ]
});

const ProductCard = ({title, price, colors }) => (
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
      {/* Add Stars */}
    </div>
  </div>
);
  return (
    <div className="pl-4">
      <div className="py-4">
        <h1 className="font-serif text-2xl sm:text-5xl font-semibold leading-[39.01px] text-left sm:pb-2">
          Classic Wedding Rings for Womens
        </h1>
        <p className="font-montserrat text-xs sm:text-sm font-normal leading-[14.63px] text-left pr-2">
          Our wedding rings for women are the perfect way to mark your next
          chapter together. The handcrafted collection features a wide range of
          stunning designs in multiple fits an finishes. Explore women’s wedding
          rings in HD, all types of views and pick the one that symbolizes your
          everlasting love.
        </p>
      </div>
      <div className=" flex flex-wrap py-2 sm:py-4">
      {categories.map((category, index) => (
        <button
          key={category}
          className={`${buttonClasses} ${index !== categories.length - 1 ? 'mr-4' : ''} sm:${index !== categories.length - 1 ? 'mr-8' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
    <div className="flex flex-wrap py-4">
      {filters.map((filter, index) => (
        <button
          key={filter}
          className={`${buttonClasses2} ${index !== filters.length - 1 ? 'mr-2' : ''} sm:${index !== filters.length - 1 ? 'mr-4' : ''}`}
        >
          {filter} {/* <IoIosArrowDropdownCircle /> */}
        </button>
      ))}
    </div>
    <div className="flex flex-wrap justify-center items-center h-screen">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
    </div>
  );
}
