/**
 * @filename JSMyPurchaseList.jsx
 * @description 구매내역 페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import src from '../assets/img/dog.png'

import JMFooter from "../components/JMFooter";
import JMHeader from "../components/JMHeader";
import JSPurchaseGoods from '../components/JSPurchaseGoods';

const MyPurchaseListBox = styled.div`
  width: 360px;
  height: 600px;
  margin: 50px auto 55px auto;

  h3 {
    margin: 10px 0 20px 10px;
  }
  .nothingInPurchase {
    padding-top: 265px;
  }

  .nothingMessage {
    text-align: center;
    line-height: 20px;
    height: 20px;
  }

  .nothingButton {
    display: block;
    margin: 10px auto 0 auto;
    height: 50px;
    width: 120px;
  }
`

const JSMyPurchaseList = memo(() => {
  const data = true;
  return (
    <>
      <JMHeader>구매내역</JMHeader>
      <MyPurchaseListBox>
        {
          data ? (
            <div>
              <h3>구매 내역</h3>
              <JSPurchaseGoods src={src} title={"title"} price={"10,000"} date={"2022-06-19"}/>
              <JSPurchaseGoods src={src} title={"title"} price={"10,000"} date={"2022-06-18"}/>
            </div>
          ) : (
            <div className='nothingInPurchase'>
              <p className='nothingMessage'>구매내역이 없습니다.</p>
              <button  className='nothingButton' type='button'>애견용품 쇼핑하기</button>
            </div>
          )
        }
      </MyPurchaseListBox>
      <JMFooter/>
    </>
  );
});

export default JSMyPurchaseList;