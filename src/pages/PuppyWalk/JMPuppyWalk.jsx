/**
 * @filename PuppyWalk.jsx
 * @description 산책하개 라우팅 페이지
 * @author 박정모 (oooperbjm@gmail.com)
 */

import React from 'react';
import styled from 'styled-components';
import Header from '../../components/JMHeader';
import Footer from '../../components/JMFooter';
import { Routes, Route } from 'react-router-dom';
import PuppyWalkHome from './JMPuppyWalkHome';
import PuppyWalkMate from './JMPuppyWalkMate';
import MateManage from './JMMateManage';
import MateConfirm from './JMMateConfirm';

const PuppyWalkContainer = styled.div`
  width: 360px !important;
  height: 600px;
  margin: auto;
  padding-top: 40px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const PuppyWalk = () => {
  return (
    <PuppyWalkContainer>
      <Header>같이 산책하개</Header>
      <Routes>
        <Route path="/" exact={true} element={<PuppyWalkHome />} />
        <Route path="/mate" element={<PuppyWalkMate />} />
        <Route path="/matemanage" element={<MateManage />} />
        <Route path="/mateconfirm" element={<MateConfirm />} />

      </Routes>
      <Footer />
    </PuppyWalkContainer>
  );
};

export default PuppyWalk;
