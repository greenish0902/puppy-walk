/**
 * @filename JSPostBox.jsx
 * @description 미니홈피 내 게시글에 사용되는 게시글
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
const PostBox = styled.div`
  width: 108px;
  height: 163px;
  margin-left: 10px;
  display: inline-block;
  cursor: pointer;
  img {
    height: 88px;
    width: 98px;
    margin-bottom: 10px;
  }

  .title {
    font-weight: bold;
  }

  .text {
    color: rgb(127, 127,127);
    font-size: 14px;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`
const JSPostBox = memo(({src, title, text}) => {
  return (
    <PostBox>
      <img src={src} alt="img"/>
      <p className='title'>{title}</p>
      <p className='text'>{text}</p>
    </PostBox>
  );
});

export default JSPostBox;