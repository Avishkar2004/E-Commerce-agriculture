import React, { useState } from "react";
import Offer from "../Components/Collections/Offer.webp";
import Pgr from "../Components/Collections/pgr.avif";
import Organic from "../Components/Collections/organic.avif";
import micronutrients1 from "../Components/Collections/micronutrients1.avif";
import insectiicide1 from "../Components/Collections/insectiicide1.avif";
import Funcgicide from "../Components/Collections/fungicide1.avif";
import { Link } from "react-router-dom";
import EastIcon from '@mui/icons-material/East'; // Import EastIcon



const Collection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <section className="flex flex-col justify-center items-cente mb-9">
      <div className="mb-5">
        <Link to="#">
          <img src={Offer} alt="Offer" className="max-w-full" />
        </Link>
      </div>
      <div className="flex container justify-between space-x-40 mb-5 align-baseline font-bold ">
        <h1 className="text-[#1e2d7d] text-lg font-primary cursor-pointer">
          Our Collection's
        </h1>
        <h1 className="text-[#00badb] transition hover:-translate-x-5 font-[16px] duration-500 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          View All
          {isHovered && <EastIcon />} {/* Render EastIcon if isHovered is true */}
        </h1>
      </div>
      {/* Collection */}
      <div className="flex flex-wrap justify-center gap-2 md:justify-start">
        <Link
          to="/Plantgrowthregulator"
          className="md:flex-none xsm:flex-1 space-x-5 rounded-full pl-10 pb-2 mt-10 hover:scale-105 transition duration-300"
        >
          <img
            className="cursor-pointer rounded-full w-40 h-40 hover:scale-105 transition duration-300"
            src={Pgr}
            alt="Plant Growth Regulator"
          />
          <span className="pt-10">Plant Growth Regulator</span>
        </Link>

        <Link
          to="/organicproduct"
          className="md:flex-none space-x-2 rounded-full pl-10 pb-2 mt-10 hover:scale-105 transition duration-300"
        >
          <img
            className="cursor-pointer rounded-full w-40 h-40 hover:scale-105 transition duration-300"
            src={Organic}
            alt="Buy Organic Product"
          />
          <>Buy Organic Product</>
        </Link>

        <Link to="/micro-nutrients" className="md:flex-none xsm:flex-1 space-x-12 rounded-full pl-10 pb-2 mt-10 hover:scale-105 transition duration-300">
          <img
            className="cursor-pointer rounded-full w-40 h-40 hover:scale-105 transition duration-300"
            src={micronutrients1}
            alt="Buy Micro Nutrients"
          />
          <>Buy Micro Nutrients</>
        </Link>

        <Link to="/insecticide" className="md:flex-none space-x-12 rounded-full pl-10 pb-2 mt-10 hover:scale-105 transition duration-300">
          <img
            className="cursor-pointer rounded-full w-40 h-40 hover:scale-105 transition duration-300"
            src={insectiicide1}
            alt="Buy Insecticide of Leading"
          />
          <>Insecticide of Leading</>
        </Link>

        <Link to="/fungicides" className="md:flex-none space-x-12 rounded-full pl-10 pb-2 mt-10 hover:scale-105 transition duration-300">
          <img
            className="cursor-pointer rounded-full w-40 h-40 hover:scale-105 transition duration-300"
            src={Funcgicide}
            alt="Buy Fungicide Online"
          />
          <>Fungicide Online</>
        </Link>
      </div>
    </section>
  );
};

export default Collection;
