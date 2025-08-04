// src/components/CategoryPage.jsx
import { useNavigate } from 'react-router-dom';
import React from 'react';

const categories = [
  { name: 'Sea Fish', image: '/images/seafish.jpg' },
  { name: 'Fresh Water Fish', image: '/images/freshwaterfish.jpg' },
  { name: 'Live Fish', image: '/images/livefish.jpg' },
  { name: 'Prawns', image: '/images/prawns.jpg' },
  { name: 'Crabs', image: '/images/crabs.jpg' },
  { name: 'Kolkata Fish', image: '/images/kolkatafish.jpg' }
];

function CategoryPage() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#3e7dadff', minHeight: '100vh' }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 100
        }}
      >
        <h2 style={{ margin: 0 }}>Choose Your Category</h2>
      </div>

      {/* Hero Section with Categories */}
      <div
        style={{
          backgroundImage: "url('/images/Backgroung 1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() =>
                navigate(`/products/${encodeURIComponent(cat.name)}`)
              }
              style={{
                width: '160px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                textAlign: 'center'
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.08)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: '100%',
                  height: '140px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
                  marginBottom: '10px'
                }}
              />
              <p style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
