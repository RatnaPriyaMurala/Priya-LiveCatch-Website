// src/pages/SearchResultsPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import allProducts from '../data/fishData';

function SearchResultsPage() {
  const { query } = useParams();
  const navigate = useNavigate();

  const results = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results for "{query}"</h2>

      {results.length === 0 ? (
        <p>No products found. Try another search!</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {results.map((product, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/product/${product.name}`)}
              style={{
                border: '1px solid #ccc',
                borderRadius: '12px',
                padding: '15px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: '#fff',
                boxShadow: '0px 3px 6px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <h3 style={{ marginTop: '10px' }}>{product.name}</h3>
              <p style={{ color: '#333', fontWeight: 'bold' }}>
                ₹{product.min} - ₹{product.max}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;
