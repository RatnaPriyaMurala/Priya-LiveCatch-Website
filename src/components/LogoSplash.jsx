import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoSplash.css'; // Import the CSS file

function LogoSplash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/category');
    }, 2500); // Duration before navigation
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src="/images/logo.png" alt="Logo" className="animated-logo" />
    </div>
  );
}

export default LogoSplash;
