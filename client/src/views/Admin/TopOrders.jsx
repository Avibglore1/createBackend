import React, { useState } from "react";

const TopOrders = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Products",
      total: 12,
      percentage: 50,
      color: "text-purple-600",
    },
    {
      id: 2,
      title: "Orders",
      total: 24,
      percentage: 50,
      color: "text-blue-600",
    },
    {
      id: 3,
      title: "Customers",
      total: 0,
      percentage: 50,
      color: "text-red-600",
    },
  ]);

  const orders = [
    {
      id: 1,
      name: "Abhijeet Kokat",
      quantity: 1,
      phone: "9373700515",
      amount: 1203,
      status: "Processing",
    },
    {
      id: 2,
      name: "John Doe",
      quantity: 2,
      phone: "9876543210",
      amount: 2500,
      status: "Pending",
    },
    {
      id: 3,
      name: "Abu Shariya",
      quantity: 1,
      phone: "34343434",
      amount: 1800,
      status: "Shipped",
    },
    {
      id: 4,
      name: "Sarah Smith",
      quantity: 3,
      phone: "5556667777",
      amount: 3200,
      status: "Processing",
    },
  ];

  const [loading, setLoading] = useState(false);

  return (
    <div className="md:p-20 p-10 md:pt-28 pt-32 md:max-w-full space-y-10">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-24">
        {loading
          ? [1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="h-40 w-full md:w-60 bg-gray-200 animate-pulse rounded-xl"
              ></div>
            ))
          : cards.map((card) => (
              <div
                key={card.id}
                className="p-4 w-full md:w-60 md:h-40 bg-white shadow-md rounded-lg flex justify-between items-start"
              >
                <div>
                  <p className="text-sm text-gray-500">{card.title}</p>
                  <h3 className="text-lg font-semibold">
                    Total: {card.total}+
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="mr-1">↗</span>+{card.percentage}%
                  </p>
                </div>
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <circle
                      className="text-gray-300"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                    <circle
                      className={`${card.color}`}
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                      strokeDasharray="100"
                      strokeDashoffset={100 - card.percentage}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-purple-600">
                    {card.percentage}%
                  </span>
                </div>
              </div>
            ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white p-2 md:p-0 max-w-8xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-4 md:mb-8">
          TOP ORDERS
        </h2>
        <div className="overflow-x-auto border-t-2">
          <table className="min-w-full rounded-2xl">
            <thead className="bg-slate-200">
              <tr>
                <th className="py-3 px-3 text-left font-semibold">Name</th>
                <th className="py-3 px-3 text-left font-semibold">Quantity</th>
                <th className="py-3 px-3 text-left font-semibold">Phone</th>
                <th className="py-3 px-3 text-left font-semibold">Amount</th>
                <th className="py-3 px-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="py-3 px-3">{order.name}</td>
                  <td className="py-3 px-3">{order.quantity}</td>
                  <td className="py-3 px-3">{order.phone}</td>
                  <td className="py-3 px-3">${order.amount}</td>
                  <td className="py-3 px-3">
                    <span
                      className={`px-2 py-1 text-sm font-semibold rounded-full 
                        ${order.status === "Processing" ? "bg-yellow-0" : ""}
                        ${order.status === "Pending" ? "bg-red-0" : ""}
                        ${order.status === "Shipped" ? "bg-green-0" : ""}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopOrders;
