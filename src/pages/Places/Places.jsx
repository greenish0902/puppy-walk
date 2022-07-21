/**
 * @filename Places.jsx
 * @description 어디가개 탭의 첫 페이지
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import styled from 'styled-components';
import useAxios from 'axios-hooks';
import { FaSearch } from 'react-icons/fa';

import Spinner from '../../components/Common/Spinner';
import ErrorView from '../../components/Common/ErrorView';
import MainTitle from '../../components/Title/MainTitle';
import Category from '../../components/Places/Category';
import PlaceCards from '../../components/Places/PlaceCards';

const PlacesContainer = styled.div`
  width: 100%;

  input,
  label {
    font-size: 12px;
  }

  input:not([type='checkbox']),
  s select {
    cursor: pointer;
    margin: 8px 0;
    width: 100%;
    padding: 8px 12px;
    font-size: 12px;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
  }

  .searchBox {
    position: relative;
    margin-bottom: 8px;
    .icon {
      width: 24px;
      position: absolute;
      right: 4px;
      bottom: 16px;
      color: var(--color-text-gray);
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Places = () => {
  const [{ data: places, loading: placesLoading, error: placesError }] =
    useAxios('http://localhost:3001/places');
  const [{ data: cate, loading: cateLoading, error: cateError }] = useAxios(
    'http://localhost:3001/categories',
  );

  if (placesLoading || cateLoading)
    return <Spinner visible={placesLoading || cateLoading} />;
  if (placesError) return <ErrorView error={placesError} />;
  if (cateError) return <ErrorView error={cateError} />;

  return (
    <PlacesContainer>
      <MainTitle path="/places">오늘은 어디가개?</MainTitle>
      <div className="searchBox">
        <input type="text" placeholder="장소를 검색해보세요!" />
        <FaSearch className="icon" />
      </div>
      <PlaceCards places={places} />
      <Category categories={cate} places={places} />
    </PlacesContainer>
  );
};

export default Places;
