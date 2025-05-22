import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line
} from 'recharts';
import './DashboardTodoSection.css';

const COLORS = ['#00C49F', '#FF4C4C', '#0088FE', '#FFBB28'];

const todoData = [
  {
    title: 'Supplier Request',
    chart: (
      <PieChart width={160} height={160}>
        <Pie
          data={[
            { name: 'Approved', value: 850 },
            { name: 'Rejected', value: 150 }
          ]}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
        >
          {COLORS.slice(0, 2).map((color, i) => (
            <Cell key={i} fill={color} />
          ))}
        </Pie>
      </PieChart>
    ),
    detail: 'Total Validation',
    value: 1000,
    note: 'Search by dates to know validation of approved and rejected'
  },
  {
    title: 'Supplier Registration',
    chart: (
      <BarChart width={160} height={100} data={[{ name: 'Registered', value: 750 }]}>
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip />
        <Bar dataKey="value" fill="#0088FE" />
      </BarChart>
    ),
    detail: 'Total No. of Supplier Registration',
    value: 750
  },
  {
    title: 'Supplier Evaluation',
    chart: (
      <PieChart width={160} height={160}>
        <Pie
          data={[
            { name: 'Available', value: 52 },
            { name: 'Attended', value: 7 }
          ]}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
        >
          {COLORS.slice(2, 4).map((color, i) => (
            <Cell key={i} fill={color} />
          ))}
        </Pie>
      </PieChart>
    ),
    detail: 'Total Surveys available',
    value: 52,
    note: 'Total Surveys attended 07'
  },
  {
    title: 'Supplier Qualification',
    chart: (
      <BarChart width={160} height={100} data={[{ name: 'Qualified', q: 350, d: 150 }]}>
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip />
        <Bar dataKey="q" fill="#00C49F" />
        <Bar dataKey="d" fill="#FF4C4C" />
      </BarChart>
    ),
    detail: 'Total No. of Qualified',
    value: 350,
    note: 'Total No. of Disqualified 150'
  },
  {
    title: 'Supplier Integration',
    chart: (
      <LineChart width={160} height={100} data={[
        { name: 'Jan', value: 300 },
        { name: 'Feb', value: 500 },
        { name: 'Mar', value: 400 },
        { name: 'Apr', value: 600 }
      ]}>
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    ),
    detail: 'Overall performance of suppliers'
  },
  {
    title: 'Rescan',
    chart: (
      <BarChart width={160} height={100} data={[{ name: 'Rescan', approved: 450, rejected: 150 }]}>
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip />
        <Bar dataKey="approved" fill="#00C49F" />
        <Bar dataKey="rejected" fill="#FF4C4C" />
      </BarChart>
    ),
    detail: 'Total Approved',
    value: 450,
    note: 'Total Rejected 150'
  }
];

const DashboardTodoSection = () => {
  return (
    <section className="todo-section">
      <h2>TO DO</h2>
      <div className="cards-grid">
        {todoData.map((item, index) => (
          <div className="todo-card" key={index}>
            <div className="card-header">
              <h4>{item.title}</h4>
              <span className="menu-icon">⋮</span>
            </div>
            <div className="card-body">
              <div className="card-chart">{item.chart}</div>
              <div className="card-details">
                <p>{item.detail}</p>
                {item.value && <h3>{item.value}</h3>}
                {item.note && <small>{item.note}</small>}
                <a href="#">More Info</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardTodoSection;
