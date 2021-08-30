import React, { useState, useContext, useEffect } from 'react';
import { LoadFunctionContext } from '../header/Search';
// import MemoSpace from './MemoSpace';
import { Link } from 'react-router-dom';

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  const [memo, setMemo] = useState('');
  useEffect(() => {
    loadFunction.loadImg();
  }, [loadFunction]);
  return { memo, setMemo, loadFunction };
};

const MovieSpace = () => {
  // const { memo, setMemo, loadFunction } = useLoad();
  useLoad();
  const clickedImg = document.querySelector('.clicked-img');
  let img_id;
  if (clickedImg !== undefined && clickedImg !== null) img_id = clickedImg.id;
  return (
    <div className="movie-div">
      <span className="edit-menu invisible">
        <Link
          to={{
            pathname: './memo',
            state: {
              category: 'movie',
              img_id,
            },
          }}
        >
          <span className="memo-btn">✏️</span>
        </Link>
        <span className="delete-btn">🗑</span>
      </span>
    </div>
  );
};

export default MovieSpace;
