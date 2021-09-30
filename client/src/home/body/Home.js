import React, { useEffect } from 'react';
import './Home.css';
const Home = () => {
  useEffect(() => {
    const searchText = document.querySelector('.searchText');
    const searchIcon = document.querySelector('.searchIcon');
    const fileBrowser = document.querySelector('.fileBrowser');
    const bookIcon = document.querySelector('.book-icon');
    const movieIcon = document.querySelector('.movie-icon');
    const calendarIcon = document.querySelector('.calendar-icon');
    const toggle = () => {
      searchText.classList.toggle('invisible');
      searchIcon.classList.toggle('invisible');
      fileBrowser.classList.toggle('invisible');
    };
    if (!searchText.classList.contains('invisible')) toggle();
    bookIcon.addEventListener('click', toggle);
    movieIcon.addEventListener('click', toggle);
    calendarIcon.addEventListener('click', toggle);
    return () => {
      bookIcon.removeEventListener('click', toggle);
      movieIcon.removeEventListener('click', toggle);
      calendarIcon.removeEventListener('click', toggle);
    };
  });
  return (
    <div className="homeNotice">
      <br />
      <h1>책이나 영화를 사진으로 저장해보세요.</h1>
      <br />
      <h2>검색을 통해 책 표지나 영화 포스터를 검색할 수 있습니다.</h2>
      <h2>내 기기에서 직접 사진을 올릴 수도 있습니다.</h2>
      <h2>기록하고 싶은 내용은 메모도 가능합니다.</h2>
      <br />
      <br />
      <br />
      <h4>별도 로그인은 필요하지 않습니다.</h4>
    </div>
  );
};

export default Home;
