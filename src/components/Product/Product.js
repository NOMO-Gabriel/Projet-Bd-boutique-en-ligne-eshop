import React from 'react';

import './Product.css'
import { Link } from 'react-router-dom';

const getRandomImage = () => {
    return "images/" + Math.floor(1 + Math.random() * 54) + ".png";
};

const Product = ({ product }) => {
    return (
        <div className="product">
            <div className="img">
                <Link to={`/product/${product.codePro}`}><img src={getRandomImage()} alt="Image" /></Link>
            </div>
            <div className="notes">
                <div className="name">
                    <span>{product.nomPro}</span>
                </div>
                <div className="description">
                    <span>{product.description}</span>
                </div>
                <div className="prices">
                    <span className="price">{product.prix} €</span>
                    <span className="promo">{product.promo ? "En promotion !" : ""}</span>
                    <span className="category">Cat:{product.idCategorie}</span>
                </div>
            </div>
        </div>
    );
};

export default Product;