/**
 * @filename PlaceCard.jsx
 * @description 장소 정보 카드형 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsBookmarkHeartFill } from 'react-icons/bs';

import Stars from '../Common/Stars';
import MiniPrice from './MiniPrice';
import MiniLocation from './MiniLocation';

const PlaceCardContainer = memo(styled.li`
  cursor: pointer;
  padding: 8px;
  width: 144px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.1);
  transition: all 500ms ease;

  .imgBox {
    position: relative;
    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-radius: 4px;
    }
    .icon {
      padding: 4px 2px;
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
      height: 20px;
      box-sizing: content-box;
      color: var(--color-white);
      &.love {
        color: var(--color-pink);
      }
    }
  }

  .desc {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 12px;
    * {
      padding: 1px 0;
    }
    .title {
      font-weight: 700;
    }
  }
`);

const PlaceCard = memo(({ item }) => {
  const navigate = useNavigate();
  const { src, score, total, title, loc, price, love, id } = item;
  const handleClip = event => {
    // handleLove 상위 컴포넌트로 버블링
  };
  const handleClick = event => {
    navigate(`/place/${event.currentTarget.dataset.id}/details`);
  };

  return (
    <PlaceCardContainer data-id={id} onClick={handleClick}>
      <div className="imgBox">
        <img src={src} alt={title} />
        <span>
          <BsBookmarkHeartFill
            onClick={handleClip}
            className={love ? 'icon love' : 'icon'}
          />
        </span>
      </div>
      <Stars score={score} total={total} />
      <div className="desc">
        <p className="title">{title}</p>
        <MiniLocation loc={loc} />
        <MiniPrice price={price} />
      </div>
    </PlaceCardContainer>
  );
});

export default PlaceCard;
