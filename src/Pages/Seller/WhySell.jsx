import React from "react";
import Data from "./Data";

const WhySell = () => {
    return (
        <div className="mt-5">
            <div className="border border-black rounded-lg p-3 mx-3">
                <div className="flex items-center">
                    <img
                        className="w-12 h-12 rounded-full"
                        src="/path/to/person.jpg" // Replace with your photo path
                        alt="Person"
                    />
                    <p className="flex-1 text-lg font-bold ml-4">
                        Lorem
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <img
                    className="w-96 h-96"
                    src="/path/to/Commission.png" // Replace with your photo path
                    alt="Commission"
                />
            </div>
            <div className="w-full flex flex-col items-center bg-blue-100 mt-3 mb-20">
                <h2 className="text-xl font-bold text-gray-600 mt-5">Why Sell on Entomon</h2>
                {/* Render entries dynamically */}
                {Data.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between mt-3 w-full max-w-2xl px-4">
                        <img
                            className="w-12 h-12 rounded-full"
                            src={entry.photo} // Use the photo URL from the Data object
                            alt={entry.title}
                        />
                        <div className="flex-1 ml-4">
                            <h3 className="text-lg font-bold">{entry.title}</h3>
                            <p className="text-sm">{entry.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhySell;
