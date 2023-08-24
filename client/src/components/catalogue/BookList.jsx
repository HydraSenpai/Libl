import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import { BookPreview } from './';
import styled from 'styled-components';

const BookList = () => {
  const { filteredBooks: books } = useFilterContext();

  if (books.length < 1) {
    return <h5>Sorry, no books matched this search...</h5>;
  }
  return (
    <Wrapper>
      {books.map((book, index) => {
        return <BookPreview book={book} key={index} />;
      })}
    </Wrapper>
  );
};

export default BookList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
