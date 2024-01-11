import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BestFungicides = () => {
  const [fungicidesData, setFungicidesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/products");
        if (!response.ok) {
          throw new Error("Failed to fetch fungicides data");
        }
        const data = await response.json();
        setFungicidesData(data);
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
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto mt-10 mb-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
        {fungicidesData.map((product) => (
          <Link
            to={{
              pathname: `/fungicides/${product.name}`,
              state: { productData: product },
            }}
            key={product.id}
            className="border border-x-slate-200 border-solid"
          >
            <div className="image-container">
              <img
                src={product.image} // Assuming there is an 'image' field in the product data
                alt={product.altTag || product.name} // Use a specific field if available
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold font-primary">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 font-secondary font-semibold">
                {product.description}
              </p>
              <p className="text-red-500 font-secondary">{product.salePrice}</p>
              <p className="text-green-600 font-secondary font-medium">
                {product.reviews}
              </p>
              <p className="text-gray-600 font-secondary">
                {product.stockStatus}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <hr className="mt-12 border-[1px] border-gray-600" />
    </div>
  );
};

export default BestFungicides;
