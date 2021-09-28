import React from 'react';
import { Route } from 'react-router-dom';
import { Home, BookSpace, MovieSpace, CalendarSpace, MemoSpace } from './';
import './Spaces.css';

const Spaces = () => {
  return (
    <div className="contents-div">
      <Route exact path="/" component={Home}></Route>
      <Route path="/book" component={BookSpace}></Route>
      <Route path="/movie" component={MovieSpace}></Route>
      <Route path="/calendar" component={CalendarSpace}></Route>
      <Route path="/memo" component={MemoSpace}></Route>
    </div>
  );
};

export default Spaces;
