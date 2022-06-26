import React from 'react';
import styled from "styled-components";
import Header from '../../components/JMHeader';
import Footer from '../../components/JMFooter';
import {Routes, Route} from 'react-router-dom';
import BottomBox from '../../components/Size/BottomBox';
import PuppyWalkHome from './JMPuppyWalkHome';
import JMPuppyWalkMate from "./JMPuppyWalkMate";

const PuppyWalkContainer = styled.div`
  background-color: red;
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
                <Route path='/' exact={true} element={<PuppyWalkHome />} />
                <Route path='/mate' element={<JMPuppyWalkMate />} />
            </Routes>
            <Footer />
        </PuppyWalkContainer>
    );
};

export default PuppyWalk;
