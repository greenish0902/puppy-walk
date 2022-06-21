import React from 'react';

import MainSubTitle from '../Title/MainSubTitle';
import PlaceCard from './PlaceCard';

const PlaceList = ({ places }) => {
  return (
    <div>
      <MainSubTitle to="/places/list">오늘의 추천장소</MainSubTitle>
      <ul>
        {places.map((item, index) => (
          <PlaceCard item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default PlaceList;
