import React from "react";
import { IoPeople, IoWallet, IoCall } from "react-icons/io5";
import { FaSortAmountDownAlt } from "react-icons/fa";
import Photo1 from "../../images/homepage/1.webp";
import { FiShoppingBag } from "react-icons/fi";
import Carousel from "./Carousel";

const Whydo = () => {
    return (
        <div className="flex flex-col items-center p-5 mt-5">
            <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-6">Sell Online with Flipkart</h1>
            <img
                src={Photo1}
                alt="Mobile Grow"
                className="w-full h-72 object-cover mb-8 rounded-md shadow-lg"
            />

            <div className="flex flex-wrap justify-between w-full max-w-4xl">
                {/* Card Component */}
                {[
                    { icon: <IoPeople size={24} />, text: "45 crore+ Flipkart customers" },
                    { icon: <IoWallet size={24} />, text: "7* days secure & regular payments" },
                    { icon: <FaSortAmountDownAlt size={24} />, text: "Low cost of doing business" },
                    { icon: <IoCall size={24} />, text: "One click Seller Support" },
                    { icon: <FiShoppingBag size={24} />, text: "Access to The Big Billion Days & more" },
                ].map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="border border-gray-300 rounded-md flex flex-col items-center justify-center p-4 h-full hover:bg-blue-50 transition duration-300">
                            <div className="mb-2 text-blue-600">{item.icon}</div>
                            <p className="text-center text-sm text-gray-700">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full mt-8">
                <Carousel />
            </div>
        </div>
    );
};

export default Whydo;
