/**
 * @filename JSNotice.jsx
 * @description 고객센터 공지사항 페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import src from "../assets/img/dog.png"

import JMFooter from '../components/JMFooter';
import JMHeader from '../components/JMHeader';

const NoticeBox = styled.div`
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
    }
    &:after {
      display: block;
    }
  }
`
const JSNotice = memo(() => {
  return (
    <>
      <JMHeader>공지사항</JMHeader>
      <NoticeBox>
        <p className='pageTitle'>공지사항</p>
        <div className="listWrapper">
          <div className="imgWrapper">
            <img src={src} alt="sample" />
          </div>
          <div className="textWrapper">
            <p className="title"><strong>&lt;공지&gt;</strong>&nbsp;title</p>
            <p className="info">
              tag   |  authorNickname  |  date
            </p>
          </div>
        </div>
        <hr />
        <div className="listWrapper">
          <div className="imgWrapper">
            <img src={src} alt="sample" />
          </div>
          <div className="textWrapper">
            <p className="title"><strong>&lt;공지&gt;</strong>&nbsp;title</p>
            <p className="info">
              tag   |  authorNickname  |  date
            </p>
          </div>
        </div>
        <hr />
        
      </NoticeBox>
      <JMFooter/>
    </>
  );
});

export default JSNotice;