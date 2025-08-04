import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function Navbar() {
  const { cart } = useCart();

  return (
    <div className="navbar bg-cyan-600 p-4 flex justify-around text-white">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/cart">
        Cart (<span className="font-bold">{cart.length}</span>)
      </Link>
      <Link to="/orders">Orders</Link>
    </div>
  );
}

export default Navbar;
