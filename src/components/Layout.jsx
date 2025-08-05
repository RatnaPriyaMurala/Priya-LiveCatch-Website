// src/components/Layout.jsx
import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const scrollToSpecialItems = () => {
    const section = document.getElementById("special-items");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const homeSection = document.getElementById("special-items");
        if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* ✅ Navbar */}
      <header
        style={{
          background: "linear-gradient(90deg, #0077b6, #0096c7)",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <img src="/images/logo.png" alt="Priya Live Catch" style={{ height: "45px" }} />
        <nav>
          <button
            onClick={scrollToSpecialItems}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1rem",
              fontWeight: "500",
              margin: "0 20px",
              cursor: "pointer",
            }}
          >
            Home
          </button>
          <Link to="/category" style={{ margin: "0 20px", color: "white", textDecoration: "none", fontWeight: "500" }}>
            Products
          </Link>
          <Link to="/orders" style={{ margin: "0 20px", color: "white", textDecoration: "none", fontWeight: "500" }}>
            My Orders
          </Link>
          <Link to="/profile" style={{ margin: "0 20px", color: "white", textDecoration: "none", fontWeight: "500" }}>
            My Account
          </Link>
        </nav>
      </header>

      {/* ✅ Page Content */}
      <main style={{ display: "flex", minHeight: "100vh" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
