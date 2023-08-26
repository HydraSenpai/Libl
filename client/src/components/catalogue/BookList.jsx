import React, { useEffect, useState } from 'react';
import { useFilterContext } from '../../context/filter_context';
import { BookPreview } from './';
import styled from 'styled-components';

const BookList = () => {
  const { filteredBooks: books } = useFilterContext();
  const [bookShowing, setBookShowing] = useState(
    books.length >= 5 ? 5 : books.length
  );

  const handleClick = () => {
    let tempAmount = bookShowing + 5;
    if (tempAmount > books.length) {
      setBookShowing(books.length);
    } else {
      setBookShowing(tempAmount);
    }
  };

  useEffect(() => {
    let tempLength = books.length >= 5 ? 5 : books.length;
    setBookShowing(tempLength);
  }, [books]);

  if (books.length < 1) {
    return <h5>Sorry, no books matched this search...</h5>;
  }
  return (
    <Wrapper>
      {books.slice(0, bookShowing).map((book, index) => {
        return <BookPreview book={book} key={index} />;
      })}
      {bookShowing < books.length ? (
        <button type='button' className='btn load-btn' onClick={handleClick}>
          Load More
        </button>
      ) : (
        <h4 className='sign'>No more books to load..</h4>
      )}
    </Wrapper>
  );
};

export default BookList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  .load-btn {
    align-self: center;
    width: 50%;
  }
  .sign {
    margin-top: 1em;
    align-self: center;
  }
`;
