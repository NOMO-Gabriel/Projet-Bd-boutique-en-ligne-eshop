import React from 'react';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Products from '../../components/Products/Products';
import Banner from '../../components/Banner/Banner';

import './styles.css'

const HomePage = () => {
    return (
        <div className="homePage">
            <Banner />
            <CategoryTitle />
            <Products />
        </div>
    );
};

export default HomePage;