import React, { useContext, useEffect, useState } from 'react';
import { LoadFunctionContext } from '../header/Search';
// import { MemoSpace } from './';
import { Link } from 'react-router-dom';
import { DeleteImage } from './DeleteImage';
import { Functions } from './Functions';

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  // const [memo, setMemo] = useState('');
  // const [num, setNum] = useState(-1);

  const deleteImg = () => {
    if (DeleteImage()) {
      Functions().loadImg();
    }
  };
  useEffect(() => {
    loadFunction.loadImg();
  }, [loadFunction]);
  // return { memo, setMemo, loadFunction };
  return { loadFunction, deleteImg };
};

const BookSpace = () => {
  const { loadFunction, deleteImg } = useLoad();
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
