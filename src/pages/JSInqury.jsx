/**
 * @filename JSInqury.jsx
 * @description 고객센터 문의게시판 페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import src from '../assets/img/dog.png';

import JMFooter from '../components/JMFooter';
import JMHeader from '../components/JMHeader';

const InquryBox = styled.div`
  width: 360px;
  margin: 50px auto 55px auto;

  .pageTitle {
    margin: 10px 0 10px 10px;
    font-size: 24px;
    font-weight: bold;
  }

  .listWrapper {
    width: 340px;
    margin: auto;
    display: flex;
    cursor: pointer;
    position: relative;
    .imgWrapper {
      width: 40px;
      height: 40px;
      margin: 5px 10px;
      background-color: var(--color-gray);
      img {
        width: 100%;
      }
    }
    .textWrapper {
      margin-top: 5px;
      overflow: hidden;
      
      .title {
        font-size: 0.9em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;

        strong {
          color: #01B257;
        }
      }
      .info {
        font-size: 0.7em;
      }
      .response {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
    &:after {
      display: block;
    }
  }
`;
const Response = styled.span`
  &:before {
    color: ${({answer}) => answer === "ok" ? "#008D42" : "red"};
    content: '${({answer}) => answer === "ok" ? "답변 완료" : "답변 대기"}';
  }
`;
const JSInqury = memo(() => {
  return (
    <>
     <JMHeader>문의게시판</JMHeader>
     <InquryBox>
      <p className='pageTitle'>문의게시판</p>
      <div className="listWrapper">
        <div className="imgWrapper">
          <img src={src} alt="sample" />
        </div>
        <div className="textWrapper">
          <p className="title"><strong>&lt;질문&gt;</strong>&nbsp;title</p>
          <p className="info">
            tag  |  authorNickname  |  date
          </p>
          <p className="response"><Response answer={"ok"}/></p>
        </div>
      </div>
      <hr/>
      <div className="listWrapper">
        <div className="imgWrapper">
          <img src={src} alt="sample" />
        </div>
        <div className="textWrapper">
          <p className="title"><strong>&lt;질문&gt;</strong>&nbsp;title</p>
          <p className="info">
            tag  |  authorNickname  |  date
          </p>
          <p className="response"><Response answer={"no"}/></p>
        </div>
      </div>
      <hr />
     </InquryBox>
     <JMFooter/>
    </>
  );
});

export default JSInqury;