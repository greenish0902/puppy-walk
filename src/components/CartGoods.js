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

const CartGoods = memo(({src, count, title, price}) => {
  return (
    <CartGoodsBox href={`/cart/${title}/${count}/${price}`}>
      <form>
        <input type="checkbox"/>
      </form>
      <img src={src} alt={title}/>
      <div className="pBox">
        <p>{title}</p>
        <p>{count}</p>
        <p>{price}</p>
      </div>
      <button type="button">X</button>
    </CartGoodsBox>
  );
});

export default CartGoods;