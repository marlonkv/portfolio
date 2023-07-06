import React from 'react';
import styled from 'styled-components';

const Marlon = ({ clickFunction }) => {
  return (
    <MarlonSilva>
      <h1>
        Marlon Silva <span>Desenvolvedor Front End </span>
      </h1>
      <div onClick={clickFunction}>
        <p>{''}</p>
        <p>{''}</p>
      </div>
    </MarlonSilva>
  );
};

const MarlonSilva = styled.div`
  display: flex;
  gap: 28%;
  width: 100%;
  font-size: 2.5rem;
  position: relative;
  height: 77vh;
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

  span {
    font-size: 1.2rem;
    position: absolute;
    top: 345px;
    left: 5px;
  }

  div {
    display: flex;
    gap: 4.5rem;
    position: relative;
    top: 10px;
    cursor: pointer;
    height: 60px;
    padding: 1rem 3rem;
    border-radius: 10rem;
    box-shadow: 2px 2px 10px rgba(1, 1, 1, 0.1),
      -2px -2px 10px rgba(1, 1, 1, 0.1);
    transition: 0.3s;
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

  div:hover {
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
`;

export default Marlon;
