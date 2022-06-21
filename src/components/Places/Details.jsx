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
  // json strigify parse ?

  return (
    <DetailsContainer>
      <div className="descBox">{desc}</div>
      {/* 카카오맵 */}
    </DetailsContainer>
  );
};

export default Details;
