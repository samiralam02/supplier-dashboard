import React from 'react';
import DashboardHeader from './components/DashboardHeader';
import DashboardNavIcons from './components/DashboardNavIcons';
import DashboardTodoSection from './components/DashboardTodoSection';
import './App.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <DashboardNavIcons />
      <DashboardTodoSection />
    </div>
  );
};

export default Dashboard;
