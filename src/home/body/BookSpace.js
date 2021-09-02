import React, { useContext, useEffect, useState } from 'react';
import { LoadFunctionContext } from '../header/Search';
// import { MemoSpace } from './';
import { Link } from 'react-router-dom';
import { DeleteImage } from './DeleteImage';
import { LoadImages } from './LoadImages';

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  const [memo, setMemo] = useState('');

  // const [num, setNum] = useState(-1);

  useEffect(() => {
    loadFunction.loadImg();
  }, [loadFunction]);
  // return { memo, setMemo, loadFunction };
  return { loadFunction };
};

const deleteImg = () => {
  DeleteImage();
  <LoadImages />;
};

const BookSpace = () => {
  const { loadFunction } = useLoad();
  // useLoad();

  return (
    <div className="book-div">
      <span className="edit-menu invisible">
        <Link
          to={{
            pathname: './memo',
            state: {
              category: 'book',
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

export default BookSpace;
