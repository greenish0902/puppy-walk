/**
 * @filename JSMyPurchaseBox.jsx
 * @description 미니홈피 내 구매에 사용되는 상품
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';

const PurchaseBox = styled.div`
  height: 103px;
  width: 163px;
  display: inline-block;
  box-shadow: 5px 2px 2px rgba(127, 127, 127, 0.5);
  margin-left: 10px;
  background: rgba(127, 127, 127, 0.1);
  cursor: pointer;
  
  div {
    margin: 10px 0 0 10px;

    .title {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 5px;
    }

    .text {
      color: rgb(127, 127, 127);
      font-size: 14px;
      margin-bottom: 5px;
    }
  }

`
const JSPurchaseBox = memo(({title, text, deliverState}) => {
  return (
    <PurchaseBox>
      <div>
        <p className='title'>{title}</p>
        <p className='text'>{text}</p>
        <p>{deliverState}</p>
      </div>
    </PurchaseBox>
  );
});

export default JSPurchaseBox;