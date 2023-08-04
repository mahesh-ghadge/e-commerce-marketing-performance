import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // Import useParams from 'react-router-dom' to access URL parameters
import './productdetails.css'; 

const ProductDetailsPage = () => {
  // Sample data for a product (you can fetch real data from the backend)
  const product = {
    id: 1,
    title: 'iPhone 14 Pro',
    price: '1,27,999',
    description: ['iOS 16 Operating System', '5G Supported', 'Apple A16 Bionic chipset', 'HDR Display', '128 GB Internal Display', 'Triple 12 MP Primary Camera', '12 MP Front Camera', '1 Year Manufacturer Warranty'],
    imageUrl: './images/iPhone14.jpg',
  };

  // Access the product ID from the URL parameters using useParams
  const { productId } = useParams();

  // Check if the product exists in the sample data (you can add more error handling)
  const selectedProduct = productId == product.id ? product : null;

  return (
    <div className="product-details-page">
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

      {/* Product Details */}
      {selectedProduct ? (
        <section className="product-details">
          <div className="product-image">
            <img src={require(`${selectedProduct.imageUrl}`)} alt={selectedProduct.title} />
          </div>
          <div className="product-info">
            <h2>{selectedProduct.title}</h2>
            <p className="product-price">Price: Rs. {selectedProduct.price}</p>
            <p className="product-description">{selectedProduct.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}</p>
            <button>Add to Cart</button>
          </div>
        </section>
      ) : (
        <p className="error-message">Product Out of Stock!!!</p>
      )}

      {/* Footer */}
      <footer>
        <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
        <p>Contact us at: connect@datachampionshive.com</p>
        {/* Add additional footer content as needed */}
      </footer>
    </div>
  );
};

export default ProductDetailsPage;
