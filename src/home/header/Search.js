import React, { useRef } from 'react';
import './Search.css';

const useBrowser = () => {
  const browser = useRef();
  const clickbrowser = () => browser.current.click();
  return { browser, clickbrowser };
};

const showOrHide = (menu) => {
  const verify = () => {
    if (!menu.current.classList.contains('show'))
      menu.current.classList.add('show');
    else menu.current.classList.remove('show');
  };
  return verify;
};

const Search = () => {
  const { browser, clickbrowser } = useBrowser();
  const dropDown_menu = useRef();
  const verify = showOrHide(dropDown_menu);
  return (
    <div className="dropDown">
      <input type="file" id="file-browser" ref={browser} />
      <button className="nav-icon search-icon" onClick={verify}>
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
