import React from 'react';
import './Sidebar.css';
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
          <li><Link to="/admin/sales">Sales and Revenues</Link></li>
          <li><Link to="/admin/magasiniers">Magasiners Informations</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
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
