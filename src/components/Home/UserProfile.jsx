/**
 * @filename UserProfile.jsx
 * @description 사용자 프로필 정보 입력 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SubTitle from '../Title/SubTitle';
import InputBox from '../Home/InputBox';
import ButtonWrapper from '../Wrappers/ButtonWrapper';
import NavWrapper from '../Wrappers/NavWrapper';
import HomeWrapper from '../Wrappers/HomeWrapper';

const UserProfileContainer = styled(HomeWrapper)`
  .profileImg {
    height: 100%;
    background-color: aliceblue;
  }
  .inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    textarea {
      margin-top: 4px;
      padding: 12px;
      border: 1px solid var(--color-green-1);
      border-radius: 4px;
      resize: none;
      outline: none;
      line-height: 1.5;
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
        Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
        'Noto Sans KR', 'Malgun Gothic', sans-serif;
    }
  }
`;

const UserProfile = () => {
  const [done, setDone] = useState(false);

  const handleChange = event => {
    if (event.target.value.length > 0 === done) return;
    setDone(() => event.target.value.length > 0);
  };

  return (
    <UserProfileContainer>
      <SubTitle>프로필 정보 입력</SubTitle>
      <div className="profileImg"></div>
      <div className="inputs">
        <InputBox label="프로필 소개" />
        <textarea
          onChange={handleChange}
          cols="30"
          rows="10"
          placeholder="20자 이상 입력해주세요."
        />
      </div>
      <NavWrapper>
        <div className="small">
          <Link to="/login">로그인하러 가기</Link>
        </div>
        <div className="buttons">
          <Link to="/signup/user_info">
            <ButtonWrapper>이전</ButtonWrapper>
          </Link>
          {done ? (
            <Link to="/signup/pet_info">
              <ButtonWrapper color="white" bgColor="green-2">
                다음
              </ButtonWrapper>
            </Link>
          ) : (
            <Link to="">
              <ButtonWrapper>다음</ButtonWrapper>
            </Link>
          )}
        </div>
      </NavWrapper>
    </UserProfileContainer>
  );
};

export default UserProfile;