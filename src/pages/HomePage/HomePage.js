import React from 'react';
<<<<<<< HEAD

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
=======
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Products from '../../components/Products/Products';
import Banner from '../../components/Banner/Banner';

import './HomePage.css'

const HomePage = () => {
    return (
        <div className="homePage">
            <Banner />
            <CategoryTitle />
            <Products />
>>>>>>> VUIDE
        </div>
    );
};

export default HomePage;