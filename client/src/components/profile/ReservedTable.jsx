import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BorrowingTable = ({ user, books }) => {
  const LinkBtn = ({ id }) => {
    return (
      <Link to={`http://localhost:3000/book/${id}`}>
        <button className='return-btn'>Click</button>
      </Link>
    );
  };

  let waitingList = [];

  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < user.waitingList.length; j++) {
      if (books[i]._id === user.waitingList[j]) {
        waitingList.push(books[i]);
      }
    }
  }

  console.log(waitingList);

  if (!waitingList || waitingList.length === 0) {
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
          {waitingList.map((book, index) => {
            return (
              <tr className='light' key={index}>
                <td>{book.bookTitle}</td>
                <td>{book.availability}</td>
                <td>{<LinkBtn id={book._id} />}</td>
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
