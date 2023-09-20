import React from 'react';
import styled from 'styled-components';
import Marlon from './compHome/Marlon';
import Sobre from './compHome/Sobre';
import Contato from './compHome/Contato';

const Corpo = () => {
  const [home, setHome] = React.useState(true);
  const [estadoDec, setEstadoDec] = React.useState(true);

  const Pag = home ? Marlon : Sobre;

  function funcao({ target }) {
    const { parentElement } = target;

    setEstadoDec(!estadoDec);

    if (home) {
      parentElement.style.transform = 'translateX(130px)';

      setTimeout(() => {
        parentElement.style.opacity = '0';

        setTimeout(() => {
          setHome(!home);
        }, 300);
      }, 50);
    } else {
      parentElement.parentElement.style.transform = 'translateX(-180px)';
      parentElement.parentElement.style.transition = '.3s';

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
      <div style={{ position: 'relative' }}>
        <div style={{ height: '600px', display: 'grid', alignItems: 'center' }}>
          <Pag clickFunction={funcao} />
        </div>
        <Contato />
      </div>
    </>
  );
};

export default Corpo;
