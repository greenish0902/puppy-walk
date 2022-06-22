/**
 * @filename JSCart.jsx
 * @description 장바구니 화면
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

import JMFooter from "../JMFooter";
import JMHeader from "../JMHeader";
import JSCartGoods from './JSCartGoods';
import img from '../../assets/img/dog.png';


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
    margin-top: 50px;
    margin-left: 250px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .amount {
    width: 360px;
    height: 30px;
    position: fixed;
    bottom: 80px;
    p {
      text-align: center;
      font-size: 20px;
    }
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
  const [item, setItem] = React.useState(false);
  const navigate = useNavigate();
  const {title, count, price} = useParams();
  const onClickNothing = React.useCallback(() => {
    navigate("/")
  },[navigate])
  React.useEffect(() => {
    if (count) {
      setItem(true)
    }
  },[count])
  return (
    <>
      <JMHeader>장바구니</JMHeader>
      <CartBox>
        {
          item ? (
            <ul>
              <button className="deleteBtn" type="button">선택 삭제</button>
              <JSCartGoods src={img} title={title} count={count} price={price}/>
              <div className="amount">
                <p>{price}원 &nbsp;&nbsp; + &nbsp;&nbsp; 배송비 = &nbsp;&nbsp; 총 금액</p>
              </div>
            </ul>
          ) : (
            <div className="nothingInCart">
              <p className="nothingMessage">장바구니에 담긴 상품이 없습니다.</p>
              <button onClick={onClickNothing} className='nothingButton' type="button">쇼핑 계속하기</button>
            </div>
          )
        }
      </CartBox>
      <JMFooter/>
    </>
  );
});

export default Cart;