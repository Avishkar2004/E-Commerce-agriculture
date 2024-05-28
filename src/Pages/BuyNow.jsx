import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BuyNow = () => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const location = useLocation();
  const initialProductData = (location.state && location.state.productData) || {};
  const [productData, setProductData] = useState(initialProductData);

  useEffect(() => {
    setProductData(initialProductData);
  }, [initialProductData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="flex">
        <div className="w-1/2">
          <div className="border p-4 rounded-lg mb-4">
            <h2 className="text-2xl font-bold mb-2">{productData.name}</h2>
            <p className="mb-2">Product Name: {productData.name}</p>
            <p className="mb-4">Price: {productData.salePrice}</p>
            <img
              src={`data:image/avif;base64, ${productData.image}`}
              alt={productData.name}
              className="mb-4 w-[17.8rem] mr-auto ml-auto"
            />
          </div>
        </div>

        <div className="w-1/2">
          <div className="border p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Order Information</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="quantity" className="block mb-2">
                Quantity:
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                  className="border p-2 w-full"
                />
              </label>

              <label htmlFor="name" className="block mb-2">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border p-2 w-full"
                />
              </label>

              <label htmlFor="address" className="block mb-2">
                Address:
                <textarea
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="border p-2 w-full"
                ></textarea>
              </label>

              <label htmlFor="creditCard" className="block mb-2">
                Credit Card:
                <input
                  type="text"
                  id="creditCard"
                  name="creditCard"
                  value={creditCard}
                  onChange={(e) => setCreditCard(e.target.value)}
                  required
                  className="border p-2 w-full"
                />
              </label>

              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
