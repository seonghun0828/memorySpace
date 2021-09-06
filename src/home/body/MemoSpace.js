import React, { useState, useEffect } from 'react';
import { Functions } from './Functions';
import './MemoSpace.css';

const saveMemo = (category, id) => {
  const contents = document.querySelector('.contents-div');
  const memoSpace = document.querySelector('.memo-space').children[0];
  if (!contents) return;
  if (category === 'book') {
    const book_data = JSON.parse(localStorage.getItem('book'));
    const index = Object.keys(book_data).find(
      (key) => book_data[key].id === parseInt(id)
    );
    console.log(memoSpace.value);
    book_data[index].memo = memoSpace.value;
    Functions().saveImg(category, book_data);
  } else {
    const movie_data = JSON.parse(localStorage.getItem('movie'));
    const index = Object.keys(movie_data).find(
      (key) => movie_data[key].id === parseInt(id)
    );
    movie_data[index].memo = memoSpace.value;
    Functions().saveImg(category, movie_data);
  }

  if (contents.children[0].classList.contains('book-div')) {
  } else {
  }
};

const useLoad = () => {
  const [memo, setMemo] = useState('');
  return { memo, setMemo };
};

const MemoSpace = (props) => {
  const { memo, setMemo } = useLoad();
  const prop_state = props.location.state;
  const category = prop_state.category;
  let id;
  if (document.querySelector('.contents-div')) {
    id = document.querySelector('.contents-div').clicked_id;
  }
  return (
    <div className="memo-div">
      <div className="memo-nav">
        <span className="close-btn" onClick={props.history.goBack}>
          ☒
        </span>
        <span className="save-btn" onClick={() => saveMemo(category, id)}>
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
