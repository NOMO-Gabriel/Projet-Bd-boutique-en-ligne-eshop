import React from 'react';
<<<<<<< HEAD
import Test from '../../components/Test/Test';

const CartPage = () => {
    return (<>
        <div>
            <h1>Cart Page</h1>
        </div>

        <Test />
    </>);
=======
import { ImBin2 } from "react-icons/im";
import './CartPage.css';

const CartPage = () => {
    return (
        <div>
            <div class="cart-header cart">
                <span>N°</span>
                <span>Product</span>
                <span>Unit Price</span>
                <span>Quantity</span>
                <span>Total Price</span>
                <span>Actions</span>
            </div>
            <div class="cart">
                <span>n</span>
                <span>Product</span>
                <span>Unit Price</span>
                <span>Quantity</span>
                <span>Total Price</span>
                <span>Actions</span>
            </div>
            <div class="cart-footer">
                <div class="clear-cart">
                    <button class="clear-cart-button">
                        <ImBin2 />
                        <span>CLEAR CART</span>
                    </button>
                </div>
                <div class="check-out">
                    <span>Total (1) items : <span class="prix">PRIX</span></span>
                    <button class="check-out-button">Check Out</button>
                </div>
            </div>
        </div>
    );
>>>>>>> VUIDE
};

export default CartPage;