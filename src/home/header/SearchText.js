import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const getApi = async (text) => {
  const key = '45fe65b5c3fbd3d400ad5daa0f415552';
  const {
    data: { documents },
  } = await axios.get('https://dapi.kakao.com/v3/search/book', {
    params: {
      query: text,
      // query: searchText.value,
    },
    headers: {
      Authorization: 'KakaoAK ' + key,
    },
  });
  console.log(documents);
  const content = document.querySelector('.contents-div').children[0];
  const background = document.createElement('img');
  background.classList.add('blurred');
  content.insertBefore(background, content.firstChild);
  // const book_data = JSON.parse(localStorage.getItem('book'));
  // Functions().addBook(documents[0].thumbnail, book_data, '');
};

const showSearch = (target) => {
  const { current } = target;
  current.classList.toggle('invisible');
  const dropDown = document.querySelector('.dropDown-menu');
  //   console.log(d);
  current.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getApi(current.value);
  });
  current.value = '';
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
