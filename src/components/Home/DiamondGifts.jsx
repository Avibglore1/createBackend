// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import Img1 from './../../assets/DiamondGiftsi-mages/diamond-chains.png';
// import Img2 from './../../assets/DiamondGiftsi-mages/diamond-studs.png';
// import Img3 from './../../assets/DiamondGiftsi-mages/diamond-pendants.png';
// import Img4 from './../../assets/DiamondGiftsi-mages/anniversary-ring.png';
// import Img5 from './../../assets/DiamondGiftsi-mages/tennis-bracelets.png';

// const products = [
//   { name: 'Diamond Chains', image: Img1 },
//   { name: 'Diamond Studs', image: Img2 },
//   { name: 'Diamond Pendants', image: Img3 },
//   { name: 'Anniversary Ring', image: Img4 },
//   { name: 'Tennis Bracelets', image: Img5 },
//   { name: 'Diamond Chains', image: Img1 },
//   { name: 'Diamond Studs', image: Img2 },
//   { name: 'Diamond Pendants', image: Img3 },
//   { name: 'Anniversary Ring', image: Img4 },
//   { name: 'Tennis Bracelets', image: Img5 },
//   { name: 'Diamond Chains', image: Img1 },
//   { name: 'Diamond Studs', image: Img2 },
//   { name: 'Diamond Pendants', image: Img3 },
//   { name: 'Anniversary Ring', image: Img4 },
//   { name: 'Tennis Bracelets', image: Img5 },
// ];

// export default function DiamondGifts() {
//   return (
//     <div className="bg-[#0c2233] py-6 text-center text-white">
//       <h2 className="text-2xl font-semibold mb-4">Gifts that ship in time for Special Occasion</h2>
//       <div className="flex justify-center mb-4">
//         <button className="bg-white text-[#0c2233] px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200">
//           Shop Now
//         </button>
//       </div>
//       <div className="max-w-[70%] mx-auto px-4">
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           spaceBetween={20}
//           slidesPerView={2}
//           breakpoints={{
//             640: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {products.map((product, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-[#dfe7ec] rounded-lg overflow-hidden shadow-lg p-4">
//                 <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
//                 <p className="text-black mt-2 font-medium">{product.name}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }




import Img1 from './../../assets/DiamondGiftsi-mages/diamond-chains.png';
import Img2 from './../../assets/DiamondGiftsi-mages/diamond-studs.png';
import Img3 from './../../assets/DiamondGiftsi-mages/diamond-pendants.png';
import Img4 from './../../assets/DiamondGiftsi-mages/anniversary-ring.png';
import Img5 from './../../assets/DiamondGiftsi-mages/tennis-bracelets.png';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const DiamondGifts = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const products = [
    {
      id: 1,
      title: 'Diamond Chains',
      image: Img1
    },
    {
      id: 2,
      title: 'Diamond Studs',
      image: Img2
    },
    {
      id: 3,
      title: 'Diamond Pendants',
      image: Img3
    },
    {
      id: 4,
      title: 'Anniversary Ring',
      image: Img4
    },
    {
      id: 5,
      title: 'Tennis Bracelets',
      image: Img5
    },
    {
      id: 6,
      title: 'Diamond Chains',
      image: Img1
    }
  ];

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => scrollElement.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full max-w-[95%] mx-auto px-4">
      <div className="flex items-center flex-wrap justify-around mb-6 bg-[#0c2233] px-5  rounded-lg">
        <h2 className="text-2xl font-medium text-white text-center py-3">
          Gifts that ship in time for Special Occuation
        </h2>
        <button className="bg-white  text-gray-900 px-8 py-2 my-2 rounded-full font-medium hover:bg-gray-50 transition-colors">
          Shop Now
        </button>
      </div>

      <div className="relative lg:px-10">
        <div 
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto pb-4 scroll-smooth"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-gray-50/80">
                <h3 className="text-gray-900 font-medium">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {showLeftButton && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8 text-[#0c2233]" />
          </button>
        )}
        
        {showRightButton && (
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8 text-[#0c2233]" />
          </button>
        )}
      </div>
    </div>
  );
};

export default DiamondGifts;