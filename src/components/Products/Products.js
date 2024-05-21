import React from 'react';
import useFetch from '../../hooks/useFetch';
import { getProducts } from '../../services/api';
import Product from '../Product/Product';

import './Products.css';

const Products = ({ idCat }) => {
    let { data: products, loading, error } = useFetch(getProducts);
    
    if (idCat) {
        products = products.filter(product => product.idCategorie == idCat);
    }

    const productsPerRows = 5;
    const totalRows = Math.ceil(products.length / productsPerRows);

    console.log(totalRows);

    const getProductsForRow = (pageNumber) => {
        const startIndex = (pageNumber - 1) * productsPerRows;
        const endIndex = startIndex + productsPerRows;
        return products.slice(startIndex, endIndex);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const productsPages = [];

    for (let row = 1; row <= totalRows; row++) {
        const produitsPage = getProductsForRow(row);
        productsPages.push(produitsPage);
    }

    return (
        <div>
            {productsPages.map((produitsForRow, index) => (
                <div className="products">
                    {produitsForRow.map(product => (
                        <Product product={product} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Products;