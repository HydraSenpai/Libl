import styled from 'styled-components';

const FormRow = ({ name, type, labelText, handleChange, value }) => {
  return (
    <Wrapper>
      <label htmlFor={name} className='form-labels'>
        {labelText}
      </label>
      <input
        type={type}
        value={value}
        className='form-inputs'
        name={name}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default FormRow;

const Wrapper = styled.div`
  padding-bottom: 0;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 80%;
  .form-labels {
    font-size: 1.3em;
    font-weight: 400;
  }
  .form-inputs {
    border-radius: 5px;
    width: 100%;
    border: none;
    height: 40px;
    padding: 0.25em 0.5em;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2em;
    font-weight: 300;
    box-shadow: var(--shadow-2);
  }
`;
