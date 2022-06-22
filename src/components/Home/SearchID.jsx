/**
 * @filename SearchID.jsx
 * @description 아이디 찾기 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HomeWrapper from '../../components/Wrappers/HomeWrapper';
import NavWrapper from '../Wrappers/NavWrapper';
import ButtonWrapper from '../Wrappers/ButtonWrapper';
import InputBox from './InputBox';

const SearchIDContainer = styled(HomeWrapper)`
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
`;

const SearchID = () => {
  return (
    <SearchIDContainer>
      <div className="inputs">
        <InputBox label="이름" name="name" />
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
              아이디 찾기
            </ButtonWrapper>
          </Link>
        </div>
      </NavWrapper>
    </SearchIDContainer>
  );
};

export default SearchID;
