import React from 'react';
import styled from 'styled-components';
import { useUserContext } from '../context/user_context';

const Alert = () => {
  const { alertType, alertText } = useUserContext();
  return (
    <Wrapper>
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
  background-color: var(--red-light);
  border-radius: 20px;
`;
