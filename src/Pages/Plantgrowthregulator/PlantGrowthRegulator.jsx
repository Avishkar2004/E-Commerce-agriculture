import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PlantGrowthRegulators from "../../Components/Banner/PlantGrowthRegulator.jpg";
import Recentlyviewed from '../Recentlyviewed';

const PlantGrowthRegulator = () => {
  const [PlantgrowthregulatorData, setPlantgrowthregulatorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/plantgrowthregulator");
        if (!response.ok) {
          throw new Error("Failed to fetch Plantgrowthregulator data");
        }
        const data = await response.json();
        setPlantgrowthregulatorData(data);
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
    <div className="container mt-3">
      <Link to="/" className="text-black text-sm hover:text-blue-600 font-primary ml-4">Home &gt;</Link>
      <span className="text-black text-sm ml-1 font-secondary">Plant Growth Regulator (PGR) &gt;</span>

      <div className="container flex mt-10">
        <div className="w-full bg-white p-4 border-[1px]">
          <div className="flex justify-center">
            <img src={PlantGrowthRegulators} alt="" className="w-full max-w-[800px]" />
          </div>
          <div className="text-center mt-5 font-primary text-3xl text-blue-500">
            <h1>Plant Growth Regulator (PGR)</h1>
          </div>
          <div className="mt-4 space-y-5 font-secondary text-base">
            <p>
              Plant Growth Regulator (PGR) is hormone-based chemicals that regulate the plants at the inner label. It shows the results in a few hours. When the micronutrients fail to give faster growth results, you can apply the ho plant growth regulators such as Planofix, Miraculan, Booster:2, Phytozyme, or seaweed extract.
            </p>
            <p>Unlike micro-nutrients, it has side effects if applied frequently or more doses. Before it used, everyone keeps notice of the applicable doses of the products mentioned on the packets. The dose of all the products varies.</p>
          </div>
          <hr className="mt-5 border-[1px]" />
          <div className="flex space-x-12 justify-center mt-5 font-secondary gap-24">
            <p>Showing 1 - {PlantgrowthregulatorData.length} of {PlantgrowthregulatorData.length} products</p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
            {PlantgrowthregulatorData.map((PGRProduct) => (
              <Link
                to={{
                  pathname: `/plantgrowthregulator/${PGRProduct.name}`,
                  state: { PGRProduct: PGRProduct },
                }}
                key={PGRProduct.id}
                className="border border-x-slate-200 border-solid"
              >
                <div className="image-container">
                  <img
                    src={`data:image/avif;base64, ${PGRProduct.image}`}
                    alt={PGRProduct.altTag || PGRProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold font-primary">{PGRProduct.name}</h2>
                  <p className="text-sm text-gray-600 font-secondary font-semibold">{PGRProduct.description}</p>
                  <p className="text-red-500 font-secondary">{PGRProduct.salePrice}</p>
                  <p className="text-green-600 font-secondary font-medium">{PGRProduct.reviews}</p>
                  <p className="text-gray-600 font-secondary">{PGRProduct.stockStatus}</p>
                  <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Buy Now</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Recentlyviewed />
    </div>
  );
}

export default PlantGrowthRegulator;
