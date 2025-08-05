import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function SideDrawer({ onClose }) {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const categories = [
  "Sea Fish",
  "Fresh Water Fish",
  "Live Fish",
  "Prawns",
  "Crabs",
  "Kolkata Fish",
];


  const handleLogout = () => {
    logout();
    onClose();
    navigate("/"); // go back to splash or login
  };

  return (
    <div style={{ width: "240px", padding: "20px" }}>
      {/* Profile */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={user?.avatar || "/images/default-avatar.png"}
          alt="User Avatar"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #ccc",
          }}
        />
        <h3>{user?.name || "Guest User"}</h3>
        <p>{user?.email || "No Email"}</p>
      </div>
      <div className="side-drawer">
    <h3>Categories</h3>
    <ul>
      {categories.map((cat, i) => (
        <li key={i} onClick={() => navigate(`/products/${cat}`)}>
          {cat}
        </li>
      ))}
    </ul>
    <button onClick={() => navigate("/cart")}>View Cart</button>
  </div>

      {/* Menu */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/profile" onClick={onClose}>Profile</Link>
        <Link to="/terms" onClick={onClose}>Terms & Conditions</Link>
        <Link to="/privacy" onClick={onClose}>Privacy Policy</Link>
        <Link to="/notifications" onClick={onClose}>Notifications</Link>
        <Link to="/favourites" onClick={onClose}>Favourites</Link>
        <Link to="/saved" onClick={onClose}>Saved</Link>
        <Link to="/transactions" onClick={onClose}>My Transactions</Link>
        <Link to="/changelanguage" onClick={onClose}>Change Language</Link>
        <button 
          onClick={handleLogout} 
          style={{
            background: "none",
            border: "none",
            color: "red",
            cursor: "pointer",
            textAlign: "left",
            padding: "0",
          }}
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default SideDrawer;
