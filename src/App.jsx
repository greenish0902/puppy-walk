import React from 'react';
import styled from 'styled-components';

import Router from './Router';

const AppContainer = styled.div`
  margin: auto;
  width: 360px !important;
  height: 600px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

const App = () => {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
};

export default App;
