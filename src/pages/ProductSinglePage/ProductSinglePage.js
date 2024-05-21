import React from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/api';
import useFetch from '../../hooks/useFetch';

const ProductSinglePage = () => {
    const { codePro } = useParams();
    const { data: products, loading, error } = useFetch(getProducts);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const product = products.filter(product => product.codePro == codePro)[0];

    return (
        <div>
            <h1>ProductSingle Page {codePro} val : {product.codePro}</h1>
        </div>
    );
};

export default ProductSinglePage;
