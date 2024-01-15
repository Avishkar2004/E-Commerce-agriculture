import React, { useEffect, useState } from 'react';

const Cart = () => {
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

            {/* Display the number of items in the cart */}
            <p className="text-sm text-gray-600 mb-4">
                {cartData.length} {cartData.length === 1 ? 'item' : 'items'} in your cart
            </p>

            <ul className="grid gap-8">
                {cartData.map(item => (
                    <li key={item.id} className="flex bg-white p-6 rounded-lg shadow-md">
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
                            <p className="text-gray-600">Quantity: {item.small_50}</p>
                            <p className="text-gray-600">Reviews: {item.reviews}</p>
                            <div className="mt-4 space-x-4">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Edit
                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;