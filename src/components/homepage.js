import React from 'react';
import './homepage.css';
import { Route, Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
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

      <section className="hero-section">
        {/* Add featured products/promotions here */}
        <div className="featured-products">
          <div className="product">
            <img src={require('./images/iPhone14.jpg')} alt="iPhone 14" />
            <h3>iPhone 14</h3>
            <p>Apple iPhone 14 Pro Max (128 GB) - Space Black</p>
            <button>View Details</button>
          </div>
          <div className="product">
            <img src={require('./images/macbook.jpeg')} alt="Apple MacBook" />
            <h3>Apple MacBook</h3>
            <p>Apple MacBook Pro 14 M2 Pro Chip</p>
            <button>View Details</button>
          </div>
          <div className="product">
            <img src={require('./images/iPad.jpeg')} alt="iPad" />
            <h3>iPad Pro</h3>
            <p>Apple iPad 11 Pro 256 GB with Wi-Fi (Space Grey)</p>
            <button>View Details</button>
          </div>
          
          {/* Add more featured products */}
        </div>
      </section>

      {/* Product Categories 
      <section className="product-categories">
        <h2>Explore Our Categories</h2>
        
        <ul>
          <li><a href="/products/category1">Category 1</a></li>
          <li><a href="/products/category2">Category 2</a></li>
          <li><a href="/products/category1">Category 1</a></li>
          <li><a href="/products/category2">Category 2</a></li>
        </ul>
      </section>*/}

      <section className="product-highlights">
        {/* Add more product highlights here */}
        <h2>Product Highlights</h2>
        {/*<div className="product-highlight">
          <img src={require('./images/iPhone14.jpg')} alt="iPhone 14" />
          <h3>iPhone 14</h3>
          <p>
            <li>iOS 16 Operating System</li>
            <li>5G Supported</li>
            <li>Apple A16 Bionic chipset</li>
            <li>HDR Display</li>
            <li>128 GB Internal Display</li>
            <li>Triple 12 MP Primary Camera</li>
            <li>12 MP Front Camera</li>
            <li>1 Year Manufacturer Warranty</li></p>
          <button>View Details</button>
        </div>*/}
        <div className="product-highlight">
          <img src={require('./images/macbook.jpeg')} alt="Apple MacBook" />
          <h3>Apple MacBook</h3>
          <p>
            <li>macOS is the most advanced desktop operating system in the world</li>
            <li>Apple M2 Pro chip</li>
            <li>14.2 inch (35.97 cm)(diagonal) Liquid Retina XDR display</li>
            <li>16GB RAM, 512GB SSD</li>
            <li>10-core CPU</li>
            <li>16-core GPU</li>
            <li>16-core Neural Engine</li>
            <li>High-fidelity six-speaker sound system with force-cancelling woofers</li>
            <li>Support for Spatial Audio when playing music or video with Dolby Atmos on built-in speakers</li>
            <li>1 Year Manufacturer Warranty</li></p>
          <button>View Details</button>
        </div>
        {/*<div className="product-highlight">
          <img src={require('./images/iPad.jpeg')} alt="iPad" />
          <h3>iPad Pro</h3>
          <p>
            <li>iPadOS v14</li>
            <li>11 inches (27.94 cm) Display</li>
            <li>256 GB Internal Storage</li>
            <li>12MP Primary Camera</li>
            <li>7MP Secondary Camera</li>
            <li>1 Year Manufacturer Warranty.</li>
              </p>
          <button>View Details</button>
        </div>*/}
      </section>

      <footer>
        {/* Add footer content here */}
        <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
        <p>Contact us at: connect@datachampionshive.com</p>
        <div className="social-icons">
          {/* Add social media icons here */}
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
