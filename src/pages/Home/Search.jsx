/**
 * @filename Search.jsx
 * @description 아이디/비밀번호 찾기 페이지
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import styled from 'styled-components';
import { NavLink, Routes, Route } from 'react-router-dom';

import FrameWrapper from '../../components/Wrappers/FrameWrapper';
import TopNavWrapper from '../../components/Wrappers/TopNavWrapper';
import SearchID from '../../components/Home/SearchID';
import SearchPW from '../../components/Home/SearchPW';

const SearchContainer = styled(FrameWrapper)`
  h4 {
    font-weight: bold;
    margin-bottom: 12px;
  }

  label {
    font-weight: bold;
  }

  input,
  label {
    font-size: 12px;
  }

  input:not([type='checkbox']),
  select {
    cursor: pointer;
    margin: 8px 0;
    width: 100%;
    padding: 8px 12px;
    font-size: 12px;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
  }

  input:focus,
  select:focus {
    outline: 1px solid var(--color-green-1);
  }
`;

const Search = () => {
  return (
    <SearchContainer>
      <h4>회원정보 찾기</h4>
      <TopNavWrapper>
        <NavLink to="id">아이디 찾기</NavLink>
        <NavLink to="password">비밀번호 찾기</NavLink>
      </TopNavWrapper>
      <Routes>
        <Route exact path="id" element={<SearchID />} />
        <Route exact path="password" element={<SearchPW />} />
      </Routes>
    </SearchContainer>
  );
};

export default Search;
