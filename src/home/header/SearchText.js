import React, { useEffect, useRef } from 'react';
import { Functions } from '../body/Functions';
import axios from 'axios';

const addImg = (img, search) => {
  const book_data = JSON.parse(localStorage.getItem('book'));
  removeBackground();
  Functions().addBook(img, book_data, '');
  search.value = '';
};

const removeBackground = () => {
  const background = document.querySelector('.background');
  if (background) background.parentNode.removeChild(background);
};

const getApi = async (search) => {
  removeBackground();
  const key = '45fe65b5c3fbd3d400ad5daa0f415552';
  const {
    data: { documents },
  } = await axios.get('https://dapi.kakao.com/v3/search/book', {
    params: {
      query: search.value,
      size: 3,
      // query: searchText.value,
    },
    headers: {
      Authorization: 'KakaoAK ' + key,
    },
  });
  const content = document.querySelector('.contents-div').children[0];
  const background = document.createElement('div');
  const blurImg = document.createElement('img');
  background.appendChild(blurImg);
  background.classList.add('background');
  blurImg.classList.add('blurImg');
  content.insertBefore(background, content.firstChild);
  documents.forEach((ele) => {
    const div = document.createElement('div');
    div.classList.add('preview');
    const img = document.createElement('img');
    const text = document.createElement('span');
    div.appendChild(img);
    div.appendChild(text);
    img.src = ele.thumbnail;
    img.addEventListener('click', () => addImg(ele.thumbnail, search));
    text.innerText = ele.title;
    background.appendChild(div);
  });
};

const showSearch = (target) => {
  const { current } = target;
  current.classList.toggle('invisible');
  const dropDown = document.querySelector('.dropDown-menu');
  //   console.log(d);
  current.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getApi(current);
  });
  current.focus();
};
export const SearchText = () => {
  const target = useRef();
  useEffect(() => {
    const searchBook = document.querySelector('.dropDown-book');
    const searchMovie = document.querySelector('.dropDown-movie');
    searchBook.addEventListener('click', () => showSearch(target));
    searchMovie.addEventListener('click', () => showSearch(target));
    return () => {
      searchBook.removeEventListener('click', () => showSearch(target));
      searchMovie.removeEventListener('click', () => showSearch(target));
    };
  });
  return (
    <input type="text" className="searchText invisible" ref={target}></input>
  );
};
