import React from 'react'
import styled from 'styled-components'

const BorrowingTable = ({ user, books }) => {
  const ReturnBTN = () => {
    return <button className='return-btn'>Return</button>
  }

  let borrowedBooks = []

  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < user.booksBorrowed.length; j++) {
      if (books[i]._id === user.booksBorrowed[j].bookId) {
        borrowedBooks.push({
          ...books[i],
          dateBorrowed: user.booksBorrowed[j].dateNow,
        })
      }
    }
  }

  if (!borrowedBooks || borrowedBooks.length === 0) {
    return (
      <Wrapper>
        <h3>No Books reserved...</h3>
      </Wrapper>
    )
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
          {borrowedBooks.map((book, index) => {
            var borrowedDT = new Date(book.dateBorrowed)
            var now = Date.now()
            var nowDT = new Date(now)
            var timeDiff = nowDT.getTime() - borrowedDT.getTime()
            var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
            var options = {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }

            return (
              <tr className='light' key={index}>
                <td>{book.bookTitle}</td>
                <td>{borrowedDT.toLocaleDateString('en', options)}</td>
                <td>{dayDiff}</td>
                <td>{<ReturnBTN />}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}

export default BorrowingTable

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
`
