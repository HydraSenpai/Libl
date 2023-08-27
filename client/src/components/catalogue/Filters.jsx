import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import styled from 'styled-components';
import { getUniqueValues } from '../../utils/helpers';

const Filters = () => {
  const {
    filters: { title, author, genre, audience, language },
    updateFilters,
    clearFilters,
    allBooks,
  } = useFilterContext();

  const genres = getUniqueValues(allBooks, 'genre');
  const audiences = getUniqueValues(allBooks, 'audience');
  const languages = getUniqueValues(allBooks, 'language');
  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* SEARCH INPUT */}
        <div className='input-section'>
          <input
            type='text'
            name='title'
            className='form-inputs'
            placeholder='Search title or author'
            value={title}
            onChange={updateFilters}
          />
        </div>
        {/* GENRES INPUT */}
        <div className='input-section'>
          <h5>Genre</h5>
          <div className='options'>
            {genres.map((genreCurrent, index) => {
              return (
                <button
                  key={index}
                  type='button'
                  onClick={updateFilters}
                  className={
                    genre.toLowerCase() === genreCurrent.toLowerCase()
                      ? 'button active'
                      : 'button'
                  }
                  name='genre'
                >
                  {genreCurrent}
                </button>
              );
            })}
          </div>
        </div>
        {/* LANGUAGE INPUT */}
        <div className='input-section'>
          <h5>Language</h5>
          <div className='options'>
            {languages.map((languageCurrent, index) => {
              return (
                <button
                  key={index}
                  type='button'
                  onClick={updateFilters}
                  className={
                    language === languageCurrent.toLowerCase()
                      ? 'button active'
                      : 'button'
                  }
                  name='language'
                >
                  {languageCurrent}
                </button>
              );
            })}
          </div>
        </div>
        {/* AUDIENCE INPUT */}
        <div className='input-section'>
          <h5>Audience</h5>
          <div className='options'>
            {audiences.map((audienceCurrent, index) => {
              return (
                <button
                  key={index}
                  type='button'
                  onClick={updateFilters}
                  className={
                    audience === audienceCurrent.toLowerCase()
                      ? 'button active'
                      : 'button'
                  }
                  name='audience'
                >
                  {audienceCurrent}
                </button>
              );
            })}
          </div>
        </div>
      </form>
      <button type='button' className='btn' onClick={clearFilters}>
        Clear Filters
      </button>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.div`
  margin-top: 2em;
  h5 {
    margin-bottom: 0.25em;
  }
  .input-section {
    margin-bottom: 1em;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.1em;
    padding-left: 0.25em;
  }
  .button {
    padding: 0.1em 0.2em;
    background-color: transparent;
    border: none;
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
    font-size: 1em;
    transition: color 250ms;
    cursor: pointer;
  }
  .button:hover {
    color: #808080;
  }
  .active {
    border-bottom: 2px solid var(--primary-main);
  }
  .btn {
    font-size: 1em;
    padding: 0.5em 0.75em;
  }
`;
