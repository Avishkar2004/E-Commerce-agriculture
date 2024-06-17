import EastIcon from "@mui/icons-material/East";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const OrganicFront = () => {
  const [micronutrientData, setMicronutrientData] = useState([]);
  const [OrganicproductData, setOrganicproductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/organicproduct");
        if (!response.ok) {
          throw new Error("Falied to fetch organicproduct data");
        }
        const data = await response.json();
        setOrganicproductData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, [])

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
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error : {error}</p>
  }

  return (
    <div className="container mt-12 min-h-screen mx-auto">
      {/* Organic Products */}
      <div className="flex justify-between font-bold">
        <h1 className="text-[#1e2d7d] text-bold text-2xl font-primary">
          Organic Products
        </h1>
        <h1 className="text-[#00badb] transition hover:-translate-x-5 font-[16px] duration-500 cursor-pointer"

          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          View All {isHovered && <EastIcon />}
        </h1>
      </div>
      {/* if you want space inbetn for this you need gap-1 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
        {OrganicproductData.map((OrganicProduct) => (
          <Link
            to={{
              pathname: `/organicproduct/${OrganicProduct.name}`,
              state: { OrganicproductData: OrganicProduct }
            }}
            key={OrganicProduct.id}
            className="border border-x-slate-200 border-solid"
          >
            <div className="image-container">
              <img
                src={`data:image/avif;base64, ${OrganicProduct.image}`}
                alt={OrganicProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold font-primary">
                {OrganicProduct.name}
              </h2>
              <p className="text-sm text-gray-600 font-secondary font-semibold">
                {OrganicProduct.description}
              </p>
              <p className="text-red-500 font-secondary">{OrganicProduct.salePrice}</p>
              <p className="text-green-600 font-secondary font-medium">
                {OrganicProduct.reviews}
              </p>
              <p className="text-gray-800 font-secondary">
                {OrganicProduct.stockStatus}
              </p>
            </div>
          </Link>
        ))}
      </div>


      {/* Aries Agro's collection */}
      <hr className=" mt-12 border-[1px] border-gray-600" />
      <div className="flex justify-between font-bold">
        <h1 className="text-[#1e2d7d] text-bold text-2xl font-primary mt-10 mb-5">
          Aries Agro's collection
        </h1>
        <h1 className="text-[#00badb] transition hover:-translate-x-5 font-[16px] duration-500 cursor-pointer mt-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          View All {isHovered && <EastIcon />}
        </h1>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
        {micronutrientData.map((micronutrientProduct) => (
          <Link
            to={{
              pathname: `/micro-nutrients/${micronutrientProduct.name}`,
              state: { micronutrientProduct: micronutrientProduct }
            }}
            key={micronutrientProduct.id}
            className="border border-x-slate-200 border-solid"
          >
            <div className="image-container">
              <img
                src={`data:image/avif;base64, ${micronutrientProduct.image}`}
                alt={micronutrientProduct.name}
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
              <p className="text-gray-800 font-secondary">
                {micronutrientProduct.stockStatus}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrganicFront;
