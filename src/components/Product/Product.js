import React from 'react';

import './Product.css'

const Product = ({ product }) => {
    return (
        <div className="product">
            <div>
                <img src="" alt="Image" />
            </div>
            <div className="notes">
                <div className="name">
                    <span>{product.nomPro}</span>
                </div>
                <div className="description">
                    <span>{product.description}</span>
                </div>
                <div className="prices">
                    <span className="price">{product.prix}</span>
                    <span className="promo">{product.promo}</span>
                </div>
            </div>
        </div>
    );
};

export default Product;