import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const SuccessPage = () => {
  const { paymentid } = useParams();
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/payment/details/${paymentid}`);
        setPaymentDetails(data);
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };
    fetchPaymentDetails();
  }, [paymentid]);

  const generateReceipt = () => {
    if (!paymentDetails) {
      alert("Payment details not available!");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("Payment Receipt", 75, 20);

    doc.autoTable({
      startY: 30,
      head: [["Field", "Details"]],
      body: [
        ["Payment ID", paymentDetails.razorpay_payment_id],
        ["Order ID", paymentDetails.order_id],
        ["Name", paymentDetails.name],
        ["Email", paymentDetails.email],
        ["Mobile", paymentDetails.mobileNo],
        ["Amount Paid", `Rs. ${paymentDetails.amount}.00`],
        ["Date", new Date(paymentDetails.createdAt).toLocaleString()],
      ],
      theme: "grid",
      styles: { fontSize: 12, cellPadding: 4 },
      headStyles: { fillColor: "#007BFF", textColor: "#fff" },
      alternateRowStyles: { fillColor: "#f1f1f1" },
    });
    doc.save(`Receipt_${paymentDetails.razorpay_payment_id}.pdf`);
  };

  const generateCertificate = () => {
    if (!paymentDetails) {
      alert("Payment details not available!");
      return;
    }

    const doc = new jsPDF({ orientation: "landscape" });
    doc.setFontSize(26);
    doc.text("Certificate of Appreciation", 50, 30);
    doc.setFontSize(16);
    doc.text(`This certificate is awarded to`, 50, 50);
    doc.setFontSize(20);
    doc.text(paymentDetails.name, 50, 70);
    doc.setFontSize(16);
    doc.text(`for successfully completing the payment of Rs. ${paymentDetails.amount}.00`, 50, 90);
    doc.text(`Transaction ID: ${paymentDetails.razorpay_payment_id}`, 50, 110);
    doc.save(`Certificate_${paymentDetails.razorpay_payment_id}.pdf`);
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="max-w-lg mx-auto p-6 bg-green-100 shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Payment Successful 🎉</h2>
        {paymentDetails ? (
          <div className="space-y-3">
            <p><strong>Payment ID:</strong> {paymentDetails.razorpay_payment_id}</p>
            <p><strong>Order ID:</strong> {paymentDetails.order_id}</p>
            <p><strong>Name:</strong> {paymentDetails.name}</p>
            <p><strong>Email:</strong> {paymentDetails.email}</p>
            <p><strong>Mobile:</strong> {paymentDetails.mobileNo}</p>
            <p><strong>Amount:</strong> ₹{paymentDetails.amount}</p>
            <button onClick={generateReceipt} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Download Receipt 📄
            </button>
            <button onClick={generateCertificate} className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
              Get Certificate 🎓
            </button>
          </div>
        ) : (
          <p className="text-center">Fetching payment details...</p>
        )}
      </div>
    </div>
  );
};

export default SuccessPage;
