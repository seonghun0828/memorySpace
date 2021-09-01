import React, { useContext, useEffect, useState } from 'react';
import { LoadFunctionContext } from '../header/Search';
// import { MemoSpace } from './';
import { Link } from 'react-router-dom';

const deleteImg = () => {
  if (window.confirm('삭제하시겠습니까?')) {
    const targetImg = document.querySelector('.clicked-img');
    const editMenu = document.querySelector('.edit-menu');
    const parent = targetImg.parentNode;
    const data = JSON.parse(localStorage.getItem('book'));
    parent.removeChild(targetImg);
    const bookList = data.filter((a) => a.id !== parseInt(targetImg.id));
    localStorage.setItem('book', JSON.stringify(bookList));
    // const data = JSON.parse(localStorage.getItem('movie'));
    // parent.removeChild(targetImg);
    // movieList = data.filter((a) => a.id !== parseInt(targetImg.id));
    // saveMovie();
    editMenu.classList.add('invisible');
  }
};

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
