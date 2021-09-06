import React, { createContext, useEffect } from 'react';
// import { LoadFunctionContext } from '../header/Search';
// import MemoSpace from './MemoSpace';
import { Link } from 'react-router-dom';
import { DeleteImage } from './DeleteImage';
import { Functions } from './Functions';
import MemoSpace from './MemoSpace';

const useLoad = () => {
  // const loadFunction = useContext(LoadFunctionContext);
  // const [memo, setMemo] = useState('');
  useEffect(() => {
    // loadFunction.loadImg();
    Functions().loadImg();
  }, []);
  // return { memo, setMemo, loadFunction };
  return;
};

const deleteImg = () => {
  if (DeleteImage()) {
    Functions().loadImg();
  }
};

export const ClickedImageContext = createContext();

const MovieSpace = () => {
  // const { memo, setMemo, loadFunction } = useLoad();
  useLoad();
  const clickedImg = document.querySelector('.clicked-img');
  let img_id = -1;
  if (clickedImg !== null) img_id = clickedImg.id;
  return (
    <div className="movie-div">
      <span className="edit-menu invisible">
        <Link
          to={{
            pathname: './memo',
            state: {
              category: 'movie',
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

export default MovieSpace;
