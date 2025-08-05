// src/components/CategoryPage.jsx
import { useNavigate } from "react-router-dom";
import React from "react";
import Sidebar from "../components/Sidebar";
import CartIcon from "../components/CartIcon";

const categories = [
  { name: "Sea Fish", image: "/images/seafish.jpg" },
  { name: "Fresh Water Fish", image: "/images/freshwaterfish.jpg" },
  { name: "Live Fish", image: "/images/livefish.jpg" },
  { name: "Prawns", image: "/images/prawns.jpg" },
  { name: "Crabs", image: "/images/crabs.jpg" },
  { name: "Kolkata Fish", image: "/images/kolkatafish.jpg" },
];

function CategoryPage() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* ✅ Left Panel */}
      <aside
        style={{
          width: "240px",
          backgroundColor: "#1e293b",
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        <div>
          <Sidebar />
          <h3 style={{ margin: "20px 0", fontSize: "1.2rem" }}>Categories</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {categories.map((cat) => (
              <li
                key={cat.name}
                onClick={() => navigate(`/products/${encodeURIComponent(cat.name)}`)}
                style={{
                  padding: "10px 0",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Cart Icon at bottom */}
        <div style={{ marginTop: "20px" }}>
          <CartIcon />
        </div>
      </aside>

      {/* ✅ Right Content */}
      <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#0077b6" }}>
          Our Fish Categories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => navigate(`/products/${encodeURIComponent(cat.name)}`)}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "15px",
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "12px",
                }}
              />
              <p style={{ fontSize: "18px", fontWeight: "bold", color: "#0f172a" }}>
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CategoryPage;
