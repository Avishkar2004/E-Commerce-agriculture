import React, { useEffect, useState } from 'react';

const Cart = ({ cartDataPass }) => {
    const [cartData, setCartData] = useState([]);

    const fetchCartData = () => {
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
    };

    const calculateSubtotal = () => {
        if (cartData.length === 0) {
            return 0
        }
        return cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    useEffect(() => {
        // Empty dependency array to fetch data only once on component mount
        fetchCartData();
    }, []);



    useEffect(() => {
        const subtotal = calculateSubtotal();
        // console.log('Subtotal:', subtotal); // Check the calculated subtotal
        // Update subtotal state if necessary
    }, [cartData]); // Trigger when cartData changes

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

            <div className="mt-8 border-t pt-6">
                <p className="text-xl font-bold">Subtotal: ${calculateSubtotal().toFixed(2)}</p>
                <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

const CartItem = ({ item }) => (
    <li className="flex bg-white p-4 rounded-lg shadow-md">
        <div className="flex-shrink-0">
            <img
                src={`data:image/avif;base64,${item.image}`}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
            />
        </div>
        <div className="flex-1 ml-4">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
        </div>
    </li>
);

export default Cart;
