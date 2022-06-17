import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SubTitle from "../../components/Title/SubTitle";
import HomeWrapper from "../../components/Wrappers/HomeWrapper";
import NavWrapper from "../Wrappers/NavWrapper";
import ButtonWrapper from "../Wrappers/ButtonWrapper";
import InputBox from "./InputBox";

const SearchPWContainer = styled(HomeWrapper)`
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
`;

const SearchPW = () => {
  return (
    <SearchPWContainer>
      <div className="inputs">
        <InputBox label="아이디 (이메일)" name="id" />
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
      </div>
      <NavWrapper>
        <div className="small">
          <Link to="/signup">회원가입하러 가기</Link>
        </div>
        <div className="buttons">
          <Link to="/">
            <ButtonWrapper>홈</ButtonWrapper>
          </Link>
          <Link to="/login">
            <ButtonWrapper color="white" bgColor="green-2">
              비밀번호 찾기
            </ButtonWrapper>
          </Link>
        </div>
      </NavWrapper>
    </SearchPWContainer>
  );
};

export default SearchPW;
