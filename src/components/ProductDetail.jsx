import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/fishData';

function ProductDetail() {
  const { productName } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.name === decodeURIComponent(productName));

  const [formData, setFormData] = useState({ name: '', phone: '', location: '', quantity: '' });
  const [errors, setErrors] = useState({});

  if (!product) return <div style={{ padding: 20 }}>Product not found</div>;

  const validate = () => {
    const errs = {};
    if (!/^[A-Za-z ]+$/.test(formData.name)) errs.name = 'Enter valid name';
    if (!/^\d{10}$/.test(formData.phone)) errs.phone = 'Enter 10-digit number';
    if (!formData.location.trim()) errs.location = 'Enter valid location';
    if (
      formData.quantity < product.minKg ||
      formData.quantity > product.maxKg ||
      !formData.quantity
    ) {
      errs.quantity = `Quantity must be between ${product.minKg} and ${product.maxKg} kg`;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const msg = `New Order\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nFish: ${product.name}\nQuantity: ${formData.quantity}kg\nPrice: ₹${product.price}/kg`;
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/919954833369?text=${encodedMsg}`, '_blank');
    alert('✅ Order placed successfully!');
  };

  return (
    <div style={{ padding: 20 }}>
      <img src="/images/logo.png" alt="Logo" style={{ position: 'absolute', top: 10, right: 10, width: '50px', height: '50px' }} />
      <button onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>← Back</button>

      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: 400, borderRadius: 10 }} />
      <p><strong>Price:</strong> ₹{product.price}/kg</p>
      <p><strong>Order Range:</strong> {product.minKg}kg - {product.maxKg}kg</p>

      <div style={{ marginTop: 20 }}>
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '5px',
            borderRadius: '5px',
            border: errors.name ? '1px solid red' : '1px solid #ccc'
          }}
        />
        {errors.name && <p style={{ color: 'red', fontSize: '13px' }}>{errors.name}</p>}

        {/* Phone */}
        <input
          type="text"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '5px',
            borderRadius: '5px',
            border: errors.phone ? '1px solid red' : '1px solid #ccc'
          }}
        />
        {errors.phone && <p style={{ color: 'red', fontSize: '13px' }}>{errors.phone}</p>}

        {/* Location */}
        <input
          type="text"
          placeholder="Your Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '5px',
            borderRadius: '5px',
            border: errors.location ? '1px solid red' : '1px solid #ccc'
          }}
        />
        {errors.location && <p style={{ color: 'red', fontSize: '13px' }}>{errors.location}</p>}

        {/* Quantity */}
        <input
          type="number"
          placeholder={`Quantity (${product.minKg}-${product.maxKg} kg)`}
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '5px',
            borderRadius: '5px',
            border: errors.quantity ? '1px solid red' : '1px solid #ccc'
          }}
        />
        {errors.quantity && <p style={{ color: 'red', fontSize: '13px' }}>{errors.quantity}</p>}

        <button
          onClick={handleSubmit}
          style={{
            marginTop: '15px',
            width: '100%',
            padding: '12px',
            backgroundColor: '#00b894',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px'
          }}
        >
          Confirm Order via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
