import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeleteImage } from './DeleteImage';
import { Functions } from './Functions';

const deleteImg = () => {
  if (DeleteImage()) {
    Functions().loadImg();
  }
};

const BookSpace = () => {
  useEffect(() => {
    Functions().loadImg();
  }, []);

  return (
    <div className="book-space">
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
