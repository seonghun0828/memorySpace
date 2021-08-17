import React, { useRef } from 'react';
import './Icons.css';
const useSearch = () => {
  const target = useRef();
  const clickTarget = () => target.current.click();
  return { target, clickTarget };
};
const Icons = () => {
  const { target, clickTarget } = useSearch();
  return (
    <div className="nav-icons">
      <span className="nav-icon book-icon">📚</span>
      <span className="nav-icon movie-icon">🎥</span>
      <span className="nav-icon calendar-icon">🗓</span>
      <span>
        <input type="file" id="file-browser" ref={target} />
        <input
          type="button"
          value="🔍"
          className="nav-icon search-icon"
          onClick={clickTarget}
        />
      </span>
    </div>
  );
};

export default Icons;
