let bookList = [];
let movieList = [];
let id_num = 0;

const clickHandler = (event) => {
  const editMenu = document.querySelector('.edit-menu');
  if (!editMenu) return;
  // 이미 어느 img가 클릭 되어 edit menu가 보이는 상태면 함수 종료
  if (!editMenu.classList.contains('invisible')) return;
  event.target.parentNode.appendChild(editMenu);
  event.target.classList.toggle('clicked-img');
  editMenu.classList.toggle('invisible');
};

const addMovie = (img_url, img_memo, list, id) => {
  if (list !== undefined) {
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
  if (list !== undefined) {
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
};

const funcs = {
  loadImg,
};

export const Functions = () => {
  return funcs;
};
