import React from "react";
import CustomerTable from "./Customertable";

export default function Customer() {
  return (
    <div className="pt-28">
      <div className="mx-4 shadow-lg shadow-gray-400 p-4">
        <p className="font-bold text-2xl">Customer</p>
      </div>
      <CustomerTable />
    </div>
  );
}
