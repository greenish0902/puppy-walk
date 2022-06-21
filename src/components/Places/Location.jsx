import { memo } from 'react';
import styled from 'styled-components';
import { MdPlace } from 'react-icons/md';

const LocationContainer = memo(styled.span`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: var(--color-text-gray);
`);

const Location = memo(({ loc }) => {
  return (
    <LocationContainer>
      <MdPlace />
      <span>{loc}</span>
    </LocationContainer>
  );
});

export default Location;
