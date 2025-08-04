import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function CartPage(props) {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: ''
  });
  const [errors, setErrors] = useState({});

  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    const qty = item.quantity || 1;
    return sum + (price * qty);
  }, 0);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const errs = {};
    const { name, phone, location } = formData;

    if (!name || name.length < 2) errs.name = "Enter valid name";
    if (!/^\d{10}$/.test(phone)) errs.phone = "Enter 10-digit mobile number";
    if (!location || location.length < 3) errs.location = "Enter valid location";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const confirmOrder = () => {
    if (!validate()) return;

    const { name, phone, location } = formData;
    const items = cart.map(item =>
      `${item.name} - ₹${item.price}/kg × ${item.quantity}kg`
    ).join('\n');

    const msg = `New Order\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nItems:\n${items}\nTotal: ₹${totalPrice}`;
    const encodedMsg = encodeURIComponent(msg);
    const whatsappURL = `https://api.whatsapp.com/send/?phone=919954833369&text=${encodedMsg}`;

    window.open(whatsappURL, '_blank');

    // ✅ Save full order details
    if (props.onOrder) {
  props.onOrder({
    id: Date.now(),
    customer: { ...formData },
    itemsList: cart.map(item => ({
      name: item.name,
      price: `₹${item.price}/kg`,
      quantity: item.quantity,
      image: item.image || null  // add if available
    })),
    total: totalPrice,
    date: new Date().toLocaleString(),
  });
}

    clearCart();
    alert("✅ Order sent via WhatsApp!");

    // ✅ Navigate to Orders page
    navigate('/orders');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #ccc',
                padding: '12px',
                borderRadius: '10px',
                marginBottom: '15px'
              }}
            >
              <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>
                ₹{parseFloat(item.price)} / kg
              </p>
              <p><strong>{item.name}</strong></p>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <button
                  onClick={() =>
                    updateCartItemQuantity(item.name, Math.max(1, item.quantity - 1))
                  }
                  style={{ padding: '5px 10px', marginRight: '10px' }}
                >
                  -
                </button>
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.quantity} kg</span>
                <button
                  onClick={() =>
                    updateCartItemQuantity(item.name, item.quantity + 1)
                  }
                  style={{ padding: '5px 10px', marginLeft: '10px' }}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.name)}
                style={{
                  marginLeft: '10px',
                  padding: '4px 8px',
                  backgroundColor: '#ff7675',
                  border: 'none',
                  borderRadius: '4px',
                  color: 'white'
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total Amount: ₹{totalPrice}</h3>

          <h3 style={{ marginTop: '30px' }}>Customer Info</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '5px',
              borderRadius: '5px',
              border: errors.name ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '5px',
              borderRadius: '5px',
              border: errors.phone ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

          <input
            type="text"
            name="location"
            placeholder="Your Location"
            value={formData.location}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '5px',
              borderRadius: '5px',
              border: errors.location ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.location && <p style={{ color: 'red' }}>{errors.location}</p>}

          <button
            onClick={confirmOrder}
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

          {/* ✅ Add Privacy Policy and Terms links */}
          <div style={{ marginTop: '25px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#555' }}>
              By placing an order, you agree to our
              <br />
              <Link to="/terms" style={{ color: '#006064', fontWeight: 'bold' }}>
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link to="/privacy" style={{ color: '#006064', fontWeight: 'bold' }}>
                Privacy Policy
              </Link>.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
