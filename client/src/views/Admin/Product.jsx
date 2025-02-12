import React from "react";
import ProductTable from "./Producttabel";

export default function Product() {
  return (
    <div className="pt-28">
      <div className="flex  justify-between mx-4 shadow-lg shadow-gray-400 p-2">
        <p className="items-center text-center font-bold sm:text-2xl">
          Products
        </p>
        <button className="rounded-lg bg-black text-white p-2">
          Add Product
        </button>
      </div>
      <ProductTable />
    </div>
  );
}
