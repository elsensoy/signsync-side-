import React from 'react';
import './Sidebar.css'; // We will create this CSS file next

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li><a href="#account">Account</a></li>
        <li><a href="#support">Support</a></li>
        <li><a href="#privacy">Privacy and Settings</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#feedback">Feedback</a></li>
        <li><a href="#more">More</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
