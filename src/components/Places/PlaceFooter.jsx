import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ButtonWrapper from '../Wrappers/ButtonWrapper';
import Price from './Price';

const PlaceFooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 8px 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.2);
`;

const PlaceFooter = ({ price, to, btnStr = '예약하러 가기' }) => {
  return (
    <PlaceFooterContainer>
      <Price price={price} />
      <NavLink to={to}>
        <ButtonWrapper width="120px" color="white" bgColor="green-2">
          {btnStr}
        </ButtonWrapper>
      </NavLink>
    </PlaceFooterContainer>
  );
};

export default PlaceFooter;
