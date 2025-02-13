import React, { useEffect, useState } from "react";
import CartImage from "../../assets/cartimg/cart.png";

function CartHero() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const shipping = cart.length > 0 ? 5 : 0;
  const taxes = cart.length > 0 ? 3 : 0;
  const total = subtotal + shipping + taxes;

  return (
    <div className="bg-white">
      <div className="max-w-[90rem] mx-auto p-4 sm:p-6 mb-24">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-8">
          MY CART ({cart.length} ITEM{cart.length !== 1 ? "S" : ""})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="bg-[#F5F5F5] rounded-lg p-4 sm:p-8 shadow-sm">
                  <h2 className="text-lg font-semibold mb-4">{item.title}</h2>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <div className="w-full sm:w-40 h-40 bg-gray-100 rounded-lg overflow-hidden">
                      <img src={CartImage} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <p className="text-sm text-[#000000]">{item.title}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-semibold">${item.price}/-</span>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-auto pt-4">
                        <button onClick={() => handleRemoveItem(index)} className="text-gray-600 text-sm hover:text-gray-800">
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-lg">Your cart is empty.</p>
            )}

            <div className="flex justify-center w-full">
              <button className="group flex items-center text-gray-600 hover:text-gray-800 text-xl md:text-3xl transition-colors">
                Continue Shopping →
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#F5F5F5] rounded-lg p-8 shadow-sm max-w-xl w-full">
              <h2 className="text-lg font-semibold mb-8">Summary</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal}/-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping Charge</span>
                  <span className="font-semibold">${shipping}/-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Taxes / Duty</span>
                  <span className="font-semibold">${taxes}/-</span>
                </div>
                <div className="pt-6 border-t border-[#ACACAC]">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total</span>
                    <span className="font-semibold">${total}/-</span>
                  </div>
                </div>
                <button className="w-full bg-black text-white rounded-full py-3.5 mt-6 hover:bg-gray-800 transition-colors text-sm font-medium">
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartHero;
