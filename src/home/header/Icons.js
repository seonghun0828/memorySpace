import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Icons.css';

const useSearch = () => {
  const browser = useRef();
  const clickbrowser = () => browser.current.click();
  return { browser, clickbrowser };
};
const Icons = () => {
  const { browser, clickbrowser } = useSearch();
  return (
    <div className="nav-icons">
      <Link to="./book">
        <span className="nav-icon book-icon">📚</span>
      </Link>
      <Link to="./movie">
        <span className="nav-icon movie-icon">🎥</span>
      </Link>
      <Link to="./calendar">
        <span className="nav-icon calendar-icon">🗓</span>
      </Link>
      <span>
        <input type="file" id="file-browser" ref={browser} />
        <input
          type="button"
          value="🔍"
          className="nav-icon search-icon"
          onClick={clickbrowser}
        />
      </span>
    </div>
  );
};

export default Icons;
