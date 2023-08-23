import React, { useState } from 'react';
import styled from 'styled-components';
import FormRowChange from '../FormRowChange';

const DetailsForm = ({ user }) => {
  const [active, setActive] = useState(null);
  const [newDetails, setNewDetails] = useState({ ...user });

  const handleChange = (e) => {
    setNewDetails({ ...newDetails, [e.target.name]: e.target.value });
  };

  const handleActive = (name, option) => {
    if (option === 'cancel') {
      setNewDetails({ ...user });
      setActive(null);
      return;
    }
    setActive(name);
  };

  return (
    <Wrapper>
      <FormRowChange
        name='name'
        type='text'
        value={newDetails.name}
        handleChange={handleChange}
        active={active}
        handleActive={handleActive}
      />
      <FormRowChange
        name='email'
        type='email'
        value={newDetails.email}
        handleChange={handleChange}
        active={active}
        handleActive={handleActive}
      />
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
