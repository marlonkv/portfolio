import React from 'react';
import styled from 'styled-components';
import voltatIcon from '../../../midia/arrow.svg';
import imgProfile from '../../../midia/imgProfile.jpeg';

const Sobre = ({ state, clickFunction }) => {
  return (
    <SobreMim style={state ? { display: 'none' } : { display: 'flex' }}>
      <div style={{ position: 'relative' }}>
        <BtnVoltar onClick={clickFunction}>
          <img src={voltatIcon} alt="Voltar" height="35px" />
        </BtnVoltar>

        <div style={{ display: 'grid', gap: '3rem' }}>
          <div style={{ display: 'grid', gap: '1.3rem' }}>
            <Eu>
              <ImagemProfile>
                <img src={imgProfile} alt="" />
              </ImagemProfile>
              <Detalhes>
                <ul>
                  <li>
                    <h1>Marlon Silva dos Remédios</h1>
                  </li>
                  <li>
                    <span>Idade</span>
                    <p>19 anos</p>
                  </li>
                  <li>
                    <span>Localização</span>
                    <p>Paraty - RJ</p>
                  </li>
                </ul>
              </Detalhes>
            </Eu>
            <Texto>
              Olá, me chamo Marlon, sou um desenvolvedor web front-end. Tenho
              uma grande paixão por programação, estou pronto para projetos
              desafiadores!
            </Texto>
          </div>

          <Texto>
            <h2>Experiência</h2>
            <p>
              Até o momento, nunca trabalhei como Desenvolvedor, atualmente
              estou empregado em uma empresa de medicina ocupacional no setor
              técnico/administrativo.
            </p>
          </Texto>
        </div>

        <Texto style={{ display: 'grid', gap: '.8rem' }}>
          <Skills>
            <div>
              <h3>Linguagens</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <h3>Biblioteca JS</h3>
              <ul>
                <li>React</li>
              </ul>
            </div>
            <div>
              <h3>SCM</h3>
              <ul>
                <li>GIT</li>
              </ul>
            </div>
          </Skills>
          <Formacao>
            <h3>Ensino Superior</h3>
            <p>
              Análise e Desenvolvimento
              <br /> de Sistemas
            </p>
            <span>Cursando</span>
          </Formacao>
        </Texto>
      </div>
    </SobreMim>
  );
};

const Formacao = styled.div`
  padding: 1.5rem 3rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.09);
`;
const Skills = styled.div`
  display: grid;
  gap: 0.7rem;
  padding: 1.5rem 3rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.09);

  ul {
    display: grid;
    gap: 0.4rem;
    margin-top: 0.3rem;

    li {
      padding: 0.3rem 1.2rem;
      border-radius: 2rem;
      background-color: white;
      color: black;
      font-weight: bold;
      font-size: 0.8rem;
      width: max-content;
      box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.05);
    } 
  }
`;
const Texto = styled.p`
  position: relative;
  width: auto;
  ul {
    list-style: none;
  }
`;
const Eu = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 1rem;
`;
const Detalhes = styled.div`
  ul {
    padding: 0px;
    list-style: none;
    display: grid;
    gap: 0.2rem;
  }
  h1 {
    font-size: 1.4rem;
  }
  span {
    font-weight: 100;
    color: gray;
  }
  p {
    font-weight: bold;
  }
`;
const ImagemProfile = styled.div`
  box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.15);
  border-radius: 10rem;
  height: 140px;
  width: 140px;

  img {
    height: 140px;
    width: 140px;
    background-color: #bfbfbf;
    border-radius: 10rem;
    object-fit: cover;
  }
`;
const BtnVoltar = styled.button`
  position: absolute;
  background: none;
  border: none;
  left: -70px;
  top: 0px;
  cursor: pointer;

  img {
    font-size: 2rem;
    transform: rotate(-90deg);
  }
`;
const SobreMim = styled.div`
  width: 100%;
  margin-left: 3rem;
  position: relative;
  transition: 0.5s;
  animation: anima 0.4s;
  padding: 2rem 0;

  & > div {
    margin: 0px auto 0 auto;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    place-items: center;
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

export default Sobre;
