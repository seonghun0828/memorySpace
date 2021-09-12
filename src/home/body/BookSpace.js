import React, { useEffect } from 'react';
// import { LoadFunctionContext } from '../header/Search';
import { Link } from 'react-router-dom';
import { DeleteImage } from './DeleteImage';
import { Functions } from './Functions';
// import axios from 'axios';

// const getApi = async () => {
//   const searchText = document.querySelector('.searchText');
//   const key = '45fe65b5c3fbd3d400ad5daa0f415552';
//   const {
//     data: { documents },
//   } = await axios.get('https://dapi.kakao.com/v3/search/book', {
//     params: {
//       query: '경제',
//       // query: searchText.value,
//     },
//     headers: {
//       Authorization: 'KakaoAK ' + key,
//     },
//   });
//   // console.log(documents);
//   const book_data = JSON.parse(localStorage.getItem('book'));
//   // Functions().addBook(documents[0].thumbnail, book_data, '');
// };

const deleteImg = () => {
  if (DeleteImage()) {
    Functions().loadImg();
  }
};

const BookSpace = () => {
  useEffect(() => {
    Functions().loadImg();
    // const nBook = document.querySelector('.dropDown-book');
    // nBook.addEventListener('click', getApi);
    // return () => nBook.removeEventListener('click', getApi);
  }, []);

  return (
    <div className="book-div">
      <span className="edit-menu invisible">
        <Link
          to={{
            pathname: './memo',
            state: {
              category: 'book',
            },
          }}
        >
          <span className="memo-btn">✏️</span>
        </Link>
        <span className="delete-btn" onClick={deleteImg}>
          🗑
        </span>
      </span>
    </div>
  );
};

export default BookSpace;
