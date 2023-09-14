import React from 'react';
import styled from 'styled-components';
import { useBookContext } from '../context/book_context';

const Alert = () => {
  const { alertType, alertText } = useBookContext();

  let bgColor = 'var(--primary-main)';
  if (alertType === 'error') {
    bgColor = 'var(--red-light)';
  } else if (alertType === 'success') {
    bgColor = 'var(--green-light)';
  }
  return (
    <Wrapper style={{ backgroundColor: bgColor }}>
      <h5>{alertText}</h5>
    </Wrapper>
  );
};

export default Alert;

const Wrapper = styled.div`
  min-height: 40px;
  min-width: 200px;
  margin: 0 0 1em 0;
  padding: 0.5em 2em;
  border-radius: 20px;
`;
