/**
 * @filename  PetInfo.jsx
 * @description 반려견 정보 입력 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SubTitle from "../Title/SubTitle";
import InputBox from "../Home/InputBox";
import ButtonWrapper from "../Wrappers/ButtonWrapper";
import NavWrapper from "../Wrappers/NavWrapper";
import HomeWrapper from "../Wrappers/HomeWrapper";

const PetInfoContainer = styled(HomeWrapper)`
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
  return (
    <PetInfoContainer>
      <SubTitle>반려견 정보 입력</SubTitle>
      <div className="inputs">
        {/* 이름, 성별 */}
        <div className="row">
          <InputBox label="이름" name="name" />
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
        {/* 견종 */}
        <div>
          <InputBox label="견종" />
          <select name="" id="">
            <option value="unknown">모름</option>
            <option value="김">김멍멍</option>
            <option value="이">이멍멍</option>
          </select>
        </div>
        {/* 예방접종 여부 */}
        <div>
          <InputBox label="예방접종 여부" />
          <div className="radioBtns">
            <label>
              <input type="radio" />
              모름
            </label>
            <label>
              <input type="radio" />
              미접종
            </label>
            <label>
              <input type="radio" />
              접종 중
            </label>
            <label>
              <input type="radio" />
              접종 완료
            </label>
          </div>
        </div>
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
      </div>
      <NavWrapper>
        <div className="small">
          <Link to="/login">로그인하러 가기</Link>
        </div>
        <div className="buttons">
          <Link to="/signup/user_profile">
            <ButtonWrapper>이전</ButtonWrapper>
          </Link>
          <Link to="/signup/pet_profile">
            <ButtonWrapper>다음</ButtonWrapper>
          </Link>
        </div>
      </NavWrapper>
    </PetInfoContainer>
  );
};

export default PetInfo;
