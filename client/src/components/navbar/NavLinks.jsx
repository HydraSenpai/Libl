import React from 'react';
import { links, profileLinks } from '../../utils/links';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user_context';

const NavLinks = () => {
  const { user } = useUserContext();
  if (user) {
    return (
      <Wrapper>
        {profileLinks.map((link, index) => {
          return (
            <Link to={link.path} className='link' key={index}>
              {link.name}
            </Link>
          );
        })}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {links.map((link, index) => {
        return (
          <Link to={link.path} className='link' key={index}>
            {link.name}
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default NavLinks;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  .link {
    font-family: 'Poppins', sans-serif;
    color: black;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 300;
    transition: all 750ms;
  }
  .link:hover {
    color: #808080;
    transform: scale(1.1);
  }
`;
