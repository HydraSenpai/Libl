import React from 'react';
import styled from 'styled-components';

const Table = () => {
  const bookDetails = [
    {
      name: 'random',
      date: '10/06/2002',
      daysBorrowed: 50,
      returnBtn: 'return',
    },
    {
      name: 'random 2',
      date: '4/06/2002',
      daysBorrowed: 2,
      returnBtn: 'return',
    },
  ];
  if (!bookDetails || bookDetails.length === 0) {
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
          {bookDetails.map((details, index) => {
            const { name, date, daysBorrowed, returnBtn } = details;
            return (
              <tr className='light' key={index}>
                <td>{name}</td>
                <td>{date}</td>
                <td>{daysBorrowed}</td>
                <td>{returnBtn}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;

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
`;
