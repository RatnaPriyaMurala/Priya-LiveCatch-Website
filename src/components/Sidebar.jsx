// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Sea Fish",
  "Fresh Water Fish",
  "Live Fish",
  "Prawns",
  "Crabs",
  "Kolkata Fish",
];

function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        background: "#f8f9fa",
        borderRight: "1px solid #ddd",
        padding: "20px",
        position: "sticky",
        top: "70px",
        height: "calc(100vh - 70px)",
      }}
    >
      <h3 style={{ marginBottom: "20px", color: "#0077b6" }}>Categories</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((cat, idx) => (
          <li key={idx} style={{ marginBottom: "15px" }}>
            <Link
              to={`/products/${cat}`}
              style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>

      {/* ✅ Cart Link */}
      <div style={{ marginTop: "30px" }}>
        <Link
          to="/cart"
          style={{
            display: "block",
            background: "#0077b6",
            color: "white",
            padding: "12px",
            borderRadius: "6px",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          🛒 View Cart
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
