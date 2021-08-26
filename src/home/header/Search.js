import React, { useRef, createContext, useEffect } from 'react';
import './Search.css';

let bookList = [];
let movieList = [];
let id_num = 0;

const showOrHide = (menu) => {
  const checking = () => menu.current.classList.toggle('show');
  return checking;
};

const clickHandler = (event) => {
  const editMenu = document.querySelector('.edit-menu');
  event.target.parentNode.appendChild(editMenu);
  event.target.classList.toggle('clicked-img');
  editMenu.classList.toggle('invisible');
};

const addMovie = (img_url, img_memo, list, id) => {
  if (list !== undefined) {
    console.log(list);
    movieList = list;
  }
  //   if (id !== undefined) id_num = id;
  const contents = document.querySelector('.contents-div');
  if (!contents) return;
  const movieDiv = contents.children[0];
  const newDiv = document.createElement('div');
  const newImg = document.createElement('img');
  newDiv.appendChild(newImg);
  newDiv.classList.add('img-div');
  newImg.id = ++id_num;
  newImg.src = img_url;
  newImg.classList.add('movie-img');
  newImg.addEventListener('click', clickHandler);
  if (typeof img_memo === 'undefined') img_memo = '';
  const obj = {
    id: id_num,
    data: img_url,
    memo: img_memo,
  };
  movieList.push(obj);
  saveImg('movie', movieList);
  movieDiv.appendChild(newDiv);
};

const addBook = (img_url, img_memo, list, id) => {
  //   console.log(list);
  if (list !== undefined) {
    // console.log(list);
    bookList = list;
  }
  //   if (id !== undefined) id_num = id;
  const contents = document.querySelector('.contents-div');
  if (!contents) return;
  const bookDiv = contents.children[0];
  const newDiv = document.createElement('div');
  const newImg = document.createElement('img');
  newDiv.appendChild(newImg);
  newDiv.classList.add('img-div');
  newImg.id = ++id_num;
  newImg.src = img_url;
  newImg.classList.add('book-img');
  newImg.addEventListener('click', clickHandler);
  if (typeof img_memo === 'undefined') img_memo = '';
  const obj = {
    id: id_num,
    data: img_url,
    memo: img_memo,
  };
  bookList.push(obj);
  saveImg('book', bookList);
  bookDiv.appendChild(newDiv);
};
const saveImg = (arg, list) => {
  const category = arg === 'book' ? 'book' : 'movie';
  localStorage.setItem(category, JSON.stringify(list));
};

const loadImg = () => {
  const contents = document.querySelector('.contents-div');
  if (!contents) return;
  const content = contents.children[0]; // book-div or movie-div
  let newId = 0;
  if (content.classList.contains('book-div')) {
    const book_data = JSON.parse(localStorage.getItem('book'));
    let newBookList = [];
    if (book_data !== null) {
      book_data.forEach((a) => {
        addBook(a.data, a.memo, newBookList, newId);
      });
    }
  }
  if (content.classList.contains('movie-div')) {
    const movie_data = JSON.parse(localStorage.getItem('movie'));
    let newMovieList = [];
    if (movie_data !== null) {
      movie_data.forEach((a) => {
        addMovie(a.data, a.memo, newMovieList, newId);
      });
    }
  }
  //   console.log('newlist: ', newBookList); // 왜 빈 리스트가 아니냐?
  //   console.log('newlist: ', newMovieList); // 왜 빈 리스트가 아니냐?
  // memoBtn.addEventListener('click', openMemo);
  // deleteBtn.addEventListener('click', deleteImg);
};

window.onclick = (event) => {
  const searchBtn = document.querySelector('.search-icon');
  const dropDown = document.querySelector('.dropDown_menu');
  const clicked = document.querySelector('.clicked-img');
  const editMenu = document.querySelector('.edit-menu');
  const editMenuArr = [editMenu, editMenu.children[0], editMenu.children[1]];
  const isClickEditMenu = editMenuArr.some((ele) => ele === event.target);
  if (event.target !== searchBtn) dropDown.classList.remove('show');
  if (!clicked || isClickEditMenu) return; // target이 editMenu일 때는 함수 종료
  if (event.target !== clicked) {
    editMenu.classList.add('invisible');
    clicked.classList.remove('clicked-img');
  }
};

const useBrowser = () => {
  const element = useRef();
  const clickbrowser = () => element.current.click();

  const readFile = () => {
    const contents = document.querySelector('.contents-div');
    if (!contents) return;
    const content = contents.children[0]; // book-div or movie-div

    const file = element.current.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/') && file !== null)
      window.alert('이미지 파일만 선택해주십시오.');
    else {
      const reader = new FileReader();
      reader.onload = function () {
        if (content.classList.contains('book-div')) addBook(reader.result);
        if (content.classList.contains('movie-div')) addMovie(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    element.current.addEventListener('change', readFile);
    return () => element.current.removeEventListener('change', readFile);
  }, []);
  return { element, clickbrowser };
};

const loadFunction = {
  loadImg,
};

export const LoadFunctionContext = createContext(loadFunction);

const Search = () => {
  const { element, clickbrowser } = useBrowser();
  const dropDown_menu = useRef();
  const checking = showOrHide(dropDown_menu);

  return (
    <div className="dropDown">
      <LoadFunctionContext.Provider
        value={loadFunction}
      ></LoadFunctionContext.Provider>

      <input type="file" id="file-browser" ref={element} />
      <button className="nav-icon search-icon" onClick={checking}>
        🔍
      </button>
      <div className="dropDown_menu" ref={dropDown_menu}>
        <div className="dropDown_element">네이버북</div>
        <div className="dropDown_element">네이버영화</div>
        <div className="dropDown_element" onClick={clickbrowser}>
          내컴퓨터
        </div>
      </div>
    </div>
  );
};

export default Search;
