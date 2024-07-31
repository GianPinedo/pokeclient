import React from 'react';
import './LoadingCards.css';

const LoadingCard: React.FC = () => {
  return (
    <div className="loading-card">
      <div className="loading-image"></div>
      <div className="loading-content">
        <div className="loading-line"></div>
        <div className="loading-line"></div>
        <div className="loading-line"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
