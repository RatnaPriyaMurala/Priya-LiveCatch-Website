// src/components/TopLeftMenuPanel.js
import React from 'react';
import CartIcon from './CartIcon';

const TopLeftMenuPanel = ({ onMenuClick }) => {
  return (
    <div style={styles.container}>
      <div style={styles.menuIcon} onClick={onMenuClick}>
        ☰
      </div>
      <CartIcon />
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 20,
    left: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    zIndex: 1000,
    gap: 16
  },
  menuIcon: {
    fontSize: 24,
    cursor: 'pointer',
  }
};

export default TopLeftMenuPanel;
