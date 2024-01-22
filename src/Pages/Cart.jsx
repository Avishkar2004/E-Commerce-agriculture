import React, { useEffect, useState } from 'react';

const Cart = ({ cartDataPass }) => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/cart")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network error was not ok");
                }
                return response.json();
            })
            .then(data => {
                setCartData(data);
            })
            .catch(error => {
                console.error("Error fetching cart data: ", error);
            });
    }, []);

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>

            <p className="text-sm text-gray-600 mb-4">
                {cartData.length} {cartData.length === 1 ? 'item' : 'items'} in your cart
            </p>

            <ul className="grid gap-8">
                {cartData.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

const CartItem = ({ item }) => (
    <li className="flex bg-white p-1 rounded-lg shadow-md">
        <div className="flex-shrink-0">
            <img
                src={`data:image/avif;base64,${item.image}`}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
            />
        </div>
        <div className="flex-1 ml-4">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-gray-600">Reviews: {item.quantity}</p>
            <div className="mt-4 space-x-4 flex left">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Save For later
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                    Remove
                </button>
            </div>
        </div>
    </li>
);

export default Cart;
