/**
 * @filename MiniLocation.jsx
 * @description 위치 UI 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import { memo } from 'react';
import styled from 'styled-components';
import { MdPlace } from 'react-icons/md';

const LocationContainer = memo(styled.span`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: var(--color-text-gray);
`);

const MiniLocation = memo(({ loc }) => {
  return (
    <LocationContainer>
      <MdPlace />
      <span>{loc}</span>
    </LocationContainer>
  );
});

export default MiniLocation;
