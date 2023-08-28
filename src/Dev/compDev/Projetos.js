import React from 'react';
import styled from 'styled-components';

const Projetos = ({ x }) => {
  const elementos = [
    {
      background: '',
      index: 4,
      id: 1,

      //content
      titulo: 'Sistema de Gestão',
      img: '',
      tecnologias: [
        { tecs: 'React', cor: '#FA9566' },
        { tecs: 'TypeScript', cor: '#68D2FF' },
        { tecs: 'Firebase', cor: '#FFEA59' },
        { tecs: 'Styled Components', cor: '#FFEA59' },
      ],
      texto:
        'Aplicação web desenvolvida com a finalidade de realizar a gestão de diversos aspectos da vida uma pessoa',

      //colors
      textoCor: '#FFFED5',
      link: 'https://aplicacaowebkv.web.app/',
    },
    {
      background: '#171717',
      index: 3,
      id: 2,

      //content
      titulo: 'SAFE',
      img: '',
      tecnologias: [
        { tecs: 'HTLM', cor: '#FA9566' },
        { tecs: 'CSS', cor: '#68D2FF' },
        { tecs: 'JS', cor: '#FFEA59' },
      ],
      texto: 'algum textooooo ooooo ooo ooooooo oooo ooooooo ooooooooooo',

      //colors
      textoCor: '#FFFED5',
      link: '',
    },
    {
      background: '#171717',
      index: 2,
      id: 3,

      //content
      titulo: 'None',
      img: '',
      tecnologias: [
        { tecs: 'React', cor: '#FA9566' },
        { tecs: 'TypeScript', cor: '#68D2FF' },
        { tecs: 'Firebase', cor: '#FFEA59' },
      ],
      texto: 'algum textooooo ooooo ooo ooooooo oooo ooooooo ooooooooooo',

      //colors
      textoCor: 'white',
      link: '',
    },
    {
      background: '#171717',
      index: 1,
      id: 4,

      //content
      titulo: 'Site de conselhos',
      img: '',
      tecnologias: [
        { tecs: 'HTML', cor: '#FA9566' },
        { tecs: 'CSS', cor: '#68D2FF' },
        { tecs: 'JavaScript', cor: '#FFEA59' },
      ],
      texto: 'algum textooooo ooooo ooo ooooooo oooo ooooooo ooooooooooo',

      //colors
      textoCor: '#FFFED5',
      link: '',
    },
  ];

  function mouseEfeito({ currentTarget }) {
    const localId = currentTarget.dataset.id;
    const ele = currentTarget;

    if (localId === '1') {
      ele.style.position = 'relative';
      ele.style.transform = 'translateX(20px)';

      document.querySelector('[data-id="2"]').style.transform =
        'translateX(0px)';
      ele.querySelector('div').style.filter = 'blur(0px)';
      ele.querySelector('h2').style.display = 'none';
    }
    if (localId === '2') {
      ele.style.position = 'relative';
      ele.style.transform = 'translateX(100px)';

      document.querySelector('[data-id="1"]').style.transform =
        'translateX(-70px)';
      document.querySelector('[data-id="3"]').style.transform =
        'translateX(75px)';
      document.querySelector('[data-id="4"]').style.transform =
        'translateX(58px)';

      ele.querySelector('div').style.filter = 'blur(0px)';
      ele.querySelector('h2').style.display = 'none';
    }
    if (localId === '3') {
      ele.style.position = 'relative';
      ele.style.transform = 'translateX(90px)';

      document.querySelector('[data-id="2"]').style.transform =
        'translateX(-80px)';
      document.querySelector('[data-id="1"]').style.transform =
        'translateX(-30px)';
      document.querySelector('[data-id="4"]').style.transform =
        'translateX(75px)';

      ele.querySelector('div').style.filter = 'blur(0px)';
      ele.querySelector('h2').style.display = 'none';
    }
    if (localId === '4') {
      ele.style.position = 'relative';
      ele.style.transform = 'translateX(30px)';

      document.querySelector('[data-id="1"]').style.transform =
        'translateX(-25px)';
      document.querySelector('[data-id="2"]').style.transform =
        'translateX(-70px)';
      document.querySelector('[data-id="3"]').style.transform =
        'translateX(-140px)';
      ele.querySelector('div').style.filter = 'blur(0px)';
      ele.querySelector('h2').style.display = 'none';
    }

    if (localId !== '1') {
      document.querySelectorAll('#projetosEle')[0].style.filter = 'blur(20px)';
      document.querySelectorAll(
        '#projetosEle',
      )[0].previousElementSibling.style.display = 'block';
    }
    if (localId !== '2') {
      document.querySelectorAll('#projetosEle')[1].style.filter = 'blur(20px)';
    }
    if (localId !== '3') {
      document.querySelectorAll('#projetosEle')[2].style.filter = 'blur(20px)';
    }
    if (localId !== '4') {
      document.querySelectorAll('#projetosEle')[3].style.filter = 'blur(20px)';
    }
  }

  function mouseOut({ currentTarget }) {
    document.querySelectorAll('#projetosEle').forEach((e) => {
      e.style.filter = 'blur(20px)';
      e.previousElementSibling.style.display = 'block';
    });

    document.querySelector('[data-id="1"]').style.transform = 'translateX(0px)';
    document.querySelector('[data-id="2"]').style.transform = 'translateX(0px)';
    document.querySelector('[data-id="3"]').style.transform = 'translateX(0px)';
    document.querySelector('[data-id="4"]').style.transform = 'translateX(0px)';
  }

  return (
    <div
      style={{
        position: 'relative',
        marginTop: '4rem',
        marginBottom: '3.5rem',
      }}
    >
      <Estrutura ref={x}>
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
              target="_blank"
              key={background}
              style={{
                zIndex: `${index}`,
                transform: 'initial',
              }}
              data-id={id}
              href={link}
              onMouseOver={mouseEfeito}
              onMouseOut={mouseOut}
            >
              <Index>{titulo}</Index>
              <Ofuscamento id="projetosEle">
                <h1>{titulo}</h1>
                <p>{texto}</p>
                <Tecnologias>
                  {tecnologias.map(({ tecs, cor }) => (
                    <li>{tecs}</li>
                  ))}
                </Tecnologias>
              </Ofuscamento>
            </Bloco>
          ),
        )}
      </Estrutura>
    </div>
  );
};

const Tecnologias = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  li {
    padding: 0.3rem 0.7rem;
    border-radius: 2rem;
    background-color: rgba(45, 212, 191, 0.1);
    color: #5eead4;
    font-size: 0.8rem;
  }
`;

const Index = styled.h2`
  width: 13ch;
  color: gray;
  font-weight: 700;
  font-size: 1.5rem;
  transition: 10s;
  animation: anima 0.1s;
  text-align: right;
  position: absolute;
  left: 150px;
  top: 25px;
  @keyframes anima {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Ofuscamento = styled.div`
  filter: blur(20px);
  align-items: start;
  transition: 0.3s;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.9rem;
  color: gainsboro;

  h1 {
    font-size: 1.6rem;
    font-weight: 100;
  }
  p {
    font-size: 0.9rem;
  }
`;
const Bloco = styled.a`
  z-index: 1;
  height: max-content;
  width: 300px;
  margin-left: -190px;
  border-radius: 2rem;
  transition: 0.5s;
  transform: translateX(0px);
  padding: 3.5rem 2.3rem 3rem 3rem;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  box-shadow: 1px 1px 20px 1px rgba(255, 255, 255, 0.08);
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(22px);

  picture {
    height: 140px;
    width: 100%;
    background-color: transparent;
    border-radius: 1rem;
  }
  div {
    list-style: none;
  }
`;
const Estrutura = styled.div`
  height: 60vh;
  display: flex;
  position: relative;
  transition: 0.5s;
  margin: 90px 0 0 160px;
  gap: 0.7rem;
  div:first-child {
    margin-left: 50px;
  }
`;

export default Projetos;
