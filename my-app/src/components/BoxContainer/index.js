import React from 'react';
import './BoxContainer.css'; // Import CSS file for styling

function BoxContainer() {
  return (
    <div className="box-container">
      <div className="search-section">
        <div>
          <h3>What are you looking for?</h3>
          <input type="text" placeholder="Search for category, company name, etc." className="search-bar" />
        </div>
        <div className="dropdowns">
          <div className="dropdown">
            <h3>Category</h3>
            <select id="category-dropdown">
              <option value="category">Category</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="dropdown">
            <h3>Status</h3>
            <select id="status-dropdown">
              <option value="status">Status</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default BoxContainer;
