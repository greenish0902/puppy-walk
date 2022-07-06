/**
 * @filename Login.jsx
 * @description 로그인 페이지
 * @author 서소희 greenish0902@gmail.com
 */

import React, { useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../utils/AuthContextProvider';
import checkValid from '../../utils/checkValid';

import Title from '../../components/Title/Title';
import SubTitle from '../../components/Title/SubTitle';
import FrameWrapper from '../../components/Wrappers/FrameWrapper';
import ButtonWrapper from '../../components/Wrappers/ButtonWrapper';
import Modal from '../../components/Common/Modal';

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
  const formRef = useRef(null);
  const [error, setError] = useState(false);
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    try {
      const { id, password } = formRef.current;
      checkValid(id);
      checkValid(password);
      // db에서 password check, 실패시 에러 객체 반환
      signin(id.value);
      navigate('/');
    } catch (error) {
      setError(() => error);
    }
  };

  const handleModalBtnClick = event => {
    setError(() => false);
  };

  return (
    <LoginContainer>
      <Modal
        visible={error}
        msg={error.msg}
        handleClick={handleModalBtnClick}
      />
      <SubTitle>반갑습니다!</SubTitle>
      <Title />
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="box">
          <input type="text" name="id" placeholder="아이디 (이메일)" />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            autoComplete="off"
          />
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