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
    <section className="flex flex-col justify-center items-cente mb-9">
      <div className="mb-20">
        <a href="/clearancesale">
          <img src={Offer} alt="Offer" className="max-w-full" />
        </a>
      </div>
      <div>
        <div className="flex container justify-between -mt-6 space-x-40 mb-5 align-baseline font-bold">
          <h1 className="text-[#1e2d7d] text-lg font-primary cursor-pointer">
            Our Collection's
          </h1>
          <h1 className="text-[#00badb] transition hover:-translate-x-5 font-[16px] duration-500 cursor-pointer">
            View All
          </h1>
        </div>

        {/* Collection */}
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          <Link
            to="/Plantgrowthregulator"
            className="md:flex-none xsm:flex-1 space-x-5 rounded-full pl-10 pb-2 mt-10 hover:scale-105 ease-in-out delay-50"
          >
            <img
              className="rounded-full cursor-pointer h-40"
              src={Pgr}
              alt="Plant Growth Regulator"
            />
            <>Plant Growth Regulator</>
          </Link>

          <Link
            to="/OrganicProduct"
            className="md:flex-none space-x-2 rounded-full pl-10 pb-2 mt-10 hover:scale-105 ease-in-out delay-50"
          >
            <img
              className="rounded-full cursor-pointer h-40"
              src={Organic}
              alt="Buy Organic Product"
            />
            <>Buy Organic Product</>
          </Link>

          <Link to="/micro-nutrients" className="md:flex-none xsm:flex-1 space-x-12 rounded-full pl-10 pb-2 mt-10 hover:scale-105 ease-in-out delay-50">
            <img
              className="rounded-full cursor-pointer h-40"
              src={micronutrients1}
              alt="Buy Micro Nutrients"
            />
            <>Buy Micro Nutrients</>
          </Link>

          <Link to="/Insecticide" className="md:flex-none space-x-12 rounded-full pl-10 pb-2 mt-10 hover:scale-105 ease-in-out delay-50">
            <img
              className="rounded-full cursor-pointer h-40"
              src={insectiicide1}
              alt="Buy Insecticide of Leading"
            />
            <>Insecticide of Leading</>
          </Link>

          <Link to="/fungicides" className="md:flex-none space-x-12 rounded-full pl-10 pb-2 mt-10 hover:scale-105 ease-in-out delay-50">
            <img
              className="rounded-full cursor-pointer h-40"
              src={Funcgicide}
              alt="Buy Fungicide Online"
            />
            <>Fungicide Online</>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collection;
