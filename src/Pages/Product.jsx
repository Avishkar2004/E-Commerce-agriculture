import React from "react";
import { products } from "../Data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Product = () => {
  return (
    <div className="container mx-auto mt-10 mb-5">
      <div className="flex justify-between font-bold">
        <h1 className="text-[#1e2d7d] text-bold text-2xl font-primary">
          Featured collection
        </h1>
        <h1 className="text-[#00badb] transition hover:-translate-x-5 font-[16px] duration-500 cursor-pointer">
          View All
        </h1>
      </div>
      {/* if you want space inbetn for this you need gap-1 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
        {products.map((product, index) => (
          <Link
            to={product.to}
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
              <h2 className="text-base font-light font-primary">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 font-secondary font-semibold">
                {product.description}
              </p>
              <p className="text-red-500 font-secondary mt-3 font-medium text-lg">
                {product.salePrice}
              </p>
              <p className="text-gray-600 font-secondary text-sm mt-2">
                {product.reviews}
              </p>
              <p className="text-green-600 font-secondary mt-2">
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

export default Product;
