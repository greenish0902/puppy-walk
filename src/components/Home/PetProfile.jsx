/**
 * @filename PetProfile.jsx
 * @description 반려견 프로필 정보 입력 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";

import SubTitle from "../Title/SubTitle";
import InputBox from "../Home/InputBox";
import ButtonWrapper from "../Wrappers/ButtonWrapper";
import NavWrapper from "../Wrappers/NavWrapper";
import HomeWrapper from "../Wrappers/HomeWrapper";

const PetProfileContainer = styled(HomeWrapper)`
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
        Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
        "Noto Sans KR", "Malgun Gothic", sans-serif;
    }
  }
`;

const PetProfile = () => {
  return (
    <PetProfileContainer>
      <SubTitle>반려견 프로필 정보 입력</SubTitle>
      <div className="profileImg"></div>
      <div className="inputs">
        <InputBox label="반려견 프로필 소개" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="20자 이상 입력해주세요."
        />
      </div>
      <NavWrapper>
        <div className="small">
          <Link to="/login">다른 반려견 추가하러 가기</Link>
        </div>
        <div className="buttons">
          <Link to="/signup/user_info">
            <ButtonWrapper>이전</ButtonWrapper>
          </Link>
          <Link to="/">
            <ButtonWrapper color="white" bgColor="green-2">
              완료하기
            </ButtonWrapper>
          </Link>
        </div>
      </NavWrapper>
    </PetProfileContainer>
  );
};

export default PetProfile;
