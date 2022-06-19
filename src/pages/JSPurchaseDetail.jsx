/**
 * @filename JSPurchaseDetail.jsx
 * @description 구매 내역 상세보기
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import {useParams} from 'react-router-dom'
import styled from "styled-components"

import JSPayGoods from '../components/JSPayGoods';
import JMFooter from "../components/JMFooter";
import JMHeader from "../components/JMHeader";

const PurchaseDetailBox = styled.div`
  height: 600px;
  width: 360px;
  margin: 40px auto 55px auto;
  
  h3 {
    margin: 10px 0 10px 10px;
  }

  span {
    display: block;
    width: 300px;
    margin: auto;
    margin-top: 15px;
  }

  .info {
    width: 300px;
    margin: auto;

    p{
      font-size: 15px;
      padding-bottom: 5px;
      &:first-child{
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
      }
    }
  }

  .buttonBox {
    width: 360px;
    height: 40px;
    position: relative;
    margin-top: 40px;
    button {
      height: 40px;
      width: 100px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: rgba(127, 127, 127, 0.5);
    }
    .cancelBtn {
      margin-left: 20px;
    }

    .reviewBtn {
      position: absolute;
      right: 20px;
    }
  }
`

const JSPurchaseDetail = memo(() => {
  const {date} = useParams(); 
  return (
    <>
      <JMHeader>상세 내역</JMHeader>
      <PurchaseDetailBox>
        <h3>상세 내역</h3>
        <ul>
          <JSPayGoods/>
          <JSPayGoods/>
        </ul>
        <span>주문번호: 000000000000000</span>
        <span>주문날짜: {date}</span>
        <div className="info">
          <p>배송 정보:</p>
          <p>이름: username</p>
          <p>번호: 010-0000-0000</p>
          <p>주소: 주소</p>
        </div>
        <div className="buttonBox">
          <button className="cancelBtn" type="button">주문취소</button>
          <button className="reviewBtn" type="button">리뷰쓰기</button>
        </div>
      </PurchaseDetailBox>
      <JMFooter/>
    </>
  );
});

export default JSPurchaseDetail;