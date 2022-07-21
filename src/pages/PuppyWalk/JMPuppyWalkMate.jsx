/**
 * @filename PuppyWalkMate.jsx
 * @description 메이트신청 페이지
 * @author 박정모 (oooperbjm@gmail.com)
 */

import React from 'react';
import styled from 'styled-components';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/palette.scss';
import ProfileCard from '../../components/PuppyWalk/ProfileCard';
import SmallProfileCard from '../../components/PuppyWalk/SmallProfileCard';
import ButtonWrapper from '../../components/ButtonWrapper';

const PuppyWalkMateContainer = styled.div`
  width: 360px;
  padding-bottom: 50px;

  .content-container {
    margin: 5px;
    position: relative;

    .btn-manage {
      font-size: 0.7em;
      position: absolute;
      top: 75px;
      right: 10px;
    }

    hr {
      border: none;
      border-top: 1px solid var(--color-text-gray);
    }

    h3 {
      font-size: 1.1em;
      text-align: center;
      padding: 5px 0;
    }

    .btn-wrapper {
      display: flex;
      justify-content: center;
      padding-top: 5px;

      button {
        margin: 0 5px;
      }
    }

    .location-filter {
      display: flex;
      position: relative;
      width: 360px;

      p {
        font-size: 0.7em;
      }

      input,
      svg {
        width: 80px;
        position: absolute;
        right: 25px;
        height: 15px;
      }

      svg {
        right: -25px;
        height: 13px;
        top: 1px;
        cursor: pointer;
      }
    }
  }

  h4 {
    text-align: left;
    font-size: 1.1em;
    padding: 10px 0;

    span {
      background-color: var(--color-green-2);
    }
  }

  .small-profile {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const PuppyWalkMate = () => {
  return (
    <PuppyWalkMateContainer>
      <div className="content-container">
        <h3>메이트 탐색</h3>
        <div className="location-filter">
          <p>지역필터 </p>
          <p> &gt; 경기도 &gt; 용인시 &gt; 기흥구 &gt; 보정동 </p>
          <input type="text" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <hr />
        <NavLink to="/puppywalk/matemanage">
          <ButtonWrapper
            className="btn-manage"
            width="80px"
            color="white"
            bgColor="green-2"
            height="30px"
            padding="0"
          >
            메이트 관리
          </ButtonWrapper>
        </NavLink>
        <h4>
          꾸준히 함께할 <br /> <span>산책메이트</span>를 찾아보세요
        </h4>
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
            bgColor="green-2"
            height="30px"
            padding="0"
          >
            메이트 신청
          </ButtonWrapper>
        </div>

        <br />
        <hr />
        <div className="small-profile">
          {/* 반복문 처리 */}
          <SmallProfileCard
            nickname="닉네임입니다."
            sort="소형견"
            age="♀ 1살"
            owner="남, 30대"
            walktime="18:00~20:00"
            location="용인시 기흥구 보정동"
          />
          <SmallProfileCard
            nickname="닉네임입니다."
            sort="소형견"
            age="♀ 1살"
            owner="남, 30대"
            walktime="18:00~20:00"
            location="용인시 기흥구 보정동"
          />
          <SmallProfileCard
            nickname="닉네임입니다."
            sort="소형견"
            age="♀ 1살"
            owner="남, 30대"
            walktime="18:00~20:00"
            location="용인시 기흥구 보정동"
          />
          <SmallProfileCard
            nickname="닉네임입니다."
            sort="소형견"
            age="♀ 1살"
            owner="남, 30대"
            walktime="18:00~20:00"
            location="용인시 기흥구 보정동"
          />
          <SmallProfileCard
            nickname="닉네임입니다."
            sort="소형견"
            age="♀ 1살"
            owner="남, 30대"
            walktime="18:00~20:00"
            location="용인시 기흥구 보정동"
          />
          <SmallProfileCard
            nickname="닉네임입니다."
            sort="소형견"
            age="♀ 1살"
            owner="남, 30대"
            walktime="18:00~20:00"
            location="용인시 기흥구 보정동"
          />
        </div>
      </div>
    </PuppyWalkMateContainer>
  );
};

export default PuppyWalkMate;
