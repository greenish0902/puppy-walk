/**
 * @filename  PetInfo.jsx
 * @description 반려견 정보 입력 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import checkValid from '../../utils/checkValid';

import SubTitle from '../Title/SubTitle';
import InputBox from '../Home/InputBox';
import ButtonWrapper from '../Wrappers/ButtonWrapper';
import NavWrapper from '../Wrappers/NavWrapper';
import HomeWrapper from '../Wrappers/HomeWrapper';

const PetInfoContainer = styled(HomeWrapper)`
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

  .radioBtns {
    display: flex;
    align-items: center;
    label {
      width: 50%;
      display: flex;
      align-items: center;
      input {
        width: 24px;
        outline: none;
      }
    }
  }
`;

const PetInfo = () => {
  const [done, setDone] = useState(false);
  const [msg, setMsg] = useState({
    puppyName: '',
    breed: '',
    vaccination: '',
  });
  const [valid, setValid] = useState({
    puppyName: false,
    breed: false,
    vaccination: false,
  });
  const fields = ['puppyName', 'breed', 'vaccination'];

  const handleBlur = event => {
    const field = event.target;
    if (!fields.includes(field.name)) return;
    try {
      checkValid(field);
      updateStates(field.name, '');
    } catch (error) {
      const { field, msg } = error;
      updateStates(field.name, msg);
      console.error(error);
    }
  };

  const updateStates = (name, newMsg) => {
    setMsg(prevMsg => ({ ...prevMsg, [name]: newMsg }));
    setValid(prev => ({ ...prev, [name]: newMsg === '' ? true : false }));
  };

  useEffect(() => {
    setDone(() => fields.every(field => valid[field]));
  }, [valid]);

  return (
    <PetInfoContainer>
      <SubTitle>반려견 정보 입력</SubTitle>
      <form className="inputs" onBlur={handleBlur}>
        {/* 이름, 성별 */}
        <div className="row">
          <InputBox label="이름" name="puppyName" placeholder="한글, 영문" />
          <div className="genderBox">
            <InputBox label="성별" option></InputBox>
            <select name="gender">
              <option value="">성별</option>
              <option value="male">여아</option>
              <option value="female">남아</option>
              <option value="-">선택 안함</option>
            </select>
          </div>
        </div>
        <p className="msg">{msg.puppyName}</p>
        {/* 견종 */}
        <div onChange={handleBlur}>
          <InputBox label="견종" />
          <select name="breed" id="">
            <option value="">---</option>
            <option value="unknown">모름</option>
            <option value="김">김멍멍</option>
            <option value="이">이멍멍</option>
          </select>
        </div>
        <p className="msg">{msg.breed}</p>
        {/* 예방접종 여부 */}
        <div onChange={handleBlur}>
          <InputBox label="예방접종 여부" />
          <div className="radioBtns" required>
            <label>
              <input name="vaccination" value="unknown" type="radio" />
              모름
            </label>
            <label>
              <input name="vaccination" value="false" type="radio" />
              미접종
            </label>
            <label>
              <input name="vaccination" value="ing" type="radio" />
              접종 중
            </label>
            <label>
              <input name="vaccination" value="true" type="radio" />
              접종 완료
            </label>
          </div>
        </div>
        <p className="msg">{msg.vaccination}</p>
        {/* 생년월일: 년, 월, 일 */}
        <div>
          <InputBox label="생년월일" option />
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
        {/* 중성화 여부 */}
        <div>
          <InputBox label="중성화 여부" option />
          <div className="radioBtns">
            <label>
              <input type="radio" />
              중성화 전
            </label>
            <label>
              <input type="radio" />
              중성화 완료
            </label>
          </div>
        </div>
      </form>
      <NavWrapper>
        <div className="small">
          <Link to="/login">로그인하러 가기</Link>
        </div>
        <div className="buttons">
          <Link to="/signup/user_profile">
            <ButtonWrapper>이전</ButtonWrapper>
          </Link>
          {done ? (
            <Link to="/signup/pet_profile">
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
    </PetInfoContainer>
  );
};

export default PetInfo;
