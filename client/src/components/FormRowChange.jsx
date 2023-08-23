import styled from 'styled-components';
import { AiFillEdit } from 'react-icons/ai';
import { FaCheck, FaX } from 'react-icons/fa6';
import { useState } from 'react';

const FormRowChange = ({
  name,
  type,
  handleChange,
  value,
  active,
  handleActive,
}) => {
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
      <button
        onClick={() => handleActive(name, 'confirm')}
        style={
          active === name
            ? { backgroundColor: 'var(--green-light)', marginLeft: 10 + 'em' }
            : { marginLeft: 10 + 'em' }
        }
      >
        {active === name ? <FaCheck /> : <AiFillEdit />}
      </button>
      {active === name && (
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
    width: 200px;
    max-width: 200px;
    text-overflow: ellipsis;
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
