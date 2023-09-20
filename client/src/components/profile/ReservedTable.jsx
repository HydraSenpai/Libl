import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext } from '../../context/user_context';
import { useBookContext } from '../../context/book_context';

const BorrowingTable = () => {
  const LinkBtn = ({ id }) => {
    return (
      <Link to={`http://localhost:3000/book/${id}`}>
        <button className='return-btn'>Click</button>
      </Link>
    );
  };

  const { reservations } = useUserContext();
  const { books } = useBookContext();

  if (!reservations || reservations.length === 0) {
    return (
      <Wrapper>
        <h3>No Books in waiting List...</h3>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <table cellSpacing='0'>
        <tbody>
          <tr>
            <th>Book Name</th>
            <th>Availability</th>
            <th>Book Link</th>
          </tr>
          {reservations.map((book, index) => {
            let currentBook = books.find(
              (bookInList) => (bookInList._id = book.bookId)
            );
            return (
              <tr className='light' key={index}>
                <td>{currentBook.bookTitle}</td>
                <td>{currentBook.status}</td>
                <td>{<LinkBtn id={currentBook.bookId} />}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default BorrowingTable;

const Wrapper = styled.div`
  table {
    margin: 0;
    padding: 0;
    border-radius: var(--borderRadius);
  }
  th {
    font-weight: 600;
    font-size: 1.5em;
    padding: 0.3em 1em;
    text-align: center;
    background-color: var(--grey-200);
    transition: var(--transition);
  }
  td {
    font-size: 1.3em;
    padding: 0em 1em;
    text-align: center;
    transition: var(--transition);
  }
  .light {
    //background-color: var(--grey-50);
    transition: var(--transition);
  }
  .light:hover {
    background-color: var(--grey-100);
  }
  .return-btn {
    border: none;
    background-color: var(--primary-main);
    font-size: 0.75em;
    padding: 0.5em 0.75em;
    border-radius: 10px;
    transition: all 250ms;
  }
  .return-btn:hover {
    background-color: var(--hover-main);
  }
`;
