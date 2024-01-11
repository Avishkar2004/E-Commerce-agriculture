import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductFea = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Received products:", data);
        setProducts(data.slice(0, 1000) || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleProductClick = (productId) => {
    // Navigate to the product page when a product is clicked
    history.push(`/fungicides/${productId.toLowerCase()}`);
  };

  return (
    <div className="container mx-auto mt-10 mb-5">
      <div className="flex justify-between font-bold">
        <h1 className="text-[#1e2d7d] text-bold text-2xl font-primary">
          Featured collection
        </h1>
        <h1 className="text-[#00badb] transition hover:-translate-x-5 font-[16px] duration-500 cursor-pointer">
          View All
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
        {error ? (
          <p>{error}</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <Link
              key={index}
              onClick={() => handleProductClick(product.name)}
              className="border border-x-slate-200 border-solid"
            >
              <div className="image-container">
                {product.image && (
                  <div>
                    {console.log("Base64 Image:", product.image)}
                    <img
                      className="w-full h-full object-cover"
                      src={`data:image/avif;base64,${product.image}`}
                      alt={product.name}
                    />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-base font-light font-primary">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 font-secondary font-semibold">
                  {product.description}
                </p>
                <p className="text-red-500 font-secondary mt-3 font-medium text-lg">
                  {product.salePrice}
                </p>
                <p className="text-gray-600 font-secondary text-sm mt-2">
                  {product.reviews}
                </p>
                <p className="text-green-600 font-secondary mt-2">
                  {product.stockStatus}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <hr className="mt-12 border-[1px] border-gray-600" />
    </div>
  );
};

export default ProductFea;
