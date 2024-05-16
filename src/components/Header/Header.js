import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import NavLinks from '../NavLinks/NavLinks';

import './Header.css';

const Header = () => {
    return (
        <div class="header">
            <div class="header-top">
                <div>
                    <ul class="base-links">
                        <li><Link>Home</Link></li>
                        <div class="vertical-divider"></div>
                        <li><Link>Download</Link></li>
                        <div class="vertical-divider"></div>
                        <li><Link>Follow us on <FaFacebook /></Link></li>
                    </ul>
                </div>
                <div>
                    <ul class="param-links">
                        <li><Link>Support</Link></li>
                        <div class="vertical-divider"></div>
                        <li><Link>Register</Link></li>
                        <div class="vertical-divider"></div>
                        <li><Link>Log In</Link></li>
                    </ul>
                </div>
            </div>
            <div class="header-bottom">
                <div class="header-bottom-logo">
                    <IoMenu />
                    <IoLogoCodepen />
                    <span>E-SHOP</span>
                </div>
                <div class="header-bottom-search">
                    <div class="search">
                        <input type="text" placeholder="Search" />
                        <FaMagnifyingGlass size="1em" class="search-icon"/>
                    </div>
                    <NavLinks />
                </div>
                <div class="header-bottom-cart">
                    <FaShoppingCart size="2em" />
                </div>
            </div>
        </div>
    );
};

export default Header;