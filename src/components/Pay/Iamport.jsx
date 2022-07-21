import React from 'react';
import styled from 'styled-components';

const PayBtn = styled.button`
  display: block;
  margin: auto;
  height: 40px;
  width: 100px;
  border: 1px solid black;
  border-radius: 6px;
  margin-top: 15px;
  cursor: pointer;
`

const Iamport = () => {
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
  
  const onClickPayment = () => {
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
  }

  const callback = (response) => {
    const {success, error_msg} = response;
    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  }

  return (
    <PayBtn onClick={onClickPayment}>결제하기</PayBtn>
  )
}

export default Iamport;