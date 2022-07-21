/**
 * @filename JSDogProfile.jsx
 * @description 내 미니홈피 강아지 프로필
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import src from "../../assets/img/dog.png"

const DogProfileBox = styled.div`
  width: 360px;
  height: 120px;
  .textBox {
    width: 195px;
    height: 24px;
    float: left;
    margin-left: 10px;
    .nameBox {
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

      &:after {
        clear: both;
        float: none;
        content: '';
        display: block;
      }
    }

    p {
      width: 195px;
      height: 47px;
      margin: 10px 0;
      font-size: 12px;
      color: rgb(127, 127, 127);
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    button {
        display: block;
        height: 20px;
        width: 130px;
        background: rgb(127, 127, 127);
        color: white;
        font-size: 12px;
        padding: 0 7px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
  }

  .imgBox {
    margin-right: 10px;
    margin-top: 6px;
    height: 108px;
    width: 108px;
    float: right;
    position: relative;
    border: 1px solid black;
    border-radius: 50%;
    img {
      display: block;
      position: absolute;
      height: 108px;
      width: 108px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &:after {
    clear: both;
    float: none;
    content: '';
    display: block;
  }
`
const DogSizeBox = styled.span`
  float: left;
  background: ${({size}) => size === "대형견" ? '#008D42' : (size === "중형견" ? '#F0AA3B' : '#7F7F7F')};
  color: white;
  font-size: 12px;
  line-height: 24px;
`
const JSDogProfile = memo(({name, sex, age, size, text}) => {
  return (
    <DogProfileBox>
      <div className='textBox'>
        <div className='nameBox'>
          <span>{name}</span>
          <span>{sex} {age}</span>
          <DogSizeBox size={size}>{size}</DogSizeBox>
        </div>
        <p>{text}</p>
        <button type="button">반려견 프로필 수정</button>
      </div>
      <div className="imgBox">
        <img src={src} alt={name}/>
      </div>
    </DogProfileBox>
  );
});

export default JSDogProfile;