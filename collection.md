import React from "react";
import Offer from "../Components/Collections/Offer.webp";
import Pgr from "../Components/Collections/pgr.avif";
import Organic from "../Components/Collections/organic.avif";
import micronutrients1 from "../Components/Collections/micronutrients1.avif";
import insectiicide1 from "../Components/Collections/insectiicide1.avif";
import Funcgicide from "../Components/Collections/fungicide1.avif";
import { Link } from "react-router-dom";
// Feature brand
// import Aries from "../Components/Collections/aries1_280x.avif";
// import Bayer from "../Components/Collections/Bayer3_280x.avif";
// import Barrix from "../Components/Collections/barrix.avif";
// import Ramcides from "../Components/Collections/Ramcides_Logo_280x.avif";
// import Adama from "../Components/Collections/adama_280x.avif";
// import Industried from "../Components/Collections/PI-Industries.avif";

const Collection = () => {
  return (
    <section className="flex flex-col justify-center items-cente mb-9">
      <div className="mb-20">
        <a href="">
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
              alt=""
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
              alt=""
            />
            <>Buy Organic Product</>
          </Link>

          <Link to="/micro-nutrients" className="md:flex-none xsm:flex-1 space-x-12 rounded-full pl-10 pb-2 mt-10 hover:scale-105 ease-in-out delay-50">
            <img
              className="rounded-full cursor-pointer h-40"
              src={micronutrients1}
              alt=""
            />
            <>Buy Micro Nutrients</>
          </Link>

          <Link to="/Insecticide" className="md:flex-none space-x-12 rounded-full pl-10 pb-2 mt-10 hover:scale-105 ease-in-out delay-50">
            <img
              className="rounded-full cursor-pointer h-40"
              src={insectiicide1}
              alt=""
            />
            <>Insecticide of Leading</>
          </Link>

          <Link to="/fungicides" className="md:flex-none space-x-12 rounded-full pl-10 pb-2 mt-10 hover:scale-105 ease-in-out delay-50">
            <img
              className="rounded-full cursor-pointer h-40"
              src={Funcgicide}
              alt=""
            />
            <>Fungicide Online</>
          </Link>
        </div>
      </div>

      {/* <div>
        <div className="flex container justify-between space-x-40 mt-12 mb-5 overflow-visible align-baseline font-bold">
          <h1 className="text-[#1e2d7d] text-lg font-primary cursor-pointer">
            Features Brand
          </h1>
          <h1 className="text-[#00badb] transition hover:-translate-x-5 font-[16px] duration-500 cursor-pointer">
            View All
          </h1>
        </div>
      </div> */}

      {/* <div className="overflow-hidden mt-12 border-[2px]">
        <div className="flex justify-center items-center h-32 gap-20">
          <img
            src={Aries}
            alt=""
            className="border-r border-black pr-[2rem] w-32"
          />
          <img
            src={Bayer}
            alt=""
            className="border-r border-black border-spacing-x-80 pr-12 left-5 h-24 w-32"
          />
          <img
            src={Barrix}
            alt=""
            className="border-r border-black pr-2 h-32 w-32"
          />
          <img
            src={Ramcides}
            alt=""
            className="border-r border-black pr-2 h-20 w-32"
          />
          <img
            src={Adama}
            alt=""
            className="border-r border-black pr-2 h-32 w-32"
          />
          <img src={Industried} alt="" className="h-32 w-32" />
        </div>
      </div> */}
    </section>
  );
};

export default Collection;
