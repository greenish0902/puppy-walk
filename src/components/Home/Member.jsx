/**
 * @filename Member.jsx
 * @description 회원 정보 입력 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import checkValid from '../../utils/checkValid';

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
  const formRef = useRef(null);
  const [done, setDone] = useState(false);
  const [valid, setValid] = useState({
    id: false,
    password: false,
    passwordRe: false,
  });
  const [msg, setMsg] = useState({
    id: '',
    password: '',
    passwordRe: '',
  });

  const handleBlur = event => {
    const field = event.target;
    try {
      checkValid(field, formRef);
      field.classList.remove('error');
      field.classList.add('success');
      updateStates(field.name, '');
    } catch (error) {
      const { field, msg } = error;
      field.classList.add('error');
      updateStates(field.name, msg);
    }
  };

  const updateStates = (name, newMsg) => {
    setMsg(prevMsg => ({ ...prevMsg, [name]: newMsg }));
    setValid(prev => ({ ...prev, [name]: newMsg === '' ? true : false }));
  };

  useEffect(() => {
    if (!Object.values(valid).every(cur => cur === true)) {
      return setDone(() => false);
    }
    setDone(() => true);
  }, [valid]);

  return (
    <MemberContainer>
      <SubTitle>회원 정보 입력</SubTitle>
      <form className="inputs" onBlur={handleBlur} ref={formRef}>
        <InputBox label="아이디 (이메일)" name="id" />
        <p className="msg">{msg.id}</p>
        <InputBox
          label="비밀번호"
          name="password"
          type="password"
          placeholder="8~16자 영문 대 소문자, 숫자, 특수문자"
        />
        <p className="msg">{msg.password}</p>
        <InputBox label="비밀번호 재입력" name="passwordRe" type="password" />
        <p className="msg">{msg.passwordRe}</p>
      </form>
      <NavWrapper>
        <div className="small">
          <Link to="/login" className="toLogin">
            로그인하러 가기
          </Link>
        </div>
        <div className="buttons">
          <Link to="/signup">
            <ButtonWrapper>이전</ButtonWrapper>
          </Link>
          {done ? (
            <Link to="/signup/user_info">
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
    </MemberContainer>
  );
};

export default Member;
