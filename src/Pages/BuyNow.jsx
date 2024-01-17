import React, { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const BuyNow = () => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const location = useLocation();
  const initialProductData = (location.state && location.state.productData) || {};
  const [productData, setProductData] = useState(initialProductData);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>

      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-2">{productData.name}</h2>
          <p className="mb-2">Product Name: {productData.name}</p>
          <p className="mb-4">Price: {productData.salePrice}</p>
          <img
            src={`data:image/avif;base64, ${productData.image}`}
            alt={productData.name}
            className="mb-4 w-80 mr-auto ml-auto"
          />
          {/* Add more product details as needed */}
        </div>

        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4">Order Information</h2>
          <form onSubmit={handleSubmit}>
            {/* Add hidden input fields for product details (e.g., product ID) */}
            <input type="hidden" name="product_id" value="1" />

            {/* Input fields for customer information */}
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

            {/* Payment-related fields */}
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

            {/* Add more payment-related fields as needed */}

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
