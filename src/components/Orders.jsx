import React from 'react';

const Orders = ({ orders }) => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px' }}>My Orders</h2>

      {orders.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '40px',
            background: '#f9f9f9',
            borderRadius: '12px',
            boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src="/images/empty-cart.png" // you can replace this with your own image
            alt="No Orders"
            style={{ width: '150px', marginBottom: '20px' }}
          />
          <h3>No orders yet</h3>
          <p>Start exploring and add items to your cart!</p>
        </div>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            style={{
              marginBottom: '20px',
              padding: '15px',
              borderRadius: '10px',
              background: '#fff',
              boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
            }}
          >
            <p><strong>Item:</strong> {order.item}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Total Price:</strong> ₹{order.total}</p>
            <p className={`status ${order.status.replace(/\s/g, '').toLowerCase()}`}>
  {order.status}
</p>

          </div>
        ))
      )}
    </div>
  );
};

export default Orders;