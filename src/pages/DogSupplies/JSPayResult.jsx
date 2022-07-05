/**
 * @filename JSPayResult.js
 * @description 주문/결제 결과페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import styled from "styled-components"

import JSPayGoods from '../../components/Pay/JSPayGoods';
import JMFooter from "../../components/JMFooter";
import JMHeader from "../../components/JMHeader";

const PayResultBox = styled.div`
  height: 600px;
  width: 360px;
  margin: 40px auto 55px auto;
  
  h3 {
    width: 300px;
    margin: 100px auto 20px auto;
    text-align: center;
    
    strong {
      font-weight: bold;
    }
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

  .payMoney {
    width: 360px;
    position: fixed;
    bottom: 80px;
    p {
      text-align: center;
      font-size: 20px;
    }
  }
`
const ErrorBox = styled.div`
  background: #999999;
  height: 140px;
  width: 300px;
  margin: 230px auto 230px auto;
  position: relative;
  .text {
    width: 280px;
    position: absolute;
    left: 10px;
    top: 20px;
    text-align: center;
  }

  button {
    position: absolute;
    height: 40px;
    width: 280px;
    display: block;
    left: 10px;
    bottom: 20px;
    cursor: pointer;
  }
`
const JSPayResult = memo(() => {
  const { state } = useLocation();
  const result = false;
  const navigate = useNavigate();
  const onClick = React.useCallback(() => {
    navigate("/payment")
  },[navigate])
  return (
    <>
      <JMHeader>주문/결제</JMHeader>
      {
        result ? (
          <PayResultBox>
            <h3><strong>결제가 완료</strong>되었습니다.</h3>
            <ul>
              <JSPayGoods/>
              <JSPayGoods/>
            </ul>
            <span>주문번호: 000000000000000</span>
            <div className="info">
              <p>배송 정보:</p>
              <p>이름: username</p>
              <p>번호: 010-0000-0000</p>
              <p>주소: 주소</p>
            </div>
            <div className="payMoney">
              <p>배송비 포함 총 결제 금액</p>
            </div>
          </PayResultBox>
        ) : (
          <ErrorBox>
            <div className='text'>
              <p>{state}</p>
            </div>
            <button onClick={onClick} type="button">OK</button>
          </ErrorBox>
        )
      }
      <JMFooter/>
    </>
  );
});

export default JSPayResult;