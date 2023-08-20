import React from 'react';
import styled from 'styled-components';
import { Logo, NavLinks } from '../components/navbar/';

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        <NavLinks />
      </nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  nav {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em 0 1em;
  }
`;
