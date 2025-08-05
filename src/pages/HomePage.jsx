// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const categories = [
    { name: "Elesha", icon: "/images/elesha (sea water).jpg", link: "/products/Sea Fish" },
    { name: "Sole (Koramenu)", icon: "/images/sole fish (nangu).jpg", link: "/products/Sea Fish" },
    { name: "Pandugappa", icon: "/images/pandugappa.jpg", link: "/products/Live Fish" },
    { name: "Chetol", icon: "/images/chetol.jpg", link: "/products/Fresh Water Fish" },
    { name: "Vanjiram", icon: "/images/vanjiram (sea water).jpg", link: "/products/Live Fish" },
    { name: "Pabda (Kolkata Fish)", icon: "/images/pabda.jpg", link: "/products/Kolkata Fish" },
    { name: "Ari (Kolkata Fish)", icon: "/images/ari.jpg", link: "/products/Kolkata Fish" },
    { name: "Tiger Shrimp", icon: "/images/tiger Shrimp.jpg", link: "/products/Prawns" },
    { name: "Crabs", icon: "/images/crabs.jpg", link: "/products/Crabs" },
  ];

  return (
    <div style={{ backgroundColor: "#f9fafb" }}>
      {/* ✅ Global Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section
        style={{
          backgroundImage: "url('/images/HeroBackgroundImage.png')", // make sure the file is renamed without spaces
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "2.8rem", fontWeight: "700", textAlign: "center" }}
        >
          Fresh Live Fish Delivered to You
        </motion.h1>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          onClick={() => navigate("/category")}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            backgroundColor: "#df581a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          Shop Now
        </motion.button>
      </section>

      {/* ✅ Special Items */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#0077b6" }}>
          Our Special Items
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              onClick={() => navigate(cat.link)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                textAlign: "center",
                padding: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                cursor: "pointer",
              }}
            >
              <img
                src={cat.icon}
                alt={cat.name}
                style={{
                  width: "100%",
                  height: "180px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ marginTop: "10px" }}>{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section
        style={{
          backgroundColor: "#e6f7ff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#0077b6" }}>
          Why Choose Priya Live Catch?
        </h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
          We bring you the freshest live fish, hygienically handled and delivered straight
          to your home at affordable prices. Experience the taste of the ocean and rivers
          right at your doorstep.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
