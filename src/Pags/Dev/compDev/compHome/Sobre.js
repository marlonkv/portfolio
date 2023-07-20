import React from 'react';
import styled from 'styled-components';
import whatsIcon from '../../../../midia/whats.png';
import voltatIcon from '../../../../midia/arrow.svg';

const Sobre = ({ state, clickFunction }) => {
  return (
    <SobreMim style={state ? { display: 'none' } : { display: 'flex' }}>
      <div style={{ position: 'relative' }}>
        <BtnVoltar onClick={clickFunction}>
          <img src={voltatIcon} alt="Voltar" height="35px" />
        </BtnVoltar>

        <Eu>
          <ImagemProfile>
            <img src="#" alt="" />
          </ImagemProfile>
          <Detalhes>
            <ul>
              <li>
                <h1>Marlon Silva</h1>
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
          <h2>Sobre mim</h2>
          Olá, me chamo Marlon, sou desenvolvedor web front-end e estou em busca
          por minha primeira oportunidade. Tenho uma enorme paixão por
          programação e busco constantemente por conhecimentos e habilidades
          atualizadas, e estou pronto para trabalhar em projetos desafiadores.
        </Texto>

        <Contato>
          <span>
            <p>marlonsilvavvv@gmail.com</p>
          </span>
          <span>
            <img src={whatsIcon} alt="whats" height="22px" />
            <p>{'+55 (24) 99905-0925'}</p>
          </span>
        </Contato>
      </div>
    </SobreMim>
  );
};

const Contato = styled.div`
  padding: 0.5rem 0.9rem;
  border-radius: 0.7rem;
  font-size: 0.9rem;
  display: grid;
  gap: 0.3rem;
  margin-top: 1.4rem;
  text-align: center;
  font-weight: bold;

  span {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    padding: 0px;
  }
`;
const Texto = styled.p`
  position: relative;
  width: 65ch;
`;
const Eu = styled.div`
  display: flex;
  align-items: center;
`;
const Detalhes = styled.div`
  ul {
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
  height: 155px;
  width: 155px;
  background-color: #bfbfbf;
  border-radius: 8rem;
  margin-top: 20px;
`;
const BtnVoltar = styled.button`
  position: absolute;
  background: none;
  border: none;
  left: -120px;
  top: 0px;
  cursor: pointer;

  img {
    font-size: 2rem;
    transform: rotate(-90deg);
  }
`;
const SobreMim = styled.div`
  height: 77vh;
  width: 100%;
  margin-left: 3rem;
  position: relative;
  transition: 0.5s;
  animation: anima 0.4s;

  & > div:last-child {
    height: 400px;
    margin: 40px auto 0 auto;
    display: grid;
    gap: 1rem;
    justify-items: center;
    padding: 2.8rem 2rem;
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
