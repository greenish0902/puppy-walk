import React from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";

import SubTitle from "../Title/SubTitle";
import InputBox from "../Home/InputBox";
import ButtonWrapper from "../Wrappers/ButtonWrapper";
import NavWrapper from "../Wrappers/NavWrapper";
import HomeWrapper from "../Wrappers/HomeWrapper";
import BottomBox from "../Size/BottomBox";

const UserInfoContainer = styled(HomeWrapper)`
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .genderBox {
      margin-left: 4px;
      width: 30%;
      display: flex;
      flex-direction: column;
    }
  }

  .birthInfos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input,
    select {
      width: 32% !important;
    }
  }

  .contactBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      margin-left: 4px;
      padding: 8px;
      width: 40%;
      border: none;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
    }
  }

  .address {
    input:first-child {
      width: 40%;
      margin-right: 4px;
    }
  }
`;

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <SubTitle>사용자 정보 입력</SubTitle>
      <div className="inputs">
        {/* 이름, 성별 */}
        <div className="row">
          <InputBox label="이름" name="name" />
          <div className="genderBox">
            <InputBox label="성별" option />
            <select name="gender">
              <option value="">성별</option>
              <option value="male">남자</option>
              <option value="female">여자</option>
              <option value="-">선택 안함</option>
            </select>
          </div>
        </div>
        {/* 닉네임 */}
        <InputBox
          label="닉네임"
          name="name"
          placeholder="2글자 이상 8글자 이하"
          className="row"
        />
        {/* 생년월일: 년, 월, 일 */}
        <div>
          <InputBox label="생년월일" />
          <div className="birthInfos">
            <input name="birthYear" placeholder="년(4자)" />
            <select name="birthMonth">
              <option value="">월</option>
              {[...new Array(12)].map((_, index) => (
                <option value={index + 1} key={index}>
                  {index + 1}
                </option>
              ))}
            </select>
            <input name="birthDay" placeholder="일" />
          </div>
        </div>
        {/* 전화번호: 지역번호, 전화번호, 인증번호 */}
        <div>
          <InputBox label="전화번호" />
          <select name="countryNum">
            <option value="korea">대한민국 +82</option>
            <option value="japan">일본 +81</option>
            <option value="china">중국 +86</option>
          </select>
          <div className="contactBox">
            <input name="contact" type="text" placeholder="전화번호 입력" />
            <button className="contactBtn">인증번호 받기</button>
          </div>
          <input
            name="code"
            type="text"
            placeholder="인증번호를 입력하세요"
            disabled
          />
        </div>
        {/* 주소 */}
        <InputBox label="주소" option />
        <div className="address">
          <div className="row">
            <input type="text" placeholder="우편번호" />
            <input type="text" placeholder="주소" />
          </div>
          <input type="text" placeholder="상세주소" />
        </div>
        {/* 카카오맵 */}
      </div>
      <NavWrapper>
        <div className="small">
          <Link to="/login">로그인하러 가기</Link>
        </div>
        <div className="buttons">
          <Link to="/signup/member">
            <ButtonWrapper>이전</ButtonWrapper>
          </Link>
          <Link to="/signup/user_profile">
            <ButtonWrapper>다음</ButtonWrapper>
          </Link>
        </div>
      </NavWrapper>
      <BottomBox />
    </UserInfoContainer>
  );
};

export default UserInfo;
