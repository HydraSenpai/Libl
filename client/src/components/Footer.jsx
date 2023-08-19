import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <h2>footer</h2>
      </footer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  footer {
    width: 100%;
    height: 150px;
    background-color: #ced2d4;
  }
`;
