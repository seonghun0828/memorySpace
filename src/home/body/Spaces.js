import React, { useRef, createContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Home, BookSpace, MovieSpace, CalendarSpace, MemoSpace } from './';
import './Spaces.css';

const contents = {};

const useTake = () => {
  const target = useRef(); // 얘 undefined 안나오게 어캐하누

  const [state, setState] = useState(contents);

  useEffect(() => {
    contents.content = target;
    // setState(contents);
    // console.log(contents);
  }, []);
  return { target, state, setState };
};

export const ContentsContext = createContext(contents);

const Spaces = () => {
  const { target } = useTake();
  // console.log('tar', target);
  return (
    <ContentsContext.Provider value={contents}>
      <div className="contents-div" ref={target}>
        <Route exact path="/" component={Home}></Route>
        <Route path="/book" component={BookSpace}></Route>
        <Route path="/movie" component={MovieSpace}></Route>
        <Route path="/calendar" component={CalendarSpace}></Route>
        <MemoSpace></MemoSpace>
        <span className="edit-menu invisible">
          <span className="memo-btn">✏️</span>
          <span className="delete-btn">🗑</span>
        </span>
      </div>
    </ContentsContext.Provider>
  );
};

export default Spaces;
