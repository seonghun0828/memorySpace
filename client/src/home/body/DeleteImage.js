const deleteImg = () => {
  if (window.confirm('삭제하시겠습니까?')) {
    const targetImg = document.querySelector('.clicked-img');
    const editMenu = document.querySelector('.edit-menu');
    const parent = targetImg.parentNode.parentNode;
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.lastChild);
    }
    if (parent.classList.contains('book-space')) {
      const data = JSON.parse(localStorage.getItem('book'));
      const bookList = data.filter((a) => a.id !== parseInt(targetImg.id));
      localStorage.setItem('book', JSON.stringify(bookList));
    }
    if (parent.classList.contains('movie-space')) {
      const data = JSON.parse(localStorage.getItem('movie'));
      const movieList = data.filter((a) => a.id !== parseInt(targetImg.id));
      localStorage.setItem('movie', JSON.stringify(movieList));
    }
    editMenu.classList.add('invisible');
    parent.appendChild(editMenu);
    return true;
  } else return false;
};

export const DeleteImage = () => {
  return deleteImg();
};
