import React from 'react';
import './Header.css';
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Header = ({ title }) => {
  return (
    <div className="magasiner-header">
      <div className="navigation">
        <FaHome className="icon home-icon" />
        <span>Magasiner</span>
        <MdOutlineKeyboardArrowRight className="icon next-icon" />
        <span>{title}</span>
      </div>
      <aside>
        <div className='account'>
          <span>Name</span>
          <img src='favicon.ico' alt="Account" />
        </div>
      </aside>
    </div>
  );
};

export default Header;
