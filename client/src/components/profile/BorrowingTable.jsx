import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../context/user_context';
import { Loading } from '../';
import { useBookContext } from '../../context/book_context';

const BorrowingTable = () => {
  const ReturnBTN = () => {
    return <button className='return-btn'>Return</button>;
  };

  const { reservations, isLoading, doingEvent, endEvent, getUserReservations } =
    useUserContext();
  const { books } = useBookContext();
  const [reservedList, setReservedList] = useState({});

  //gets books that the user is waiting on so we can display them on the table
  const getReservedBooks = () => {
    let currentBooks = [];
    if (reservations) {
      reservations.forEach((book) => {
        currentBooks.push(
          books.find((bookInList) => bookInList._id === book.bookId)
        );
      });
    }
    return currentBooks;
  };

  useEffect(() => {
    getUserReservations();
  }, []);

  useEffect(() => {
    doingEvent();
    let reservedLists = getReservedBooks();
    setReservedList(reservedLists);
  }, [reservations, books]);

  useEffect(() => {
    if (reservedList) {
      console.log(reservedList);
      endEvent();
    }
  }, [reservedList]);

  if (isLoading) {
    return <Loading />;
  }
  if (!reservations || reservations.length === 0) {
    return (
      <Wrapper>
        <h3>No Books reserved...</h3>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <table cellSpacing='0'>
        <tbody>
          <tr>
            <th>Book Name</th>
            <th>Date Taken out</th>
            <th>Days Borrowed</th>
            <th>Return</th>
          </tr>
          {reservations.map((book, index) => {
            var borrowedDT = new Date(book.dateBorrowed);
            var now = Date.now();
            var nowDT = new Date(now);
            var timeDiff = nowDT.getTime() - borrowedDT.getTime();
            var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            var options = {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            };
            return (
              <tr className='light' key={index}>
                <td>{book.bookTitle}</td>
                <td>{borrowedDT.toLocaleDateString('en', options)}</td>
                <td>{dayDiff}</td>
                <td>{<ReturnBTN />}</td>
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
