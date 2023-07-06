import React from 'react';
import styled from 'styled-components';
import Marlon from './Home/Marlon';
import Sobre from './Home/Sobre';

const Corpo = () => {
  const [home, setHome] = React.useState(true);

  const Pag = home ? Marlon : Sobre;

  function funcao({ target }) {
    const { parentElement } = target;

    if (home) {
      parentElement.style.transform = 'translateX(300px)';

      setTimeout(() => {
        parentElement.style.opacity = '0';

        setTimeout(() => {
          setHome(!home);
        }, 300);
      }, 50);
    } else {
      parentElement.parentElement.style.transform = 'translateX(-300px)';
      parentElement.parentElement.style.transition = '.4s';

      setTimeout(() => {
        parentElement.parentElement.style.opacity = '0';

        setTimeout(() => {
          setHome(!home);
        }, 200);
      }, 100);
    }

    console.log(home);
  }

  return (
    <>
      <Pag clickFunction={funcao} />

      <Estrutura>
        <VerProjetos>
          <p>Ver Projetos</p>
        </VerProjetos>
      </Estrutura>
    </>
  );
};

const Estrutura = styled.div`
  display: grid;
`;
const VerProjetos = styled.div`
  margin-top: 0rem;
  p {
    display: flex;
    font-size: 1.3rem;
    align-items: center;
    gap: 1rem;
    margin-left: 5rem;
  }

  p::before {
    content: '';
    display: block;
    width: 120px;
    height: 3px;
    background-color: black;
    left: 135px;
  }
`;

export default Corpo;
