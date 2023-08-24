import React from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
  return (
    <Wrapper>
      <Card className='book-card'>
        <Link to={`/book/${book._id}`}>
          <Card.Body className='book-card-body'>
            <Card.Img variant='top' src={book.cover} className='cardImg' />
            <Card.Title as='div' className='book-card-title'>
              <strong>{book.book_title}</strong>
            </Card.Title>
            <Card.Text as='p' className='book-card-para'>
              {book.book_release_date}
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .book-card {
    margin: 0.5rem;
    background-color: white;
    flex-shrink: 0;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 3px 3px #e6af71;
  }

  .book-card-body {
    margin: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .book-card-title {
    text-align: center;
    color: #e6af71;
    margin-bottom: 0.2rem;
  }

  .book-card-para {
    color: lightgray;
    font-weight: 200;
  }

  .cardImg {
    width: 150px;
    height: 100%;
    padding: 0.5rem;
  }
`

export default BookCard
