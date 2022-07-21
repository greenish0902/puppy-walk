import { memo } from 'react';
import styled from 'styled-components';

const TopNavWrapper = memo(styled.nav`
  margin: 12px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    padding: 4px 12px;
    width: 49%;
    background-color: var(--color-light-gray);
    border: 3px solid var(--color-light-gray);
    border-bottom: none;
    font-size: 12px;
    text-align: center;
    &.active {
      color: var(--color-green-2);
      background-color: var(--color-white);
      border: 3px solid var(--color-mint-green-2);
      border-bottom: none;
      font-weight: bold;
    }
  }
`);

export default TopNavWrapper;
