/**
 * @filename SearchPW.jsx
 * @description 비밀번호 찾기 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import checkValid from '../../utils/checkValid';

import HomeWrapper from '../../components/Wrappers/HomeWrapper';
import NavWrapper from '../Wrappers/NavWrapper';
import ButtonWrapper from '../Wrappers/ButtonWrapper';
import InputBox from './InputBox';

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
  const codeRef = useRef(null);
  const [done, setDone] = useState(false);
  const [valid, setValid] = useState({
    id: false,
    contact: false,
    code: false,
  });
  const [msg, setMsg] = useState({
    id: '',
    contact: '',
    code: '',
  });
  const fields = ['id', 'contact', 'code'];

  const handleBlur = event => {
    const field = event.target;
    if (!fields.includes(field.name)) return;
    try {
      checkValid(field);
      field.classList.remove('error');
      updateStates(field.name, '');
    } catch (error) {
      const { field, msg } = error;
      field.classList.add('error');
      updateStates(field.name, msg);
    }
  };

  const updateStates = (name, newMsg) => {
    if (name.includes('birth')) {
      setMsg(prevMsg => ({ ...prevMsg, birthInfos: newMsg }));
    } else setMsg(prevMsg => ({ ...prevMsg, [name]: newMsg }));
    setValid(prev => ({ ...prev, [name]: newMsg === '' ? true : false }));
  };

  const getCode = event => {
    event.preventDefault();
    if (!valid.contact) return;
    codeRef.current.disabled = false;
  };

  useEffect(() => {
    setDone(() => fields.every(name => valid[name] === true));
  }, [valid]);
  return (
    <SearchPWContainer>
      <form className="inputs" onBlur={handleBlur}>
        <InputBox label="아이디 (이메일)" name="id" />
        {/* 전화번호: 지역번호, 전화번호, 인증번호 */}
        <p className="msg">{msg.id}</p>
        <div>
          <InputBox label="전화번호" />
          <select name="countryNum">
            <option value="korea">대한민국 +82</option>
            <option value="japan">일본 +81</option>
            <option value="china">중국 +86</option>
          </select>
          <div className="contactBox">
            <input name="contact" type="text" placeholder="전화번호 입력" />
            <button className="contactBtn" onClick={getCode}>
              인증번호 받기
            </button>
          </div>
          <input
            ref={codeRef}
            name="code"
            type="text"
            placeholder="인증번호를 입력하세요"
            disabled
          />
        </div>
        <p className="msg">{msg.contact}</p>
        <p className="msg">{msg.code}</p>
      </form>
      <NavWrapper>
        <div className="small">
          <Link to="/signup">회원가입하러 가기</Link>
        </div>
        <div className="buttons">
          <Link to="/">
            <ButtonWrapper>홈</ButtonWrapper>
          </Link>
          {done ? (
            <Link to="/login">
              <ButtonWrapper color="white" bgColor="green-2">
                비밀번호 찾기
              </ButtonWrapper>
            </Link>
          ) : (
            <Link to="/login">
              <ButtonWrapper>비밀번호 찾기</ButtonWrapper>
            </Link>
          )}
        </div>
      </NavWrapper>
    </SearchPWContainer>
  );
};

export default SearchPW;
