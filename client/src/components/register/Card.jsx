import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormRow from '../FormRow';
import { useUserContext } from '../../context/user_context';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Card = () => {
  const [userDetails, setUserDetails] = useState(initialState);
  const [login, setLogin] = useState(true);
  const { registerUser, user, loginUser, isLoading } = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = userDetails;
    if (!email || !password || (!login && !name)) {
      //show error
      return;
    }
    if (login) {
      loginUser(userDetails);
    } else {
      registerUser(userDetails);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form
        className='card'
        style={!login ? { height: 540 + 'px' } : { height: 450 + 'px' }}
        onSubmit={handleSubmit}
      >
        <h2>{!login ? 'Create Account' : 'Login'}</h2>
        {!login && (
          <FormRow
            name='name'
            type='name'
            labelText='Name'
            value={userDetails.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          name='email'
          type='email'
          labelText='Email'
          value={userDetails.email}
          handleChange={handleChange}
        />
        <FormRow
          name='password'
          type='password'
          labelText='Password'
          value={userDetails.password}
          handleChange={handleChange}
        />
        <button className='btn' type='submit' disabled={isLoading}>
          {!isLoading ? (!login ? 'Register' : 'Login') : 'Waiting...'}
        </button>
        <p>
          {!login
            ? 'Already have a library account? '
            : "Don't have a library account already? "}
          <button
            className='login-btn'
            onClick={() => setLogin(!login)}
            disabled={isLoading}
          >
            {!login ? 'Login here' : 'Create account'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  .card {
    /* height: 540px; */
    width: 500px;
    background-color: var(--grey-100);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 2em 1em 2em;
    box-shadow: var(--shadow-3);
    transition: all 500ms;
  }
  .card:hover {
    box-shadow: var(--shadow-4);
  }
  h2 {
    padding-bottom: 1em;
  }
  .btn {
    margin: 1em 0em;
  }
  .login-btn {
    background: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    font-weight: 500;
    color: var(--primary-main);
    cursor: pointer;
  }
`;
