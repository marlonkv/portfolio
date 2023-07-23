import React from 'react';
import styled from 'styled-components';

const Projetos = ({ x }) => {
  const elementos = [
    {
      background: '#6D37FF',
      index: 4,
      id: 1,

      //content
      titulo: 'Sistema de Gestão',
      img: '',
      tecnologias: [
        { tecs: '', cor: '#FA9566' },
        { tecs: 'React', cor: '#68D2FF' },
        { tecs: 'Firebase', cor: '#FFEA59' },
      ],
      texto: 'texto',

      //colors
      textoCor: '#FFFED5',
      link: 'https://aplicacaowebkv.web.app/',
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
      link: '',
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
      link: '',
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
      link: '',
    },
  ];

  function mouseEfeitoBg({ target }) {
    if (target.id === 'lista') {
      console.log(target);
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
            link,
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
              href={link}
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

const Estrutura = styled.div`
  display: flex;
  position: relative;
  padding: 5.1rem 2rem 7rem 2rem;
  transition: 0.5s;
  max-width: 700px;
  margin: 0 auto 0 160px;

  div:first-child {
    margin-left: 50px;
  }
`;
const Bloco = styled.a`
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
  text-decoration: none;

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

export default Projetos;
