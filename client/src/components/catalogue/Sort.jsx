import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../../context/filter_context';

const Sort = () => {
  const { filteredBooks, sort, updateSort } = useFilterContext();
  return (
    <Wrapper>
      <p>{filteredBooks.length} results</p>
      <form>
        <label htmlFor='sort'>Sort by</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sort}
          onChange={updateSort}
        >
          <option value='name-a'>Title (A-Z)</option>
          <option value='name-z'>Title (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
  p {
    margin: 0;
    display: flex;
  }
  .sort-input {
    border-color: transparent;
    background-color: transparent;
    font-size: 1em;
    font-family: 'Poppins', sans-serif;
  }
`;
