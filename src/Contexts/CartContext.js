// cartContext.js
import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const CartContext = createContext();

// Création du composant CartProvider
export const CartProvider = ({ children }) => {
    const [cartContent, setCartContent] = useState([]);

    const addToCart = (product) => {
        setCartContent([...cartContent, product]);
    };

    const removeFromCart = (productId) => {
        setCartContent(cartContent.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartContent([]);
    };

    return (
        <CartContext.Provider value={{ cartContent, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personnalisé pour accéder au contexte du panier
export const useCart = () => {
    return useContext(CartContext);
};
