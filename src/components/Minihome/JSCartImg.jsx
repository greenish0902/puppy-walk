/**
 * @filename JSCartImg.jsx
 * @description 미니홈피 장바구니에 들어가는 이미지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';

const CartImgBox = styled.div`
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
  img {
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }
`
const JSCartImg = memo(({src}) => {
  return (
    <CartImgBox>
      <img src={src} alt="img"/>
    </CartImgBox>
  );
});

export default JSCartImg;