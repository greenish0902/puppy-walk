import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuLinkContainer = styled(NavLink)`
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;
  padding-right: 15px;
  &:hover {
    color: #25AF60
  }

  &.active {
    color: #25AF60;
  }
`
const MenuLink = memo(({to, children}) => <MenuLinkContainer to={to}>{children}</MenuLinkContainer>);

export default MenuLink;