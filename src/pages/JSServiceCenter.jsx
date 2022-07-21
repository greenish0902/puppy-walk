/**
 * @filename JSServiceCenter.jsx
 * @description 고객센터 메인페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import src from '../assets/img/dog.png';
import "../assets/scss/palette.scss";

import JMFooter from '../components/JMFooter';
import JMHeader from '../components/JMHeader';

const ServiceBox = styled.div`
  width: 360px;
  margin: 70px auto 55px auto;

  .header {
    width: 340px;
    height: 87px;
    margin: auto;
    position: relative;

    .textBox{
      height: 87px;
      
      p {
        font-size: 26px;
        font-weight: bold;
      }
    }

    .imgBox {
      border: none;
      border-radius: 50%;
      background-color: #66C7A7;
      height: 87px;
      width: 87px;
      position: absolute;
      top: 0;
      right: 0px;
      text-align: center;
      cursor: pointer;

      img {
        display: block;
        height: 38px;
        width: 38px;
        margin: auto;
        margin-top: 10px;
      }

      span {
        font-size: 12px;
      }
    }
  }

  .main {
    width: 360px;
    margin-top: 20px;
    .serviceList {
      width: 340px;
      margin: auto;
      margin-bottom: 15px;
      position: relative;
      background: rgba(127, 127, 127, 0.1);
      cursor: pointer;

      .title {
        font-size: 24px;
        font-weight: bold;
      }

      .subtitle {
        font-size: 14px;
        color: rgb(127, 127, 127);
      }

      .arrow {
        height: 48px;
        font-size: 48px;
        font-weight: bold;
        position: absolute;
        right: 10px;
        bottom: 20px;
      }
    }
  }
`
const JSServiceCenter = memo(() => {
  const navigate = useNavigate();
  const onClickService = React.useCallback(() => {
    navigate('/service')
  },[navigate])
  const onClickNotice = React.useCallback(() => {
    navigate('/notice')
  },[navigate])
  const onClickInqury = React.useCallback(() => {
    navigate('/inqury')
  },[navigate])
  const onClickFAQ = React.useCallback(() => {
    navigate('/faq')
  },[navigate])
  const onClickReport = React.useCallback(() => {
    navigate('/report')
  },[navigate])
  return (
    <>
      <JMHeader>고객센터</JMHeader>
      <ServiceBox>
        <div className="header">
          <div className="textBox">
            <p>{"ㅇㅇ"}님, <br/>무엇을 도와드릴까요?</p>
          </div>
          <div onClick={onClickService} className="imgBox">
            <img src={src} alt="img"/>
            <span>서비스 소개 &gt;</span>
          </div>
        </div>
        <div className='main'>
          <div onClick={onClickNotice} className='serviceList'>
            <p className='title'>공지사항</p>
            <p className='subtitle'>서비스 공지사항 및 이용안내</p>
            <p className='arrow'>&gt;</p>
          </div>
          <div onClick={onClickInqury} className='serviceList'>
            <p className='title'>문의게시판</p>
            <p className='subtitle'>1:1 문의 24시간 내 답변</p>
            <p className='arrow'>&gt;</p>
          </div>
          <div onClick={onClickFAQ} className='serviceList'>
            <p className='title'>자주 묻는 질문</p>
            <p className='subtitle'>FAQ</p>
            <p className='arrow'>&gt;</p>
          </div>
          <div onClick={onClickReport} className='serviceList'>
            <p className='title'>불량회원 신고</p>
            <p className='subtitle'>개인 신고 게시판</p>
            <p className='arrow'>&gt;</p>
          </div>
        </div>
      </ServiceBox>
      <JMFooter/>
    </>
  );
});

export default JSServiceCenter;