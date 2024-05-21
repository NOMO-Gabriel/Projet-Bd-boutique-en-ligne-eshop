import React, { useState } from 'react';
import './ProductSinglePage.css';

import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/api';
import useFetch from '../../hooks/useFetch';
import { FaCartArrowDown } from "react-icons/fa6";
import { TiPlus, TiMinus } from "react-icons/ti";

const ProductSinglePage = () => {
    const { codePro } = useParams();
    const { data: products, loading, error } = useFetch(getProducts);
    let [nbProducts, setNbProducts] = useState(0);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const product = products.filter(product => product.codePro == codePro)[0];

    const handleQuantityChange = (change) => {
        if (nbProducts === 0 && change === -1) return;
    
        setNbProducts(prevNbProducts => prevNbProducts + change);
      };

    return (
        <div className="productSinglePage">
            <div className="img">
                <img src="/images/1.png" alt="IMAGE" />
            </div>
            <div className="notes">
                <div className="name">
                    <span>{product.nomPro}</span>
                </div>
                <div className="description">
                    <span>{product.description}</span>
                </div>
                <div className="other-infos">
                    <span className="title">Category:</span>
                    <span className="value">{product.idCategorie}</span>
                </div>
                <div className="prices">
                    <span className="price">Price: {product.prix} €</span>
                    <span className="promo">{product.promo ? "En promotion !" : ""}</span>
                </div>
                <div className="quantity">
                    <span>Quantity:</span>
                    <table>
                        <tr>
                            <td className="button"><TiMinus onClick={() => handleQuantityChange(-1)}/></td>
                            <td>{nbProducts}</td>
                            <td className='button'><TiPlus onClick={() => handleQuantityChange(1)}/></td>
                        </tr>
                    </table>
                    </div>
                    <div className="buttons">
                        <button className='add-to-cart'>
                            <div>
                                <FaCartArrowDown className='icon add-to-cart-icon'/>
                                Add to Cart
                            </div>
                        </button>
                        <button className='buy'>Buy Now</button>
                    </div>
                </div>
        </div>
    );
};

export default ProductSinglePage;
