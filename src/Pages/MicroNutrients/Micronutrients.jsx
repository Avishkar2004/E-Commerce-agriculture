import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MicronutrientsBanner from "../../Components/Banner/Micronutrients.png";
import Recentlyviewed from '../Recentlyviewed';

const Micronutrients = () => {
    const [micronutrientData, setMicronutrientData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/micro-nutrients");
                if (!response.ok) {
                    throw new Error("Failed to fetch micro-nutrients data");
                }
                const data = await response.json();
                setMicronutrientData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error : {error}</p>;
    }

    return (
        <div className="container mt-3">
            <Link
                to="/"
                className="text-black text-sm hover:text-blue-600 font-primary ml-4"
            >
                Home &gt;
            </Link>
            <span className="text-black text-sm ml-1 font-secondary">
                Buy Micro-nutrients Online &gt;
            </span>
            <div className="container flex mt-10">
                <div className="w-full bg-white p-4 border-[1px] ">
                    <div className="flex justify-center pl-5 w-full h-[15%]">
                        <img
                            className="w-[100%] mr-2 -ml-2"
                            src={MicronutrientsBanner}
                            alt=""
                        />
                    </div>
                    <div className="ml-3 mt-5 font-primary text-xl text-blue-500">
                        <h1>Buy Micro-nutrients Online</h1>
                    </div>
                    <div className="mt-4 ml-3 space-y-5 font-secondary text-base">
                        <p>
                            Micro-nutrients is the third most important components that used
                            for cultivation. Micro-nutrients are used for crop health.
                        </p>
                    </div>
                    <hr className="mt-5 border-[1px]" />
                    <div className="flex space-x-12 ml-3 mt-5 font-secondary justify-center gap-24 ">
                        <p>Showing 1 - {micronutrientData.length} of {micronutrientData.length} products</p>
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
                        {micronutrientData.map((micronutrientProduct) => (
                            <Link
                                to={{
                                    pathname: `/micro-nutrients/${micronutrientProduct.name}`,
                                    state: { micronutrientProduct: micronutrientProduct },
                                }}
                                key={micronutrientProduct.id}
                                className="border border-x-slate-200 border-solid"
                            >
                                <div className="image-container">
                                    <img
                                        src={`data:image/avif;base64, ${micronutrientProduct.image}`}
                                        alt={micronutrientProduct.altTag || micronutrientProduct.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold font-primary">
                                        {micronutrientProduct.name}
                                    </h2>
                                    <p className="text-sm text-gray-600 font-secondary font-semibold">
                                        {micronutrientProduct.description}
                                    </p>
                                    <p className="text-red-500 font-secondary">{micronutrientProduct.salePrice}</p>
                                    <p className="text-green-600 font-secondary font-medium">
                                        {micronutrientProduct.reviews}
                                    </p>
                                    <p className="text-gray-600 font-secondary">
                                        {micronutrientProduct.stockStatus}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Recentlyviewed />
        </div>
    );
};

export default Micronutrients;
