import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
  return (
    <Card className='book-card'>
      <Link to={`/book/:id/${book._id}`}>
        <Card.Body className='book-card-body'>
          <Card.Title as='div' className='book-title'>
            <strong>{book.book_title}</strong>
          </Card.Title>
          <Card.Text as='p'>{book.book_release_date}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default BookCard