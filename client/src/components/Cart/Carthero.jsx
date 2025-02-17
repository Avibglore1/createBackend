import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartImage from "../../assets/cartimg/cart.png";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import {useAuth} from "./../../Context/AuthContext.jsx"


function CartHero() {
  const [cart, setCart] = useState([]);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const filteredCart = savedCart.filter(item => item.quantity > 0); // Remove items with quantity 0
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  }, []);

  const handleQuantityChange = (index, type) => {
    let updatedCart = [...cart];
  
    if (type === "increase") {
      updatedCart[index].quantity += 1;
    } else if (type === "decrease") {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1); // Remove item if quantity is 0
      }
    }
  
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 5 : 0;
  const taxes = cart.length > 0 ? 3 : 0;
  const total = subtotal + shipping + taxes;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    if (!isAuthenticated) {
      alert("Please log in to continue.");
      navigate("/login");
      return;
    }
    
    try {
      const response = await fetch("http://localhost:5000/api/payment/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name || "Guest",
          mobileNo: user.mobileNo || "0000000000",
          email: user.email || "guest@example.com",
          address: user.address || "Unknown",
          amount: total * 100, // Convert to paise
        }),
      });
      
      const data = await response.json();
      if (!data.success || !data.order) {
        alert("Error creating payment. Try again!");
        return;
      }
  
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY || "rzp_test_defaultKey",
        amount: data.order.amount,
        currency: "INR",
        name: "Amulya Jewels",
        description: "Order Payment",
        order_id: data.order.id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch("http://localhost:5000/api/payment/payment-verification", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
  
            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              alert("Payment Successful!");
              localStorage.removeItem("cart"); // Clear cart on success
              navigate(`/success/${verifyData.payment_id}`);
            } else {
              alert("Payment Failed. Please try again.");
              navigate("/failed");
            }
          } catch (error) {
            console.error("Payment Verification Error:", error);
            alert("Payment Verification Failed!");
            navigate("/failed");
          }
        },
        prefill: {
          name: user.name || "Guest",
          email: user.email || "guest@example.com",
          contact: user.mobileNo || "0000000000",
        },
        theme: { color: "#3399cc" },
      };
  
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed! Try again.");
    }
  };
  

  return (
    <div className="bg-white">
      <div className="max-w-[90rem] mx-auto p-4 sm:p-6 mb-24">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-8">
          MY CART ({cart.length} ITEM{cart.length !== 1 ? "S" : ""})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {cart.length > 0 ? (
              cart.map((item,index) => (
                <div key={item.id} className="bg-[#F5F5F5] rounded-lg p-4 sm:p-8 shadow-sm">
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

                      {/* Quantity Selector */}
                      <div className="flex items-center space-x-3 bg-gray-200 p-2 rounded-md mt-4 w-fit">
                        <button
                          onClick={() => handleQuantityChange(index, "decrease")}
                          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
                        >
                          <IoMdRemove size={18} />
                        </button>
                        <span className="text-lg font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(index, "increase")}
                          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
                        >
                          <IoMdAdd size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-lg">Your cart is empty.</p>
            )}
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
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">${shipping}/-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Taxes</span>
                  <span className="font-semibold">${taxes}/-</span>
                </div>
                <div className="pt-6 border-t border-[#ACACAC]">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total</span>
                    <span className="font-semibold">${total}/-</span>
                  </div>
                </div>
                <button onClick={handlePayment} className="w-full bg-black text-white rounded-full py-3.5 mt-6 hover:bg-gray-800 transition-colors text-sm font-medium">
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
