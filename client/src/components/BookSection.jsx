import React from 'react'
import BookCard from '../components/BookCard'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const BookSection = ({ heading, books }) => {
  return (
    <div className='book-section'>
      <div className='book-sec-title'>
        <h3 className='row-header'>{heading}</h3>
      </div>

      <div className='books-container'>
        <Splide
          options={{
            perPage: 5,
            arrows: false,
            pagination: false,
            drag: 'free',
            autoWidth: true,
            gap: '2rem',
          }}
        >
          {books.map((book) => (
            <SplideSlide>
              <BookCard key={book._id} book={book} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default BookSection
