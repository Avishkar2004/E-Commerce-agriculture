import React, { useState } from "react";
import sonata from "./sonata-box_1000x.webp";
import sonata2 from "../../../Components/PgrCollection/sonata-box_130x.avif";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Description from "../../Description";
import Payment from "../../Payment";
const Sonata = () => {
  const [count, setCount] = useState(1);

  const renderContact = () => {
    window.location.href = "/payment";
    return Payment;
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="space-x-52 ml-10 mt-4 mb-4">
        <div className="flex text-sm gap-12 text-gray-500 font-secondary">
          <span className="space-x-2 ml-6">
            <a className="hover:text-blue-500" href="/">
              Home
            </a>
            &gt;
            <a
              className="hover:text-blue-500 text-sm"
              href="/Plantgrowthregulator"
            >
              Plant Growth Regulator (PGR) &gt;

            </a>
            <span className="text-sm">HPM SUPER SONATA (PGR)</span>
          </span>
          <a
            href="/Plantgrowthregulator/planofix"
            className=" ml-[53rem] font-secondary cursor-pointer hover:text-blue-500 text-base"
          >
            Next &gt;

          </a>
        </div>
      </div>

      <div className="flex">
        {/* Left Side */}
        <div className="w-1/2 bg-white text-center ml-12 border-r-2 border-l-2 border-t-2 border-b-2">
          <img className="h-28 border-2 border-blue-500" src={sonata2} alt="" />
          <img
            src={sonata}
            alt="Super Sonata"
            className="h-[31rem] object-cover mx-auto -mt-12 overflow-hidden rounded-full"
          />

          <p className="text-gray-500 mb-4">
            <SearchIcon /> Roll over image to zoom in
          </p>
        </div>
        <hr className="border-[2rem] border-gray-100 border-r" />

        {/* Right Side */}
        <div className="w-1/2 bg-white text-left ml-8 p-4 mr-8 border-r-2 border-l-2 border-t-2 border-b-2">
          <span>ven</span>
          <h1 className="text-2xl font-[#1e2d7d]">HPM SUPER SONATA (PGR)</h1>
          <p className="mt-5 mb-3">
            <StarIcon color="warning" />
            <StarIcon color="warning" />
            <StarIcon color="warning" />
            <StarIcon color="warning" />
            <StarIcon color="warning" /> 39 reviews
          </p>
          <span className="bg-green-300">Save Rs.88</span>
          <div className="flex mt-3 mb-3">
            <p>HPM</p>
            <div className="flex ml-[35.5rem] space-x-3">
              <FacebookIcon
                color="info"
                className="cursor-pointer hover:text-blue-700"
              />
              <PinterestIcon
                color="info"
                className="cursor-pointer hover:text-blue-700"
              />
              <TwitterIcon
                color="info"
                className="cursor-pointer hover:text-blue-700"
              />
              <EmailIcon
                color="info"
                className="cursor-pointer hover:text-blue-700"
              />
            </div>
          </div>
          <hr className="border-[1px] border-gray-800 border-r" />

          <p className="text-xl text-[#1e2d7d] mt-5">
            Size: <span className="text-sm"> 50</span>
          </p>
          <div className="flex gap-6 mt-5 ">
            <p className="text-xl text-gray-700 bg-[#f1fdff] border-r-2 border-l-2 border-t-2 border-b-2 border-[#00badb] rounded-md">
              <p className="mt-2 ml-2 mb-2 mr-2 cursor-pointer">50 ml</p>
            </p>
            <p className="text-xl text-gray-700 bg-[#f1fdff] border-r-2 border-l-2 border-t-2 border-b-2 rounded-md">
              <p className="mt-2 ml-2 mb-2 mr-2 cursor-pointer">100 ml</p>
            </p>
          </div>
          <p className="text-xl mt-6 text-[#1e2d7d]">
            Expiry Date: <span className="text-black">09-Dec-2024</span>
          </p>
          <div className="flex gap-6 mt-5">
            <p className="text-xl text-gray-700 bg-[#f1fdff] border-r-2 border-l-2 border-t-2 border-b-2 border-[#00badb] rounded-md">
              <p className="mt-2 ml-2 mb-2 mr-2 cursor-pointer">
                09-Dec-2024 ml
              </p>
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-2xl flex mt-3 gap-12 font-semibold">
                Price: <p className="text-[#00badb]">Rs. 170</p>
                <p className="text-base mt-1.5 text-gray-700">Rs. 258</p>
              </p>
              <p className="text-sm mt-3 ml-[107px] text-gray-700">
                Tax included
                <span className="text-[#00badb] cursor-pointer">
                  {" "}
                  Shipping calculated
                </span>{" "}
                at checkout
              </p>
            </div>
          </div>
          <div className="mt-6 flex gap-6">
            <p className="text-2xl font-semibold space-x-9 ">
              Quantity :
              <p className="text-4xl space-x-12 text-red-900 ml-32 overflow-hidden -mt-9 item-center border-[2px] border-t-2 border-b-2">
                <button className="text-gray-400 hover:text-black border-r-2 ml-5 items-center">
                  <button className="mr-5" onClick={handleIncrement}>
                    +
                  </button>
                </button>
                <span className="text-gray-700 border-r-2 items-center">
                  <span className="mr-5 -ml-5">{count}</span>
                </span>
                <button className="items-center">
                  <button
                    onClick={handleDecrement}
                    className="-ml-5 items-center"
                  >
                    <button className="mr-5 hover:text-black text-gray-400">
                      -
                    </button>
                  </button>
                </button>
              </p>
            </p>
            <div className="ml-12 gap-12 space-x-12">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold  cursor-pointer py-3 px-5  -mt-2 rounded">
                Add to Cart{" "}
              </button>
              <button
                onClick={renderContact}
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 cursor-pointer px-5 -mt-2 rounded"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Description />
    </div>
  );
};

export default Sonata;
