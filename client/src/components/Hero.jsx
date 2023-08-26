import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useFilterContext } from '../context/filter_context';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const { updateFilterFromHomeSearch } = useFilterContext();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm && searchTerm.trim() !== '') {
      updateFilterFromHomeSearch(searchTerm);
      navigate('/catalogue');
    }
    setSearchTerm('');
  };

  return (
    <div className='hero-div'>
      <h1 className='hero-title'>Libl</h1>
      <p className='hero-para'>
        <i>For all your Book needs</i>
      </p>
      {/* image */}
      <div className='hero-search-bar'>
        <Form onSubmit={submitHandler} className='hero-search-form'>
          <input
            className='hero-search-field'
            type='text'
            name='search-field'
            id='search-field'
            placeholder='Search by book title or author'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type='submit' className='hero-search-btn'>
            Search
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Hero;
