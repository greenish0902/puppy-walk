import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import pawprint from '../../assets/img/pawprint.png';

const MainTitleWrapper = styled.h4`
  font-weight: 600;
  .logo.small {
    margin-left: 8px;
    width: 20px;
  }
`;

const MainTitle = ({ path, children }) => {
  return (
    <Link to={path}>
      <MainTitleWrapper>
        {children}
        <img src={pawprint} alt="pawprint" className="logo small" />
      </MainTitleWrapper>
    </Link>
  );
};

export default MainTitle;
