import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/JMHeader';
import Footer from '../../components/JMFooter';
import '../../assets/scss/palette.scss';
import CommunityList from './JMCommunityList';
import CommunityRead from './JMCommunityRead';
import CommunityHome from './JMCommunityHome';
import Post from './JMPost';

const CommunityContainer = styled.div`
  background-color: var(--color-light-gray);
  width: 360px;
  height: 600px;
  margin: auto;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Padding = () => {
  return <div style={{ paddingBottom: '45px' }} />;
};

const Community = () => {
  return (
    <CommunityContainer>
      <Header>커뮤니티</Header>
      <Routes>
        {/* CommunityList에 props 전달 */}
        <Route path="/" exact={true} element={<CommunityHome />} />
        <Route path="/general" element={<CommunityList />} />
        <Route path="/kin" element={<CommunityList />} />
        <Route
          path="/course"
          element={<CommunityList />}
        />
        <Route
          path="/general/:postNum"
          element={<CommunityRead tab="general" />}
        />
        <Route
          path="/course/:postNum"
          element={<CommunityRead tab="course" />}
        />
        <Route
          path="/kin/:postNum"
          element={<CommunityRead tab="kin" />}
        />
      </Routes>
      <Padding />
      <Footer />
    </CommunityContainer>
  );
};

export default Community;
