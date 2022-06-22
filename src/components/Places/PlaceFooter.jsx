/**
 * @filename PlaceFooter.jsx
 * @description 어디가개 탭 footer: 버튼 및 가격정보
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ButtonWrapper from '../Wrappers/ButtonWrapper';
import MiniPrice from './MiniPrice';

const PlaceFooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 8px 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.2);
`;

const PlaceFooter = ({ price, to, btnStr = '예약하러 가기', handleClick }) => {
  return (
    <PlaceFooterContainer>
      {price ? <MiniPrice price={price} /> : <div />}
      {to ? (
        <NavLink to={to}>
          <ButtonWrapper width="120px" color="white" bgColor="green-2">
            {btnStr}
          </ButtonWrapper>
        </NavLink>
      ) : (
        <ButtonWrapper
          width="120px"
          color="white"
          bgColor="green-2"
          onClick={handleClick}
        >
          {btnStr}
        </ButtonWrapper>
      )}
    </PlaceFooterContainer>
  );
};

export default PlaceFooter;
