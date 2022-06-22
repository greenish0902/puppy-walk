import React from 'react';
import useAxios from 'axios-hooks';
import { NavLink, Routes, Route, useParams } from 'react-router-dom';

import styled from 'styled-components';

import Spinner from '../../components/Common/Spinner';
import ErrorView from '../../components/Common/ErrorView';
import FrameWrapper from '../../components/Wrappers/FrameWrapper';
// import ButtonWrapper from '../../components/Wrappers/ButtonWrapper';
// import TopNavWrapper from '../../components/Wrappers/TopNavWrapper';
// import BottomBox from '../../components/Size/BottomBox';
// import Stars from '../../components/Common/Stars';
// import Price from '../../components/Places/Price';
// import Location from '../../components/Places/Location';
// import CateWord from '../../components/Places/CateWord';
// import Details from '../../components/Places/Details';
// import Options from '../../components/Places/Options';
// import PlaceFooter from '../../components/Places/PlaceFooter';
import PlaceMain from '../../components/Places/PlaceMain';
import Reservation from './Reservation';

const PlaceContainer = styled(FrameWrapper)`
  /* 상속받은 값 일부 초기화 */
  padding: 0;
  justify-content: flex-start;
  align-items: flex-start;

  /* 커스텀 시작 */
  position: relative;

  .floating {
    .iconBox {
      position: fixed;
      top: 16px;
      padding: 6px 8px 0 8px;
      background-color: var(--color-white);
      border-radius: 50%;
      box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.2);
      z-index: 9999;
      &.left {
        left: 16px;
      }
      &.right {
        right: 16px;
        color: var(--color-pink);
      }
      .icon:hover {
        cursor: pointer;
      }
    }
  }

  /* > section {
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
  } */
`;

const Place = () => {
  const { id } = useParams();
  const [{ data, loading, error }] = useAxios(
    `http://localhost:3001/places/${id}`,
  );

  if (loading) return <Spinner visible={loading} />;
  if (error) return <ErrorView error={error} />;

  return (
    data && (
      <PlaceContainer>
        {/* <section>
          <img src={data.src} alt={data.title} />
          <div className="content">
            <div className="row">
              <h4>{data.title}</h4>
              <CateWord cate={data.cate} />
            </div>
            <Stars score={data.score} total={data.total} />
            <Location loc={data.loc} className="location" />
            <TopNavWrapper>
              <NavLink to="">상세</NavLink>
              <NavLink to="options">옵션</NavLink>
            </TopNavWrapper>
            <Routes>
              <Route path="" element={<Details desc={data.desc} />} />
              <Route
                path="options"
                element={<Options options={data.options} love={data.love} />}
              />
            </Routes>
            <BottomBox size="56px" />
          </div>
        </section> */}
        <Routes>
          <Route path="*" element={<PlaceMain data={data} id={data.id} />} />
          <Route path="resv/*" element={<Reservation />} />
        </Routes>
        {/* <PlaceFooter
          price={data.price}
          id={data.id}
          to={`/reservation/${id}`}
        /> */}
      </PlaceContainer>
    )
  );
};

export default Place;
