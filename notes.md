import React from "react";
import Offer from "../Components/Collections/Offer.webp";
import Pgr from "../Components/Collections/pgr.avif";
import Organic from "../Components/Collections/organic.avif";
import micronutrients1 from "../Components/Collections/micronutrients1.avif";
import insectiicide1 from "../Components/Collections/insectiicide1.avif";
import Funcgicide from "../Components/Collections/fungicide1.avif";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <section className="flex flex-col items-center mb-9">
      <div className="mb-20">
        <Link to="#">
          <img src={Offer} alt="Offer" className="max-w-full" />
        </Link>
      </div>
      <div className="w-full px-4 md:px-0">
        <div className="flex justify-between items-baseline mb-5 font-bold">
          <h1 className="text-[#1e2d7d] text-lg font-primary cursor-pointer">
            Our Collections
          </h1>
          <Link to="#" className="text-[#00badb] transform hover:translate-x-1 transition duration-300">
            View All
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <Link to="/Plantgrowthregulator" className="collection-item">
            <img src={Pgr} alt="Plant Growth Regulator" className="rounded-full w-40 h-40 hover:scale-105 transition duration-300" />
            <span className="block text-center mt-2">Plant Growth Regulator</span>
          </Link>
          <Link to="/organicproduct" className="collection-item">
            <img src={Organic} alt="Buy Organic Product" className="rounded-full w-40 h-40 hover:scale-105 transition duration-300" />
            <span className="block text-center mt-2">Buy Organic Product</span>
          </Link>
          <Link to="/micro-nutrients" className="collection-item">
            <img src={micronutrients1} alt="Buy Micro Nutrients" className="rounded-full w-40 h-40 hover:scale-105 transition duration-300" />
            <span className="block text-center mt-2">Buy Micro Nutrients</span>
          </Link>
          <Link to="/insecticide" className="collection-item">
            <img src={insectiicide1} alt="Buy Insecticide of Leading" className="rounded-full w-40 h-40 hover:scale-105 transition duration-300" />
            <span className="block text-center mt-2">Insecticide of Leading</span>
          </Link>
          <Link to="/fungicides" className="collection-item">
            <img src={Funcgicide} alt="Buy Fungicide Online" className="rounded-full w-40 h-40 hover:scale-105 transition duration-300" />
            <span className="block text-center mt-2">Fungicide Online</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collection;
