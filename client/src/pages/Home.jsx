import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BookSection from '../components/BookSection'
import axios from 'axios'

const Home = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/books').then((response) => {
      setBooks(response.data.books)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <BookSection heading={'Trending'} books={books} />
      <BookSection heading={'Top 10'} books={books} />
    </>
  )
}

export default Home
