import React from 'react'
import finddiamondone from "./../../assets/Home/finddiamondone.png"
import finddiamondtwo from "./../../assets/Home/finddiamondtwo.png"
import finddiamondthree from "./../../assets/Home/finddiamondthree.png"

function Finddiamond() {
  return (
    <div className='relative font-Montserrat'>
        <h1 className='relative top-5 text-6xl md:text-8xl text-[#011728] text-center'>Find Your Favourite</h1>
        <div className='bg-[#011728] flex flex-col justify-center items-center gap-8 pt-14 pb-14 pl-8 pr-8'>
            <h2 className='text-4xl md:text-6xl text-white text-center font-serif'>The crowning jewels</h2>
            <p className='text-sm md:text-md text-white max-w-sm text-center p mb-1'>Our diamond and gemstone fine jewelry collection offers hand-crafted piecesof unforgettable luxury that are perfect for any occasion.  
            </p>
            <div className='self-start relative'>
                <img src={finddiamondone} className='relative z-20 w-full h-auto max-h-[90vh] object-cover' alt="" />
                <figcaption className='absolute z-10 -bottom-5 left-1/2 -translate-x-1/2 text-4xl md:text-6xl text-[#FFE0E0] text-center text-nowrap'>ETERNITY RINGS</figcaption>
                <div className="absolute z-30 top-1/2 left-1/2 md:left-20 -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 w-[80%] md:w-[55%]  bg-[#D9D9D9BF] 
                flex flex-col justify-center items-center rounded-lg p-4 md:p-16 gap-6 shadow-lg">
                    <h3 className='text-xl md:text-3xl text-center'>ETERNITY RINGS</h3>
                    <p className='max-w-xs md:max-w-sm text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
            </div>
            <div className='self-end relative'>
                <img src={finddiamondtwo} className='relative z-20 w-full h-auto max-h-[90vh] object-cover' alt="" />
                <figcaption className='absolute z-10 -bottom-5 left-1/2 -translate-x-1/2 text-4xl md:text-6xl text-[#FFE0E0] text-center text-nowrap'>GEMSTONE JEWELS</figcaption>
                <div className="absolute z-30 top-1/2 left-1/2 md:left-20 -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 w-[80%] md:w-[55%]  bg-[#D9D9D9BF] 
                flex flex-col justify-center items-center rounded-lg p-4 md:p-16 gap-6 shadow-lg">
                    <h3 className='text-xl md:text-3xl text-center'>GEMSTONE JEWELS</h3>
                    <p className='max-w-xs md:max-w-sm text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
            </div>
            <div className='self-start relative'>
                <img src={finddiamondthree} className='relative z-20 w-full h-auto max-h-[90vh] object-cover' alt="" />
                <figcaption className='absolute z-10 -bottom-5 left-1/2 -translate-x-1/2 text-4xl md:text-6xl text-[#FFE0E0] text-center text-nowrap'>EARRINGS</figcaption>
                <div className="absolute z-30 top-1/2 left-1/2 md:left-20 -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 w-[80%] md:w-[55%]  bg-[#D9D9D9BF] 
                flex flex-col justify-center items-center rounded-lg p-4 md:p-16 gap-6 shadow-lg">
                    <h3 className='text-xl md:text-3xl text-center'>EARRINGS</h3>
                    <p className='max-w-xs md:max-w-sm text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Finddiamond



// background: #D9D9D9BF;
// bottom-[28%] -left-4
// 
