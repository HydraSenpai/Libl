import React from 'react';
import { Navbar, Footer } from '../components/';
import { Card } from '../components/register/';

const Login = () => {
  return (
    <div>
      <div class='full-page_footer'>
        <Navbar />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
