import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/fishData';
import ProductCard from './ProductCard';

function ProductListPage() {
  const { categoryName } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Map categories to background images
  const categoryBackgrounds = {
    "Sea Fish": "/images/Background9.png",
    "Fresh Water Fish": "/images/Background6.png",
    "Live Fish": "/images/Background4.png",
    "Prawns": "/images/Background10.png",
    "Crabs": "/images/Background11.png",
    "Kolkata Fish": "/images/Backgroung 2.png",
  };

  // Get background for current category, fallback to default
  const backgroundImage = categoryBackgrounds[decodeURIComponent(categoryName)] || "/images/Backgroung 1.jpg";

  useEffect(() => {
    if (selectedProduct) {
      navigate(`/product/${encodeURIComponent(selectedProduct.name)}`);
    }
  }, [selectedProduct, navigate]);

  const filteredProducts = products
    .filter((p) => p.category === categoryName)
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleOrder = (product) => {
    const message = `Hello, I would like to order:\n\n${product.name}\nPrice: ₹${product.price}/kg\nMin: ${product.min}kg\nMax: ${product.max}kg`;
    const ownerPhoneNumber = '919954833369';
    const url = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#3e7dadff', minHeight: '100vh' }}>
      {/* Header Title */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px 30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>
          {decodeURIComponent(categoryName)}
        </h2>
      </div>

      {/* Hero Background */}
<div
  style={{
    backgroundImage: `url('${backgroundImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100vw',        // ✅ full viewport width
    margin: 0,             // ✅ remove unwanted margins
    padding: '40px 20px',
    overflowX: 'hidden',   // ✅ prevent horizontal scrollbars
    color: 'black',
    textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>


        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: '50px',
            height: '50px',
            objectFit: 'contain',
          }}
        />

        {/* Search Bar */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '60px',
            marginBottom: '30px',
          }}
        >
          <input
            type="text"
            placeholder="Search product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '8px',
              width: '80%',
              maxWidth: '300px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onOrder={handleOrder}
                onClick={() => setSelectedProduct(product)}
              />
            ))
          ) : (
            <p style={{ color: 'black', fontSize: '1.2rem' }}>
              No products found in {decodeURIComponent(categoryName)}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
