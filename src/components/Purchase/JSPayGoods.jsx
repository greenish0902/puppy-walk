/**
 * @filename JSPayGoods.jsx
 * @description 주문/결제 및 구매내역 상세보기에 사용되는 상품
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components'

import src from '../../assets/img/dog.png'

const PayGoodsBox = styled.li`
  height: 60px;
  width: 300px;
  display: block;
  margin: auto;
  margin-bottom: 10px;
  img {
    height: 60px;
    width: 60px;
    margin-right: 10px;
  }

  .pBox {
    display: inline-block;
    p {
      height: 20px;
      line-height: 20px;
    }
  }
`

const JSPayGoods = memo(() => {
  return (
    <PayGoodsBox>
      <img src={src} alt={"title"}/>
      <div className="pBox">
        <p>{"title"}</p>
        <p>{"count"}</p>
        <p>{"price"}</p>
      </div>
    </PayGoodsBox>
  );
});

export default JSPayGoods;