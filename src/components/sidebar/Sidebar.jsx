import React from "react";

import "./sidebar.css";

const Sidebar = () => {
 
  return (
    <div className="sidebar-section">
      <div className="portfolio">
        <h2>My Portfolio</h2>
      </div>
      <div className="teams-sec">
        <h2>Teams</h2>
        <hr />
        <div className="team-list">
          <ul>
            <li>Kolkata</li>
            <li>Gujarat</li>
            <li>Bangalore</li>
            <li>Lucknow</li>
            <li>Rajasthan</li>
            <li>Punjab</li>
            <li>Hyderabad</li>
            <li>Mumbai</li>
            <li>Chennai</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
