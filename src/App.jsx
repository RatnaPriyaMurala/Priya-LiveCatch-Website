// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Orders from './components/Orders';
import HomePage from './pages/HomePage';
import CategoryPage from './components/CategoryPage';
import ProductListPage from './components/ProductListPage';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';
//import LogoSplash from './components/LogoSplash';
import { CartProvider } from './contexts/CartContext';
import SearchResultsPage from './pages/SearchResultsPage';
import SideDrawer from './components/SideDrawer';
import CartIcon from './components/CartIcon';
import HamburgerIcon from './components/HamburgerIcon';
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
// My Account pages
import Profile from './pages/Profile';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Notifications from './pages/Notifications';
import Favourites from './pages/Favourites';
import Saved from './pages/Saved';
import EditProfile from './pages/EditProfile';
import MyTransactions from './pages/MyTransactions';
import ChangeLanguage from './pages/ChangeLanguage';
import Logout from './pages/Logout';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [orders, setOrders] = useState([]); // ✅ track order history
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const LayoutWithMenu = ({ children }) => (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Vertical Menu */}
      <div
        style={{
          width: '60px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div onClick={toggleDrawer} style={{ cursor: 'pointer', marginBottom: '10px' }}>
          <HamburgerIcon />
        </div>
        <CartIcon />
      </div>

      {/* Sidebar Drawer */}
      {drawerOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '300px',
            height: '100vh',
            backgroundColor: '#fff',
            zIndex: 1000,
            boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
            transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <SideDrawer onClose={toggleDrawer} />
        </div>
      )}

      {/* Main Page Content */}
      <div style={{ flex: 1, padding: '20px', position: 'relative' }}>
        {/* Top-right Logo */}
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: '50px',
            height: '50px',
            zIndex: 999
          }}
        />
        {children}
      </div>
    </div>
  );

  return (
    <CartProvider>
      <Router>
        <Routes>
  {/* Home without sidebar */}
  <Route index element={<HomePage />} />

  {/* Pages with sidebar */}
  <Route path="/search/:query" element={<LayoutWithMenu><SearchResultsPage /></LayoutWithMenu>} />
  <Route path="/category" element={<LayoutWithMenu><CategoryPage /></LayoutWithMenu>} />
  <Route path="/orders" element={<LayoutWithMenu><Orders orders={orders} /></LayoutWithMenu>} />
  <Route path="/profile" element={<LayoutWithMenu><Profile /></LayoutWithMenu>} />
  <Route path="/products/:categoryName" element={<LayoutWithMenu><ProductListPage /></LayoutWithMenu>} />
  <Route path="/product/:productName" element={<LayoutWithMenu><ProductDetail /></LayoutWithMenu>} />
  <Route path="/cart" element={
    <LayoutWithMenu>
      <CartPage onOrder={(order) => setOrders(prev => [order, ...prev])} />
    </LayoutWithMenu>
  } />
  
  {/* My Account Pages */}
  <Route path="/terms" element={<LayoutWithMenu><TermsAndConditions /></LayoutWithMenu>} />
  <Route path="/privacy" element={<LayoutWithMenu><PrivacyPolicy /></LayoutWithMenu>} />
  <Route path="/notifications" element={<LayoutWithMenu><Notifications /></LayoutWithMenu>} />
  <Route path="/favourites" element={<LayoutWithMenu><Favourites /></LayoutWithMenu>} />
  <Route path="/saved" element={<LayoutWithMenu><Saved /></LayoutWithMenu>} />
  <Route path="/edit" element={<LayoutWithMenu><EditProfile /></LayoutWithMenu>} />
  <Route path="/transactions" element={<LayoutWithMenu><MyTransactions /></LayoutWithMenu>} />
  <Route path="/changelanguage" element={<LayoutWithMenu><ChangeLanguage /></LayoutWithMenu>} />
  <Route path="/logout" element={<LayoutWithMenu><Logout /></LayoutWithMenu>} />
</Routes>

      </Router>
    </CartProvider>
  );
}

export default App;
