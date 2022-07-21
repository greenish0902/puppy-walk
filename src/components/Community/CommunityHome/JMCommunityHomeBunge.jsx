import React from 'react';
import styled from 'styled-components';
import ButtonWrapper from '../../ButtonWrapper';
import '../../../assets/scss/palette.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useAxios from 'axios-hooks';

const HomeBunge = styled.div`
  width: 360px;
  height: 200px;
  margin: 40px auto 0 auto;

  h3 {
    font-size: 1em;
    display: block;
    margin: 10px;
    padding-top: 10px;
  }

  div {
    width: 340px;
    height: 140px;
    padding-bottom: 10px;
    background-color: var(--color-light-yellow);
    margin: auto;
    position: relative;
    border-radius: 10px;

    p {
      margin: 0 10px;
      padding-top: 5px;
      font-size: 0.7em;
      text-align: right;
    }

    p:nth-child(2) {
      padding: 0;
      font-size: 0.8em;
    }

    p:nth-child(3) {
      padding: 0;
      margin: 0 10px;
      font-size: 0.9em;
      text-align: center;
    }

    //button {
    //  position: absolute;
    //  bottom: 10px;
    //  left: 50%;
    //  transform: translate(-50%, 0);
    //}
  }
`;

const ButtonWrapper1 = styled(ButtonWrapper)`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    display: block;
    margin: 0 auto;
  }

  .slick-prev {
    z-index: 10;
    left: 10px;
    top: 128px;

    &:before {
      opacity: 0.5;
      color: var(--color-green-gray-1);
    }
  }

  .slick-next {
    right: 10px;
    top: 128px;

    &:before {
      opacity: 0.5;
      color: var(--color-green-gray-1);
    }
  }

  .slick-dots {
    bottom: 15px;
  }
`;

const URL = 'http://localhost:3001/bunge';

const CommunityHome = () => {
  const [{ data, loading, error }, refetch] = useAxios(URL);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const homeBunge = () => {
    const result = [];
    for (let i = 0; data.length < 6 ? i < data.length : i < 10; i++) {
      result.push(
        <div key={i}>
          <p>
            {data[i].location} | {data[i].date}
          </p>
          <p>{data[i].authorNickname}</p>
          <p>{data[i].content}</p>
          <ButtonWrapper1
            color="white"
            bgColor="green-2"
            width="fit-content"
            padding="5px"
          >
            메시지 보내기
          </ButtonWrapper1>
        </div>,
      );
    }
    return result;
  };

  return (
    <>
      <HomeBunge>
        <h3>⚡산책 번개</h3>
        <StyledSlider {...settings}>{data && homeBunge()}</StyledSlider>
      </HomeBunge>
    </>
  );
};

export default CommunityHome;
