/**
 * @filename JSCartGoods.jsx
 * @description 장바구니 상품의 상품명, 갯수, 가격
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components'

const CartGoodsBox = styled.li`
  display: block;
  height: 60px;
  width: 340px;
  background: #999999;
  margin: 0 auto 10px auto;
  input {
    display: block;
    float: left;
    height: 20px;
    width: 20px;
    margin: 20px 20px 20px 10px;
  }

  img {
    display: block;
    height: 60px;
    width: 60px;
    float: left;
    margin-right: 10px;
  }

  .pBox {
    float: left;
    p {
      height: 20px;
      line-height: 20px;
    }
  }

  button {
    float: right;
    margin: 20px 10px 20px 0;
    height: 20px;
    width: 20px;
  }  

  &:after {
    clear: both;
    content: '';
    float: none;
    display: block;
  }
`

const CartGoods = memo(({onClick, src, count, title, price}) => {
  return (
    <CartGoodsBox href={`/cart/${title}/${count}/${price}`}>
      <form>
        <input type="checkbox"/>
        <img src={src} alt={title}/>
        <div className="pBox">
          <p>{title}</p>
          <p>{count}</p>
          <p>{price}</p>
        </div>
        <button onClick={onClick} type="button">X</button>
      </form>
    </CartGoodsBox>
  );
});

export default CartGoods;