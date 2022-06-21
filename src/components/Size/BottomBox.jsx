import { memo } from 'react';
import styled from 'styled-components';

const BottomBox = memo(styled.div`
  padding-bottom: ${props => props.size || '36px'};
`);

export default BottomBox;
