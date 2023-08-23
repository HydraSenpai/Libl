import React, { useState } from 'react';
import styled from 'styled-components';
import FormRowChange from '../FormRowChange';
import { useUserContext } from '../../context/user_context';

const DetailsForm = ({ user }) => {
  const [active, setActive] = useState(null);
  const [newDetails, setNewDetails] = useState({ ...user });
  const { editUser } = useUserContext();

  const handleChange = (e) => {
    setNewDetails({ ...newDetails, [e.target.name]: e.target.value });
  };

  const handleActive = (name, option) => {
    //if option is cancel edit then reset details to old values and close editing
    if (option === 'cancel') {
      setNewDetails({ ...user });
      setActive(null);
      return;
    }
    //if option is conform edit then update details in db and close editing
    if (option === 'confirm') {
      //change detail
      editUser(newDetails);
      setNewDetails({ ...user });
      setActive(null);
      return;
    }
    //bring up edit interface if no other field is being edited
    if (option === 'change' && active === null) {
      setActive(name);
      return;
    }
    //other option is being edited so don't allow user to change
    if (option === 'change' && active !== null) {
      return;
    }
    return;
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
