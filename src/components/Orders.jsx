// src/components/Orders.jsx
import React from 'react';

function Orders({ orders }) {
  return (
    <section id="orders" style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🛒 My Orders</h2>

      {orders.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No orders yet. Place something delicious!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {orders.map(order => (
            <div
              key={order.id}
              style={{
                background: "#f1f8ff",
                borderRadius: "12px",
                padding: "15px",
                boxShadow: "0px 3px 8px rgba(0,0,0,0.1)"
              }}
            >
              {/* Customer Info */}
              <div style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                <p><strong>Name:</strong> {order.customer?.name}</p>
                <p><strong>Phone:</strong> {order.customer?.phone}</p>
                <p><strong>Location:</strong> {order.customer?.location}</p>
              </div>

              {/* Items */}
              <h4 style={{ marginBottom: '10px' }}>Items Ordered:</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {order.itemsList?.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#ffffff',
                      padding: '10px',
                      borderRadius: '10px',
                      boxShadow: '0px 2px 6px rgba(0,0,0,0.05)'
                    }}
                  >
                    {/* Show image if available */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '60px', height: '60px', borderRadius: '8px', marginRight: '12px' }}
                      />
                    )}
                    <div>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{item.name}</p>
                      <p style={{ margin: 0, fontSize: '14px' }}>
                        {item.price} × {item.quantity}kg
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div style={{ marginTop: '15px', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
                <p><strong>Total:</strong> ₹{order.total}</p>
                <p><strong>Date:</strong> {order.date}</p>
                <p><strong>Order ID:</strong> #{order.id}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Orders;
