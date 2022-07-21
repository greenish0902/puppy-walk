/**
 * @filename JSReport.jsx
 * @description 고객센터 불량 회원 신고게시판
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';

import JMFooter from '../components/JMFooter';
import JMHeader from '../components/JMHeader';

const ReportBox = styled.div`
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

    .textWrapper {
      margin-top: 5px;
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
    content: '${({answer}) => answer === "ok" ? "처리 완료" : "처리 대기"}';
  }
`;
const JSReport = memo(() => {
  return (
    <>
      <JMHeader>신고게시판</JMHeader>
      <ReportBox>
        <p className='pageTitle'>신고게시판</p>
        <div className="listWrapper">
          <div className="textWrapper">
            <p className="title">title</p>
            <p className="info">
              tag  |  authorNickname  |  date
            </p>
            <p className="response"><Response answer={"ok"}/></p>
          </div>
        </div>
        <hr/>
        <div className="listWrapper">
          <div className="textWrapper">
            <p className="title">title</p>
            <p className="info">
              tag  |  authorNickname  |  date
            </p>
            <p className="response"><Response answer={"no"}/></p>
          </div>
        </div>
        <hr/>
      </ReportBox>
      <JMFooter/>
    </>
  );
});

export default JSReport;