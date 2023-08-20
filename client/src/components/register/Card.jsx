import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <Wrapper>
      <section className='card'>Card</section>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  .card {
    height: 600px;
    width: 500px;
    background-color: grey;
  }
`;
