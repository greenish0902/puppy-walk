/**
 * @filename JSMyPurchaseList.jsx
 * @description 내 구매 페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import JMFooter from "../components/JMFooter";
import JMHeader from "../components/JMHeader";

const MyPurchasePageBox = styled.div`
  width: 360px;
  height: 600px;
  margin: 50px auto 55px auto;

  h2 {
    margin: 10px 0 20px 10px;
  }

  a {
    display:block;
    text-decoration: none;
    color: black;
    margin-left: 30px;
    font-weight: bold;
    font-size: 18px;
    width: 320px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`
const JSMyPurchasePage = memo(() => {
  return (
    <>
      <JMHeader>내 구매</JMHeader>
      <MyPurchasePageBox>
        <h2>내 구매</h2>
        <NavLink className='cart' to="/cart">장바구니</NavLink>
        <NavLink className='purchase' to="/purchaselist">구매 내역</NavLink>
      </MyPurchasePageBox>
      <JMFooter/>
    </>
  );
});

export default JSMyPurchasePage;