import styled from 'styled-components';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';

const FormRow = ({ name, type, handleChange, value }) => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper>
      <div className='input-container'>
        <p>{name}:</p>
        <input
          type={type}
          value={value}
          className={active ? 'form-inputs' : 'form-inputs disabled-input'}
          name={name}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={() => setActive(!active)}
        style={active ? { backgroundColor: 'var(--primary-main)' } : null}
      >
        <AiFillEdit />
      </button>
    </Wrapper>
  );
};

export default FormRow;

const Wrapper = styled.div`
  padding-bottom: 0;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10em;
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
  }
`;
