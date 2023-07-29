import React from 'react';
import styled from 'styled-components';

const Dec = ({ estado }) => {
  return (
    <DecBase style={estado ? { transform: 'translateX(-12px)' } : null}>
      <Dec1
        style={
          estado
            ? {
                width: '45px',
                borderLeft: '0px  ',
                borderRadius: '0rem',
                transform: 'rotate(0deg)',
              }
            : null
        }
      ></Dec1>
      <Dec2
        style={
          estado
            ? {
                height: '45px',
                left: '-12px',
                top: '-9.5px',
                borderRadius: '0rem',
                transform: 'rotate(-270deg)',
                borderTop: '0px ',
              }
            : null
        }
      ></Dec2>
    </DecBase>
  );
};

const DecBase = styled.div`
  display: flex;
  position: relative;
  transform: translateX(0px);
  transition: 0.3s;
`;
const Dec1 = styled.span`
  height: 20px;
  width: 20px;
  background-color: transparent;
  border-radius: 5rem;
  border-bottom: 6px solid black;
  border-left: 6px solid black;
  border-top: 6px solid transparent;
  border-right: 6px solid transparent;
  transform: rotate(-42deg);
  transition: 0.3s;
`;
const Dec2 = styled.span`
  height: 20px;
  width: 20px;
  background-color: transparent;
  border-radius: 5rem;
  border-bottom: 6px solid transparent;
  border-left: 6px solid transparent;
  border-top: 6px solid black;
  border-right: 6px solid black;
  transform: rotate(-40deg);
  position: relative;
  left: -6px;
  top: 3px;
  transition: 0.3s;
`;
const Dec3 = styled.span`
  height: 20px;
  background-color: transparent;
  border-bottom: 6px solid black;
  border-top: 6px solid white;
  border-right: 6px solid white;

  //mudança
  width: 30px;
  border-left: 6px solid white;
  border-radius: 0rem;
  transform: rotate(0deg);
`;
const Dec4 = styled.span`
  width: 20px;
  background-color: transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid transparent;
  border-top: 6px solid white;
  border-right: 6px solid black;
  transform: rotate(-42deg);
  position: relative;
  border-radius: 5rem;

  //mudança
  height: 30px;
  left: -12px;
  top: -4.8px;
  border-radius: 0rem;
  transform: rotate(-270deg);
`;

export default Dec;
