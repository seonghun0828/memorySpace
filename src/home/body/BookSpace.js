import React, { useContext, useEffect, useState } from 'react';
import { LoadFunctionContext } from '../header/Search';
import { Link } from 'react-router-dom';

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  const [memo, setMemo] = useState('');
  useEffect(() => {
    loadFunction.loadImg();
  }, []);
  return { memo, setMemo, loadFunction };
};

const BookSpace = () => {
  // const { memo, setMemo, loadFunction } = useLoad();
  useLoad();
  return (
    <div className="book-div">
      <span className="edit-menu invisible">
        <Link to="./memo">
          <span className="memo-btn">✏️</span>
        </Link>
        <span className="delete-btn">🗑</span>
      </span>
    </div>
  );
};

export default BookSpace;
