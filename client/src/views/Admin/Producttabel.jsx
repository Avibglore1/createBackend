import React, { useState } from "react";
import { Pencil, Trash } from "lucide-react";

const ProductTable = () => {
  const [products, setProducts] = useState([
    { id: 1, image: "", name: "T shirt", price: 2000, stock: -5 },
    { id: 2, image: "", name: "Jeans", price: 400, stock: 12 },
    { id: 3, image: "", name: "Sweater", price: 5600, stock: 39 },
    { id: 4, image: "", name: "Jacket", price: 3400, stock: 31 },
    { id: 5, image: "", name: "Hoodie", price: 2000, stock: 44 },
    { id: 6, image: "", name: "Lower", price: 300, stock: 77 },
    { id: 7, image: "", name: "Denim blue jacket", price: 500, stock: 50 },
  ]);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        {/* Table Head - Hidden on Extra-Small Screens */}
        <thead className="bg-gray-200 hidden sm:table-header-group">
          <tr>
            <th className="px-4 py-2 text-left hidden sm:table-cell">IMAGE</th>
            <th className="px-4 py-2 text-left">NAME</th>
            <th className="px-4 py-2 text-left">PRICE</th>
            <th className="px-4 py-2 text-left">AVAILABLE STOCK</th>
            <th className="px-4 py-2 hidden sm:table-cell">UPDATE</th>
            <th className="px-4 py-2 hidden sm:table-cell">REMOVE</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b flex flex-col sm:table-row p-2 sm:p-0">
              
              {/* Image (Hidden on Mobile) */}
              <td className="px-4 py-2 hidden sm:table-cell">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded"
                />
              </td>

              {/* Product Name */}
              <td className="px-4 py-2 font-medium">{product.name}</td>

              {/* Price */}
              <td className="px-4 py-2">₹ {product.price}</td>

              {/* Stock with Conditional Color */}
              <td className={`px-4 py-2 ${product.stock < 0 ? "text-red-500" : "text-green-600"}`}>
                {product.stock}
              </td>

              {/* Update Button (Hidden on Mobile) */}
              <td className="px-4 py-2 hidden sm:table-cell text-center">
                <button className="text-blue-500 hover:text-blue-700">
                  <Pencil size={20} />
                </button>
              </td>

              {/* Remove Button (Hidden on Mobile) */}
              <td className="px-4 py-2 hidden sm:table-cell text-center">
                <button className="text-red-500 hover:text-red-700">
                  <Trash size={20} />
                </button>
              </td>

              {/* Mobile-Friendly Update & Remove Buttons */}
              <td className="px-4 py-2 flex justify-between sm:hidden">
                <button className="text-blue-500 hover:text-blue-700 flex items-center">
                  <Pencil size={20} className="mr-1" /> Edit
                </button>
                <button className="text-red-500 hover:text-red-700 flex items-center">
                  <Trash size={20} className="mr-1" /> Remove
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
