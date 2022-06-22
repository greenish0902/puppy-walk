/**
 * @filename Details.jsx
 * @description 장소 상세정보 상세 탭
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  padding: 12px;
  line-height: 1.8;
  .descBox {
    font-size: 12px;
  }
`;

const Details = ({ desc }) => {
  return (
    <DetailsContainer>
      <div className="descBox">{desc}</div>
      {/* 카카오맵 */}
    </DetailsContainer>
  );
};

export default Details;
