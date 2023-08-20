import React, { useState } from 'react';
import styled from 'styled-components';
import FormRow from './FormRow';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Card = () => {
  const [userDetails, setUserDetails] = useState(initialState);
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = userDetails;
    if (!email || !password || (!login && !name)) {
      //show error or something
    }
    if (login) {
      //login user
    }
    if (!login) {
      //register user
    }
  };

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
        <button className='btn' type='submit'>
          {!login ? 'Register' : 'Login'}
        </button>
        <p>
          {!login
            ? 'Already have a library account? '
            : "Don't have a library account already? "}
          <button className='login-btn' onClick={() => setLogin(!login)}>
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
