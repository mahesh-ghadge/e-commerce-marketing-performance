import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const CommonHeader = () => {
  return (
    <div className="header">
      <header>
        {/* Add your website logo and navigation menu here */}
        <div className="logo">Your Logo</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
        {/* Add a search bar here */}
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>
      </header>
      </div>
      );
};

export default CommonHeader;