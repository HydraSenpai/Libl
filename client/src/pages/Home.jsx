import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import BookSection from '../components/BookSection'
import axios from 'axios'

const Home = () => {
  const [trendingBooks, setTrendingBooks] = useState([])
  const [top10Books, setTop10Books] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/books').then((response) => {
      setTrendingBooks(response.data.books)
      setTop10Books(response.data.books)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <BookSection heading={'Trending'} books={trendingBooks} />
      <BookSection heading={'Top 10'} books={top10Books} />
      <Footer />
    </>
  )
}

export default Home
