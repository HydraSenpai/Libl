import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <h1 className='logo'>Libl</h1>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  .logo {
    color: #dd933c;
    font-weight: 200;
  }
`;
