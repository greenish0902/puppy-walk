/**
 * @filename JSGoods.jsx
 * @description 애견용품 상품
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components'

const GoodsBox = styled.a`
  display: block;
  height: 160px;
  width: 140px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:active {
    color: black;
  }

  img {
    display: block;
    width: 140px;
    height: 120px;
  }

  p {
    height: 20px;
    width: 140px;
    padding-left: 10px;
  }
`
const Goods = memo(({src, title, price}) => {
  return (
    <GoodsBox href={`/goodsdetail/${title}/${price}`}>
      <img src={src} alt={title}/>
      <p>{title}</p>
      <p>{price}</p>
    </GoodsBox>
  );
});

export default Goods;