import React from 'react';
import { useCart } from '../contexts/CartContext';

function ProductCard({ product, onOrder, onClick }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart?.some((i) => i.name === product.name);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    removeFromCart(product.name);
  };

  return (
    <div
      className="product-card"
      onClick={onClick}
      style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '20px',
        width: '100%',
        maxWidth: '300px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: 'white',
      }}
    >
      <h3>{product.name}</h3>

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />

      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Order Range:</strong> {product.min}kg - {product.max}kg</p>

      {!isInCart ? (
        <button onClick={handleAddToCart} style={styles.addBtn}>
          Add to Cart
        </button>
      ) : (
        <button onClick={handleRemoveFromCart} style={styles.removeBtn}>
          Remove from Cart
        </button>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onOrder(product);
        }}
        style={styles.orderBtn}
      >
        Place Order
      </button>
    </div>
  );
}

const styles = {
  addBtn: {
    marginTop: '10px',
    padding: '10px',
    width: '100%',
    backgroundColor: '#0984e3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
  },
  removeBtn: {
    marginTop: '10px',
    padding: '10px',
    width: '100%',
    backgroundColor: '#d63031',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
  },
  orderBtn: {
    marginTop: '10px',
    padding: '10px',
    width: '100%',
    backgroundColor: '#00b894',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
  },
};

export default ProductCard;
