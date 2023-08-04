import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom' for navigation
import './productlisting.css'; // Import the CSS file for styling

const ProductListingPage = () => {
  // Dummy product data (replace this with data fetched from the backend)
  const products = [
    { id: 1, title: 'iPhone 14 Pro', price: '1,27,999', image: './images/iPhone14.jpg' },
    { id: 2, title: 'iPad Pro', price: '65,500', image: './images/iPad.jpeg' },
    // Add more product data as needed
  ];

  return (
    <div className="product-listing-page">
      {/* Header */}
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

      {/* Filter Sidebar 
      <aside className="filter-sidebar">
        <h3>Filter by Category</h3>
        <ul>
          <li>
            <Link to="/products/category1">Category 1</Link>
          </li>
          <li>
            <Link to="/products/category2">Category 2</Link>
          </li>
        </ul>
      </aside>*/}

      {/* Product Grid */}
      <section className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={require(`${product.image}`)}alt={product.title} />
            <h4>{product.title}</h4>
            <p>Price: Rs. {product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
        <p>Contact us at: connect@datachampionshive.com</p>
        {/* Add additional footer content as needed */}
      </footer>
    </div>
  );
};

export default ProductListingPage;
