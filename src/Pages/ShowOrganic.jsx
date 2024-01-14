import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Description from './Description';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ShowOrganic = ({ OrganicproductData }) => {
  const history = useHistory();
  const location = useLocation();
  const initialProductData = (location.state && location.state.OrganicproductData) || {};
  const [productData, setProductData] = useState(initialProductData);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('50 ml');
  const [cartData, setCartData] = useState(null);

  const handleAddToCart = async () => {
    try {
      const { id, name, price, image, reviews } = productData; // Extracting only the needed information
      const response = await fetch('http://localhost:8080/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          price,
          size: selectedSize,
          quantity: count,
          image,
          reviews,
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        setCartData(responseData);
  
        // Update local state if needed
        setCount(1);
        setSelectedSize('50 ml');
        console.log('Item added to cart:', responseData);
      } else {
        console.error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  

  const handleBuyNow = () => {
    history.push("/BuyNow", { productData })
  }

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleSizeChange = (newSize) => {
    setSelectedSize(newSize);

    let updatedData;
    if (newSize === '50 ml') {
      updatedData = {
        reviews: initialProductData.review_50,
        save: initialProductData.save_50,
        price: initialProductData.price_small,
      };
    } else if (newSize === '100 ml') {
      updatedData = {
        reviews: initialProductData.review_100,
        save: initialProductData.save_100,
        price: initialProductData.price_big,
      };
    }

    setProductData((prevData) => ({
      ...prevData,
      ...updatedData,
    }));
  };


  useEffect(() => {
    console.log('Product Data:', productData);
  }, [productData, OrganicproductData]);


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="space-x-52 ml-12 mt-4 mb-4">
        <div className="flex text-sm gap-12 text-gray-500 font-secondary">
          <span className="space-x-2 ml-6">
            <a className="hover:text-blue-500" href="/">
              Home
            </a>
            &gt;
            <a
              className="hover:text-blue-500 text-sm"
              href="/organicproduct"
            >
              Buy Organic Product Online            </a>
            &gt;
            <span className="text-sm">{productData.name + " Fungicide"}</span>
          </span>
          <a href='/fungicides/Pegasus' className=" ml-[52rem] font-secondary cursor-pointer hover:text-blue-500 text-base">
            Next &gt;
          </a>
        </div>
      </div>

      <div className="flex">
        {/* Left Side */}
        <div className="w-1/2 bg-white text-center ml-12 border-r-2 border-l-2 border-t-2 border-b-2">
          <img
            className="h-28 border-2 border-blue-500"
            src={`data:image/avif;base64, ${productData.image}`}
            alt={productData.name}
          />
          <img
            src={`data:image/avif;base64,${productData.image}`}
            alt={productData.name}
            className="h-[31rem] object-cover mx-auto overflow-hidden"
          />
          <p className="text-gray-500 mb-4">
            <SearchIcon /> Roll over image to zoom in
          </p>
        </div>
        <hr className="border-[2rem] border-gray-100 border-r" />

        {/* Right Side */}
        <div className="w-1/2 bg-white text-left ml-8 p-4 mr-8 border-r-2 border-l-2 border-t-2 border-b-2">
          <span>ven</span>
          <h1 className="text-2xl font-[#1e2d7d]">{productData.name}</h1>
          <p className="mt-5 mb-3">
            <StarIcon color="warning" />
            <StarIcon color="warning" />
            <StarIcon color="warning" />
            <StarIcon color="warning" />
            <StarIcon color="warning" /> {productData.reviews} reviews
          </p>
          <span className="bg-green-300">Save {productData.save}</span>
          <div className="flex mt-3 mb-3">
            <p>HPM</p>
            <div className="flex ml-[35.5rem] space-x-3">
              <FacebookIcon
                color="info"
                className="cursor-pointer hover:text-blue-700"
              />
              <PinterestIcon
                color="info"
                className="cursor-pointer hover:text-blue-700"
              />
              <TwitterIcon
                color="info"
                className="cursor-pointer hover:text-blue-700"
              />
              <EmailIcon
                color="info"
                className="cursor-pointer hover:text-blue-700"
              />
            </div>
          </div>
          <hr className="border-[1px] border-gray-800 border-r" />

          <div>
            <p className="text-xl text-[#1e2d7d] mt-5">
              Size: <span className="text-xl">{selectedSize}</span>
            </p>
            <div className="flex gap-6 mt-5">
              <button
                className={`text-xl text-gray-700 border-r-2 border-l-2 border-t-2 border-b-2 rounded-md cursor-pointer ${selectedSize === '50 ml' ? 'text-xl text-gray-700 bg-[#f1fdff] border-r-2 border-l-2 border-t-2 border-b-2 border-[#00badb] rounded-md mt-8 ml-4 mb-4 mr-4 cursor-pointer' : 'bg-[#f1fdff]'} `}
                onClick={() => handleSizeChange('50 ml')}
              >
                {productData.small_50}
              </button>
              <button
                className={`text-xl text-gray-700 border-r-2 border-l-2 border-t-2 border-b-2 rounded-md cursor-pointer ${selectedSize === '100 ml' ? 'text-xl text-gray-700 bg-[#f1fdff] border-r-2 border-l-2 border-t-2 border-b-2 border-[#00badb] rounded-md ' : 'bg-[#f1fdff]'} mt-2 ml-2 mb-2 mr-2 cursor-pointer`}
                onClick={() => handleSizeChange('100 ml')}
              >
                {productData.big_100}
              </button>
            </div>
            <p className="text-xl mt-6 text-[#1e2d7d]">
              Expiry Date: <span className="text-black">09-Dec-2024</span>
            </p>
          </div>
          <div className="flex gap-6 mt-5">
            <button className="text-xl text-gray-700 bg-[#f1fdff] border-r-2 border-l-2 border-t-2 border-b-2 border-[#00badb] rounded-md mt-2 ml-2 mb-2 mr-2 cursor-pointer">
              09-Dec-2024
            </button>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-2xl flex mt-3 gap-12 font-semibold">
                Price: <p className="text-[#00badb]">{productData.price}</p>
                <p className="text-base mt-1.5 text-gray-700">{productData.salePrice}</p>
              </p>
              <p className="text-sm mt-3 ml-[107px] text-gray-700">
                Tax included
                <span className="text-[#00badb] cursor-pointer">
                  {" "}
                  Shipping calculated
                </span>{" "}
                at checkout
              </p>
            </div>
          </div>
          <div className="mt-6 flex gap-6">
            <p className="text-2xl font-semibold space-x-9 ">
              Quantity :
              <p className="text-4xl space-x-12 text-red-900 ml-32 overflow-hidden -mt-9 item-center border-[2px] border-t-2 border-b-2">
                <button className="text-gray-400 hover:text-black border-r-2 ml-5 items-center">
                  <button className="mr-5" onClick={handleIncrement}>
                    +
                  </button>
                </button>
                <span className="text-gray-700 border-r-2 items-center">
                  <span className="mr-5 -ml-5">{count}</span>
                </span>
                <button className="items-center">
                  <button
                    onClick={handleDecrement}
                    className="-ml-5 items-center"
                  >
                    <button className="mr-5 hover:text-black text-gray-400">
                      -
                    </button>
                  </button>
                </button>
              </p>
            </p>
            <div className="flex justify-center content-center min-h-12">
              <a href="/BuyNow" onClick={handleBuyNow} className="bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-white font-bold py-3 px-6 ml-12 -mt-2 rounded">
                Buy Now
              </a>
              <button onClick={handleAddToCart} className="bg-red-500 hover:cursor-pointer hover:bg-red-700 text-white font-bold py-3 px-6 ml-4 -mt-2 rounded" disabled>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Description />
    </div>
  );
};
export default ShowOrganic