/**
 * @filename NavWrapper.jsx
 * @description Home 페이지 하단 버튼을 감싸는 nav 태그 styled component
 * @author 서소희 greenish0902@gmail.com
 */

import { memo } from 'react';
import styled from 'styled-components';

const NavWrapper = memo(styled.nav`
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      width: 49%;
    }
  }

  .small a {
    margin: 16px 0 4px 0;
    display: block;
    text-align: right;
    font-size: 12px;
    color: var(--color-text-gray);
  }
`);

export default NavWrapper;