import React from 'react';
import './Table.css'; // Import CSS file for styling

function Table() {
  return (
    <div className="container">
      <h2>Product Summary</h2>
      <button className="show-button">Show</button>
      <select className="dropdown-select">
        <option value="all">ALL COLUMN</option>
        {/* Add more options if needed */}
      </select>
      <button className="dispatch-button">Dispatched</button>
      <div className="pagination">
        <button className="prev-button">&lt;&lt;</button>
        <button className="page-number">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>
        <button className="page-number">4</button>
        <button className="page-number">5</button>
        {/* Add more page numbers if needed */}
        <button className="next-button">&gt;&gt;</button>
      </div>
    </div>
  );
}

export default Table;
