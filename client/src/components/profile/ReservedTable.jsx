import React from 'react';
import styled from 'styled-components';

const BorrowingTable = () => {
  const ReturnBTN = () => {
    return <button className='return-btn'>Return</button>;
  };

  const bookDetails = [
    {
      name: 'random',
      date: '10/06/2002',
      availability: 'available',
    },
    {
      name: 'random 2',
      date: '4/06/2002',
      availability: 'onloan',
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
            <th>Date Reserved</th>
            <th>Availability</th>
          </tr>
          {bookDetails.map((details, index) => {
            const { name, date, availability } = details;
            return (
              <tr className='light' key={index}>
                <td>{name}</td>
                <td>{date}</td>
                <td>{availability}</td>
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
