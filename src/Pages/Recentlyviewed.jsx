import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { parentObject } from "../Data";

const Recentlyviewed = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Number of products to show at once
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 1 second (1000 milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-12 mb-20 mx-auto">
      {/* Organic Products */}
      <div className="flex justify-between font-bold">
        <h1 className="text-[#1e2d7d] text-bold text-2xl font-primary">
          Recently viewed
        </h1>
        <h1 className="text-[#00badb] transition hover:-translate-x-5 font-[16px] duration-500 cursor-pointer">
          View All
        </h1>
      </div>
      <Slider {...settings}>
        {parentObject.products.map((product, index) => (
          <div key={index} className="border border-x-slate-200 border-solid">
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Recentlyviewed;
