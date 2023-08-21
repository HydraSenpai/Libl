import React, { useEffect } from 'react';
import { Navbar, Footer } from '../components/';
import { Card } from '../components/register/';
import { useUserContext } from '../context/user_context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('gone to register');
    if (user) {
      navigate('/profile');
    }
  }, []);

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
