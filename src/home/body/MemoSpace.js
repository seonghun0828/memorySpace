import React, { useState, useContext, useEffect } from 'react';
import { LoadFunctionContext } from '../header/Search';
import './MemoSpace.css';

let category = '';
let img_id = '99999';
const saveMemo = () => {
  if (category === 'book') {
    const book_data = JSON.parse(localStorage.getItem('book'));
  } else {
    const movie_data = JSON.parse(localStorage.getItem('movie'));
  }
  // const targetImg = document.querySelector('.clicked-img');
  // const contents = document.querySelector('.contents-div');
  // const memoSpace = document.querySelector('.memo-space').children[0];
  // if (!targetImg || !contents) return;
  // if (contents.children[0].classList.contains('book-div')) {
  //   const index = Object.keys(book_data).find(
  //     (key) => book_data[key].id === parseInt(targetImg.id)
  //   );
  //   console.log(memoSpace.value);
  //   book_data[index].memo = memoSpace.value;
  //   bookList = book_data;
  //   saveImg('book', bookList);
  // } else {
  //   const index = Object.keys(movie_data).find(
  //     (key) => movie_data[key].id === parseInt(targetImg.id)
  //   );
  //   movie_data[index].memo = memoSpace.value;
  //   movieList = movie_data;
  //   saveImg('movie', movieList);
  // }
  console.log(img_id);
};

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  const [memo, setMemo] = useState('');
  useEffect(() => {
    // save 기능 구현 하고 나서 지워보고 필요 없으면 지우기
    loadFunction.loadImg();
  }, [loadFunction]);
  return { memo, setMemo, loadFunction };
};

const MemoSpace = (props) => {
  const { memo, setMemo, loadFunction } = useLoad();
  const prop_state = props.location.state;
  if (prop_state !== undefined) {
    category = prop_state.category;
    img_id = prop_state.img_id;
  }
  return (
    <div className="memo-div">
      <div className="memo-nav">
        <span className="close-btn" onClick={props.history.goBack}>
          ☒
        </span>
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
  );
};

export default MemoSpace;
