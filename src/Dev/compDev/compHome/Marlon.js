import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';

const Marlon = ({ clickFunction }) => {
  return (
    <MarlonSilva>
      <Info>
        <h1>Marlon Silva</h1>
        <span>Desenvolvedor Front End </span>
      </Info>
      <Btn onClick={clickFunction}>
        <p>{''}</p>
        <p>{''}</p>
      </Btn>
    </MarlonSilva>
  );
};

const Info = styled.div`
  display: grid;
  place-content: start;

  h1 {
    height: 100px;
  }
  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
const Btn = styled.div`
  display: flex;
  gap: 4.5rem;
  position: relative;
  top: 10px;
  cursor: pointer;
  height: 60px;
  padding: 1rem 3rem;
  border-radius: 10rem;
  box-shadow: 2px 2px 10px rgba(1, 1, 1, 0.1), -2px -2px 10px rgba(1, 1, 1, 0.1);
  transition: 0.3s;

  &:hover {
    background-color: rgba(1, 1, 1, 0.04);
    p {
      transform: rotate(400deg);
      height: 36px;
      top: 20px;
      left: 10px;
    }
    p::after {
      width: 30px;
      top: 0px;
      left: 0px;
    }
  }

  @media screen and (max-width: ${theme.breakpoints.xl}) {
    padding: 0.8rem 2.5rem;
  }
`;
const MarlonSilva = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
  position: relative;
  align-items: center;
  transition: 0.5s;
  animation: inicio 0.3s;

  @keyframes inicio {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  p {
    content: '';
    height: 60px;
    width: 10px;
    background-color: black;
    position: relative;
    transition: 0.3s;
  }
  p::after {
    content: '';
    margin-left: -25px;
    display: block;
    height: 10px;
    width: 60px;
    background-color: black;
    position: absolute;
    top: 25px;
  }

  p:last-child::after {
    margin-left: -25px;
  }

  @media screen and (max-width: ${theme.breakpoints.xl}) {
    justify-content: space-between;

    h1 {
      font-size: 4.2rem;
      height: 85px;
    }

    span {
      font-size: 1.1rem;
    }
  }
`;

export default Marlon;
