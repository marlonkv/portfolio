import React from 'react';
import styled from 'styled-components';

const CurriculumVitae = () => {
  return (
    <Estrutura>
      <div>
        <h1>SKILLS</h1>
        <Linguagens>
          <h2>Linguagens Fron-end </h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
        </Linguagens>
      </div>
      <div>
        <div>
          <h2>Frameworks JS</h2>
          <ul>
            <li>React</li>
          </ul>
        </div>
      </div>

      <div>
        <h2>EDUCAÇÃO</h2>
        <ul>
          <li>
            <p>Ensino Superior em Análise e Desenvolvimento de Sistemas</p>
          </li>
        </ul>
      </div>
    </Estrutura>
  );
};

const Linguagens = styled.div`
  margin-top: 1.5rem;
  ul {
    display: flex;
    gap: 2rem;
  }
`;
const Estrutura = styled.main`
  height: 1300px;
  color: black;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 6rem;

  ul {
    list-style: none;
  }

  h1 {
    font-size: 1.7rem;
    font-weight: 400;
    border-bottom: 2px solid gray;
    width: max-content;
  }

  h2 {
    font-size: 1.5rem;
  }
`;

export default CurriculumVitae;
