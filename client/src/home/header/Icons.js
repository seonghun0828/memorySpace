import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { SearchText } from './SearchText';
import './Icons.css';

const Icons = () => {
  return (
    <div className="nav-icons">
      <SearchText />
      <Search />
      <Link to="./book">
        <span className="nav-icon book-icon">📚</span>
      </Link>
      <Link to="./movie">
        <span className="nav-icon movie-icon">🎥</span>
      </Link>
      <Link to="./calendar">
        {/* 구현 후 invisible 삭제 */}
        <span className="nav-icon calendar-icon invisible">🗓</span>
      </Link>
    </div>
  );
};

export default Icons;
