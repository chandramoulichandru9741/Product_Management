import React, { useState } from 'react';
import api from '../api';

const ProductDetails = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  const fetchById = () => {
    setError('');
    if (!id.trim()) return setError('Please enter a valid ID');
    
    api.get(`/productById/${id}`)
      .then(res => {
        setResult([res.data]);
        setName('');
      })
      .catch(() => {
        setResult([]);
        setError('Product not found with given ID');
      });
  };

  const fetchByName = () => {
    setError('');
    if (!name.trim()) return setError('Please enter a valid name');

    api.get(`/products/${name}`)
      .then(res => {
        setResult(res.data);
        setId('');
      })
      .catch(() => {
        setResult([]);
        setError('No products found with that name');
      });
  };

  return (
    <div>
      <h2>Find Product</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by ID"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <button onClick={fetchById}>Search</button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={fetchByName}>Search</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result.length > 0 && (
        <ul>
          {result.map(p => (
            <li key={p.id}>
              <strong>{p.name}</strong> — Quantity: {p.quantity}, Price: ₹{p.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductDetails;
