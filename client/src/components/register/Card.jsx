import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormRow, Alert } from '../index';
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
  const { registerUser, user, loginUser, isLoading, displayAlert } =
    useUserContext();
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
      }, 3000);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form
        className='card'
        style={
          !login
            ? displayAlert
              ? { height: 580 + 'px' }
              : { height: 510 + 'px' }
            : displayAlert
            ? { height: 490 + 'px' }
            : { height: 420 + 'px' }
        }
        onSubmit={handleSubmit}
      >
        <h2>{!login ? 'Create Account' : 'Login'}</h2>
        {displayAlert && <Alert />}
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
            type='button'
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
    /* height: 560px; */
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
  h2 {
    margin-bottom: 0.5em;
  }
  .card:hover {
    box-shadow: var(--shadow-4);
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
