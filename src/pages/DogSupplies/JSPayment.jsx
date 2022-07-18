/**
 * @filename JSPayment.js
 * @description 주문/결제 페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

import RegexHelper from '../../libs/RegexHelper';
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

  React.useEffect(() => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    }
  }, []);

  const callback = (response) => {
    const {success, error_msg} = response;
    if (success) {
      alert('결제 성공');
      navigate("/payresult")
    } else {
      navigate("/payresult", { state: error_msg});
    }
  }

  const nameRef = React.useRef();
  const telRef = React.useRef();
  const addrRef = React.useRef();
  const onSubmit = React.useCallback((e) => {
    e.preventDefault();
    if (select === "new") {
      try {
        RegexHelper.value(nameRef.current, "이름을 입력해주세요.")
        RegexHelper.kor(nameRef.current, "이름은 한글만 입력해주세요.")
  
        RegexHelper.value(telRef.current, "전화번호를 입력해 주세요.")
        RegexHelper.cellPhone(telRef.current, "핸드폰 번호가 아닙니다.")
  
        RegexHelper.value(addrRef.current, "주소를 입력해주세요.")
      } catch(err) {
        alert(err.message)
        err.field.focus();
        return;
      }
    }

    const { IMP } = window;
    IMP.init('imp45699627');
    const data = {
      pg: 'html5_inicis',                           // PG사
      pay_method: 'card',                           // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
      amount: '1000',                                 // 결제금액
      name: '결제 테스트',                  // 주문명
      buyer_name: '신지섭',                           // 구매자 이름
      buyer_tel: '01012341234',                     // 구매자 전화번호
      buyer_email: 'example@example',               // 구매자 이메일
      buyer_addr: '신사동 661-16',                    // 구매자 주소
      buyer_postcode: '06018',                      // 구매자 우편번호
    }
    IMP.request_pay(data, callback);
  },[select])
  return (
    <>
      <JMHeader>주문/결제</JMHeader>
      <PaymentBox>
        <h2>주문/결제</h2>
        <ul>
          <JSPayGoods/>
          <JSPayGoods/>
        </ul>
        <form onSubmit={onSubmit}>
          <label htmlFor="default">
            <input type="radio" id="default" name="default" value="default" defaultChecked checked={select === "default"} onChange={onChange}/>
            기본 배송지
          </label>
          <label htmlFor="new">
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
                <label htmlFor="name">
                  이름 &nbsp;
                  <input type="text" id="name" name="name" placeholder='이름을 입력하시오.' ref={nameRef}/>
                </label>
              </p>
              <p>
                <label htmlFor="tel">
                  번호 &nbsp;
                  <input type="tel" id="tel" name="tel" placeholder='번호을 입력하시오.' ref={telRef}/>
                </label>
              </p>
              <p>
                <label htmlFor="addr">
                  주소 &nbsp;
                  <input type="text" id="addr" name="addr" placeholder='주소를 입력하시오.' ref={addrRef}/>
                </label>
              </p>
            </div>
          )}
          <div className="requestBox">
            <label htmlFor="request">
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
          <button className="payBtn" type="submit">결제하기</button>
        </form>
      </PaymentBox>
      <JMFooter/>
    </>
  );
});

export default JSPayment;