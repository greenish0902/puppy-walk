/**
 * @filename DogSupplies.js
 * @description 애견용품 상세보기 화면 / 상품 클릭시 넘어감
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import styled from "styled-components";

import JMFooter from "../../components/JMFooter";
import JMHeader from "../../components/JMHeader";
import img from '../../assets/img/dog.png';
const GoodsDetailBox = styled.div`
  width: 360px;
  margin: 40px auto 55px auto;
  img{
    display: block;
    width: 360px;
    height: 180px;
  }

  p {
    height: 20px;
    width: 350px;
    padding: 0 5px;
  }

  .plusMinusButton {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 5px;
    font-weight: bold;
  }

  select {
    width: 270px;
    height: 42px;
    margin: 10px 0;
    &:active{
      outline: none;
    }
    &:focus{
      outline: none;
    }
  }

  span {
    display: inline-block;
    box-sizing: border-box;
    font-size: 16px;
    width: 20px;
    height: 20px;
    text-align: center;
    margin: 0 5px;
  }
  
  .buttonBox {
    width: 360px;
    .cart {
      height: 40px;
      width: 160px;
      margin-right: 40px;
    }

    .pay {
      height: 40px;
      width: 160px;
    }
  }

  .contentContainer {
    display: flex;
    justify-content: space-around;
    button {
      margin-top: 20px;
      width: 120px;
      height: 40px;
      background: white;
      border: none;
      &:hover {
        background: #999999;
      }
    }
    .active {
      background: #999999;
    }
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
    }

    button {
      width: 100px;
      height: 40px;
      border-radius: 5px;
      border: none;
      color: white;

      &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease-in-out;
      }
    }

    .yBtn {
      background: #01B257;
      margin-right: 20px;
    }

    .nBtn {
      background: red;
    }
  }
`
const GoodsDetail = memo(() => {
  const navigate = useNavigate();
  //제품의 제목 가격 받아오기
  const {title, price} = useParams();
  // 제품 수량 카운트
  const [count, setCount] = React.useState(1);
  // 제품 수량 - 이벤트
  const onClickMinus = React.useCallback((e) => {
    setCount(count-1)
    if (count <= 1) {
      setCount(1)
    }
  },[setCount,count]);
  // 제품 수량 + 이벤트
  const onClickPlus = React.useCallback((e) => {
    setCount(count+ 1)
  },[setCount, count]);
  const onClickCart = React.useCallback(() => {
    navigate(`/cart/${title}/${count}/${price}`)
  },[navigate, title, count, price])
  // 상세정보, 후기, 제품문의
  const [tab, setTab] = React.useState("detail");
  const onClickDetail = React.useCallback((e) => {
    setTab("detail")
  },[setTab]);

  const onClickReview = React.useCallback((e) => {
    setTab("review")
  },[setTab]);

  const onClickInquiry = React.useCallback((e) => {
    setTab("inquiry")
  },[setTab]);

  const onClickPay = React.useCallback(() => {
    navigate('/payment')
  },[navigate]);

  const [dim, setDim] = React.useState('none');
  const onClickN = React.useCallback(() => {
    setDim('none')
  },[setDim])
  const onClickY = React.useCallback(() => {
    setDim('block')
  },[setDim])
  return (
    <>
      <JMHeader>{title}</JMHeader>
      <DimBox style={{display:`${dim}`}}>
        <div className="moveBtn">
          <div className="container">
            <p>장바구니로 이동하시겠습니까?</p>
            <button onClick={onClickCart} className="yBtn" type="button">네</button>
            <button onClick={onClickN} className="nBtn" type="button">아니요</button>
          </div>
        </div>
      </DimBox>
      <GoodsDetailBox>
        <img src={img} alt={title}/>
        <p>{title}</p>
        <p>{price}</p>
        <select name="option">
          <option value="">옵션선택</option>
          <option value="1">이것저것</option>
        </select>
        <button className='plusMinusButton' onClick={onClickMinus} type="button">-</button>
        <span>{count}</span>
        <button className='plusMinusButton' onClick={onClickPlus} type="button">+</button>
        <div className="buttonBox">
          <button onClick={onClickY} className="cart" type="button">장바구니 담기</button>
          <button onClick={onClickPay} className="pay" type="button">바로 결제</button>
        </div>
        <div className="contentContainer">
          <button className={tab==="detail" ? "active" : null} onClick={onClickDetail} type="button">상세정보</button>
          <button className={tab==="review" ? "active" : null} onClick={onClickReview} type="button">후기</button>
          <button className={tab==="inquiry" ? "active" : null} onClick={onClickInquiry} type="button">제품문의</button>
        </div>
        <div className="content">
          {
            tab === "detail" ? (
              <p>
                상세정보
              </p>
            ) : ( tab === "review" ? (
              <p>
                후기
              </p>
            ) : (
              <p>
                제품문의
              </p>
            ))
          }
        </div>
      </GoodsDetailBox>
    <JMFooter/>
    </>
  );
});

export default GoodsDetail;