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
const DimBox = styled.div`
  height: 940px;
  width: 360px;
  background: rgba(0,0,0, 0.5);
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 100;

  .moveBtn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    background: white;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    
    .container {
      margin: 50px 0;
      position: relative;
      height: 100%;

      .content {
        width: 300px;
        height: 100px;
        margin-bottom: 10px;
        padding: 2px;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;

        &:hover {
          background: #A0D468;
        }

        &.active {
          background: #A0D468;
        }
      }

      .dogImg {
        float: left;
        box-sizing: border-box;
        margin-right: 15px;
        border: 1px solid black;
        border-radius: 50%;;
        img {
          display: block;
          height: 98px;
          width: 98px;
          border-radius: 50%;
        }
      }

      .dogText {
        float: left;
        width: 185px;

        span {
          display: block;
          margin-right: 10px;
          padding: 0 5px;
          
          &:first-child {
            float: left;
            margin-right: 20px;
            font-weight: bold;
          }

          &:nth-child(2) {
            float: left;
            background: black;
            color: white;
            font-size: 12px;
            line-height: 24px;
          }
        }

        p {
          width: 185px;
          height: 76px;
          font-size: 12px;
          color: rgb(127, 127, 127);
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

      &:after {
        clear: both;
        float: none;
        content: '';
        display: block;
      }
    }
    .addComment {
      text-align: center;
      padding-bottom: 30px;
    }
  }
    button {
      width: 100px;
      height: 40px;
      border-radius: 5px;
      border: none;
      color: white;
      cursor: pointer;
      background: rgba(127, 127, 127, 0.5);
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
    }
  }
  
`
const DogSizeBox = styled.span`
  float: right;
  background: ${({size}) => size === "대형견" ? '#008D42' : (size === "중형견" ? '#F0AA3B' : '#7F7F7F')};
  color: white;
  font-size: 12px;
  line-height: 24px;
`

const JSMiniHome = memo(() => {
  const navigate = useNavigate()
  const onClickPusrchase = React.useCallback(() => {
    navigate('/purchase')
  },[navigate])
  const onClickPost = React.useCallback(() => {
    navigate('/minihome/post')
  },[navigate])
  const onClickCart = React.useCallback(()=> {
    navigate('/cart')
  },[navigate])

  const [dim, setDim] = React.useState('none');
  const onClickN = React.useCallback(() => {
    setDim('none')
  },[setDim]);
  const onClickY = React.useCallback(() => {
    setDim('block')
  },[setDim]);

  const [index, setIndex] = React.useState();
  const onClickIndex = React.useCallback((e) => {
    setIndex(e.target.dataset.index)
    console.log(index)
  },[setIndex, index])
  const arr = ["1","2","3","4","5"];
  return (
    <>
      <JMHeader>내 미니홈피</JMHeader>
      <DimBox style={{display:`${dim}`}}>
        <div className="moveBtn">
          <div className="container">
            {arr ? (
              <div>
                {arr.map((v, i) => {
                  return(
                    <div key={i}>
                      <div onClick={onClickIndex} className={index && index === v ? ["content", "active"].join(" ") : "content"} data-index={v}>
                        <div className="dogImg" data-index={v}>
                          <img src={src} alt="img" data-index={v}/>
                        </div>
                        <div className="dogText">
                          <span data-index={v}>{"김둘째"}</span>
                          <span data-index={v}>{"♀"}&nbsp;{"7살"}</span>
                          <DogSizeBox data-index={v} size={"중형견"}>{"중형견"}</DogSizeBox>
                          <p data-index={v} className="dogExplain">{'text'}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <button onClick={onClickN} className="nBtn" type="button">선택</button>
            </div> 
            ) : (
              <div>
                <p className="addComment">프로필을 추가해주세요</p>
                <button onClick={onClickN} className="nBtn" type="button">확인</button>
              </div>
            )}
          </div>
        </div>
      </DimBox>
      <MiniHomeBox>
        <div className='titleBox'>
          <p className='title'>내 반려견</p>
          <span  className="chose">추가</span>
          <span onClick={onClickY} className="add">선택</span>
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
            <span onClick={onClickCart} className="seeMore">더보기...</span>
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