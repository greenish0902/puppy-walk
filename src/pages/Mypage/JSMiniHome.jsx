/**
 * @filename JSMiniHome.jsx
 * @description 내 미니홈피 페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import src from "../../assets/img/dog.png"

import JMFooter from "../../components/JMFooter";
import JMHeader from "../../components/JMHeader";
import JSCartImg from '../../components/Minihome/JSCartImg';
import JSDogProfile from '../../components/Minihome/JSDogProfile';
import JSPostBox from '../../components/Minihome/JSPostBox';
import JSPurchaseBox from '../../components/Minihome/JSPurchaseBox';

const MiniHomeBox = styled.div`
  height: 600px;
  width: 360px;
  margin: 50px auto 55px auto;
  
  .titleBox {
    width: 350px;
    height: 32px;
    margin: 0 5px 15px 5px;
    position: relative;

    .title {
      font-size: 18px;
      font-weight: bold;
    }

    span {
      width: 35px;
      font-size: 12px;
      position: absolute;
      bottom: 5px;
      right: 0;
      color: rgb(127, 127, 127);
      cursor: pointer;
    }

    .add {
      right: 35px;
    }

    .more {
      width: 100px;
    }

    .seeMore {
      width: 50px;
    }
  }

  .box {
    margin-bottom: 30px;
  }

  .purchaseBox{
    margin-bottom: 20px;
  }

  .reservation{
    width: 340px;
    height: 125px;
    background: rgba(127, 127, 127, 0.2);
    box-shadow: 3px 3px 3px rgba(127, 127, 127, 0.6);
    cursor: pointer;
    margin: auto;
    margin-bottom: 20px;
    .imgBox {
      height: 100px;
      width: 100px;
      float: left;
      margin: 10px;
      margin-right: 50px;
      img {
        height: 100px;
        width: 100px;
      }
    }

    .textBox {
      float: left;
      margin-top: 10px;

      p {
        margin-bottom: 8px;
      }
      .title {
        font-weight: bold;
        font-size: 18px;
      }
      
      .text {
        color: rgb(127, 127, 127);
        font-size: 14px;
      }
    }
  }

  &:after {
    clear: both;
    float: none;
    display: block;
    content: '';
  }
`

const JSMiniHome = memo(() => {
  const navigate = useNavigate()
  const onClickPusrchase = React.useCallback(() => {
    navigate('/purchase')
  },[navigate])
  const onClickPost = React.useCallback(() => {
    navigate('/minihome/post')
  },[navigate])

  return (
    <>
      <JMHeader>내 미니홈피</JMHeader>
      <MiniHomeBox>
        <div className='titleBox'>
          <p className='title'>내 반려견</p>
          <span className="chose">추가</span>
          <span className="add">선택</span>
          <hr/>
        </div>
        <div className="box">
          <JSDogProfile name={"김멍멍"} sex={"♀"} age={"8살"} size={"대형견"} text={"아주 활발하게 뛰어다니기를 좋아하는 귀여운 갈색 동그라미 세모네모 입니다."} />
        </div>
        <div className='titleBox'>
          <p className='title'>내 게시글</p>
          <span onClick={onClickPost} className="more">게시글/댓글 더보기...</span>
          <hr/>
        </div>
        <div className='box'>
          <JSPostBox src={src} title={"title"} text={"text"}/>
          <JSPostBox src={src} title={"title"} text={"text"}/>
          <JSPostBox src={src} title={"title"} text={"text"}/>
        </div>
        <div className='titleBox'>
          <p className='title'>내 구매</p>
          <span className="seeMore" onClick={onClickPusrchase}>더보기...</span>
          <hr/>
        </div>
        <div className="box">
          <div className='purchaseBox'>
            <JSPurchaseBox title={"인기사료1위"} text={"제일비싼맛"} deliverState={"배송 완료"}/>
            <JSPurchaseBox title={"인기사료1위"} text={"제일비싼맛"} deliverState={"배송 완료"}/>
          </div>
          <div className='titleBox'>
            <p className='title'>장바구니</p>
            <span className="seeMore">더보기...</span>
            <hr/>
          </div>
          <div>
            <JSCartImg src={src}/>
            <JSCartImg src={src}/>
            <JSCartImg src={src}/>
            <JSCartImg src={src}/>
            <JSCartImg src={src}/>
          </div>
        </div>
        <div className='titleBox'>
          <p className='title'>내 예약</p>
          <span className="seeMore">더보기...</span>
          <hr/>
        </div>
        <div className='reservation'>
          <div className="imgBox">
            <img src={src} alt="img"/>
          </div>
          <div className="textBox">
            <p className='title'>멍멍이호텔</p>
            <p className='text'>옵션: 데일리 케어</p>
            <p className='date'>날짜</p>
          </div>
        </div>
      </MiniHomeBox>
      <JMFooter/>
    </>
  );
});

export default JSMiniHome;