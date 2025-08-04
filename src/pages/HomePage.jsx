// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
  const navigate = useNavigate();

  const categories = [
    { name: "Elesha", icon: "/images/elesha (sea water).jpg", link: "/products/Sea Fish" },
    { name: "Sole (Koramenu)", icon: "/images/sole fish (nangu).jpg", link: "/products/Sea Fish" },
    { name: "Pandugappa", icon: "/images/pandugappa.jpg", link: "/products/Live Fish" },
    { name: "Chetol", icon: "/images/chetol.jpg", link: "/products/Fresh Water Fish" },
    { name: "Vanjiram", icon: "/images/vanjiram (sea water).jpg", link: "/products/Live Fish" },
    { name: "Pabda(Kolkata Fish)", icon: "/images/Pabda.jpg", link: "/products/Kolkata Fish" },
{ name: "Ari(Kolkata Fish)", icon: "/images/Ari.jpg", link: "/products/Kolkata Fish" },

    
    { name: "Tiger Shrimp", icon: "/images/tiger Shrimp.jpg", link: "/products/Prawns" },
    { name: "Crabs", icon: "/images/YellowCrab.jpg", link: "/products/Crabs" },
  ];

  return (
    <div>
      {/* Navbar */}
      <header style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        position: "absolute",
        width: "100%",
        top: 0,
        zIndex: 100
      }}>
        <img src="/images/logo.png" alt="Priya Live Catch" style={{ height: "40px" }} />
        <nav>
          <a href="/home" style={{ margin: "0 15px", color: "white", textDecoration: "none", fontWeight: "500" }}>Home</a>
          <a href="/category" style={{ margin: "0 15px", color: "white", textDecoration: "none", fontWeight: "500" }}>Categories</a>
          <a href="/orders" style={{ margin: "0 15px", color: "white", textDecoration: "none", fontWeight: "500" }}>My Orders</a>
          <a href="/profile" style={{ margin: "0 15px", color: "white", textDecoration: "none", fontWeight: "500" }}>My Account</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div style={{
        backgroundImage: "url('/images/Hero image.jpg')", // your hero background
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 8px rgba(0,0,0,0.6)"
      }}>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "3rem", marginBottom: "15px" }}
        >
          Fresh Live Fish Delivered to Your Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontSize: "1.5rem", marginBottom: "30px" }}
        >
          Hygienic • Affordable • Daily Fresh
        </motion.p>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 120 }}
          onClick={() => navigate("/category")}
          style={{
            padding: "12px 25px",
            fontSize: "1.2rem",
            backgroundColor: "#df581aff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Shop Now
        </motion.button>
      </div>

      {/* Categories Section */}
      <section style={{ padding: "40px 20px", backgroundColor: "#bec8d3ff" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "30px", color: "#61abc0ff" }}
        >
          Our Categories
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "25px", maxWidth: "1100px", margin: "0 auto" }}>
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              onClick={() => navigate(cat.link)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              style={{
                backgroundColor: "#e8ebecff", borderRadius: "10px", textAlign: "center",
                padding: "10px", boxShadow: "0px 3px 6px rgba(0,0,0,0.1)", cursor: "pointer"
              }}
            >
              <img src={cat.icon} alt={cat.name} style={{ width: "180px", height: "200px", marginBottom: "5px" }} />
              <h3>{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
