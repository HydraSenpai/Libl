import React from 'react';
import { Navbar, Footer } from '../components/';
import { Card } from '../components/register/';

const Login = () => {
  return (
    <div>
      <div className='full-page_without-footer'>
        <Navbar />
        <div className='center' style={{ paddingTop: 2 + 'em' }}>
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
