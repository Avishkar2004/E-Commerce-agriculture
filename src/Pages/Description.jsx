import React, { useState } from "react";
import Shipping from "./Shipping";

const Description = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="bg-gray-100 mt-8 min-h-screen ml-12 mr-[240px] flex flex-col mb-12">
        <div className="w-1/2 bg-white text-start p-8 border-r-2 border-l-2 border-t-2 border-b-2">
          <p className="text-2xl font-primary font-bold text-[#1e2d7d] mb-4">
            Description
          </p>
          <p className="font-secondary font-semibold text-[#1e2d7d] mb-4 mt-9">
            SUPER SONATA IS A COMBINATION OF UNIQUE AND HIGHLY EFFECTIVE NATURAL
            AMINO ACIDS AND VITAMINS.
          </p>
          <p className="font-secondary font-semibold text-[#1e2d7d] mb-4 mt-9">
            KEY FEATURES :
          </p>
          <ul
            className="font-secondary text-[#677279] pl-4 space-y-5"
            style={{ listStyleType: "disc" }}
          >
            <li>
              Super Sonata is an innovative product with tremendous potential
              for overall crop health. Because of its nutritive as well as
              stimulating properties.
            </li>
            <li>
              it betters the overall physiology of crops with full utilization
              of all the biochemical and physiological reserves of plants.
            </li>
            {showMore && (
              <>
                <li>
                  It helps to increase their vigor and enhances tolerance to a
                  variety of adverse biotic and abiotic factors such as pests
                  and diseases.
                </li>
                <li>Promotes flowering and reduces flower drops.</li>
              </>
            )}
          </ul>
          {showMore ? (
            <button
              onClick={toggleShowMore}
              className="text-[#1e2d7d] underline mt-4"
            >
              View Less
            </button>
          ) : (
            <button
              onClick={toggleShowMore}
              className="text-[#1e2d7d] underline mt-5"
            >
              View More
            </button>
          )}
          <p className="font-secondary font-semibold text-[#1e2d7d] mb-4 mt-9">
            DOSE :
          </p>
          <p className="text-[#677279] font-secondary">250 ml / acre.</p>
        </div>
        <Shipping />
      </div>
    </>
  );
};

export default Description;
