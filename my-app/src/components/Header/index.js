import React from 'react';
import './Header.css'; // Import CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <span className="order-label">Order</span>
      </div>
      <div className="right-section">
        <button className="new-button">Create New</button>
      </div>
    </header>
  );
}

export default Header;
