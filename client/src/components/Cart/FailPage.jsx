import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FailPage = () => {
  const { paymentid } = useParams();
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/api/payment/details/${paymentid}`);
        setPaymentDetails(data);
      } catch (error) {
        console.error("Error fetching failed payment details:", error);
      }
    };
    fetchPaymentDetails();
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    setUser(JSON.parse(localStorage.getItem("user")) || {});
  }, [paymentid]);

  const retryPayment = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before retrying payment.");
      navigate("/cart");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/payment/checkout`, {
        name: user.name || "Guest",
        mobileNo: user.mobileNo || "0000000000",
        email: user.email || "guest@example.com",
        address: user.address || "Unknown",
        amount: cart.reduce((total, item) => total + item.price, 0) + 5 + 3, // subtotal + shipping + taxes
      });

      if (!response.data.success) {
        alert("Error in payment. Try again!");
        return;
      }

      const options = {
        key: "rzp_live_uZqf3G3ZLTSKbH",
        amount: response.data.order.amount,
        currency: "INR",
        name: "Amulya Jewels",
        description: "Order Payment",
        order_id: response.data.order.id,
        handler: function (response) {
          navigate(`/success/${response.razorpay_payment_id}`);
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

  const contactSupport = () => {
    if (!paymentDetails) {
      alert("Payment details not available!");
      return;
    }
    const whatsappNumber = "919168733111";
    const message = `🚨 Payment Failed! 🚨%0A
      Payment ID: ${paymentDetails.razorpay_payment_id || "N/A"}%0A
      Order ID: ${paymentDetails.order_id}%0A
      Name: ${paymentDetails.name}%0A
      Email: ${paymentDetails.email}%0A
      Mobile: ${paymentDetails.mobileNo}%0A
      Amount: ₹${paymentDetails.amount}%0A
      Status: Failed ❌%0A
      Please assist with my payment issue.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="max-w-lg mx-auto mt-10 p-6 bg-red-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-red-700 mb-4">Payment Failed ❌</h2>
        <button onClick={retryPayment} className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-400">
          Retry Payment 🔄
        </button>
        {paymentDetails && (
          <div className="space-y-3">
            <p><strong>Payment ID:</strong> {paymentDetails.razorpay_payment_id || "N/A"}</p>
            <p><strong>Order ID:</strong> {paymentDetails.order_id}</p>
            <p><strong>Name:</strong> {paymentDetails.name}</p>
            <p><strong>Email:</strong> {paymentDetails.email}</p>
            <p><strong>Mobile:</strong> {paymentDetails.mobileNo}</p>
            <p><strong>Amount:</strong> ₹{paymentDetails.amount}</p>
            <p className="text-red-600"><strong>Reason:</strong> Payment was not completed.</p>
            <button onClick={contactSupport} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-2">
              Contact Support 📞
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FailPage;
