import React, { useContext, useEffect, useState } from 'react';
import { LoadFunctionContext } from '../header/Search';

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  const [memo, setMemo] = useState('a');
  useEffect(() => {
    loadFunction.loadImg();
  }, []);
  return memo, setMemo, loadFunction.saveMemo;
};

const BookSpace = () => {
  const { memo, setMemo, saveMemo } = useLoad();
  return (
    <div className="book-div">
      <span className="edit-menu invisible">
        <span className="memo-btn">✏️</span>
        <span className="delete-btn">🗑</span>
      </span>
      <div className="memo-div invisible">
        <div className="memo-nav">
          <span className="close-btn">☒</span>
          <span className="save-btn" onClick={saveMemo}>
            ☑︎
          </span>
        </div>
        <div className="memo-space">
          <textarea
            value={memo}
            spellCheck="false"
            onChange={(e) => setMemo(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default BookSpace;
