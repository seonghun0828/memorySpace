import React, { useEffect } from 'react';
// import { LoadFunctionContext } from '../header/Search';
import { Link } from 'react-router-dom';
import { DeleteImage } from './DeleteImage';
import { Functions } from './Functions';

const deleteImg = () => {
  if (DeleteImage()) {
    Functions().loadImg();
  }
};

const MovieSpace = () => {
  useEffect(() => {
    Functions().loadImg();
  }, []);

  return (
    <div className="movie-space">
      <span className="edit-menu invisible">
        <Link
          to={{
            pathname: './memo',
            state: {
              category: 'movie',
            },
          }}
        >
          <span className="memo-btn">✏️</span>
        </Link>
        <span className="delete-btn" onClick={deleteImg}>
          🗑
        </span>
      </span>
    </div>
  );
};

export default MovieSpace;
