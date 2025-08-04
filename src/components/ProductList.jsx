import React, { useState } from 'react';
import products from '../data/fishData';
import CartIcon from './CartIcon';

function ProductList({ addNotification }) {
  const [search, setSearch] = useState("");
  const [formState, setFormState] = useState({ visible: false, product: null });
  const [formData, setFormData] = useState({ name: '', phone: '', quantity: '' });
  const [errors, setErrors] = useState({});

  const openForm = (product) => {
    setFormState({ visible: true, product });
    setFormData({ name: '', phone: '', quantity: '' });
    setErrors({});
  };

  const closeForm = () => {
    setFormState({ visible: false, product: null });
    setErrors({});
  };

  const validate = () => {
    const errs = {};
    const { name, phone, quantity } = formData;
    const qty = parseInt(quantity);
    const product = formState.product;

    if (!name || name.length < 2) errs.name = "Enter valid name";
    if (!phone || !/^\d{10}$/.test(phone)) errs.phone = "Enter 10-digit mobile number";
    if (!quantity || isNaN(qty)) {
      errs.quantity = "Enter valid quantity";
    } else if (qty < product.minKg || qty > product.maxKg) {
      errs.quantity = `Enter quantity between ${product.minKg}kg and ${product.maxKg}kg`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submitOrder = () => {
    if (!validate()) return;

    const { name, phone, quantity } = formData;
    const product = formState.product;
    const qty = parseInt(quantity);

    const orderMsg = `Order Confirmed: ${name} ordered ${qty}kg of ${product.name} (${product.type})`;
    addNotification(orderMsg);
    alert('✅ Order placed successfully!');

    const msg = `New Order\nName: ${name}\nPhone: ${phone}\nProduct: ${product.name} (${product.type})\nQuantity: ${qty}kg\nPrice: ₹${product.pricePerKg}/kg`;
    const encodedMsg = encodeURIComponent(msg);
    const whatsappURL = `https://api.whatsapp.com/send/?phone=919954833369&text=${encodedMsg}`;
    window.open(whatsappURL, '_blank');

    closeForm();
  };

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search fish or seafood"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ margin: '16px', padding: '10px', width: '90%', borderRadius: '8px', border: '1px solid #ccc' }}
      />
      <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {filtered.map((product) => (
          <div key={product.id} className="card" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', width: '250px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3>{product.name}</h3>
            <p>Type: {product.type}</p>
            <p>Price: ₹{product.pricePerKg}/kg</p>
            <p>Order Range: {product.minKg}kg - {product.maxKg}kg</p>
            <button
              onClick={() => openForm(product)}
              style={{ marginTop: '10px', padding: '10px', width: '100%' }}
            >
              Place Order
            </button>
          </div>
        ))}
      </div>

      {formState.visible && (
        <div style={{
          padding: '20px',
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '12px',
          maxWidth: '400px',
          margin: '20px auto'
        }}>
          <h3>Order: {formState.product.name}</h3>

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
        border: !/^[A-Za-z ]+$/.test(formData.name) && formData.name
          ? '1px solid red'
          : '1px solid #ccc'
            }}
          />
          {!/^\d{10}$/.test(formData.phone) && formData.phone && (
      <p style={{ color: 'red', fontSize: '13px', marginTop: '0' }}>Enter 10-digit number</p>
    )}

    {/* Location Field */}
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
        border: !formData.location && formData.location !== ''
          ? '1px solid red'
          : '1px solid #ccc'
      }}
    />
    {!formData.location && formData.location !== '' && (
      <p style={{ color: 'red', fontSize: '13px', marginTop: '0' }}>Enter valid location</p>
    )}

    {/* Quantity Field */}
    <input
      type="number"
      placeholder={`Quantity (${formState.product.minKg}-${formState.product.maxKg} kg)`}
      value={formData.quantity}
      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '5px',
        borderRadius: '5px',
        border:
          (formData.quantity < formState.product.minKg ||
           formData.quantity > formState.product.maxKg) &&
          formData.quantity
            ? '1px solid red'
            : '1px solid #ccc'
      }}
    />
    {(formData.quantity < formState.product.minKg ||
      formData.quantity > formState.product.maxKg) &&
      formData.quantity && (
      <p style={{ color: 'red', fontSize: '13px', marginTop: '0' }}>
        Quantity must be between {formState.product.minKg} and {formState.product.maxKg} kg
      </p>
    )}

    <button
      onClick={submitOrder}
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
      Confirm Order
    </button>
    <button
      onClick={closeForm}
      style={{
        marginTop: '10px',
        width: '100%',
        padding: '12px',
        backgroundColor: '#ccc',
        color: '#333',
        border: 'none',
        borderRadius: '8px'
      }}
    >
      Cancel
    </button>
  </div>
)}
    </div>
  );
}

export default ProductList;
