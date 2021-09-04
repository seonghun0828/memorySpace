// import React, { useContext, useEffect, useState } from 'react';
// import { LoadFunctionContext } from '../header/Search';
// import { LoadImages } from './LoadImages';

const deleteImg = () => {
  if (window.confirm('삭제하시겠습니까?')) {
    const targetImg = document.querySelector('.clicked-img');
    const editMenu = document.querySelector('.edit-menu');
    const parent = targetImg.parentNode.parentNode;
    const data = JSON.parse(localStorage.getItem('book'));
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.lastChild);
    }
    // parent.removeChild(targetImg.parentNode);
    const bookList = data.filter((a) => a.id !== parseInt(targetImg.id));
    localStorage.setItem('book', JSON.stringify(bookList));
    // const data = JSON.parse(localStorage.getItem('movie'));
    // parent.removeChild(targetImg);
    // movieList = data.filter((a) => a.id !== parseInt(targetImg.id));
    // saveMovie();
    editMenu.classList.add('invisible');
  }
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
