/**
 * @filename PlaceCards.jsx
 * @description 장소카드 컴포넌트 전체
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';

import MainSubTitle from '../Title/MainSubTitle';
import PlaceCard from './PlaceCard';

const PlaceCards = ({ places }) => {
  return (
    <>
      <MainSubTitle to="/places/list">오늘의 추천장소</MainSubTitle>
      <ul>
        {places.map((item, index) => (
          <PlaceCard item={item} key={index} />
        ))}
      </ul>
    </>
  );
};

export default PlaceCards;
