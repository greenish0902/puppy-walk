/**
 * @filename Category.jsx
 * @description 전체 카테고리명 및 정렬 버튼 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import MainSubTitle from '../Title/MainSubTitle';
import TopNavWrapper from '../Wrappers/TopNavWrapper';
import CategoryItem from './CategoryItem';
import ListItem from './ListItem';

const CategoryContainer = styled.div`
  .sort {
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }
`;

const Category = ({ categories, places }) => {
  // places 페이지의 전체 데이터를 props 로 전달받는다.
  const handleSort = event => {
    event.target.classList.add('active');
  };

  return (
    <CategoryContainer>
      <MainSubTitle to="/places/cate">카테고리</MainSubTitle>
      <ul>
        {categories.map((item, index) => (
          <CategoryItem item={item} key={index} />
        ))}
      </ul>
      <TopNavWrapper className="sort" onClick={handleSort}>
        <a className="active">인기순</a>
        <a>거리순</a>
        <a>별점순</a>
        <a>제휴</a>
        <a>NEW</a>
      </TopNavWrapper>
      <ul>
        {places.map(item => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </CategoryContainer>
  );
};

export default Category;