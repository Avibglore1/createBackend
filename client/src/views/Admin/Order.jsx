import React from "react";

const Order = () => {
  const orders = [
    {
      id: 1,
      name: "Abhijeet Kokat",
      total: "₹1203",
      phone: "9373700515",
      quantity: 1,
      status: "Processing",
    },
    {
      id: 2,
      name: "John Doe",
      total: "₹2500",
      phone: "9876543210",
      quantity: 2,
      status: "Pending",
    },
    {
      id: 3,
      name: "Abu Shariya",
      total: "₹1800",
      phone: "34343434",
      quantity: 1,
      status: "Shipped",
    },
  ];

  return (
    <>
      <div className="p-8"></div>
      <div className="m-4 md:m-8 mt-10 p-4 border-2 shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold">Orders</h1>
      </div>

      <div className="bg-white rounded-lg p-4  md:p-8 md:-mt-8 max-w-8xl mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg">
            <thead className="bg-gray-200">
            <tr>
                <th className="text-center p-4 font-semibold">NAME</th>
                <th className="text-center p-4 font-semibold">TOTAL</th>
                <th className="text-center p-4 font-semibold">PHONE</th>
                <th className="text-center p-4 font-semibold">QUANTITY</th>
                <th className="text-center p-4 font-semibold">UPDATE STATUS</th>
                <th className="text-center p-4 font-semibold">MORE INFO</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 border-b">
                  <td className="py-3 px-6 text-center">{order.name}</td>
                  <td className="py-3 px-6 text-center">{order.total}</td>
                  <td className="py-3 px-6 text-center">{order.phone}</td>
                  <td className="py-3 px-6 text-center">{order.quantity}</td>
                  <td className="py-3 px-6 text-center">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full
                        ${
                          order.status === "Processing"
                            ? "bg-yellow-0"
                            : ""
                        }
                        ${
                          order.status === "Pending"
                            ? "bg-red-0"
                            : ""
                        }
                        ${
                          order.status === "Shipped"
                            ? "bg-green-0"
                            : ""
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 flex justify-center space-x-4">
                    <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">
                      Update
                    </button>
                    <button className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm">
                      More Info
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
