/**
 * @filename Place.jsx
 * @description 장소 상세정보 하위 컴포넌트 연결을 위한 페이지
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import useAxios from 'axios-hooks';
import { Routes, Route, useParams } from 'react-router-dom';

import styled from 'styled-components';

import Spinner from '../../components/Common/Spinner';
import ErrorView from '../../components/Common/ErrorView';
import FrameWrapper from '../../components/Wrappers/FrameWrapper';
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
        <Routes>
          <Route path="*" element={<PlaceMain data={data} id={data.id} />} />
          <Route path="resv/*" element={<Reservation />} />
        </Routes>
      </PlaceContainer>
    )
  );
};

export default Place;
