import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/JMHeader';
import Footer from '../../components/JMFooter';
import '../../assets/scss/palette.scss';
import CommunityHome from './JMCommunityHome';
import CommunityGeneral from './JMCommunityGeneral';
import CommunityKin from './JMCommunityKin';
import CommunityCourse from './JMCommunityCourse';
import Post from './JMPost';

const CommunityContainer = styled.div`
  background-color: var(--color-light-gray);
  width: 360px;
  margin: auto;
`;

const Padding = () => {
  return <div style={{ paddingBottom: '45px' }} />;
};

const Community = () => {
  return (
    <CommunityContainer>
      <Header>커뮤니티</Header>
      <Routes>
        <Route path="/community" exact={true} element={<CommunityHome />} />
        <Route path="/community/general" element={<CommunityGeneral />} />
        <Route path="/community/kin" element={<CommunityKin />} />
        <Route
          path="/community/course_recommend"
          element={<CommunityCourse />}
        />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Padding />
      <Footer />
    </CommunityContainer>
  );
};

export default Community;
