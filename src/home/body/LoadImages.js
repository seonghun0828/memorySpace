import React, { useContext } from 'react';
import { LoadFunctionContext } from '../header/Search';

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  const addBook = loadFunction.addBook;
  const addMovie = loadFunction.addMovie;

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
  };
  console.log('load');
  return { loadImg };
};

export const LoadImages = () => {
  console.log('dd');
  const { loadImg } = useLoad();
  loadImg();
  return <></>;
};
