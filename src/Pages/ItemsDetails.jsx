import React from "react";
import sonata from "../Pages/Collection/PGRProduct/sonata-box_1000x.webp";

const ItemDetails = () => {
  return (
    <div className="items-center justify-center mx-auto py-8">
      <div className="flex">
        <div className="w-1/2 items-center justify-center">
          <img src={sonata} alt="Product" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
