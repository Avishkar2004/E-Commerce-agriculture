import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Flower from "../Components/Collections/images.jpg";
import Pgr from "../Components/Collections/pgr.avif";
import TheetaInsect from "../Components/OrganicProducts/THEETA.avif";
import ProZinc2 from "../Components/micronutrientPhoto/prozinc-new_300x.avif";
import Hamla from "../Components/BestInsecticides/Hamla550_200x.avif";
import SAAF from "../Components/BestFungicides/Saaf.avif";
import Movento from "../Components/BestInsecticides/MOVENTO.avif";
import AriesAntox from "../Components/micronutrientPhoto/ARIES ANTOX.avif";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const products = [
  {
    name: "Pgr",
    description: "Description of Product 1",
    salePrice: "From Rs. 200",
    reviews: "66 reviews",
    stockStatus: "In stock, 4 units",
    image: Pgr,
    to: "/Plantgrowthregulator/tagbumper",
  },
  {
    name: "Product 2",
    description: "Description of Product 2",
    salePrice: "From Rs. 200",
    reviews: "66 reviews",
    stockStatus: "In stock, 4 units",
    image: TheetaInsect,
    to: "Insecticide/theetaInsect",
  },
  {
    name: "Product 3",
    description: "Description of Product 3",
    salePrice: "From Rs. 200",
    reviews: "66 reviews",
    stockStatus: "In stock, 4 units",
    image: ProZinc2,
    to: "micro-nutrients/prozinc",
  },
  {
    name: "Product 4",
    description: "Description of Product 4",
    salePrice: "From Rs. 200",
    reviews: "66 reviews",
    stockStatus: "In stock, 4 units",
    image: Hamla,
    to: "Insecticide/hamla",
  },
  {
    name: "Product 5",
    description: "Description of Product 3",
    salePrice: "From Rs. 200",
    reviews: "66 reviews",
    stockStatus: "In stock, 4 units",
    image: SAAF,
    to: "fungicides/saaf",
  },

  {
    name: "Product 6",
    description: "Description of Product 3",
    salePrice: "From Rs. 200",
    reviews: "66 reviews",
    stockStatus: "In stock, 4 units",
    image: Movento,
    to: "Insecticide/movento",
  },

  {
    name: "Product 7",
    description: "Description of Product 3",
    salePrice: "From Rs. 200",
    reviews: "66 reviews",
    stockStatus: "In stock, 4 units",
    image: AriesAntox,
    to: "micro-nutrients/ariestantox",
  },
];

const Sliders = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 2,
  };

  return (
    <div className="container mx-auto py-8 bg-[#0774d7] text-white">
      <h1 className="text-4xl font-semibold mb-6 font-primary">
        Best Selling Products
      </h1>
      <p className="text-lg mb-6 font-secondary">
        Discover our high-quality products below.
      </p>
      <a
        href="#"
        className="bg-white text-[#0774d7] py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
      >
        Learn more
      </a>
      <img
        src={Flower}
        alt="Main Product"
        className="mx-auto mb-[11rem] rounded mt-8 mr-[62rem] items-start"
      />

      <div className="flex flex-row pl-56 items-center justify-center -mt-[29rem] ml-24">
        <div className="w-10/12">
          <Slider {...sliderSettings}>
            {products.map((product, index) => (
              <Link
                to={product.to}
                key={index}
                className="p-4 border rounded-lg bg-white text-black my-4"
                style={{ minWidth: "200px" }}
              >
                <div className="text-center flex-row-reverse ">
                  <div className="flex items-center ">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-40 h-40 mx-auto mb-8 bg-transparent"
                    />
                  </div>
                  <h2 className="text-xl font-primary">{product.name}</h2>
                  <p className="font-light font-secondary">
                    {product.description}
                  </p>
                  <div className="flex space-x-8 text-center font-secondary">
                    <p className="text-red-500">{product.salePrice}</p>
                    <p className="text-gray-500">{product.regularPrice}</p>
                    <p className="text-blue-500">{product.reviews}</p>
                  </div>
                  <p className="text-gray-500 font-secondary font-semibold">
                    {product.stockStatus}
                  </p>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
