import React from 'react';
import { Navbar, Footer } from '../components/';

const Catalogue = () => {
  return (
    <div>
      <div className='full-page_without-footer'>
        <Navbar />
        <div className='center'>
          <h1>Catalogue</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalogue;
