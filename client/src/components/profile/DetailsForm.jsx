import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormRowChange from '../FormRowChange';
import { useUserContext } from '../../context/user_context';
import validator from 'email-validator';

const DetailsForm = ({ user }) => {
  const [active, setActive] = useState(null);
  const [newDetails, setNewDetails] = useState({ ...user });
  const { editUser, isLoading } = useUserContext();

  useEffect(() => {
    setNewDetails({ ...user });
  }, [user]);

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
      //if user hasn't changed the value just return
      //WILL NEED MORE VALIDATION HERE SOON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      if (
        user[active] === newDetails[active].trim() ||
        newDetails[active] === '' ||
        newDetails[active] === null ||
        (active === 'email' && !validator.validate(newDetails.email))
      ) {
        console.log('not allowed');
        setNewDetails({ ...user });
        setActive(null);
        return;
      } else {
        //change user to new details entered
        editUser(newDetails);
        setNewDetails({ ...user });
        setActive(null);
        return;
      }
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
      <h2>Account details</h2>
      {isLoading && <h3>Updating account...</h3>}
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
      <button className='btn'>Reset Password(WIP)</button>
    </Wrapper>
  );
};

export default DetailsForm;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  display: flex;
  align-items: center;
  h2 {
    margin-bottom: 0.5em;
  }
  h3 {
    margin-bottom: 1em;
  }
  .btn {
    margin-top: 1em;
  }
`;
