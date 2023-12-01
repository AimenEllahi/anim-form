import React from "react";

export default function Product() {
  return (
    <div className="bg-[#626060] p-4 rounded-md w-[30vw]">
      <img src="/Product1.png" alt="Product 1" className="w-full h-auto mb-4" />
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl font-semibold mb-2">Credit Points: 10</p>
          <p className="text-xl font-semibold mb-2">Price: $5.99</p>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          Buy
        </button>
      </div>
    </div>
  );
}
