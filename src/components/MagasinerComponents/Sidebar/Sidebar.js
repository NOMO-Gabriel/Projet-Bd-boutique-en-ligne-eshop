import React from 'react';
import './Sidebar.css';
import { IoLogoCodepen } from 'react-icons/io5';
import { IoMdHelp } from "react-icons/io";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='magasiner-sidebar'>
      <div className='logo'>
        <IoLogoCodepen className='icon'/>
        <span>E-SHOP</span>
      </div>
      <div className='content'>
        <ul className='options'>
          <li><Link to="/magasiner/addProducts">Add Products</Link></li>
          <li><Link to="/magasiner/seeProducts">See Your Products</Link></li>
          <li><Link to="/magasiner/history">History</Link></li>
        </ul>
      </div>
      <aside className='about'>
        <Link to="/about">About</Link>
        <IoMdHelp className='icon'/>
      </aside>
    </div>
  );
};

export default Sidebar;
