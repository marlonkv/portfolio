import React from 'react';
import styled from 'styled-components';
import Home from './compDev/Home';
import Projetos from './compDev/Projetos';
import Seta from '../../imgs/setaDown.png';

const Dev = () => {
  const pagDown = React.useRef(null);

  React.useEffect(() => {});

  function clickDown() {
    if (pagDown.current) {
      pagDown.current.scrollIntoView({ behavior: 'smooth' });
      console.log();
    }
  }

  return (
    <>
      <Estrutura>
        <Home />
        <Projetos x={pagDown} />
        <Btn>
          <img src={Seta} alt="Descer" height="60px" onClick={clickDown} />
        </Btn>
      </Estrutura>
    </>
  );
};

const Estrutura = styled.main`
  display: grid;
  max-width: 900px;
  margin: 0 auto;
  color: black;
  position: relative;
  padding-top: 3rem;
`;

const Btn = styled.div`
  img {
    position: absolute;
    top: 36.5%;
    left: 96.5%;
    transition: 0.3s;
    animation: click 1.5s linear infinite;
    cursor: pointer;
  }

  img:hover {
    left: 95.8%;
    height: 80px;
    transition: 0.3s;
    animation: none;
  }

  @keyframes click {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(8px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  #btn {
    opacity: 0;
    transition: opacity 0.2s;
  }

  #btn.aparecer {
    opacity: 1;
  }
`;

export default Dev;
