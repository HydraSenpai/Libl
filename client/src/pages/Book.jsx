import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookSection from '../components/BookSection'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Book = () => {
  const { id: bookId } = useParams()
  const [book, setBook] = useState([])
  const [author, setAuthor] = useState('')

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:4000/api/v1/books/${bookId}`)
        .then((response) => {
          setBook(response.data.book)
          setAuthor(
            response.data.book.authors.author.first_name +
              ' ' +
              response.data.book.authors.author.second_name
          )
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  console.log(book)

  return (
    <>
      <Navbar />
      <div className='bookpage-hero'>
        <div className='bookpage-book-details'>
          <h3>{book.book_title}</h3>
          <p>
            <strong>Author: </strong> {author}
          </p>
          <p>
            <strong>Release Date: </strong>
            {book.book_release_date}
          </p>
        </div>
      </div>
      <div className='bookpage-summary-div'>
        <div className='bookpage-summary-header'>
          <h4>Summary</h4>
          <p>{book.book_description}</p>
        </div>
        <div className='bookpage-summary-details'>
          <h4>Details</h4>
          <ul className='bookpage-details-list'>
            <li></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Book
