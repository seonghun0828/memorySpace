// import React, { useContext, useEffect, useState } from 'react';
// import { LoadFunctionContext } from '../header/Search';
// import { LoadImages } from './LoadImages';

const deleteImg = () => {
  if (window.confirm('삭제하시겠습니까?')) {
    const targetImg = document.querySelector('.clicked-img');
    const editMenu = document.querySelector('.edit-menu');
    const parent = targetImg.parentNode.parentNode;
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.lastChild);
    }
    if (parent.classList.contains('book-div')) {
      const data = JSON.parse(localStorage.getItem('book'));
      const bookList = data.filter((a) => a.id !== parseInt(targetImg.id));
      localStorage.setItem('book', JSON.stringify(bookList));
    }
    if (parent.classList.contains('movie-div')) {
      const data = JSON.parse(localStorage.getItem('movie'));
      const movieList = data.filter((a) => a.id !== parseInt(targetImg.id));
      localStorage.setItem('movie', JSON.stringify(movieList));
    }
    // const data = JSON.parse(localStorage.getItem('movie'));
    // parent.removeChild(targetImg);
    // movieList = data.filter((a) => a.id !== parseInt(targetImg.id));
    // saveMovie();
    editMenu.classList.add('invisible');
    parent.appendChild(editMenu);
    return true;
  } else return false;
};

// const useLoad = () => {
//   const loadFunction = useContext(LoadFunctionContext);

//   useEffect(() => {
//     loadFunction.loadImg();
//   }, [loadFunction]);
//   return { loadFunction };
// };

export const DeleteImage = () => {
  //   const { loadFunction } = useLoad();
  // return deleteImg();
  return deleteImg();
};
