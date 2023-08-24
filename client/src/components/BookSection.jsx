import React from 'react'
import styled from 'styled-components'
import BookCard from '../components/BookCard'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const BookSection = ({ heading, books }) => {
  return (
    <Wrapper>
      <div className='book-section'>
        <div className='book-sec-title'>
          {heading ? (
            <h3 className='row-header'>
              <i>{heading}</i>
            </h3>
          ) : (
            <></>
          )}
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
              <SplideSlide key={book._id}>
                <BookCard key={book._id} book={book} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .book-section {
    margin-bottom: 3rem;
  }

  .row-header {
    width: 15%;
    border-bottom: 0.2rem solid lightgray;
    color: #e6af71;
  }
`

export default BookSection
