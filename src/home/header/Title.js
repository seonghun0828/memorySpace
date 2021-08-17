import React from 'react';
import './Title.css';

const Title = () => {
  return (
    <div className="nav-title">
      <img src="./memory-icon.png" alt="memo-icon" className="memory-icon" />
      <span className="page-name">Memory Space</span>
    </div>
  );
};

export default Title;
