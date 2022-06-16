/**
 * @filename DogSupplies.js
 * @description 애견용품 상세보기 화면 / 상품 클릭시 넘어감
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import styled from "styled-components";

import JMFooter from "../components/JMFooter";
import JMHeader from "../components/JMHeader";
import img from '../assets/img/dog.png';
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
      &:focus {
        background: #999999;
      }
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
  return (
    <>
      <JMHeader>{title}</JMHeader>
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
          <button onClick={onClickCart} className="cart" type="button">장바구니 담기</button>
          <button className="pay" type="button">바로 결제</button>
        </div>
        <div className="contentContainer">
          <button onClick={onClickDetail} type="button">상세정보</button>
          <button onClick={onClickReview} type="button">후기</button>
          <button onClick={onClickInquiry} type="button">제품문의</button>
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