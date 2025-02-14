import React, { useState, useEffect } from "react";
import { IoMdRemove } from "react-icons/io";
import shopimage from "../../assets/Shopinmages/Rectangle 44.png";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const showPopup = (message) => alert(message);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    showPopup("Item added to cart!");
  };

  const handleRemoveFromCart = (productId) => {
    const itemExists = cart.some((item) => item.id === productId);
    if (!itemExists) {
      showPopup("Please add an item to the cart first!");
      return;
    }
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    showPopup("Item removed from cart!");
  };

  const products = Array.from({ length: 6 }, (_, idx) => ({
    id: `prod-${idx}`,
    title: "14k White Gold 2.0mm Slightly Curved Wedding Ring",
    price: 28,
  }));

  return (
    <div className="pl-4 pt-[80px]">
      <h1 className="text-2xl sm:text-5xl font-semibold">Classic Wedding Rings</h1>
      <div className="flex flex-wrap justify-center items-center">
        {products.map((product) => (
          <div key={product.id} className="w-1/2 pr-2 sm:w-1/3 sm:pr-4">
            <div className="flex flex-col items-center pr-2 pb-8 sm:pr-6 sm:pb-16">
              <img src={shopimage} alt={product.title} className="w-[230px] h-[190px] sm:w-[426px] sm:h-[280px] py-3" />
              <div className="flex justify-between items-center w-full py-2">
                <p className="text-[15px] sm:text-[20px]">{product.title}</p>
                <h1 className="text-[17px] sm:text-[32px] font-black">${product.price}</h1>
              </div>
              <div className="flex items-center justify-center space-x-4 w-full mt-2">
                <button onClick={() => handleRemoveFromCart(product.id)} className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  <IoMdRemove size={20} />
                </button>
                <button onClick={() => handleAddToCart(product)} className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full mt-6">
        <button onClick={() => navigate("/shop")} className="text-lg text-gray-600 hover:text-gray-800 font-semibold">
          Continue Shopping →
        </button>
      </div>
    </div>
  );
}
