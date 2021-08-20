import React, { useRef, useContext, useEffect, useState } from 'react';
import { ContentsContext } from '../body/Spaces';
import './Search.css';

// 내컴퓨터 클릭하면 readFile 해서 contents-div child의 첫번째 div 안에 넣어야함.
// contents-div만 가져오면 이 파일 안에서 다 가능
// useEffect 안에 load 함수 넣기?

const showOrHide = (menu) => {
  const checking = () => menu.current.classList.toggle('show');
  return checking;
};

window.onclick = (event) => {
  const searchBtn = document.querySelector('.search-icon');
  const dropDown = document.querySelector('.dropDown_menu');
  if (event.target !== searchBtn) {
    dropDown.classList.remove('show');
  }
};

// function addBook(img_url, img_memo) {
//   const bookDiv = document.querySelector('.book-div');
//   const newDiv = document.createElement('div');
//   const newImg = document.createElement('img');
//   newDiv.appendChild(newImg);
//   newDiv.classList.add('img-div');
//   //   newImg.id = ++id_num;
//   newImg.src = img_url;
//   newImg.classList.add('book-img');
//   //   newImg.addEventListener('click', clickHandler);
//   if (typeof img_memo === 'undefined') img_memo = '';
//   //   obj = {
//   //     id: id_num,
//   //     data: img_url,
//   //     memo: img_memo,
//   //   };
//   // bookList.push(obj);
//   //   saveBook();
//   bookDiv.appendChild(newDiv);
// }

const useBrowser = () => {
  const element = useRef();
  const clickbrowser = () => element.current.click();
  const contents = useContext(ContentsContext); // undefined 안나오게 어캐하누

  const readBookFile = () => {
    const file = element.current.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/') && file !== null)
      window.alert('이미지 파일만 선택해주십시오.');
    else {
      const reader = new FileReader();
      reader.onload = function () {
        addBook(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const addBook = (img_url, img_memo) => {
    const bookDiv = contents.content.current.children[0];
    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');
    newDiv.appendChild(newImg);
    newDiv.classList.add('img-div');
    //   newImg.id = ++id_num;
    newImg.src = img_url;
    newImg.classList.add('book-img');
    //   newImg.addEventListener('click', clickHandler);
    if (typeof img_memo === 'undefined') img_memo = '';
    //   obj = {
    //     id: id_num,
    //     data: img_url,
    //     memo: img_memo,
    //   };
    // bookList.push(obj);
    //   saveBook();
    bookDiv.appendChild(newDiv);
  };

  useEffect(() => {
    element.current.addEventListener('change', readBookFile);
    return () => element.current.removeEventListener('change', readBookFile);
  }, []);
  return { element, clickbrowser };
};

const Search = () => {
  const { element, clickbrowser } = useBrowser();
  const dropDown_menu = useRef();
  const checking = showOrHide(dropDown_menu);
  //   const contents = useContext(ContentsContext); // undefined 안나오게 어캐하누

  // setState에 browser를 넣어서 바뀌면 리렌더링

  return (
    <div className="dropDown">
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
