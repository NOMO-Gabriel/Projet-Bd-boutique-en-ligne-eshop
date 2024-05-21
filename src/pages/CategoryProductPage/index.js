import React from 'react';
import { useParams } from 'react-router-dom';

import './styles.css'
import Products from '../../components/Products/Products';

const CategoryProductPage = () => {
    const { idCat } = useParams();

    return (
        <div className="categoryProductPage">
            <Products idCat={idCat} />
        </div>
    );
};

export default CategoryProductPage;