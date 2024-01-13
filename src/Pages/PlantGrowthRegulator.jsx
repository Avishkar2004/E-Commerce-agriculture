import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PlantGrowthRegulator = () => {
  const [PlantgrowthregulatorData, setPlantgrowthregulatorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/Plantgrowthregulator");
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
    <div className="container mx-auto mt-10 mb-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
        {PlantgrowthregulatorData.map((PGRProduct) => (
          <Link
            to={{
              pathname: `/plantgrowthregulator/${PGRProduct.name}`,
              state: { productData: PGRProduct },
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
              <h2 className="text-lg font-semibold font-primary">
                {PGRProduct.name}
              </h2>
              <p className="text-sm text-gray-600 font-secondary font-semibold">
                {PGRProduct.description}
              </p>
              <p className="text-red-500 font-secondary">{PGRProduct.salePrice}</p>
              <p className="text-green-600 font-secondary font-medium">
                {PGRProduct.reviews}
              </p>
              <p className="text-gray-600 font-secondary">
                {PGRProduct.stockStatus}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <hr className="mt-12 border-[1px] border-gray-600" />
    </div>
  );

}

export default PlantGrowthRegulator