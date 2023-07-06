import React from 'react';
import styled from 'styled-components';

const Sobre = ({ state, clickFunction }) => {
  return (
    <SobreMim style={state ? { display: 'none' } : { display: 'flex' }}>
      <SobreMimText>sobre mim</SobreMimText>
      <div>
        <button onClick={clickFunction}>
          <span>{'<'}</span>Voltar
        </button>

        <div>
          <img src="#" alt="" />
        </div>

        <p>
          Olá me chamo Marlon, sou desenvolvedor web front-end iniciante, amo
          aprender coisas novas e estou ansioso por minha primeira oportunidade.
          Minha paixão pela programação me motiva a buscar constantemente
          conhecimentos e habilidades atualizadas, e estou pronto para
          aplicá-las em projetos desafiadores.{' '}
        </p>
      </div>
    </SobreMim>
  );
};

const SobreMim = styled.div`
  height: 77vh;
  width: 100%;
  margin-left: 3rem;
  position: relative;
  transition: 0.5s;
  animation: anima 0.4s;
  button {
    position: absolute;
    background: none;
    border: none;
    left: 220px;
    top: 40px;
    font-size: 1.3rem;
    margin: 1.5rem 0 0 1.5rem;
    font-weight: bold;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;

    span {
      font-size: 2rem;
    }
  }

  & > div:last-child {
    box-shadow: 2px 2px 10px rgba(1, 1, 1, 0.06),
      -2px -2px 10px rgba(1, 1, 1, 0.06);
    border-radius: 3rem;
    height: 400px;
    width: 500px;
    max-width: 600px;
    margin: 40px auto 0 auto;
    display: grid;
    justify-items: center;
    padding: 2.8rem 2rem;
  }

  div > div {
    height: 150px;
    width: 150px;
    background-color: #bfbfbf;
    border-radius: 5rem;
    margin-top: 20px;
  }

  p {
    max-width: 43ch;
  }

  @keyframes anima {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SobreMimText = styled.div`
  font-size: 5.3rem;
  position: absolute;
  font-weight: bold;
  transform: rotate(-90deg);
  left: -55px;
  top: 225px;
  color: gainsboro;
`;

export default Sobre;
