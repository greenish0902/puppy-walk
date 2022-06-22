/**
 * @filename Agreements.jsx
 * @description 이용약관 동의 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import styled from 'styled-components';
import { Link, Routes, Route } from 'react-router-dom';

import SubTitle from '../Title/SubTitle';
import ButtonWrapper from '../Wrappers/ButtonWrapper';
import NavWrapper from '../Wrappers/NavWrapper';
import HomeWrapper from '../Wrappers/HomeWrapper';

const AgreementsContainer = styled(HomeWrapper)`
  .agreements {
    margin: 12px;
    form {
      margin: 12px 0;
      padding: 12px;
      display: flex;
      flex-direction: column;
      background-color: var(--color-light-gray);
      border-radius: 12px;

      label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        line-height: 2;

        .checkbox {
          margin-right: 8px;
          font-weight: bold;
          color: var(--color-text-gray);
          &.required {
            color: var(--color-green-2);
          }
        }
      }
    }

    .all {
      font-weight: bold;
      input {
        margin-right: 8px;
      }
    }
  }
`;

const Agreements = () => {
  return (
    <AgreementsContainer>
      <SubTitle>이용약관</SubTitle>
      <div className="agreements">
        <form>
          <label htmlFor="agreement of utilization">
            <span>
              <span className="checkbox required">[필수]</span>
              이용약관 동의
            </span>
            <input type="checkbox" />
          </label>
          <label htmlFor="personal information">
            <span>
              <span className="checkbox required">[필수]</span>
              개인정보 수집 및 이용동의
            </span>
            <input type="checkbox" />
          </label>
          <label htmlFor="information provide">
            <span>
              <span className="checkbox required">[필수]</span>제 3자 정보제공
              동의
            </span>
            <input type="checkbox" />
          </label>
          <label htmlFor="marketing">
            <span>
              <span className="checkbox">[선택]</span>
              마케팅정보활용 동의
            </span>
            <input type="checkbox" />
          </label>
        </form>
        <label className="all">
          <input type="checkbox" />
          이용약관 전체 동의
        </label>
      </div>
      <NavWrapper>
        <div className="small">
          <Link to="/login">로그인하러 가기</Link>
        </div>
        <div className="buttons">
          <Link to="/">
            <ButtonWrapper>이전</ButtonWrapper>
          </Link>
          <Link to="member">
            <ButtonWrapper>다음</ButtonWrapper>
          </Link>
        </div>
      </NavWrapper>
    </AgreementsContainer>
  );
};

export default Agreements;
