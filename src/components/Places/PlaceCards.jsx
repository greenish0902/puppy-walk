/**
 * @filename PlaceCards.jsx
 * @description 장소카드 컴포넌트 전체
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import MainSubTitle from '../Title/MainSubTitle';
import PlaceCard from './PlaceCard';

const CardUL = styled.ul`
  display: block !important;
  overflow: hidden;

  .slick-slider {
    position: relative;

    .slick-track {
      display: flex;
    }

    .slick-arrow {
      position: absolute;
      top: 48%;
      transform: translateY(-50%);
      z-index: 99;

      &.slick-prev {
        left: 0;
      }

      &.slick-next {
        right: 0;
      }
    }

    .slick-dots {
      margin: 4px;
      display: flex !important;
      justify-content: center;

      li {
        padding: 4px;
      }
    }
  }
`;

const PlaceCards = ({ places }) => {
  const sliderSettings = {
    className: 'center',
    centerMode: true,
    centerPadding: '88px',
    dots: true,
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    lazyLoad: true,
  };

  return (
    <>
      <MainSubTitle to="/places/list">오늘의 추천장소</MainSubTitle>
      <CardUL>
        <Slider {...sliderSettings}>
          {places.map((item, index) => (
            <PlaceCard item={item} key={index} />
          ))}
        </Slider>
      </CardUL>
    </>
  );
};

export default PlaceCards;
