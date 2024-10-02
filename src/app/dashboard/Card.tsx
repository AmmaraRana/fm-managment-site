// src/app/dashboard/Card.tsx
import React from 'react';

const cardStyle: React.CSSProperties = {
  background: 'linear-gradient(to right, #38b2ac, #2c7a7b)',
  color: 'white',
  borderRadius: '12px',
  padding: '24px',
  margin: '16px',
  width: '300px', // Keep the original width
  height: '160px', // Keep the original height
  display: 'flex',
  flexDirection: 'column', // Keep column layout inside the card
  justifyContent: 'space-between',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginRight: '16px', // Maintain some gap between cards
};

const iconStyle: React.CSSProperties = {
  fontSize: '32px',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '20px',
  width: '100%',
  height: 'auto', // Allow auto height based on content
  overflowX: 'auto',
};


const cardContainerStyle: React.CSSProperties = {
  display: 'flex', // Cards will appear in a row
  flexDirection: 'row', // Ensure horizontal alignment of cards
  justifyContent: 'flex-start', 
  width: '100%',
};

interface CardProps {
  title: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, icon }) => (
  <div style={cardStyle}>
    <div>
      <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600' }}>{title}</h2>
      <p style={{ fontSize: '36px',  marginBottom: '24px',fontWeight: 'bold' }}>0</p>
      <p style={{ fontSize: '14px', marginBottom: '8px', }}>Just Updated</p>
    </div>
    <i className={`fas ${icon}`} style={iconStyle}></i>
  </div>
);

const App: React.FC = () => (
  <div style={containerStyle}>
    <div style={cardContainerStyle}>
      <Card title="Cash In Hand" icon="fa-eye" />
      <Card title="Total Debit" icon="fa-users" />
      <Card title="Total Credit" icon="fa-wallet" />
      <Card title="Total Stock" icon="fa-box" />
      <Card title="Notifications" icon="fa-bell" />
    </div>
  </div>
);

export default App;
