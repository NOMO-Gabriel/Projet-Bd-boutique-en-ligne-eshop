import React from 'react';
import './Sidebar.css'
import { IoLogoCodepen } from 'react-icons/io5';
import { IoMdHelp } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='admin-sidebar'>
            <div className='logo'>
                <IoLogoCodepen className='icon'/>
                <span>E-SHOP</span>
            </div>
            <div className='content'>
                <ul className='options'>
                    <li><Link to="/admin/sales_revenue">Sales and Revenue</Link></li>
                    <li><Link to="/admin/customer_metrics">Customer Metrics</Link></li>
                    <li><Link to="/admin/products_performance">Product Performance</Link></li>
                </ul>
            </div>
            <aside className='about'>
                <Link>About</Link>
                <IoMdHelp className='icon'/>
            </aside>
        </div>
    );
};

export default Sidebar;