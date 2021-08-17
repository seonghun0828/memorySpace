import React from 'react';
import { Route } from 'react-router-dom';
import { Home, BookSpace, MovieSpace, CalendarSpace, MemoSpace } from './';

const Spaces = () => {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route path="/book" component={BookSpace}></Route>
      <Route path="/movie" component={MovieSpace}></Route>
      <Route path="/calendar" component={CalendarSpace}></Route>
      <MemoSpace></MemoSpace>
    </>
  );
};

export default Spaces;
