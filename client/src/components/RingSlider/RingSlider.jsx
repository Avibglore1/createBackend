// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "./ring.css";
// import { Autoplay } from "swiper/modules";
// function RingSlider() {
//   const [active, setActive] = useState(null)
//     const langs = [
//         { name: "CSS" , logo:"logo", skill: "90%"},
//         { name: "Sass" , logo:"logo", skill: "90%"},
//         { name: "Tailwind" , logo:"logo", skill: "90%"},
//         { name: "React" , logo:"logo", skill: "90%"},
//     ]
//   return (
//     <div className="h-screen bg-black text-white flex items-center justify-center ">
//       <div className="max-w-5xl">
//         <Swiper
//           spaceBetween={50}
//           slidesPerView={3}
//           onSlideChange={(cur) => setActive(cur.realIndex)}
//           loop={true}
//           centeredSlides={true}
//           speed={800}
//           autoplay={{
//             delay: 3000,
//           }}
//           modules={[Autoplay]}
//         >

//             {
//                 langs.map((Lang,i) => (
//                     <SwiperSlide key={i}>
//                     <div className="h-96 flex ">
//                       <div className={`card  to-red-600/40  ${active === i && "card-active"}`}>
//                         <h2 className="text-3xl mt-2 font-semibold">{Lang.name}</h2>
//                         <p className="para">
//                           Lorem Ipsum is simply dummy text of the printing and
//                           typesetting industry. Lorem Ipsum has been the industry's
//                         </p>
//                         <div bg> 80%</div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))
//             }
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default RingSlider;



// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay } from "swiper/modules";

// function RingSlider() {
//   const [active, setActive] = useState(null);
//   const langs = [
//     { name: "CSS", skill: "90%" },
//     { name: "Sass", skill: "90%" },
//     { name: "Tailwind", skill: "90%" },
//     { name: "React", skill: "90%" },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-8">
//       <div className="max-w-5xl w-full">
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           onSlideChange={(cur) => setActive(cur.realIndex)}
//           loop={true}
//           centeredSlides={true}
//           speed={800}
//           autoplay={{ delay: 3000 }}
//           modules={[Autoplay]}
//         >
//           {langs.map((lang, i) => (
//             <SwiperSlide key={i}>
//               <div className="flex justify-center h-96">
//                 <div
//                   className={`w-72 cursor-pointer border-b-4 rounded-md bg-gradient-to-t from-white/20 text-center px-3 py-7 self-end transition-all duration-500 ease-in-out ${
//                     active === i ? "h-96 border-red-600" : "h-44 border-transparent"
//                   }`}
//                 >
//                   <div className="text-5xl mt-2 w-20 h-20 mx-auto rounded-full bg-red-600 text-white grid place-items-center font-bold">
//                     {lang.name.charAt(0)}
//                   </div>
//                   <h2 className="text-3xl mt-2 font-semibold">{lang.name}</h2>
//                   <p className="mt-3 text-sm">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                   </p>
//                   <div className="mt-3 text-lg font-semibold">{lang.skill}</div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default RingSlider;


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "./../../assets/ring-slider-img/img1.png";
import img2 from "./../../assets/ring-slider-img/img2.png";
import img3 from "./../../assets/ring-slider-img/img3.png";
import img4 from "./../../assets/ring-slider-img/img4.png";
import img5 from "./../../assets/ring-slider-img/img5.png";

function RingSlider() {
  const [active, setActive] = useState(null);
  const swiperRef = React.useRef(null);
  const langs = [
    { img:img1 , name: "CSS", skill: "90%" },
    { img:img2 , name: "Sass", skill: "90%" },
    { img:img3 , name: "Tailwind", skill: "90%" },
    { img:img4 , name: "React", skill: "90%" },
    { img:img5 , name: "React", skill: "90%" },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 md:px-8">
      <div className=" w-full">
      <h1 className="text-3xl text-center font-serif mb-12">
        Amulya Jewel's best selling
        <br />
        <span className="text-6xl font-[Kugile] ">Engagement Rings</span>
      </h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(cur) => setActive(cur.realIndex)}
          loop={true}
          centeredSlides={true}
          speed={800}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {langs.map((lang, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center h-96">
                <div
                  className={` flex justify-center items-center cursor-pointer  text-center px-3 py-7 self-end transition-all duration-500 ease-in-out `}
                >
                  <img className={`${
                    active === i ? " h-96  " : "h-44 "}`} 
                    src={lang.img} alt="" />
                  {/* <div className="text-5xl mt-2 w-20 h-20 mx-auto rounded-full bg-red-600 text-white grid place-items-center font-bold">
                    {lang.name.charAt(0)}
                  </div>
                  <h2 className="text-3xl mt-2 font-semibold">{lang.name}</h2>
                  <p className="mt-3 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <div className="mt-3 text-lg font-semibold">{lang.skill}</div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center  mt-6 space-x-12">
          <button onClick={() => swiperRef.current?.slidePrev()} className="border-2 border-[#878876] py-2 px-8 bg-white rounded-full hover:bg-gray-100 transition">
            <FaArrowLeft className="text-[#878876] text-xl h-fit" />
          </button>
          <div className=" font-Montserrat ">
          <h1 className=" text-center font-Montserrat text-2xl font-semibold">Ring</h1>
          
          </div>
          <button onClick={() => swiperRef.current?.slideNext()} className="border-2 border-[#878876] py-2 px-8 bg-white rounded-full hover:bg-gray-100 transition">
            <FaArrowRight className="text-[#878876] text-xl" />
          </button>
        </div>
        <div className="flex justify-center items-stretch mt-1 space-x-4">
        <h1 className=" font-Montserrat ">Start happiness with us  </h1>
        </div>
      </div>
    </div>
  );
}

export default RingSlider;
