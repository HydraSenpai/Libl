import React from 'react';
import styled from 'styled-components';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className='title'>
          <h2>Libl</h2>
          <div className='links'>
            <Link to='/#' className='link'>
              <FaFacebookSquare />
            </Link>
            <Link to='/#' className='link'>
              <FaInstagramSquare />
            </Link>
            <Link to='/#' className='link'>
              <FaTwitterSquare />
            </Link>
          </div>
        </div>
        <div className='single-link'>
          <Link to='/#' className='link'>
            About Libl
          </Link>
        </div>
        <div className='column-links'>
          <Link to='/#' className='link'>
            Privacy Policy
          </Link>
          <Link to='/#' className='link'>
            Other Policies
          </Link>
          <Link to='/#' className='link'>
            Terms & Conditions
          </Link>
        </div>
        <div className='column-links'>
          <Link to='/#' className='link'>
            Rules & Regulations
          </Link>
          <Link to='/#' className='link'>
            Accessibility
          </Link>
          <Link to='/#' className='link'>
            Language
          </Link>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  footer {
    width: 100%;
    height: 180px;
    background-color: #ced2d4;
    display: flex;
    justify-content: space-around;
    align-items: start;
    font-family: 'Poppins', sans-serif;
  }
  h2 {
    font-weight: 400;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    padding-top: 30px;
    gap: 1em;
    width: 20%;
  }
  .links {
    display: flex;
    font-size: 3em;
    gap: 0.1em;
  }
  .single-link {
    padding-top: 40px;
  }
  .column-links {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 1.5em;
  }
  .link {
    text-decoration: none;
    color: black;
    transition: color 500ms;
  }
  .link:hover {
    color: #808080;
  }
`;
