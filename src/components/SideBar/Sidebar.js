import React from 'react';
import useFetch from '../../hooks/useFetch';
import { getCategories } from '../../services/api';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { useSidebar } from '../../contexts/SidebarContext';

import './Sidebar.css';

const Sidebar = () => {
  const { data: categories, loading, error } = useFetch(getCategories);
  const { isSidebarVisible, toggleSidebar } = useSidebar();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
      <div className="title">
        <span>All categories</span>
        <ImCross className="icon-link" onClick={toggleSidebar} />
      </div>
      <div className="categories">
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category.idCat}`} onClick={toggleSidebar}>
                {category.nomCat}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/magasinier/add" onClick={toggleSidebar}>
              Add Product
            </Link>
          </li>
          <li>
            <Link to="/magasinier/seeProducts" onClick={toggleSidebar}>
              See Products
            </Link>
          </li>
          <li>
            <Link to="/magasinier/history" onClick={toggleSidebar}>
              History
            </Link>
          </li>
        </ul>
      </div>
      <div className="note">
        <span>Scroll to see more...</span>
      </div>
    </div>
  );
};

export default Sidebar;
