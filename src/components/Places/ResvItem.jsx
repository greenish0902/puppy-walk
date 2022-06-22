/**
 * @filename ResvItem.jsx
 * @description 예약 내역 리스트 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import styled from 'styled-components';

const ResvItemContainer = styled.li`
  display: flex;
`;

const ResvItem = () => {
  return (
    <ResvItemContainer>
      <img src="" alt="" />
      <div className="desc">
        <div className="title">title</div>
        <div className="datetime">datetime</div>
      </div>
    </ResvItemContainer>
  );
};

export default ResvItem;
