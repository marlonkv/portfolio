import React from 'react';
import styled from 'styled-components';
import Home from './compDev/Home';
import Projetos from './compDev/Projetos';

const Dev = () => {
  const pagDown = React.useRef(null);

  React.useEffect(() => {});

  return (
    <div>
      <Estrutura>
        <Home />
        <Projetos x={pagDown} />
      </Estrutura>
    </div>
  );
};

const Estrutura = styled.main`
  display: grid;
  max-width: 980px;
  margin: 0 auto;
  color: black;
  position: relative;
  padding-top: 3rem;
`;

export default Dev;
