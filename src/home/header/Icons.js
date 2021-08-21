import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import './Icons.css';

const Icons = () => {
  return (
    <div className="nav-icons">
      <Search />
      <Link to="./book">
        <span className="nav-icon book-icon">📚</span>
      </Link>
      <Link to="./movie">
        <span className="nav-icon movie-icon">🎥</span>
      </Link>
      <Link to="./calendar">
        <span className="nav-icon calendar-icon">🗓</span>
      </Link>
    </div>
  );
};

export default Icons;