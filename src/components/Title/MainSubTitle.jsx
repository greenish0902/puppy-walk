import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainSubTitleContainer = styled.div`
  margin: 8px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    font-weight: 600;
    .logo.small {
      margin-left: 12px;
      width: 32px;
    }
  }

  p {
    font-size: 8px;
    font-weight: 500;
    color: var(--color-text-gray);
  }
`;

const MainSubTitle = ({ to = '', children, more = true }) => {
  return (
    <MainSubTitleContainer>
      <Link to={to}>
        <h5>{children}</h5>
      </Link>
      {more && (
        <Link to={to}>
          <p>전체보기</p>
        </Link>
      )}
    </MainSubTitleContainer>
  );
};

export default MainSubTitle;
