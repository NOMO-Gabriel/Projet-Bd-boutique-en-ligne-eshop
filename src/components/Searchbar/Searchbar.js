import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

import './Searchbar.css'

const Searchbar = ({ width }) => {
    console.log("width:" + width);

    return (
        <div className="search">
            <input type="text" placeholder="Search" style={{ width: width }} />
            <FaMagnifyingGlass size="1em" className="search-icon"/>
        </div>
    );
};

export default Searchbar;