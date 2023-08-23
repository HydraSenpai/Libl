import React from 'react';
import styled from 'styled-components';
import FormRowChange from '../FormRowChange';

const DetailsForm = () => {
  return (
    <Wrapper>
      <FormRowChange name='name' type='text' />
      <FormRowChange name='email' type='email' />
      <FormRowChange name='password' type='text' />
    </Wrapper>
  );
};

export default DetailsForm;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
