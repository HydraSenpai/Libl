import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(searchTerm)
  }
  return (
    <div className='hero'>
      <h1 className='hero-title'>Libl</h1>
      {/* image */}
      <div className='search-bar'>
        <Form onSubmit={submitHandler}>
          <input
            type='text'
            name='search-field'
            id='seach-field'
            placeholder='type book name or ISBN number'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type='submit' className='search-btn'>
            Search
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Hero
