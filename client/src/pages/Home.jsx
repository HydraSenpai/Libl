import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
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
    <Wrapper>
      <div className='home-landing'>
        <Navbar />
        <div className='hero-container'>
          <Hero />
        </div>
      </div>
      <div className='home-books-div'>
        <BookSection heading={'Trending'} books={trendingBooks} />
        <BookSection heading={'Top 10'} books={top10Books} />
      </div>

      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .home-landing {
    height: 100vh;
    background-color: white;
  }

  .hero-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .hero-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .hero-title {
    font-size: 13rem;
    margin-top: 11rem;
    color: #dd933c;
  }

  .hero-para {
    font-size: 1.5rem;
    padding-bottom: 5rem;
  }

  .hero-search-bar {
    width: 40%;
  }

  .hero-search-form {
    display: flex;
  }

  .hero-search-field {
    width: 80%;
    height: 2rem;
    border: 0.15rem solid gray;
    border-radius: 2rem 0 0 2rem;
    padding: 1rem;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
  }

  .hero-search-btn {
    text-align: center;
    line-height: 0;
    width: 20%;
    height: 2rem;
    border: 0.15rem solid gray;
    border-radius: 0 2rem 2rem 0;
    padding: 1rem;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    background-color: #dd933c;
  }

  .home-books-div {
    padding: 2rem 4rem;
  }
`

export default Home
