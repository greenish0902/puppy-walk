import React from 'react';
import styled from 'styled-components';
import { NavLink, Routes, Route } from 'react-router-dom';

import { FaAngleDoubleLeft, FaRegHeart, FaHeart } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaSearch } from 'react-icons/fa';
// import { MdPlace } from 'react-icons/md';

import TopNavWrapper from '../Wrappers/TopNavWrapper';
import BottomBox from '../Size/BottomBox';
import Stars from '../Common/Stars';
import Location from './Location';
import CateWord from './CateWord';
import Details from './Details';
import Options from './Options';
import PlaceFooter from './PlaceFooter';

const PlaceMainContainer = styled.section`
  width: 100%;

  > img {
    position: fixed;
    width: 100%;
    height: 216px;
    object-fit: cover;
  }

  .content {
    position: relative;
    top: 216px;
    width: 100%;
    padding: 8px 16px;
    background-color: var(--color-white);
    box-shadow: 0px -12.4px 21.4px rgba(0, 0, 0, 0.139),
      0px -12.5px 59.1px rgba(0, 0, 0, 0.2),
      0px 42.6px 142.3px rgba(0, 0, 0, 0.261),
      0px 152px 472px rgba(0, 0, 0, 0.4) !important;

    h4 {
      margin-bottom: 4px;
      font-weight: 800;
    }

    .location {
      font-size: 14px;
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    nav {
      margin: 12px 0;
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      .active {
        color: var(--color-green-2);
        font-weight: 700;
      }
    }
  }
`;

const PlaceMain = ({ data, id }) => {
  return (
    <PlaceMainContainer>
      <div className="floating">
        <NavLink to="/places" className="iconBox left">
          <FaAngleDoubleLeft className="icon" />
        </NavLink>
        <span className="iconBox right">
          {data.love ? (
            <FaHeart className="icon" />
          ) : (
            <FaRegHeart className="icon" />
          )}
        </span>
      </div>
      <img src={data.src} alt={data.title} />
      <div className="content">
        <div className="row">
          <h4>{data.title}</h4>
          <CateWord cate={data.cate} />
        </div>
        <Stars score={data.score} total={data.total} />
        <Location loc={data.loc} className="location" />
        <TopNavWrapper>
          <NavLink to="details">상세</NavLink>
          <NavLink to="options">옵션</NavLink>
        </TopNavWrapper>
        <Routes>
          <Route path="details" element={<Details desc={data.desc} />} />
          <Route
            path="options"
            element={<Options options={data.options} love={data.love} />}
          />
        </Routes>
        <BottomBox size="56px" />
      </div>
      <PlaceFooter price={data.price} id={data.id} to="resv" />
    </PlaceMainContainer>
  );
};

export default PlaceMain;
