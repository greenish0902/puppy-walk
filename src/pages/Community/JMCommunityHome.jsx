import React from 'react';
import CommunityHomeBunge from '../../components/Community/CommunityHome/JMCommunityHomeBunge';
import CommunityHomeList from '../../components/Community/CommunityHome/JMCommunityHomeList';

const CommunityHome = () => {
  return (
    <div>
      <CommunityHomeBunge />
      <CommunityHomeList board="general" link="general">
        😁 자유게시판
      </CommunityHomeList>
      <CommunityHomeList board="kin" link="kin">
        🎓 지식in
      </CommunityHomeList>
      <CommunityHomeList board="course" link="course_recommend">
        🌺 산책코스추천
      </CommunityHomeList>
    </div>
  );
};

export default CommunityHome;
