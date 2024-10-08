import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import TwitterIcon from "@mui/icons-material/Twitter";
import Description from '../Description';

const ShowMicroProduct = ({ MicroDataProp = {} }) => {
    const history = useHistory();
    const location = useLocation();
    const initialMicroShowProduct = (location.state && location.state.micronutrientProduct) || {};
    const [productData, setProductData] = useState(initialMicroShowProduct);
    const [count, setCount] = useState(1);
    const [cartData, setCartData] = useState(null);
    const [selectedSize, setSelectedSize] = useState("50 ml");

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1 > 0 ? count - 1 : 1); // Ensure count doesn't go below 1
    };

    const handleBuyNow = (e) => {
        e.preventDefault();
        history.push("/BuyNow", { productData });
    };

    const handleSizeChange = (newSize) => {
        setSelectedSize(newSize);

        let updatedData;
        if (newSize === '50 ml') {
            updatedData = {
                reviews: initialMicroShowProduct.review_50,
                save: initialMicroShowProduct.save_50,
                price: initialMicroShowProduct.price_small,
            };
        } else if (newSize === '100 ml') {
            updatedData = {
                reviews: initialMicroShowProduct.review_100,
                save: initialMicroShowProduct.save_100,
                price: initialMicroShowProduct.salePrice,
            };
        }

        setProductData((prevData) => ({
            ...prevData,
            ...updatedData,
        }));
    };

    const handleAddToCart = async () => {
        try {
            const { id, name, price, image, quantity, productType } = productData
            // Ensure image is base64-encoded if available
            const response = await fetch('http://localhost:8080/cart', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    name,
                    price,
                    image,
                    quantity: count,
                    productType: "micro_nutrients" // or any other product type

                }),
                credentials: "include"
            })

            if (response.ok) {
                const responseData = await response.json()
                setCartData(responseData.cart)
            } else if (response.status === 401) {
                alert('You must be logged in to add items to the cart.');
                history.push("/signup")
            } else {
                console.error('Failed to add item to cart');
            }
        } catch (error) {
            console.error("Error adding item to cart:", error)
        }
    }

    const fetchNextProduct = async () => {
        try {
            const response = await fetch(`http://localhost:8080/micro_nutrients/next/${productData.id}`);
            if (response.ok) {
                const nextProduct = await response.json();
                history.push({
                    pathname: `/micro-nutrients/${nextProduct.id}`,
                    state: { micronutrientProduct: nextProduct }
                });
                setProductData(nextProduct);
                setSelectedSize("50 ml"); // Reset the size to default
            } else {
                console.error('Failed to fetch next product');
            }
        } catch (error) {
            console.error('Error fetching next product:', error);
        }
    };

    useEffect(() => {
        handleSizeChange('50 ml');
    }, []);

    useEffect(() => {
        console.log("Product data updated", productData);
    }, [productData]);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <div className="space-x-52 ml-12 mt-4 mb-4">
                <div className="flex text-sm gap-12 text-gray-500 font-secondary">
                    <span className="space-x-2 ml-6">
                        <Link to="/" className="hover:text-blue-500">
                            Home
                        </Link>
                        &gt;
                        <Link className="hover:text-blue-500 text-sm" to="/micro-nutrients">
                            Buy Micro-nutrients Online
                        </Link>
                        &gt;
                        <span className="text-sm">{productData.name}</span>
                    </span>
                    <button onClick={fetchNextProduct} className="right-12 absolute font-secondary cursor-pointer hover:text-blue-500 text-base">
                        Next &gt;
                    </button>
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
                    <hr className="border-r-0 border-gray-800" />

                    <p className="text-[#1e2d7d] mt-5">Size: <span className="text-xl">{selectedSize}</span></p>
                    <div className="flex mt-5 space-x-3">
                        <button
                            className={`text-xl border-2 rounded-md py-1 px-3 focus:outline-none ${selectedSize === '50 ml' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-200 text-gray-700 border-gray-300'}`}
                            onClick={() => handleSizeChange('50 ml')}
                        >
                            {productData.small_50}
                        </button>
                        <button
                            className={`text-xl border-2 rounded-md py-1 px-3 focus:outline-none ${selectedSize === '100 ml' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-200 text-gray-700 border-gray-300'}`}
                            onClick={() => handleSizeChange('100 ml')}
                        >
                            {productData.big_100}
                        </button>
                    </div>
                    <p className="text-[#1e2d7d] mt-5 text-lg font-semibold">Expiry Date: <span className="text-black">09-Dec-2024</span></p>
                    <div className="flex gap-6 mt-5">
                        <span className="text-xl text-gray-700 bg-[#f1fdff] border-2 border-[#00badb] rounded-md py-2 px-4 cursor-pointer">
                            09-Dec-2024
                        </span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <p className="text-2xl flex mt-3 gap-12 font-semibold">
                                Price: <p className="text-[#00badb]">{productData.price ? productData.price - productData.save : null}</p>
                                <p className="text-base mt-1.5 text-gray-700 line-through">{productData.salePrice && `(${productData.salePrice})`}</p>
                            </p>
                            <p className="text-sm mt-3 ml-[107px] text-gray-700">
                                Tax included
                                <span className="text-[#00badb] cursor-pointer">
                                    {" "}
                                    Shipping calculated at checkout
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-6">
                        <p className="text-2xl font-semibold space-x-9">
                            Quantity:
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
                                    <button onClick={handleDecrement} className="-ml-5 items-center">
                                        <button className="mr-5 hover:text-black text-gray-400">
                                            -
                                        </button>
                                    </button>
                                </button>
                            </p>
                        </p>
                        <div className="flex justify-center content-center min-h-12">
                            <Link to="/BuyNow" onClick={handleBuyNow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ml-12 -mt-2 rounded">
                                Buy Now
                            </Link>
                            <button onClick={handleAddToCart} className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 ml-4 -mt-2 rounded hover:cursor-pointer">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Description productData={productData} />
        </div>
    );
};

export default ShowMicroProduct;
