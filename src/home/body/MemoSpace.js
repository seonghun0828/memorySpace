import React, { useState, useContext } from 'react';
import { LoadFunctionContext } from '../header/Search';
import './MemoSpace.css';

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  const [memo, setMemo] = useState('');
  // useEffect(() => {
  //   loadFunction.loadImg();
  // }, []);
  return { memo, setMemo, loadFunction };
};

const MemoSpace = () => {
  const { memo, setMemo, loadFunction } = useLoad();
  return (
    <div className="memo-div invisible">
      <div className="memo-nav">
        <span className="close-btn">☒</span>
        <span className="save-btn" onClick={loadFunction.saveMemo}>
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
  );
};

export default MemoSpace;
