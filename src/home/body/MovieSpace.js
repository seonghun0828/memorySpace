import React, { useContext, useEffect } from 'react';
import { LoadFunctionContext } from '../header/Search';

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  useEffect(() => {
    loadFunction.loadImg();
  }, []);
  // return loadFunction;
};

const MovieSpace = () => {
  useLoad();
  // const { loadFunction } = useLoad();
  return (
    <div className="movie-div">
      <span className="edit-menu invisible">
        <span className="memo-btn">✏️</span>
        <span className="delete-btn">🗑</span>
      </span>
      <div className="memo-div invisible">
        <div className="memo-nav">
          <span className="close-btn">☒</span>
          <span className="save-btn">☑︎</span>
        </div>
        <div className="memo-space">
          <textarea spellCheck="false"></textarea>
        </div>
      </div>
    </div>
  );
};

export default MovieSpace;
