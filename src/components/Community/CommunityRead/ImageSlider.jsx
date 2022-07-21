import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
  img {
    width: 100%;
  }
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
      opacity: 0.8;
      color: var(--color-green-gray-1);
    }
  }

  .slick-next {
    right: 10px;
    top: 128px;

    &:before {
      opacity: 0.8;
      color: var(--color-green-gray-1);
    }
  }

  .slick-dots {
    bottom: 5px;
  }
`;

const ImageSlider = ({imgList}) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
            <StyledSlider {...settings}>
                {imgList.map((v, i) => {
                    return (
                        <div key={i}>
                            <img src={v} alt={`img${i}`} />
                        </div>
                    )
                })}
            </StyledSlider>
    );
};

export default ImageSlider;
