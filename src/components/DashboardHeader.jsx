import React from 'react';
import './DashboardHeader.css';
import logo from '../images/logo.png';
import userIcon from '../images/user-icon.png';
import settingsIcon from '../images/settings-icon.png';
import logoutIcon from '../images/logout-icon.png';

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <img src={logo} alt="SAP Logo" className="logo" />
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="header-icons">
        <div className="icon-button">
          <img src={userIcon} alt="User Icon" className="icon" />
        </div>
        <div className="icon-button">
          <img src={settingsIcon} alt="Settings Icon" className="icon" />
        </div>
        <div className="icon-button">
          <img src={logoutIcon} alt="Logout Icon" className="icon" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;