import React, { useEffect } from 'react';
import { Functions } from './Functions';
import './MemoSpace.css';

const removeAlarm = (memoNav) => {
  memoNav.removeChild(memoNav.lastChild);
};
const addAlarm = () => {
  const memoNav = document.querySelector('.memo-nav');
  // deleteBtn, space, saveBtn, space => 4개
  if (memoNav.childNodes.length !== 4) return;
  const alarm = document.createElement('span');
  alarm.classList.add('savingMemoAlarm');
  alarm.innerText = '저장되었습니다';
  memoNav.appendChild(alarm);
  setTimeout(() => removeAlarm(memoNav), 2000);
};

const saveMemo = (category, id) => {
  const contents = document.querySelector('.contents-div');
  const memoSpace = document.querySelector('.memo-space').children[0];
  if (!contents) return;
  if (category === 'book') {
    const book_data = JSON.parse(localStorage.getItem('book'));
    const index = Object.keys(book_data).find(
      (key) => book_data[key].id === parseInt(id)
    );
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
  addAlarm();
};

const readMemo = (category, id) => {
  const memoSpace = document.querySelector('.memo-space');
  const textArea = memoSpace.children[0];
  const data = JSON.parse(localStorage.getItem(category));
  const index = Object.keys(data).find((key) => data[key].id === parseInt(id));
  textArea.value = data[index].memo;
};

const MemoSpace = (props) => {
  const prop_state = props.location.state;
  const category = prop_state.category;
  useEffect(() => {
    const id = document.querySelector('.contents-div').clicked_id;
    const saveBtn = document.querySelector('.save-btn');
    readMemo(category, id);
    saveBtn.addEventListener('click', () => saveMemo(category, id));
    return saveBtn.removeEventListener('click', () => saveMemo(category, id));
  });
  return (
    <div className="memo-div">
      <div className="memo-nav">
        <span className="close-btn" onClick={props.history.goBack}>
          ☒
        </span>
        &nbsp;&nbsp;
        <span className="save-btn">☑︎</span>
        &nbsp;&nbsp;
      </div>
      <div className="memo-space">
        <textarea spellCheck="false"></textarea>
      </div>
    </div>
  );
};

export default MemoSpace;
