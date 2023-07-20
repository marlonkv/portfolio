import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Cabecalho>
        <NavLink to="/" end>
          Dev
        </NavLink>
        <NavLink to="curriculumVitae" end>
          Curriculum Vitae
        </NavLink>
      </Cabecalho>
    </>
  );
};

const Cabecalho = styled.ul`
  display: flex;
  color: #5e5e5e;
  justify-content: end;
  gap: 2rem;
  padding: 2.5rem 0 0 0;
  list-style: none;
  font-size: 1.4rem;
  font-weight: bold;
  max-width: 1100px;
  margin: 0 auto;

  a {
    color: #5e5e5e;
    text-decoration: none;
    transition: 0.2s;
  }

  li {
    cursor: pointer;
  }

  .active {
    color: pink;
    transition: 0.2s;
  }
`;

export default Header;
