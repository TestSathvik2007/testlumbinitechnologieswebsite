// Admin.jsx
import React from 'react';

const Admin = () => (
  <iframe
    title="Admin"
    src="/Admin/index.html"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      border: 'none',
      backgroundColor: 'white',
      zIndex: 1000
    }}
  />
);

export default Admin;