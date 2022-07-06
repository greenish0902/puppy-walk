/**
 * @filename UserInfo.jsx
 * @description 사용자 정보 입력 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import checkValid from '../../utils/checkValid';

import SubTitle from '../Title/SubTitle';
import InputBox from '../Home/InputBox';
import ButtonWrapper from '../Wrappers/ButtonWrapper';
import NavWrapper from '../Wrappers/NavWrapper';
import HomeWrapper from '../Wrappers/HomeWrapper';
import BottomBox from '../Size/BottomBox';
import MapContainer from './MapContainer';

const UserInfoContainer = styled(HomeWrapper)`
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .genderBox {
      margin-left: 4px;
      width: 32%;
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
  const codeRef = useRef(null);
  const [done, setDone] = useState(false);
  const [valid, setValid] = useState({
    name: false,
    birthYear: false,
    birthMonth: false,
    birthDay: false,
    contact: false,
    code: false,
  });
  const [msg, setMsg] = useState({
    name: '',
    birthInfos: '',
    contact: '',
    code: '',
  });
  const fields = [
    'name',
    'birthYear',
    'birthMonth',
    'birthDay',
    'contact',
    'code',
  ];

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
    <UserInfoContainer>
      <SubTitle>사용자 정보 입력</SubTitle>
      <form className="inputs" onBlur={handleBlur}>
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
        <p className="msg">{msg.name}</p>
        {/* 닉네임 */}
        <InputBox label="닉네임" name="nickname" className="row" option />
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
          <p className="msg">{msg.birthInfos}</p>
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
        {/* 주소 */}
        <InputBox label="주소" option />
        <div className="address">
          <div className="row">
            <input name="addrCode" type="text" placeholder="우편번호" />
            <input name="addrMain" type="text" placeholder="주소" />
          </div>
          <input name="addrDetails" type="text" placeholder="상세주소" />
        </div>
        {/* 카카오맵 */}
        <MapContainer />
      </form>
      <NavWrapper>
        <div className="small">
          <Link to="/login">로그인하러 가기</Link>
        </div>
        <div className="buttons">
          <Link to="/signup/member">
            <ButtonWrapper>이전</ButtonWrapper>
          </Link>
          {done ? (
            <Link to="/signup/user_profile">
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
      <BottomBox />
    </UserInfoContainer>
  );
};

export default UserInfo;
