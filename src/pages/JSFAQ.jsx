/**
 * @filename JSFAQ.jsx
 * @description 고객센터 자주 묻는 질문 게시판
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';

import JMFooter from '../components/JMFooter';
import JMHeader from '../components/JMHeader';

const FAQBox = styled.div`
  width: 360px;
  margin: 50px auto 55px auto;

  .pageTitle {
    margin: 10px 0 10px 10px;
    font-size: 24px;
    font-weight: bold;
  }

  .sections {
    text-align: center;
    margin-bottom: 20px;

    .section {
      box-sizing: border-box;
      float: left;
      width: 25%;
      margin-bottom: 5px;
      border: 1px solid black;
      cursor: pointer;
    }

    &:after {
      clear: both;
      float: none;
      content: '';
      display: block;
    }
  }
  .content {
    .contentTitle{
      padding-left: 10px;
      padding-bottom: 10px;
      font-size: 18px;
      font-weight: bold;
    }

    .listWrapper {
      width: 340px;
      margin: auto;
      display: flex;
      cursor: pointer;

      .textWrapper {
        padding: 10px;
        overflow: hidden;
        
        .title {
          font-size: 0.9em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: bold;
        }
        .info {
          font-size: 0.7em;
        }

      }
      &:after {
        display: block;
      }
    }

  }

`

const JSFAQ = memo(() => {
  const section = ["로그인", "어디가개", "애견용품", "예약", "메이트", "번개", "커뮤니티", "같이 산책가개"]
  const [count, setCount] = React.useState(1);
  const onClick = React.useCallback((e) => {
    setCount(parseInt(e.target.attributes.value.value) + 1)
  },[setCount])
  return (
    <>
      <JMHeader>자주 묻는 질문</JMHeader>
      <FAQBox>
        <p className='pageTitle'>자주 묻는 질문</p>
        <div className='sections'>
          {section.map((v,i) => {
            return <p onClick={onClick} key={i} value={i} className="section">{v}</p>
          })}
        </div>
        <div className="content">
          <p className="contentTitle">{count}. {section[count-1]} 관련</p>
          <hr/>
          <div className="listWrapper">
            <div className="textWrapper">
              <p className="title">{count}-1. {section[count-1]} 관련</p>
              <p className="info">
                tag  |  authorNickname  |  date
              </p>
            </div>
          </div>
          <hr/>
        </div>

      </FAQBox>
      <JMFooter/>
    </>
  );
});

export default JSFAQ;