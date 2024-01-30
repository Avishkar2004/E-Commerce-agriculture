// this is for PGR Product
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Description from '../Description';

const PGRShowProduct = ({ PGRDataProp }) => {
  const history = useHistory();
  const location = useLocation();
  const initialPGRShowProduct = (location.state && location.state.PGRProduct) || {};
  const [PGRShowProduct, setPGRShowProduct] = useState(initialPGRShowProduct);
  const [count, setCount] = useState(1);
  const [cartData, setCartData] = useState(null);
  const [selectedSize, setSelectedSize] = useState('50 ml');

  const handleBuyNow = () => {
    history.push("/BuyNow", { PGRShowProduct })
  }
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSizeChange = (newSize) => {
    setSelectedSize(newSize);

    let updatedData;
    if (newSize === '50 ml') {
      updatedData = {
        reviews: initialPGRShowProduct.review_50,
        save: initialPGRShowProduct.save_50,
        price: initialPGRShowProduct.price_small,
      };
    } else if (newSize === '100 ml') {
      updatedData = {
        reviews: initialPGRShowProduct.review_100,
        save: initialPGRShowProduct.save_100,
        price: initialPGRShowProduct.salePrice,
      };
    }

    setPGRShowProduct((prevData) => ({
      ...prevData,
      ...updatedData,
    }));
  };

  const handleAddToCart = async () => {
    try {
      const { id, name, price, image, quantity } = PGRShowProduct;

      // Ensure price is a valid value and not null
      if (price == null) {
        console.error('Product price is null or undefined.');
        return; // Exit the function to prevent further processing
      }

      // Ensure image is base64-encoded if available
      const base64Image = image ? image.toString('base64') : null;

      const response = await fetch('http://localhost:8080/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          price,
          image: base64Image,
          quantity: count


        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setCartData(responseData.cart);
        // console.log('Item added to cart:', responseData);
      } else {
        console.error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };


  useEffect(() => {
    handleSizeChange("50 ml")
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="space-x-52 ml-12 mt-4 mb-4">
        <div className="flex text-sm gap-12 text-gray-500 font-secondary">
          <span className="space-x-2 ml-6">
            <Link className="hover:text-blue-500" to="/">
              Home
            </Link>
            &gt;
            <Link
              className="hover:text-blue-500 text-sm"
              to="/plantgrowthregulator"
            >
              Plant Growth Regulator (PGR)          </Link>
            &gt;
            <span className="text-sm">{PGRShowProduct.name}</span>
          </span>
          <Link to='/plantgrowthregulator/Pegasus' className="right-12 absolute font-secondary cursor-pointer hover:text-blue-500 text-base">
            Next &gt;
          </Link>
        </div>
      </div>

      <div className="flex">
        {/* Left Side */}
        <div className="w-1/2 bg-white text-center ml-12 border-r-2 border-l-2 border-t-2 border-b-2">
          <img
            className="h-28 border-2 border-blue-500"
            src={`data:image/avif;base64, ${PGRShowProduct.image}`}
            alt={PGRShowProduct.name}
          />
          <img
            src={`data:image/avif;base64,${PGRShowProduct.image}`}
            alt={PGRShowProduct.name}
            className="h-[31rem] object-cover mx-auto overflow-hidden"
          />
          <p className="text-gray-500 mb-4">
            <SearchIcon /> Roll over image to zoom in
          </p>
        </div>
        <hr className="border-[2rem] border-gray-100 border-r" />

 {/* Right Side */}
<div className="w-1/2 bg-white text-left ml-8 p-4 mr-8 border-2 border-blue-500 rounded-md shadow-lg">
  {/* Product Title */}
  <h1 className="text-3xl font-bold text-[#1e2d7d] mb-3">{PGRShowProduct.name}</h1>
  {/* Reviews */}
  <div className="flex items-center mb-3">
    <p className="text-[#1e2d7d] mr-2">Rating:</p>
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} color="warning" className="text-yellow-400" />
      ))}
      <span className="ml-2 text-gray-600">{PGRShowProduct.reviews} reviews</span>
    </div>
  </div>
  {/* Save */}
  <div className="bg-green-100 text-green-700 px-3 py-1 mb-3 rounded-md inline-block">
    Save {PGRShowProduct.save}
  </div>
  {/* Share Icons */}
  <div className="flex items-center space-x-2 mb-3">
    <p className="text-[#1e2d7d] mr-2">Share:</p>
    <FacebookIcon color="primary" className="cursor-pointer hover:text-blue-700" />
    <PinterestIcon color="primary" className="cursor-pointer hover:text-red-700" />
    <TwitterIcon color="primary" className="cursor-pointer hover:text-blue-400" />
    <EmailIcon color="primary" className="cursor-pointer hover:text-red-400" />
  </div>
  {/* Separator */}
  <hr className="border-[1px] border-gray-300 mb-4" />
  {/* Size Selection */}
  <div className="flex items-center mb-4">
    <p className="text-[#1e2d7d] mr-2">Size:</p>
    <button
      className={`text-base border-2 border-gray-300 rounded-md py-1 px-3 mr-3 ${selectedSize === '50 ml' ? 'bg-blue-500 text-white border-blue-500' : ''}`}
      onClick={() => handleSizeChange('50 ml')}
    >
      50 ml
    </button>
    <button
      className={`text-base border-2 border-gray-300 rounded-md py-1 px-3 ${selectedSize === '100 ml' ? 'bg-blue-500 text-white border-blue-500' : ''}`}
      onClick={() => handleSizeChange('100 ml')}
    >
      100 ml
    </button>
  </div>
  {/* Expiry Date */}
  <p className="text-lg text-[#1e2d7d] mb-4">Expiry Date: <span className="text-black">09-Dec-2024</span></p>
  {/* Price */}
  <div className="flex items-center mb-4">
    <p className="text-lg text-[#1e2d7d] mr-2">Price:</p>
    <p className="text-xl text-[#00badb] mr-4">{PGRShowProduct.price}</p>
    <p className="text-base text-gray-700">{PGRShowProduct.salePrice}</p>
  </div>
  {/* Add to Cart and Buy Now Buttons */}
  <div className="flex items-center">
    <div className="flex items-center space-x-4">
      <button className="text-lg text-gray-700 border-2 border-gray-300 rounded-full py-1 px-3 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out" onClick={handleAddToCart}>Add to Cart</button>
      <button className="text-lg text-white bg-blue-500 border-2 border-blue-500 rounded-full py-1 px-3 hover:bg-blue-700 transition duration-300 ease-in-out" onClick={handleBuyNow}>Buy Now</button>
    </div>
  </div>
</div>

      </div>
      <Description />
    </div>
  );
};

export default PGRShowProduct;




 <div>
    <p className="text-[#1e2d7d] mt-5">Size: <span className="text-xl">{selectedSize}</span></p>
    <div className="flex mt-2 space-x-3">
      <button
        className={`text-xl border-2 rounded-md py-1 px-3 focus:outline-none ${selectedSize === '50 ml' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-200 text-gray-700 border-gray-300'}`}
        onClick={() => handleSizeChange('50 ml')}
      >
        {PGRShowProduct.small_50}
      </button>
      <button
        className={`text-xl border-2 rounded-md py-1 px-3 focus:outline-none ${selectedSize === '100 ml' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-200 text-gray-700 border-gray-300'}`}
        onClick={() => handleSizeChange('100 ml')}
      >
        {PGRShowProduct.big_100}
      </button>
    </div>
    <p className="text-[#1e2d7d] mt-5">Expiry Date: <span className="text-black">09-Dec-2024</span></p>
  </div>