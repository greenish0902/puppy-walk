/**
 * @filename Cart.js
 * @description 장바구니 화면
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import CartGoods from './CartGoods';
import img from '../assets/img/dog.png';

const CartBox = styled.div`
  width: 360px;
  height: 600px;
  margin: auto;

  .deleteBtn{
    background: #999999;
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 100px;
    margin-left: 250px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .nothingInCart {
    padding-top: 265px;
  }

  .nothingMessage {
    text-align: center;
    line-height: 20px;
    height: 20px;
  }

  .nothingButton {
    display: block;
    margin: 10px auto 0 auto;
    height: 50px;
    width: 120px;
  }
`
const Cart = memo(() => {
  const item = true;
  const {title, count, price} = useParams();
  return (
    <CartBox>
      {
        item ? (
          <ul>
            <button className="deleteBtn" type="button">선택 삭제</button>
            <CartGoods src={img} title={title} count={count} price={price}/>
            <CartGoods src={img} title={title} count={count} price={price}/>
            <CartGoods src={img} title={title} count={count} price={price}/>
          </ul>
        ) : (
          <div className="nothingInCart">
            <p className="nothingMessage">장바구니에 담긴 상품이 없습니다.</p>
            <button className='nothingButton' type="button">쇼핑 계속하기</button>
          </div>
        )
      }
    </CartBox>
  );
});

export default Cart;