/**
 * @filename JSMyPage.jsx
 * @description 마이페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import src from "../assets/img/dog.png"
import icon from "../assets/img/location.PNG"

import JMFooter from "../components/JMFooter";
import JMHeader from "../components/JMHeader";

const MyPageBox = styled.div`
  height: 600px;
  width: 360px;
  margin: 50px auto 55px auto;

  button {
    cursor: pointer;
  }

  .profileBox{
    .imgBox {
      height: 123px;
      width: 123px;
      border: 1px solid black;
      border-radius: 50%;
      background: #9995;
      float: left;

      img {
        height: 100px;
        width: 100px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
      }
    }

    .profile {
      float: left;
      width: 220px;
      position: relative;
      margin-left: 10px;
      span {
        &:first-child{
          font-size: 24px;
        }
        &:nth-child(2) {
          position: absolute;
          font-size: 14px;
          right: 0;
        }
        img {
          height: 20px;
          width: 18px;
        }
      }

      p {
        font-size: 12px;
        color: #999999;
        margin: 10px 0 20px 0;
      }

      .profileBtn{
        width: 160px;
        height: 24px;
        margin: 0 18px;
      } 

      .setBtn {
        font-weight: bold;
        width: 24px;
        height: 24px;
      }
    }
    
    &:after {
      clear: both;
      float: none;
      content: '';
      display: block;
    }
  }

  .myHome {
    margin: auto;
    margin-top: 20px;
    width: 330px;

    .title {
      font-size: 24px;
    }

    .homeBox {
      height: 42px;
      width: 327px;
      margin: auto;
      margin-top: 10px;
      cursor: pointer;
      p {
        font-size: 18px;
        float: left;

        &:last-child {
          font-weight: bold;
          float: right;
        }
      }
    }

    &:after {
      clear: both;
      float: none;
      content: '';
      display: block;
    }
  }

  .changePassword {
    display: block;
    width: 330px;
    height: 32px;
    margin: 5px auto 10px auto;
    border: none;
  }

  .logout {
    display: block;
    width: 330px;
    height: 32px;
    margin: auto;
    color: red;
    border: none;
  }
`
const JSMyPage = memo(() => {
  const navigate = useNavigate();
  const onClickMini = React.useCallback(() => {
    navigate('/minihome')
  },[navigate])
  return (
    <>
      <JMHeader>마이페이지</JMHeader>
      <MyPageBox>
        <div className='profileBox'>
          <div className='imgBox'>
            <img src={src} alt="profile img"/>
          </div>
          <div className='profile'>
            <span>닉네임</span>
            <span><img src={icon} alt="icon" />보정동</span>
            <p>멍멍, 둘째, 셋째의 엄마 닉네임입니다. 반가워요.</p>
            <button className='profileBtn' type="button">프로필 수정</button>
            <button className='setBtn' type="button">⚙</button>
          </div>
        </div>
        <div onClick={onClickMini} className='myHome'>
          <p className="title">My Home</p>
          <hr/>
          <div className='homeBox'>
            <p>내 미니홈피</p>
            <p>&gt;</p>
          </div>
          <div className='homeBox'>
            <p>내 구매</p>
            <p>&gt;</p>
          </div>
          <div className='homeBox'>
            <p>내 예약</p>
            <p>&gt;</p>
          </div>
        </div>
        <div className='myHome'>
          <p className="title">설정</p>
          <hr/>
          <div className='homeBox'>
            <p>메이트 관리</p>
            <p>&gt;</p>
          </div>
          <div className='homeBox'>
            <p>환경설정</p>
            <p>&gt;</p>
          </div>
          <div className='homeBox'>
            <p>내 정보 수정</p>
            <p>&gt;</p>
          </div>
          <div className='homeBox'>
            <p>고객센터</p>
            <p>&gt;</p>
          </div>
          <hr/>
        </div>
        <button className='changePassword' type='button'>비밀번호 변경</button>
        <button className='logout' type='button'>로그아웃</button>
      </MyPageBox>
      <JMFooter/>
    </>
  );
});

export default JSMyPage;