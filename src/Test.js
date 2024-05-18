// TestPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './Contexts/CartContext';

const TestPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Fonction pour ajouter un produit fictif au panier
  const addProductToCart = () => {
    // Ajouter un produit fictif au panier
    addToCart({ id: 1, productName: "Product 1", unitPrice: 10, quantity: 1 });

    // Naviguer vers la page du panier pour observer les changements
    navigate('/cart');
  };

  return (
    <div>
      <h2>Test Page</h2>
      <button onClick={addProductToCart}>Add Product to Cart</button>
    </div>
  );
};

export default TestPage;
