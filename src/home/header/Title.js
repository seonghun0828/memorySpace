import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css';

const Title = () => {
  return (
    <Link to="./">
      <div className="nav-title">
        <img src="./memory-icon.png" alt="memo-icon" className="memory-icon" />
        <span className="page-name">Memory Space</span>
      </div>
    </Link>
  );
};

export default Title;
