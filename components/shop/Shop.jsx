import React from "react";
import Product from "./Product";

function Shop() {
  return (
    <div className="w-[70vw] mx-auto mt-10 mb-10 p-8 h-auto bg-[#4a4848] text-white rounded-md shadow-md font-sans">
      <div className="mb-8 p-6 bg-[#2d2d2d] rounded-md">
        <h2 className="text-3xl font-semibold text-gray-300 mb-4">
          Important Note:
        </h2>
        <p className="text-gray-400">
          Due to the substantial costs associated with the GPT-4 and DALL-E 3
          API, we regret to inform you that access to dndai.app cannot be
          provided for free. To enable usage of our platform, we have introduced
          a system of "Credits" available for purchase. Each "Credit" allows you
          to perform one action in the game—whether it's initiating a new game,
          manually saving progress, creating an image, or contributing user
          input to a story. We remain optimistic and confident that as API
          prices evolve over time, we will be able to adjust our credit pricing
          accordingly. Your understanding and support are greatly appreciated as
          we strive to provide you with an exceptional and sustainable
          experience on our platform.
        </p>
      </div>

      {/* Product Card */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold mb-4">Products</h2>
        <Product />
      </div>
    </div>
  );
}

export default Shop;
