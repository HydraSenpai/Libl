import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BookPreview = ({ book }) => {
  const {
    _id,
    book_title: title,
    authors,
    book_description: desc,
    book_release_date: date,
    audience,
    genre,
    language,
    cover,
  } = book;

  return (
    <Wrapper>
      <img src={cover} alt='book cover' className='img' />
      <div className='info'>
        <h5>{title}</h5>
        <p className='author'>
          {authors.author.first_name} {authors.author.second_name}
        </p>
        <p>Genre: {genre}</p>
        <p>Language: {language}</p>
        <p>Audience: {audience}</p>
      </div>
      <Link to={`/book/${_id}`} className='details-btn btn'>
        More Details
      </Link>
    </Wrapper>
  );
};

export default BookPreview;

const Wrapper = styled.article`
  height: 200px;
  width: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px var(--primary-main);
  display: flex;
  padding: 0.75em 0.75em;
  gap: 1em;
  position: relative;
  .img {
    object-fit: contain;
    max-width: 30%;
  }
  .info {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0em;
  }
  p {
    margin-bottom: 0;
    text-transform: capitalize;
  }
  .author {
    margin-bottom: 0.5em;
  }
  .details-btn {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 1em;
  }
`;
