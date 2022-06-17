/**
 * @filename Login.jsx
 * @description 로그인 페이지
 * @author 서소희 greenish0902@gmail.com
 */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Title from "../../components/Title/Title";
import SubTitle from "../../components/Title/SubTitle";
import FrameWrapper from "../../components/Wrappers/FrameWrapper";
import ButtonWrapper from "../../components/Wrappers/ButtonWrapper";

const LoginContainer = styled(FrameWrapper)`
  justify-content: space-between;
  position: relative;
  form {
    width: 216px;

    .box {
      width: 100%;
      display: flex;
      flex-direction: column;

      input {
        margin-bottom: 4px;
        padding: 8px;
        border: none;
        background-color: var(--color-light-gray);
      }
    }
    .etc {
      padding: 8px 0;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }

    .loginBtn {
      color: #fff;
      background-color: var(--color-green-2);
    }
  }

  .bottom {
    width: 216px;
    display: flex;
    flex-direction: column;
    p {
      margin: 8px 0;
      text-align: center;
      font-size: 12px;
    }
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <LoginContainer>
      <SubTitle>반갑습니다!</SubTitle>
      <Title />
      <form onSubmit={handleSubmit}>
        <div className="box">
          <input type="text" name="id" placeholder="아이디 (이메일)" />
          <input type="password" name="password" placeholder="비밀번호" />
        </div>
        <div className="etc">
          <Link to="/search/id">아이디/비밀번호 찾기</Link>
          <Link to="/signup">회원가입</Link>
        </div>
        <ButtonWrapper width="100%" className="loginBtn">
          로그인
        </ButtonWrapper>
      </form>
      <div className="bottom">
        <p>다른 방법으로 로그인</p>
        <div>
          <ButtonWrapper width="48%">naver</ButtonWrapper>
          <ButtonWrapper width="48%">kakao</ButtonWrapper>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
