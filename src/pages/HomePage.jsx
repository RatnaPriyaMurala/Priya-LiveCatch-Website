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
    { name: "Pabda (Kolkata Fish)", icon: "/images/pabda.jpg", link: "/products/Kolkata Fish" },
    { name: "Ari (Kolkata Fish)", icon: "/images/ari.jpg", link: "/products/Kolkata Fish" },
    { name: "Tiger Shrimp", icon: "/images/tiger Shrimp.jpg", link: "/products/Prawns" },
    { name: "Crabs", icon: "/images/crabs.jpg", link: "/products/Crabs" },
  ];

  return (
    <div>
      {/* ✅ Hero Section */}
      <section
        style={{
          backgroundImage: "url('/images/Hero Background image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "3rem", marginBottom: "20px", textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}
        >
          Fresh Live Fish Delivered to You
        </motion.h1>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          onClick={() => navigate("/category")}
          style={{
            padding: "15px 35px",
            fontSize: "1.2rem",
            backgroundColor: "#ff5722",
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          Shop Now
        </motion.button>
      </section>

      {/* Wave Divider */}
      <svg style={{ display: "block", marginTop: "-1px" }} viewBox="0 0 1440 320">
        <path
          fill="#f9f9f9"
          d="M0,160L60,144C120,128,240,96,360,117.3C480,139,600,213,720,229.3C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z"
        ></path>
      </svg>

      {/* ✅ Special Items */}
      <section id="special-items" style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "40px", color: "#0077b6", fontSize: "2rem" }}
        >
          Our Special Items
        </motion.h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              onClick={() => navigate(cat.link)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                textAlign: "center",
                padding: "15px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={cat.icon}
                alt={cat.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ color: "#333" }}>{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
