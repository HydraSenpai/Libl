import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Wrapper>
      <Link to='./'>
        <h1 className='logo'>Libl</h1>
      </Link>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  .logo {
    user-select: none;
    color: var(--primary-main);
    font-weight: 200;
  }
`;
