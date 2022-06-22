/**
 * @filename JSMyPost.jsx
 * @description 내 게시글/ 내 댓글
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import { faMagnifyingGlass, faImage, faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../assets/scss/palette.scss"
import src from "../../assets/img/dog.png"

import JMFooter from '../../components/JMFooter';
import JMHeader from '../../components/JMHeader'

const MyPostBox = styled.div`
  padding-top: 40px;
  width: 360px;
  margin: auto;
  
  .chose {
    height: 50px;
    width: 360px;
    position: relative;
    span {
      display: inline-block;
      color: rgba(127, 127, 127, 0.5);
      line-height: 40px;
      font-size: 24px;
      font-weight: bold;
      margin: 0 5px;
      margin-top: 5px;
      cursor: pointer;
    }
    .active {
      color: black;
    }

    .imgorpost {
      position: absolute;
      top: 0;
      right: 0;
      span {
        color: rgb(127, 127, 127, 0.5);
        font-size: 16px;
        cursor: pointer;
      }
      .active {
        color: black;
      }
    }
  }
 .sort {
    display: flex;
    position: sticky;
    position: -webkit-sticky;
    top: 40px;
    background-color: #eee;

    select {
      border: none;
      background-color: #eee;
      width: fit-content;
      margin: 5px 10px;
      font-size: 0.7em;
      cursor: pointer;
      border-radius: 0; /* 아이폰 사파리 보더 없애기 */
      -webkit-appearance: none; /* 화살표 없애기 for chrome*/
      -moz-appearance: none; /* 화살표 없애기 for firefox*/
      appearance: none;
    }
    div {
      position: absolute;
      right: 10px;
      top: -2px;
      input {
        width: 80px;
        height: 13px;
      }
      svg {
        width: 13%;
        position: relative;
        top: 2px;
        left: 4px;
      }
    }
 }
 .listWrapper {
    width: 340px;
    margin: auto;
    position: relative;
    cursor: pointer;

    .imgWrapper {
      width: 40px;
      height: 40px;
      margin: 5px 10px;
      background-color: var(--color-gray);
      float: left;
      img {
        width: 100%;
      }
    }

    .textWrapper {
      margin-top: 5px;
      width: 280px;
      overflow: hidden;
      float: left;

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

    .commentWrapper {
      float: left;
      width: 340px;
      height: 40px;
      line-height: 40px;
      border-top: 1px solid black;

      p {
        margin-left: 10px;
      }
    }

    button {
      position: absolute;
      background: red;
      color: white;
      height: 28px;
      width: 60px;
      border: none;
      border-radius: 5px;
      right: 10px;
      top: 11px;
      cursor: pointer;
    }

    .commentDeleteBtn {
      top: 57px;
    }

    &:after {
      display: block;
      content: '';
      clear: both;
      float: none;
    }
  }

  .listBox {
    width: 150px;
    margin: 15px;
    display: inline-block;
    .imgBox {
      width: 150px;
      height: 150px;

      img {
        width: 150px;
        height: 150px;
      }
    }

    .textBox {
      width: 150px;

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

    button {
      color: white;
      background: red;
      border: none;
      border-radius: 5px;
      height: 28px;
      width: 60px;
      display: block;
      margin: auto;
      margin-top: 10px;
      cursor: pointer;
    }
  }
`
const DimBox = styled.div`
  height: 800px;
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
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease-in-out;
      }
    }
    .yBtn {
      background: red;
      margin-right: 20px;
    }
    .nBtn {
      background: rgba(127, 127, 127, 0.5);
    }
  }
`

const JSMyPost = memo(() => {
  const [state, setState] = React.useState('내 게시글')
  const [type, setType] = React.useState('bars')
  const onClick = React.useCallback((e) => {
    const current = e.target;
    setState(current.innerHTML)
  },[setState])

  const onClickType = React.useCallback((e) => {
    setType(e.target.dataset.icon)
    console.log(e.target.dataset.name)
  },[setType])

  const [dim, setDim] = React.useState('none');
  const onClickN = React.useCallback(() => {
    setDim('none')
  },[setDim])
  const onClickY = React.useCallback(() => {
    setDim('block')
  },[setDim])
  return (
    <>
      <JMHeader>내 게시글</JMHeader>
      <DimBox style={{display:`${dim}`}}>
        <div className="moveBtn">
          <div className="container">
            <p>게시물을 <strong>삭제</strong>하시겠습니까?</p>
            <button className="yBtn" type="button">네</button>
            <button onClick={onClickN} className="nBtn" type="button">아니요</button>
          </div>
        </div>
      </DimBox>
      <MyPostBox>
        <div className="chose">
          <span className={state === "내 게시글" ? 'active' : null} onClick={onClick}>내 게시글</span>
          <span className={state === "내 댓글" ? 'active' : null} onClick={onClick}>내 댓글</span>
          {
            state === "내 게시글" ? (
              <div className="imgorpost">
                <span className={type === "image" ? "active" : null} onClick={onClickType}>
                  <FontAwesomeIcon icon={faImage} size="xl" />
                </span>
                <span className={type === "bars" ? "active" : null} onClick={onClickType}>
                  <FontAwesomeIcon icon={faBars} size="xl" />
                </span>
              </div>
            ) : null
          }

        </div>
        <hr />
        <div className="sort">
          <select>
            <option value="">게시물 수</option>
            <option value="10">10개</option>
            <option value="20">20개</option>
            <option value="30">30개</option>
            <option value="40">40개</option>
            <option value="50">50개</option>
          </select>
          <select>
            <option value="">작성시간순</option>
            <option value="good">좋아요 많은 순</option>
            <option value="comment">댓글 많은 순</option>
          </select>
          <div>
            <input type="text" />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <hr />
        { state === "내 게시글" ? ( type === "bars" ? (
          <div>
            <div className="listWrapper">
              <div className="imgWrapper">
                <img src={src} alt="sample" />
              </div>
              <div className="textWrapper">
                <p className="title">title</p>
                <p className="info">
                  tag  |  location  |  authorNickname  |  date
                </p>
              </div>
              <button onClick={onClickY} type="button">삭제하기</button>
            </div>
            <hr />
          </div>
          ) : (
            <div>
              <div className="listBox">
                <div className="imgBox">
                  <img src={src} alt="img"/>
                </div>
                <div className='textBox'>
                  <p className="title">title</p>
                  <p className="info">
                    {"tag"} | {"location"} | {"author"} | {"date"}
                  </p>
                </div>
                <button onClick={onClickY} className="deleteBtn" type="button">삭제하기</button>
              </div>
            </div>
          )) : (
            <div>
              <div className="listWrapper">
                <div className="imgWrapper">
                  <img src={src} alt="sample" />
                </div>
                <div className="textWrapper">
                  <p className="title">title</p>
                  <p className="info">
                    tag  |  location  |  authorNickname  |  date
                  </p>
                </div>
                <div className="commentWrapper">
                  <p>내 댓글: {"댓글 남기고 갑니다~"}</p>
                </div>
                <button onClick={onClickY} className="commentDeleteBtn" type="button">삭제하기</button>
              </div>
              <hr />
            </div>
          )}

      </MyPostBox>
      <JMFooter/>
    </>
  );
});

export default JSMyPost;