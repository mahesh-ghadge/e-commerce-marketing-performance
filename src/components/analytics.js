import React from 'react';
import TableauEmbed from './dashboard';
import { Route, Link } from 'react-router-dom';
import './analytics.css'; 

const Analytics = () => {
  return (
    <div className="analytics">
    <header>
        {/* Add your website logo and navigation menu here */}
        <div className="logo"><img src={require('./images/logo.jpeg')} alt="logo" /></div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
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
      <div className="dashboard"> <TableauEmbed/> </div>
    </div>
);
}

export default Analytics;