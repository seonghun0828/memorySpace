import React, { useContext, useEffect } from 'react';
import { LoadFunctionContext } from '../header/Search';

const useLoad = () => {
  const loadFunction = useContext(LoadFunctionContext);
  useEffect(() => {
    loadFunction.loadImg();
  }, []);
  return loadFunction;
};

const MovieSpace = () => {
  const { loadFunction } = useLoad();
  return <div className="movie-div"></div>;
};

export default MovieSpace;
