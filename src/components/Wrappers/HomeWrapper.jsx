/**
 * @filename HomeWrapper.jsx
 * @description Home페이지 UI styled component
 * @author 서소희 greenish0902@gmail.com
 */

import { memo } from 'react';
import styled from 'styled-components';

const HomeWrapper = memo(styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`);

export default HomeWrapper;
