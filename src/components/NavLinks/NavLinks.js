import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { getCategories } from '../../services/api';

import './NavLinks.css';

const NavLinks = () => {
    const { data: categories, loading, error } = useFetch(getCategories);

    const categoriesToDisplay = categories.slice(0, 10);

    return (
        <div>
            <ul class="ul-gender">
                {categoriesToDisplay.map((category, index) => (
                    <li key={index}><Link to = {`category/${category.idCat}`}>{category.nomCat}</Link></li>
                ))}
            </ul>
        </div>
    );
};

export default NavLinks;