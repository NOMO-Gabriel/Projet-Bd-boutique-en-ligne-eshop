import React from 'react';
import { ImBin2 } from "react-icons/im";
import { useCart } from '../../Contexts/CartContext'; // Importer le hook useCart
import './CartPage.css';

const CartPage = () => {
    const { cartContent, clearCart } = useCart(); // Utiliser le hook useCart pour accéder au contenu du panier

    // Fonction pour calculer le prix total du panier
    const calculateTotalPrice = () => {
        let total = 0;
        cartContent.forEach(item => {
            total += (item.unitPrice * item.quantity);
        });
        return total;
    };

    return (
        <div>
            <div className="cart-header cart">
                <span>N°</span>
                <span>Product</span>
                <span>Unit Price</span>
                <span>Quantity</span>
                <span>Total Price</span>
                <span>Actions</span>
            </div>
            {/* Afficher les produits du panier */}
            {cartContent.map((item, index) => (
                <div key={index} className="cart">
                    <span>{index + 1}</span>
                    <span>{item.productName}</span>
                    <span>{item.unitPrice}</span>
                    <span>{item.quantity}</span>
                    <span>{item.unitPrice * item.quantity}</span>
                    <span>Actions</span>
                </div>
            ))}
            <div className="cart-footer">
                <div className="clear-cart">
                    {/* Bouton pour vider le panier */}
                    <button className="clear-cart-button" onClick={clearCart}>
                        <ImBin2 />
                        <span>CLEAR CART</span>
                    </button>
                </div>
                <div className="check-out">
                    {/* Affichage du prix total du panier */}
                    <span>Total ({cartContent.length}) items : <span className="prix">{calculateTotalPrice()}</span></span>
                    <button className="check-out-button">Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
