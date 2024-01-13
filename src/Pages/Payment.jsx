import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import ItemsDetails from "./ItemsDetails";

const Payment = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    quantity: 1,
    name: "",
    address: "",
    city: "",
    pinCode: "",
    phone: "",
    paymentMethod: "creditCard",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (!isNaN(quantity)) {
      setFormData({
        ...formData,
        quantity,
      });
    }
  };

  const handlePaymentMethodChange = (e) => {
    setFormData({
      ...formData,
      paymentMethod: e.target.value,
    });
  };

  const handleBuyNow = () => {
    if (formData.paymentMethod === "creditCard") {
      history.push("/payment/creditcard");
    } else if (formData.paymentMethod === "paypal") {
      history.push("/payment/paypal");
    } else if (formData.paymentMethod === "Phonepay") {
      history.push("/payment/Phonepay");
    } else if (formData.paymentMethod === "Upi") {
      history.push("/payment/Upi");
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-xl right-0 mx-auto bg-white rounded p-5 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Buy Now</h2>
        {/* <ItemsDetails /> */}

          {/* Product Details */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Product Name</h3>
            <p>Description of the product goes here.</p>
          </div>

          {/* Price */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Price</h3>
            <p>$99.99</p>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-600 font-medium mb-2"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="form-input border-none rounded-lg p-4 bg-gray-200 w-full"
              value={formData.quantity}
              onChange={handleQuantityChange}
            />
          </div>

          {/* Shipping Address */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Shipping Address</h3>
            <div className="mb-2">
              <input
                type="text"
                id="name"
                name="name"
                className="form-input border-none rounded-lg p-4 bg-gray-200 w-full"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="address"
                name="address"
                className="form-input border-none rounded-lg p-4 bg-gray-200 w-full"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="city"
                name="city"
                className="form-input border-none rounded-lg p-4 bg-gray-200 w-full"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                className="form-input border-none rounded-lg p-4 bg-gray-200 w-full"
                placeholder="PIN code"
                value={formData.pinCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-input border-none rounded-lg p-4 bg-gray-200 w-full"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Payment Method</h3>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                checked={formData.paymentMethod === "creditCard"}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="creditCard" className="ml-2 cursor-pointer">
                Credit Card
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === "paypal"}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="paypal" className="ml-2 cursor-pointer">
                PayPal
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="Phonepay"
                name="paymentMethod"
                value="Phonepay"
                checked={formData.paymentMethod === "Phonepay"}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="Phonepay" className="ml-2 cursor-pointer">
                Phone Pay
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="Upi"
                name="paymentMethod"
                value="Upi"
                checked={formData.paymentMethod === "Upi"}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="Upi" className="ml-2 cursor-pointer">
                UPI
              </label>
            </div>
          </div>

          {/* Buy Now Button for the Left Side */}
          <button
            className="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-600 w-full"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
