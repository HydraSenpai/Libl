import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext } from '../../context/user_context';
import { useBookContext } from '../../context/book_context';
import { Loading } from '../';

const ReservedTable = () => {
  const LinkBtn = ({ id }) => {
    return (
      <Link to={`/book/${id}`}>
        <button className='return-btn'>Click</button>
      </Link>
    );
  };

  const { reservations, isLoading, doingEvent, endEvent, getUserReservations } =
    useUserContext();
  const { books } = useBookContext();
  const [reservedList, setReservedList] = useState({});

  //gets books that the user is waiting on so we can display them on the table
  const getReservedBooks = () => {
    let currentBooks = [];
    reservations.map((book) => {
      currentBooks.push(
        books.find((bookInList) => bookInList._id === book.bookId)
      );
    });
    return currentBooks;
  };

  useEffect(() => {
    doingEvent();
    getUserReservations();
    let reservedLists = getReservedBooks();
    setReservedList(reservedLists);
  }, []);

  useEffect(() => {
    if (reservedList) {
      console.log(reservedList);
      endEvent();
    }
  }, [reservedList]);

  if (isLoading) {
    return <Loading />;
  } else if (
    !reservations ||
    reservations.length === 0 ||
    !reservedList ||
    reservedList.length === 0 ||
    !Array.isArray(reservedList)
  ) {
    return (
      <Wrapper>
        <h3>No Books in waiting List...</h3>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <table cellSpacing='0'>
          <tbody>
            <tr>
              <th>Book Name</th>
              {/* <th>Availability</th> */}
              <th>Book Link</th>
            </tr>
            {reservedList.map((bookInList) => {
              return (
                <tr className='light'>
                  <td>{bookInList.bookTitle}</td>
                  {/* <td>{bookInList.status}</td> */}
                  <td>{<LinkBtn id={bookInList._id} />}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    );
  }
};

export default ReservedTable;

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
