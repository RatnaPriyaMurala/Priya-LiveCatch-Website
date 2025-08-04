import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Simulate clearing auth and redirecting
    alert('You have been logged out.');
    navigate('/');
  }, [navigate]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🚪 Logging out...</h2>
    </div>
  );
};

export default Logout;
