import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
  return (
    <Card className='book-card'>
      <Link to={`/book/${book._id}`}>
        <Card.Body className='book-card-body'>
          <Card.Img variant='top' src={book.cover} style={styles.cardImg} />
          <Card.Title as='div' className='book-card-title'>
            <strong>{book.book_title}</strong>
          </Card.Title>
          <Card.Text as='p' className='book-card-para'>
            {book.book_release_date}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

const styles = {
  cardImg: {
    width: '150px',
    height: '100%',
    padding: '0.5rem',
  },
}

export default BookCard
