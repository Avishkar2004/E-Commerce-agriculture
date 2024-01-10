import React from "react";
import { parentObject } from "../Data";
import { Link } from "react-router-dom";

const BestFungicides = () => {
  return (
    <div className="container mx-auto mt-10 mb-5">
      <div className="flex justify-between font-bold">
        <h1 className="text-[#1e2d7d] text-bold text-2xl font-primary">
          Best Fungicides
        </h1>
        <h1 className="text-[#00badb] transition hover:-translate-x-5 font-[16px] duration-500 cursor-pointer">
          View All
        </h1>
      </div>
      {/* if you want to put gap inbetn component you need gap */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
        {parentObject.Fungicides.map((product, index) => (
          <Link
            to={product + "/:productId"}
            key={index}
            className="border border-x-slate-200 border-solid"
          >
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold font-primary">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 font-secondary font-semibold">
                {product.description}
              </p>
              <p className="text-red-500 font-secondary">{product.salePrice}</p>
              <p className="text-green-600 font-secondary font-medium">
                {product.reviews}
              </p>
              <p className="text-gray-600 font-secondary">
                {product.stockStatus}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <hr className="mt-12 border-[1px] border-gray-600" />
    </div>
  );
};

export default BestFungicides;
