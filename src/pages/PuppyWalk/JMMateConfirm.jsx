import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileCard from '../../components/PuppyWalk/ProfileCard';
import styled from 'styled-components';
import ButtonWrapper from '../../components/ButtonWrapper';
import '../../assets/scss/palette.scss';

const MateConfirmContainer = styled.div`
  position: relative;
  padding-bottom: 60px;

  .head-wrapper {
    position: relative;
    background-color: var(--color-green-2);

    h3 {
      font-size: 1.1em;
      text-align: center;
      padding: 5px 0;
    }
  }

  .big-profile {
    margin-top: 10px;
  }

  .btn-wrapper {
    width: 340px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding-top: 5px;
  }
`;

const MateConfirm = memo(() => {
  return (
    <MateConfirmContainer>
      <div className="head-wrapper">
        <h3>메이트 신청 관리</h3>
      </div>
      <div className="content-wrapper">
        <div className="big-profile">
          <ProfileCard
            nickname="닉네임입니다."
            sort="소형견"
            sortDetail="몰키"
            age="♀ 1살"
            character="호기심 많음, 활발함"
            neutering="O"
            owner="남, 30대"
            walktime="18:00~20:00(30분 이상)"
            memo="보정동 카페거리 주변 산책 자주해요~! 활발한 성격이라 같이 잘 뛰어놀 수 있는 친구를 찾고있어요!"
            location="용인시 기흥구 보정동"
          />
        </div>
        <div className="btn-wrapper">
          <ButtonWrapper
            width="80px"
            color="white"
            bgColor="green-2"
            height="30px"
            padding="0"
          >
            미니홈피
          </ButtonWrapper>
          <ButtonWrapper
            width="90px"
            color="white"
            bgColor="green-2"
            height="30px"
            padding="0"
          >
            메시지 보내기
          </ButtonWrapper>
          <ButtonWrapper
            width="80px"
            color="white"
            bgColor="green-1"
            height="30px"
            padding="0"
            onClick={e => {
              window.confirm('메이트 신청을 수락하시겠습니까?');
            }}
          >
            메이트 수락
          </ButtonWrapper>
          <ButtonWrapper
            width="80px"
            color="white"
            bgColor="red"
            height="30px"
            padding="0"
            onClick={e => {
              window.confirm('메이트 신청을 거절하시겠습니까?');
            }}
          >
            메이트 거절
          </ButtonWrapper>
        </div>
      </div>
      
      <div className="content-wrapper">
        <div className="big-profile">
          <ProfileCard
            nickname="닉네임입니다."
            sort="소형견"
            sortDetail="몰키"
            age="♀ 1살"
            character="호기심 많음, 활발함"
            neutering="O"
            owner="남, 30대"
            walktime="18:00~20:00(30분 이상)"
            memo="보정동 카페거리 주변 산책 자주해요~! 활발한 성격이라 같이 잘 뛰어놀 수 있는 친구를 찾고있어요!"
            location="용인시 기흥구 보정동"
          />
        </div>
        <div className="btn-wrapper">
          <ButtonWrapper
            width="80px"
            color="white"
            bgColor="green-2"
            height="30px"
            padding="0"
          >
            미니홈피
          </ButtonWrapper>
          <ButtonWrapper
            width="90px"
            color="white"
            bgColor="green-2"
            height="30px"
            padding="0"
          >
            메시지 보내기
          </ButtonWrapper>
          <ButtonWrapper
            width="80px"
            color="white"
            bgColor="green-1"
            height="30px"
            padding="0"
            onClick={e => {
              window.confirm('메이트 신청을 수락하시겠습니까?');
            }}
          >
            메이트 수락
          </ButtonWrapper>
          <ButtonWrapper
            width="80px"
            color="white"
            bgColor="red"
            height="30px"
            padding="0"
            onClick={e => {
              window.confirm('메이트 신청을 거절하시겠습니까?');
            }}
          >
            메이트 거절
          </ButtonWrapper>
        </div>
      </div>
      
      <div className="content-wrapper">
        <div className="big-profile">
          <ProfileCard
            nickname="닉네임입니다."
            sort="소형견"
            sortDetail="몰키"
            age="♀ 1살"
            character="호기심 많음, 활발함"
            neutering="O"
            owner="남, 30대"
            walktime="18:00~20:00(30분 이상)"
            memo="보정동 카페거리 주변 산책 자주해요~! 활발한 성격이라 같이 잘 뛰어놀 수 있는 친구를 찾고있어요!"
            location="용인시 기흥구 보정동"
          />
        </div>
        <div className="btn-wrapper">
          <ButtonWrapper
            width="80px"
            color="white"
            bgColor="green-2"
            height="30px"
            padding="0"
          >
            미니홈피
          </ButtonWrapper>
          <ButtonWrapper
            width="90px"
            color="white"
            bgColor="green-2"
            height="30px"
            padding="0"
          >
            메시지 보내기
          </ButtonWrapper>
          <ButtonWrapper
            width="80px"
            color="white"
            bgColor="green-1"
            height="30px"
            padding="0"
            onClick={e => {
              window.confirm('메이트 신청을 수락하시겠습니까?');
            }}
          >
            메이트 수락
          </ButtonWrapper>
          <ButtonWrapper
            width="80px"
            color="white"
            bgColor="red"
            height="30px"
            padding="0"
            onClick={e => {
              window.confirm('메이트 신청을 거절하시겠습니까?');
            }}
          >
            메이트 거절
          </ButtonWrapper>
        </div>
      </div>
    </MateConfirmContainer>
  );
});

export default MateConfirm;
