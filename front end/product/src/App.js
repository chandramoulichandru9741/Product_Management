import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Product Management App</h1>
        
        {/* Navigation Links */}
        <nav>
          <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <li><Link to="/">All Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/search">Search Product</Link></li>
          </ul>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProductForm />} />
          <Route path="/search" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
