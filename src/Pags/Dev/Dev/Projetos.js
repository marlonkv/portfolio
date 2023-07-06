import React from 'react';
import styled from 'styled-components';

const Estrutura = styled.div`
  display: flex;
  gap: 0px;
  position: relative;
  padding: 4rem 2rem 7rem 2rem;
  transition: 0.3s;
  transition: 0.5s;

  div:first-child {
    margin-left: 0px;
  }
`;

const Bloco = styled.div`
  display: grid;
  align-content: start;
  height: max-content;
  width: 300px;
  margin-left: -190px;
  border-radius: 2rem;
  background-color: initial;
  transition: 0.5s;
  transform: translateX(0px);
  padding: 1rem 2.5rem;
  cursor: pointer;
  position: relative;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
  }
  picture {
    height: 140px;
    width: 100%;
    background-color: transparent;
    border-radius: 1rem;
  }
  div {
    display: flex;
    margin: 20px auto 0 auto;
    list-style: none;
    gap: 1rem;
    font-weight: bold;
  }

  div li:first-child {
    color: '#FA9566';
  }
  div li:last-child {
    color: '#FFEA59';
  }

  h2 {
    position: absolute;
    font-size: 3.5rem;
    left: 80%;
    top: 60%;
  }
`;

const Projetos = ({ x }) => {
  const elementos = [
    {
      background: '#6D37FF',
      index: 4,
      id: 1,

      //content
      titulo: 'C6 BANK',
      img: '',
      tecnologias: [
        { tecs: 'HTML', cor: '#FA9566' },
        { tecs: 'CSS', cor: '#68D2FF' },
        { tecs: 'JS', cor: '#FFEA59' },
      ],
      texto: 'texto',

      //colors
      textoCor: '#FFFED5',
    },
    {
      background: '#000000',
      index: 3,
      id: 2,

      //content
      titulo: 'None',
      img: '',
      tecnologias: [
        { tecs: '', cor: '#FA9566' },
        { tecs: '', cor: '#68D2FF' },
        { tecs: '', cor: '#FFEA59' },
      ],
      texto: '',

      //colors
      textoCor: '#FFFED5',
    },
    {
      background: '#FFFED5',
      index: 2,
      id: 3,

      //content
      titulo: 'None',
      img: '',
      tecnologias: [
        { tecs: '', cor: '#FA9566' },
        { tecs: '', cor: '#68D2FF' },
        { tecs: '', cor: '#FFEA59' },
      ],
      texto: '',

      //colors
      textoCor: '#000000',
    },

    {
      background: '#AA955F',
      index: 1,
      id: 4,

      //content
      titulo: 'None',
      img: '',
      tecnologias: [
        { tecs: '', cor: '#FA9566' },
        { tecs: '', cor: '#68D2FF' },
        { tecs: '', cor: '#FFEA59' },
      ],
      texto: '',

      //colors
      textoCor: '#FFFED5',
    },
  ];

  function mouseEfeitoBg({ target }) {
    if (target.id === 'lista') {
      document.querySelectorAll('[data-id]').forEach((e) => {
        e.style.transform = 'translateX(0px)';
      });
    }
  }
  function mouseEfeito({ currentTarget }) {
    const localId = currentTarget.dataset.id;
    const ele = currentTarget;

    if (localId === '1') {
      ele.style.position = 'relative';
      ele.style.transform = 'translateX(20px)';

      document.querySelector('[data-id="2"]').style.transform =
        'translateX(0px)';
    }
    if (localId === '2') {
      ele.style.position = 'relative';
      ele.style.transform = 'translateX(100px)';

      document.querySelector('[data-id="1"]').style.transform =
        'translateX(-70px)';
      document.querySelector('[data-id="3"]').style.transform =
        'translateX(0px)';
      document.querySelector('[data-id="4"]').style.transform =
        'translateX(0px)';
    }
    if (localId === '3') {
      ele.style.position = 'relative';
      ele.style.transform = 'translateX(90px)';

      document.querySelector('[data-id="2"]').style.transform =
        'translateX(-80px)';
      document.querySelector('[data-id="1"]').style.transform =
        'translateX(0px)';
      document.querySelector('[data-id="4"]').style.transform =
        'translateX(0px)';
    }
    if (localId === '4') {
      ele.style.position = 'relative';
      ele.style.transform = 'translateX(30px)';

      document.querySelector('[data-id="2"]').style.transform =
        'translateX(-70px)';
      document.querySelector('[data-id="3"]').style.transform =
        'translateX(-140px)';
    }
  }

  return (
    <>
      <Estrutura onMouseOver={mouseEfeitoBg} ref={x}>
        {elementos.map(
          ({
            titulo,
            background,
            index,
            id,
            img,
            tecnologias,
            texto,
            textoCor,
          }) => (
            <Bloco
              key={background}
              style={{
                backgroundColor: `${background}`,
                zIndex: `${index}`,
                transform: 'initial',
              }}
              onMouseOver={mouseEfeito}
              data-id={id}
            >
              <h1 style={{ color: textoCor }}>{titulo}</h1>
              <picture>
                <img src={{ img }} alt="" />
              </picture>
              <div>
                {tecnologias.map(({ tecs, cor }) => (
                  <li style={{ color: cor }}>{tecs}</li>
                ))}
              </div>
              <p style={{ color: textoCor }}>{texto}</p>
              <h2 style={{ color: textoCor }}>{id}</h2>
            </Bloco>
          ),
        )}
      </Estrutura>
    </>
  );
};

export default Projetos;
