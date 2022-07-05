/**
 * @filename Agreements.jsx
 * @description 이용약관 동의 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

    .bottom {
      .all {
        display: flex;
        align-items: center;
        font-weight: bold;
        input {
          margin-right: 8px;
        }
      }
    }
  }
`;

const Agreements = () => {
  const [done, setDone] = useState(false);
  const [status, setStatus] = useState({
    utilization: false,
    personal: false,
    provide: false,
    marketing: false,
  });

  const handleCheck = event => {
    const { name, checked } = event.target;
    if (name === 'all') {
      setStatus(() => ({
        utilization: checked,
        personal: checked,
        provide: checked,
        marketing: checked,
      }));
    } else setStatus(status => ({ ...status, [name]: checked }));
  };

  useEffect(() => {
    if (status.utilization && status.personal && status.provide) {
      setDone(() => true);
    } else setDone(() => false);
  }, [status]);

  return (
    <AgreementsContainer>
      <SubTitle>이용약관</SubTitle>
      <div className="agreements" onChange={handleCheck}>
        <form>
          <label htmlFor="agreement of utilization">
            <span>
              <span className="checkbox required">[필수]</span>
              이용약관 동의
            </span>
            <input
              type="checkbox"
              name="utilization"
              checked={status.utilization}
              readOnly
            />
          </label>
          <label htmlFor="personal information">
            <span>
              <span className="checkbox required">[필수]</span>
              개인정보 수집 및 이용동의
            </span>
            <input
              type="checkbox"
              name="personal"
              checked={status.personal}
              readOnly
            />
          </label>
          <label htmlFor="information provide">
            <span>
              <span className="checkbox required">[필수]</span>제 3자 정보제공
              동의
            </span>
            <input
              type="checkbox"
              name="provide"
              checked={status.provide}
              readOnly
            />
          </label>
          <label htmlFor="marketing">
            <span>
              <span className="checkbox">[선택]</span>
              마케팅정보활용 동의
            </span>
            <input
              type="checkbox"
              name="marketing"
              checked={status.marketing}
              readOnly
            />
          </label>
        </form>
        <div className="bottom">
          <label className="all">
            <input type="checkbox" name="all" readOnly />
            이용약관 전체 동의
          </label>
        </div>
      </div>
      <NavWrapper>
        <div className="small">
          <Link to="/login" className="toLogin">
            로그인하러 가기
          </Link>
        </div>
        <div className="buttons">
          <Link to="/">
            <ButtonWrapper>이전</ButtonWrapper>
          </Link>
          {done ? (
            <Link to="member">
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
    </AgreementsContainer>
  );
};

export default Agreements;
