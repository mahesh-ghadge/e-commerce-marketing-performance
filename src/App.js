import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route } from "react-router-dom";
import Homepage from './components/homepage';
import ProductListingPage from './components/productlisting'
import ProductDetailsPage from './components/productdetails'
import Analytics from './components/analytics';
function App() {
  return (
        <div className="App">
          <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/products" element={<ProductListingPage/>} />
              <Route path="/products/:productId" element={<ProductDetailsPage/>} />
              <Route path="/analytics" element={<Analytics/>} />
          </Routes>
        </div>
  );
}

export default App;
