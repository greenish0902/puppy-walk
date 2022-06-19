import React from 'react';
import CommunityHomeBunge from '../../components/CommunityHome/JMCommunityHomeBunge';
import CommunityHomeList from '../../components/CommunityHome/JMCommunityHomeList';

const CommunityHome = () => {
  return (
    <div>
      <CommunityHomeBunge />
      <CommunityHomeList board="자유게시판" link="general">
        😁 자유게시판
      </CommunityHomeList>
      <CommunityHomeList board="지식in" link="kin">
        🎓 지식in
      </CommunityHomeList>
      <CommunityHomeList board="산책코스추천" link="course_recommend">
        🌺 산책코스추천
      </CommunityHomeList>
    </div>
  );
};

export default CommunityHome;
