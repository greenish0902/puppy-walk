/**
 * @filename JSPayment.js
 * @description 주문/결제 페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

import JSPayGoods from '../../components/Pay/JSPayGoods';
import JMFooter from "../../components/JMFooter";
import JMHeader from "../../components/JMHeader";
const PaymentBox = styled.div`
  width: 360px;
  height: 600px;
  margin: 40px auto 55px auto;

  h2 {
    margin: 10px 0 10px 10px;
    font-weight: bold;
  }

  ul {
    margin-bottom: 30px;
  }

  form {
    width: 300px;
    margin: auto;

    input {
      height: 15px;
      width: 15px;
      border: 1px solid black;
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }

    label {
      padding: 0 5px;
    }

    .defaultBox, .inputBox {
      margin: 10px 0;

      p {
        margin-bottom: 10px;
      }

      label {
        padding: 0;

        input {
          width: 250px;
          height: 30px;
          padding: 0 5px;
        }
      }
    }

    .requestBox {
      width: 300px;

      label {
        padding:0;
        font-weight: bold;
        input {
          height: 30px;
          width: 300px;
          margin-top: 5px;
          padding: 0 5px;
        }
      }
    }

    .discountBox {
      width: 300px;
      
      .title {
        padding-top: 15px;
        font-weight: bold;
      }
      div {
        position: relative;
        padding: 5px 0;
        p {
          display: inline-block;
          font-weight: normal;
          width: 80px;
          &:nth-child(2) {
            width: 130px;
            text-align: end;
            padding-right: 10px;
          }
        }

        button {
          position: absolute;
          right: 0;
          cursor: pointer;
        }
      }
    }
    
    .payBtn {
      display: block;
      margin: auto;
      height: 40px;
      width: 100px;
      border: 1px solid black;
      border-radius: 6px;
      margin-top: 15px;
      cursor: pointer;
    }
  }

`
const JSPayment = memo(() => {
  const navigate = useNavigate();
  const [select, setSelect] = React.useState("default");
  const onChange = React.useCallback((e) => {
    setSelect(e.target.value)
  },[setSelect]);
  const onClickPay = React.useCallback(() => {
    navigate("/payresult")
  },[navigate])
  return (
    <>
      <JMHeader>주문/결제</JMHeader>
      <PaymentBox>
        <h2>주문/결제</h2>
        <ul>
          <JSPayGoods/>
          <JSPayGoods/>
        </ul>
        <form>
          <label htmlfor="default">
            <input type="radio" id="default" name="default" value="default" defaultChecked checked={select === "default"} onChange={onChange}/>
            기본 배송지
          </label>
          <label htmlfor="new">
            <input type="radio" id="new" name="new" value="new" checked={select === "new"} onChange={onChange}/>
            직접입력
          </label>
          { select === "default" ? (
            <div className="defaultBox">
              <p>이름 신지섭</p>
              <p>번호 010-0000-0000</p>
              <p>주소 서울특별시 송파구 어디로 123 무슨아파트 무슨동 무슨호</p>
            </div>
          ) : (
            <div className="inputBox">
              <p>
                <label htmlfor="name">
                  이름 &nbsp;
                  <input type="text" id="name" name="name" placeholder='이름을 입력하시오.'/>
                </label>
              </p>
              <p>
                <label htmlfor="name">
                  번호 &nbsp;
                  <input type="text" id="name" name="name" placeholder='번호을 입력하시오.'/>
                </label>
              </p>
              <p>
                <label htmlfor="name">
                  주소 &nbsp;
                  <input type="text" id="name" name="name" placeholder='주소를 입력하시오.'/>
                </label>
              </p>
            </div>
          )}
          <div className="requestBox">
            <label htmlfor="request">
              요청사항
              <input type="text" id="request" name="request" placeholder="요청사항을 입력하시오."/>
            </label>
          </div>

          <div className="discountBox">
            <p className="title">할인 정보</p>
            <div>
              <p>쿠폰 할인</p>
              <p>가격</p>
              <button type="button">쿠폰사용</button>
            </div>
            <div>
              <p>포인트 사용</p>
              <p>가격</p>
              <button type="button">포인트사용</button>
            </div>
          </div>
          <button onClick={onClickPay} className="payBtn" type="button">결제하기</button>
        </form>
      </PaymentBox>
      <JMFooter/>
    </>
  );
});

export default JSPayment;