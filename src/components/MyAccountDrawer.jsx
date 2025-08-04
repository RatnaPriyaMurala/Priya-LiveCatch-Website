// src/components/MyAccountDrawer.jsx
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Link } from 'react-router-dom';
const menuItems = [
  { icon: '👤', label: 'Profile', path: '/profile' },
  { icon: '📃', label: 'Terms and Conditions', path: '/terms' },
  { icon: '🔐', label: 'Privacy Policy', path: '/privacy' },
  { icon: '🔔', label: 'Notifications', path: '/notifications' },
  { icon: '❤️', label: 'Favourites', path: '/favourites' },
  { icon: '📁', label: 'Saved Items', path: '/saved' },
  { icon: '📝', label: 'Edit Profile', path: '/edit' },
  { icon: '💳', label: 'My Transactions', path: '/transactions' },
  { icon: '🌐', label: 'Change Language', path: '/changelanguage' },
  { icon: '🚪', label: 'Logout', path: '/logout' },
];

function MyAccountDrawer() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          style={{
            position: 'absolute',
            top: 15,
            left: 15,
            background: 'transparent',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            position: 'fixed',
            inset: 0
          }}
        />
        <Dialog.Content
          style={{
            backgroundColor: 'white',
            padding: 20,
            width: '80%',
            maxWidth: 300,
            height: '100%',
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }}
        >
          <h2 style={{ marginBottom: 20 }}>My Account</h2>
          {menuItems.map((item, index) => (
            <Link
  key={index}
  to={item.path}
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 5px',
    borderBottom: '1px solid #eee',
    color: 'black',
    textDecoration: 'none'
  }}
  >
  <span>{item.icon}</span>
  <span>{item.label}</span>
</Link>
          ))}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MyAccountDrawer;
