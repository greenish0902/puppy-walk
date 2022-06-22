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
const DimBox = styled.div`
  height: 940px;
  width: 360px;
  background: rgba(0,0,0, 0.5);
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 2;
  .moveBtn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 320px;
    background: white;
    text-align: center;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    
    .container {
      margin-top: 50px;
    }
    p {
      margin-bottom: 30px;

      strong {
        color: red;
      }
    }
    button {
      width: 100px;
      height: 40px;
      border-radius: 5px;
      border: none;
      color: white;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease-in-out;
      }
    }
    .yBtn {
      background: red;
      margin-right: 20px;
    }
    .nBtn {
      background: rgba(127, 127, 127, 0.5);
    }
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
    if (count && title && price) {
      setItem(true)
    }
  },[count, title, price]);
  const [dim, setDim] = React.useState('none');
  const onClickN = React.useCallback(() => {
    setDim('none')
  },[setDim])
  const onClickY = React.useCallback(() => {
    setDim('block')
  },[setDim])
  return (
    <>
      <JMHeader>장바구니</JMHeader>
      <DimBox style={{display:`${dim}`}}>
        <div className="moveBtn">
          <div className="container">
            <p>게시물을 <strong>삭제</strong>하시겠습니까?</p>
            <button className="yBtn" type="button">네</button>
            <button onClick={onClickN} className="nBtn" type="button">아니요</button>
          </div>
        </div>
      </DimBox>
      <CartBox>
        {
          item ? (
            <div>
              <button onClick={onClickY} className="deleteBtn" type="button">선택 삭제</button>
              <ul>
                <JSCartGoods onClick={onClickY} src={img} title={title} count={count} price={price}/>
              </ul>
              <div className="amount">
                <p>{price}원 &nbsp;&nbsp; + &nbsp;&nbsp; 배송비 = &nbsp;&nbsp; 총 금액</p>
              </div>
            </div>
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