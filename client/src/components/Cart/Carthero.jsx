import React from 'react';
import { Minus } from 'lucide-react';
import Cart from "../../assets/cartimg/cart.png"


function Carthero(){
    return(
      <div className="bg-white ">
      {/* Added mt-20 for navbar and mb-24 for footer spacing */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6  mb-24">
      <div className="pt-20">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold font-Montserrat mb-4 sm:mb-8">MY CART (1 ITEM)</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          {/* Left side - Cart Items */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-[#F5F5F5] rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg font-semibold font-Montserrat mb-4">Wedding Ring</h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-56 h-56 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={Cart}
                    alt="Wedding Ring"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-sm text-[#000000] font-Montserrat">
                    14k White Gold 2.0mm Traditional Slightly Curved Wedding Ring
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through">$20/-</span>
                    <span className="text-xl font-semibold">$15/-</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <select className="px-4 py-2 border rounded-md text-sm font-Montserrat w-full sm:w-32">
                      <option>Ring size</option>
                    </select>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-Montserrat">
                      Find your ring size
                    </button>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <button className="text-gray-600 text-sm hover:text-gray-800 font-Montserrat">REMOVE</button>
                    <span className="text-gray-300 font-Montserrat">|</span>
                    <button className="text-gray-600 text-sm hover:text-gray-800 font-Montserrat">VIEW</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <button className="group flex items-center font-Montserrat text-gray-600 hover:text-gray-800 text-sm sm:text-base lg:text-3xl transition-colors">
                Continue Shopping
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right side - Summary */}
          <div className="md:pl-8">
            {/* Added sticky positioning for the summary card */}
            <div className="bg-[#F5F5F5] rounded-lg p-6 shadow-sm max-w-md sticky top-24">
              <h2 className="text-lg font-semibold font-Montserrat mb-8">Summary</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-Montserrat">Subtotal</span>
                  <div className="flex items-center gap-3">
                    <Minus size={16} className="text-gray-400" />
                    <span className="font-semibold">$15/-</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-Montserrat">Shipping Charge</span>
                  <div className="flex items-center gap-3">
                    <Minus size={16} className="text-gray-400" />
                    <span className="font-semibold">$2/-</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-Montserrat">Taxes / Duty</span>
                  <div className="flex items-center gap-3">
                    <Minus size={16} className="text-gray-400" />
                    <span className="font-semibold">$2/-</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-[#ACACAC]">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-Montserrat">Total</span>
                    <div className="flex items-center gap-3">
                      <Minus size={16} className="text-gray-400" />
                      <span className="font-semibold">$19/-</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-black text-white font-Montserrat rounded-full py-3.5 mt-6 hover:bg-gray-800 transition-colors text-sm font-medium">
                  Proceed to pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Carthero;