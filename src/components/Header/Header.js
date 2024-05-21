import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";
import NavLinks from '../NavLinks/NavLinks';
import { useSidebar } from '../../contexts/SidebarContext'; 

import './Header.css';
import Searchbar from '../Searchbar/Searchbar';

const Header = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <div className="header">
            <div className="header-top">
                <div>
                    <ul className="base-links">
                        <li><Link to="/">Home</Link></li>
                        <div className="vertical-divider"></div>
                        <li><Link>Download</Link></li>
                        <div className="vertical-divider"></div>
                        <li><Link>Follow us on <FaFacebook /></Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="param-links">
                        <li><Link>Support</Link></li>
                        <div className="vertical-divider"></div>
                        <li><Link>Register</Link></li>
                        <div className="vertical-divider"></div>
                        <li><Link>Log In</Link></li>
                    </ul>
                </div>
            </div>
            <div className="header-bottom">
                <div className="header-bottom-logo">
                    <IoMenu className="icon-link" onClick={toggleSidebar} />
                    <IoLogoCodepen />
                    <span>E-SHOP</span>
                </div>
                <div className="header-bottom-search">
                    <Searchbar width="800px"/>
                    <NavLinks />
                </div>
                <div className="header-bottom-cart">
                    <FaShoppingCart size="2em" />
                </div>
            </div>
        </div>
    );
};

export default Header;