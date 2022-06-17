import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Main from './Main';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import Signup from './pages/Home/Signup';
import Search from './pages/Home/Search';

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
  // 세션 정보에 따라 첫 접속시 보이는 컴포넌트 다르게 구현
  const [first, setFirst] = useState(false);

  return (
    <AppContainer>
      <Header>산책하개</Header>
      <Footer />
      <Routes>
        <Route>
          <Route exact path="/" element={first ? <Home /> : <Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/*" element={<Signup />} />
          <Route path="/search/*" element={<Search />} />
        </Route>
      </Routes>
    </AppContainer>
  );
};

export default App;
