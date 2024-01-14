// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
    cartItems: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <CartContext.Provider value={{ cart: state.cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
