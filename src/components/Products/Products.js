import React from 'react';
import useFetch from '../../hooks/useFetch';
import { getProducts } from '../../services/api';
import Product from '../Product/Product';

import './Products.css';

const Products = () => {
    const { data: products, loading, error } = useFetch(getProducts);
    const firstFiveProducts = products.slice(0, 5);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="products">
            {firstFiveProducts.map(product => (
                <Product product={product} />
            ))}
        </div>
    );
};

export default Products;