import React from 'react'
import BookCard from '../components/BookCard'

const BookSection = ({ heading, books }) => {
  return (
    <div className='book-section'>
      <div className='book-sec-title'>
        <h3 className='row-header'>{heading}</h3>
      </div>
      <div className='book-sec-row'>
        <div className='container'>
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookSection
