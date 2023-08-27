import React from 'react';
import { Navbar, Footer } from '../components/';
import { Filters, BookList, Sort } from '../components/catalogue/';
import styled from 'styled-components';

const Catalogue = () => {
  return (
    <Wrapper>
      <div>
        <Navbar />
        <div className='center full-page_without-footer'>
          <h2>Catalogue</h2>
          <div className='books nav-padding'>
            <Filters />
            <div>
              <Sort />
              <BookList />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Catalogue;

const Wrapper = styled.div`
  .books {
    display: flex;
    flex-direction: row;
    align-items: start;
    margin-bottom: 5em;
    gap: 4em;
  }
`;
