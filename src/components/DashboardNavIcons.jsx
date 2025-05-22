import React from 'react';
import './DashboardNavIcons.css';

// Updated import paths based on src/images/
import supplierIcon from '../images/supplier.png';
import blockIcon from '../images/block.png';
import invoiceIcon from '../images/invoice.png';
import businessAutomationIcon from '../images/business-automation.png';
import contractManagementIcon from '../images/contract.png';

const navItems = [
  { label: 'SLP ADDON', icon: supplierIcon },
  { label: 'SOURCING', icon: blockIcon },
  { label: 'BUYING & INVOICING', icon: invoiceIcon },
  { label: 'COMMERCE AUTOMATION', icon: businessAutomationIcon },
  { label: 'CONTRACT MANAGEMENTS', icon: contractManagementIcon },
];

const DashboardNavIcons = () => {
  return (
    <div className="nav-icons">
      {navItems.map(({ label, icon }, index) => (
        <div className="nav-item" key={index}>
          <img src={icon} alt={`${label} Icon`} className="nav-icon" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default DashboardNavIcons;
