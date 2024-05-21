import React from 'react';
import './Header.css';

import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import Searchbar from '../../components/Searchbar/Searchbar';

const Header = () => {
    return (
        <div class="admin-header">
            <div class="navigation">
                <FaHome class="icon home-icon" />
                <span>Home</span>
                <MdOutlineKeyboardArrowRight class="icon next-icon" />
                <span>Analytics</span>
            </div>
            <div>
                <Searchbar width="500px" />
            </div>
            <aside>
                <div className='notification'>
                    <IoIosNotifications className='icon notification-icon' />
                    <span>Notifications</span>
                </div>
                <div className='account'>
                    <span>Name</span>
                    <img src='favicon.ico' alt="A" />
                </div>
            </aside>
        </div>
    );
};

export default Header;