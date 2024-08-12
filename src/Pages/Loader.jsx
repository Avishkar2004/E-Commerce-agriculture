import React from "react";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-blue-500 border-solid"></div>
        </div>
    );
};

export default Loader;
