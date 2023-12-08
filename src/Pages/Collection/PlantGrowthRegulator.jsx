import React, { useState } from "react";
import PlantGrowthRegulators from "../../Components/PgrCollection/PlantGrowthRegulator.jpg";
import { PGR } from "../../Data";
import Recentlyviewed from "../Recentlyviewed";
import { Link } from "react-router-dom";

const PlantGrowthRegulator = () => {
  return (
    <div className="container ">
      <a
        href="/"
        className="ml-12 mt-12 text-black text-sm hover:text-blue-600 font-primary"
      >
        Home >
      </a>
      <a
        href="/Plantgrowthregulator"
        className="text-black text-sm ml-1 hover:text-blue-600 font-secondary"
      >
        Plant Growth Regulator (PGR) >
      </a>
      <div className=" left-4 items-center">
        <div className="container flex">
          {/* Left Column - Leading Brands */}
          <div className="w-1/4 bg-white p-4 border-[1px] mt-10">
            <h2 className="text-xl font-semibold mb-2">Leading Brands</h2>
            <ul className="text-sm text-black font-secondary space-y-5">
              <li className="hover:text-blue-500 cursor-pointer"> Adama (0)</li>
              <li className="hover:text-blue-500 cursor-pointer"> Aimco (3)</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Aries Agro (25)
              </li>
              <li className="hover:text-blue-500 cursor-pointer"> Bayer (7)</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Coromandel (1)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Crystal (2)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Dhanuka (5)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">Gharda (3)</li>
              <li className="hover:text-blue-500 cursor-pointer"> HPM (1)</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Indofil (3)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Insecticides (India) (2)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Krishi Rasayan (2)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Liebigs (2)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Multiplex (1)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Nagarjuna (3)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                PI Industries (5)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Ramcides CropScience (3)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Sumitomo (2)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Symbiosis (0)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Syngenta (7)
              </li>
              <li className="hover:text-blue-500 cursor-pointer"> SWAL (1)</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Tata Rallis (8)
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Tropical (1)
              </li>
              <li className="hover:text-blue-500 cursor-pointer"> UPL (3)</li>
              <li className="hover:text-blue-500 cursor-pointer"> Vedic (1)</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Agribuzz (0)
              </li>
            </ul>
            <hr className="mt-5 border-[1px]" />

            <div className="mt-5">
              <span className="primary text-xl mb-12">Filter</span>
              <ul className="space-y-5">
                <li className="hover:text-blue-500 cursor-pointer">
                  Best sellers
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Best selling
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Bio Fertilizer
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Bio-fertilizers
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Micro-nutrients
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  New Arrival
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  New Arrivals
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Organic Product
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Plant Growth Regulator (PGR)
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="w-3/4 mt-10 bg-white ml-10  ">
            {/* Center the image */}
            <div className="flex justify-center pl-5 w-full">
              <img
                className="w-[100%] mr-2 -ml-2"
                src={PlantGrowthRegulators}
                alt=""
              />
            </div>
            <div className="ml-3 mt-5 font-primary text-xl text-blue-500">
              <h1>Plant Growth Regulator (PGR)</h1>
            </div>
            <div className="mt-4 ml-3 space-y-5 font-secondary text-base">
              <p>
                Plant Growth Regulator (PGR) is hormone-based chemicals that
                regulate the plants at the inner label. It shows the results in
                a few hours. When the micronutrients fail to give faster growth
                results, you can apply the ho plant growth regulators such as
                Planofix, Miraculan, Booster:2, Phytozyme, or seaweed extract.
              </p>
              <p>
                Unlike micro-nutrients, it has side effects if applied
                frequently or in higher doses. Before it is used, everyone
                should take notice of the applicable doses of the products
                mentioned on the packets. The dose of all the products varies.
              </p>
            </div>
            <hr className="mt-5 border-[1px]" />
            <div className="flex space-x-12 ml-3 mt-5 font-secondary justify-center gap-24 ">
              <p>Showing 1 - 14 of 14 products</p>
              <p>
                <label>
                  Display:
                  <select name="Display">
                    <option value="24 per page">24 per page</option>
                    <option value="36 per page">36 per page</option>
                    <option value="48 per page">48 per page</option>
                  </select>
                </label>
              </p>
              <p>
                <label>
                  Sort By:
                  <select name="Best Selling">
                    <option value="apple">Best Selling</option>
                    <option value="banana">Alphabetically, A-Z</option>
                    <option value="orange">Alphabetically, Z-A</option>
                    <option value="orange">Price, low to high</option>
                    <option value="orange">Price, high to low</option>
                    <option value="orange">Date, old to new</option>
                    <option value="orange">Data, new to old</option>
                  </select>
                </label>
              </p>
            </div>

            <hr className="mt-5 border-[1px]" />
      {/* if you want to put gap inbetn component you need gap */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
              {PGR.map((product, index) => (
                <Link
                  to={product.to}
                  key={index}
                  className="border border-gray-300"
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
                    <p className="text-red-500 font-secondary">
                      {product.salePrice}
                    </p>
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
          </div>
        </div>
      </div>

      <Recentlyviewed />
    </div>
  );
};

export default PlantGrowthRegulator;
