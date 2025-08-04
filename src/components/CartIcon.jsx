// src/components/CartIcon.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Link } from 'react-router-dom';


const CartIcon = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  // Calculate total items in cart
  const itemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer",
        fontSize: "28px",
        padding: "12px",
        borderRadius: "50%",
        backgroundColor: "#f2f2f2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        position: "relative",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      🛒
      {itemCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: "6px",
            right: "6px",
            backgroundColor: "red",
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
