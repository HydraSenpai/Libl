import styled from 'styled-components';
import { AiFillEdit } from 'react-icons/ai';
import { FaCheck, FaX } from 'react-icons/fa6';
import { useState } from 'react';
import { useUserContext } from '../context/user_context';

const FormRowChange = ({
  name,
  type,
  handleChange,
  value,
  active,
  handleActive,
}) => {
  const { isLoading } = useUserContext();
  return (
    <Wrapper>
      <div className='input-container'>
        <p>{name}:</p>
        <input
          type={type}
          value={value}
          className={
            active === name ? 'form-inputs' : 'form-inputs disabled-input'
          }
          name={name}
          onChange={handleChange}
          readOnly={active !== name}
        />
      </div>
      {!isLoading && (
        <button
          onClick={
            active === name
              ? () => handleActive(name, 'confirm')
              : () => handleActive(name, 'change')
          }
          style={
            active === name
              ? { backgroundColor: 'var(--green-light)', marginLeft: 3 + 'em' }
              : { marginLeft: 3 + 'em' }
          }
        >
          {active === name ? <FaCheck /> : <AiFillEdit />}
        </button>
      )}
      {active === name && !isLoading && (
        <button
          onClick={() => handleActive(name, 'cancel')}
          style={{
            backgroundColor: 'var(--red-light)',
          }}
        >
          <FaX />
        </button>
      )}
    </Wrapper>
  );
};

export default FormRowChange;

const Wrapper = styled.div`
  padding-bottom: 0;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  .input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
  }
  p {
    text-transform: capitalize;
    font-size: 1.2em;
    width: 150px;
    max-width: 200px;
    text-overflow: ellipsis;
  }
  .form-inputs {
    width: 450px;
  }
  p,
  button {
    margin: 0;
    padding: 0;
  }
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    border: none;
    background-color: var(--grey-300);
    border-radius: 10px;
    font-size: 1.5em;
    transition: all 500ms;
  }
  button:hover {
    background-color: var(--grey-500);
  }
  .disabled-input {
    background-color: transparent;
    box-shadow: none;
    border: none;
  }
  .disabled-input:focus {
    outline: none;
  }
`;
