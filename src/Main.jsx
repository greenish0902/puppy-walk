import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/JMHeader';
import Footer from './components/JMFooter';
import Places from './pages/Places/Places';
import FrameWrapper from './components/Wrappers/FrameWrapper';

const MainContainer = styled(FrameWrapper)`
  padding: 48px 12px 60px 12px;
  align-items: flex-start;
`;

const Main = () => {
  return (
    <MainContainer>
      <Header>산책하개</Header>
      <Routes>
        <Route path="/places/*" element={<Places />} />
      </Routes>
      <Footer />
    </MainContainer>
  );
};

export default Main;
