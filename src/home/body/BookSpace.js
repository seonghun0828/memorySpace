import React, { useContext, useEffect } from 'react';
import { LoadFunctionContext } from '../header/Search';

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  useEffect(() => {
    loadFunction.loadImg();
  }, []);
  return loadFunction;
};

const BookSpace = () => {
  const { loadFunction } = useLoad();
  return <div className="book-div">book</div>;
};

export default BookSpace;
