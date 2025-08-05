import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function Navbar() {
  const { cart } = useCart(); // ✅ get cart from context

  return (
    <div className="navbar bg-cyan-600 p-4 flex justify-around text-white">
      {/* Home should go back to Homepage */}
      <Link to="/">Home</Link>

      <Link to="/menu">Menu</Link>

      {/* Change Categories text */}
      <Link to="/categories">Our Special Items</Link>

      {/* Fix cart length */}
      <Link to="/cart">
        Cart (<span className="font-bold">{cart.length}</span>)
      </Link>

      <Link to="/orders">Orders</Link>
    </div>
  );
}

export default Navbar;
