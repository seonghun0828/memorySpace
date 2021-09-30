import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { SearchText } from './SearchText';
import './Icons.css';

// const useSearchText = () => {
//   const history = useHistory();
//   console.log(history.location);
//   if (history.location.pathname !== '/') {
//     return <SearchText />;
//   }
// };

const Icons = () => {
  // const showSearchText = useSearchText();
  // console.log(showSearchText);
  return (
    <div className="nav-icons">
      {/* {showSearchText} */}
      <SearchText />
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
