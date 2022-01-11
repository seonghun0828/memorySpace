import React, { useRef, useEffect } from 'react';
import { Functions } from '../body/Functions';
import './Navigation';

window.onclick = (event) => {
  const targetImg = document.querySelector('.clicked-img');
  const editMenu = document.querySelector('.edit-menu');
  if (!editMenu) return;
  const editMenuArr = [editMenu, editMenu.children[0], editMenu.children[1]];
  const isClickEditMenu = editMenuArr.some((ele) => ele === event.target);
  if (!targetImg || isClickEditMenu) return; // target이 editMenu일 때는 함수 종료
  if (event.target !== targetImg) {
    editMenu.classList.add('invisible');
    targetImg.classList.remove('clicked-img');
  }
};

const useBrowser = () => {
  const element = useRef();
  const clickbrowser = () => element.current.click();
  const readFile = () => {
    console.log('실행');
    const contents = document.querySelector('.content-space');
    if (!contents) return;
    const content = contents.children[0]; // book-space or movie-space
    const file = element.current.files[0];
    if (!file) return;
    console.log(content, file);
    if (!file.type.startsWith('image/') && file !== null)
      window.alert('이미지 파일만 선택해주십시오.');
    else {
      const reader = new FileReader();
      reader.onload = function () {
        if (content.classList.contains('book-space')) {
          let bookList = JSON.parse(localStorage.getItem('book'));
          if (!bookList) bookList = [];
          Functions().addBook(reader.result, bookList, '');
        }
        if (content.classList.contains('movie-space')) {
          let movieList = JSON.parse(localStorage.getItem('movie'));
          if (!movieList) movieList = [];
          Functions().addMovie(reader.result, movieList, '');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const { current } = element;
    current.addEventListener('change', readFile);
    return () => current.removeEventListener('change', readFile);
  }, []);
  return { element, clickbrowser };
};

const Search = () => {
  const { element, clickbrowser } = useBrowser();
  return (
    <div className="file-browser">
      <input type="file" id="browser" ref={element} />
      <button className="nav-icon browser-icon" onClick={clickbrowser}>
        📂
      </button>
    </div>
  );
};

export default Search;
