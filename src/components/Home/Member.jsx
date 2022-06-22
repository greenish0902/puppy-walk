/**
 * @filename Member.jsx
 * @description 회원 정보 입력 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SubTitle from '../Title/SubTitle';
import NavWrapper from '../Wrappers/NavWrapper';
import ButtonWrapper from '../Wrappers/ButtonWrapper';
import HomeWrapper from '../Wrappers/HomeWrapper';
import InputBox from './InputBox';

const MemberContainer = styled(HomeWrapper)`
  .inputs {
    margin-bottom: 120px;
  }
`;

const Member = () => {
  return (
    <MemberContainer>
      <SubTitle>회원 정보 입력</SubTitle>
      <div className="inputs">
        <InputBox label="아이디" name="id" />
        <InputBox label="비밀번호" name="password" type="password" />
        <InputBox label="비밀번호 재입력" name="password" type="password" />
      </div>
      <NavWrapper>
        <div className="small">
          <Link to="/login">로그인하러 가기</Link>
        </div>
        <div className="buttons">
          <Link to="/signup">
            <ButtonWrapper>이전</ButtonWrapper>
          </Link>
          <Link to="/signup/user_info">
            <ButtonWrapper>다음</ButtonWrapper>
          </Link>
        </div>
      </NavWrapper>
    </MemberContainer>
  );
};

export default Member;
