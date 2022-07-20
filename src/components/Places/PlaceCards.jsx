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

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardUL = styled.ul`
  display: block !important;
  overflow: hidden;

  .slick-slider {
    position: relative;

    .slick-track {
      margin-top: 8px;
      display: flex;
      height: 236px;
    }

    .slick-slide {
      transition: all 500ms ease;

      &.slick-center {
        transform: scale(106%);
      }
    }

    .slick-arrow {
      z-index: 99;

      &.slick-prev {
        left: 0;

        &:before {
          padding: 12px;
          color: var(--color-green-gray-1);
        }
      }

      &.slick-next {
        right: 24px;

        &:before {
          padding: 12px;
          color: var(--color-green-gray-1);
        }
      }
    }

    .slick-dots {
      bottom: 0;

      li {
        margin: 0;

        button:before {
          color: var(--color-green-gray-1);
        }
      }
    }
  }
`;

const PlaceCards = ({ places }) => {
  const sliderSettings = {
    dots: true,
    className: 'center',
    centerMode: true,
    centerPadding: '88px',
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    lazyLoad: true,
    speed: 600,
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
