import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

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
        <div>
            <ul>
                {cartData.map(item => (
                    <li key={item.id}>
                        <p>ID: {item.id}</p>
                        <p>Name: {item.name}</p>
                        <p>Size: {item.size}</p>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Reviews: {item.reviews}</p>
                        {item.photo && (
                            <img
                                src={`data:image/png;base64,${item.photo}`}
                                alt={item.name}
                                style={{ maxWidth: '100px', maxHeight: '100px' }}
                            />
                        )}

                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
