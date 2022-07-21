import { memo } from 'react';
import styled from 'styled-components';

const ButtonWrapper = memo(styled.button`
  padding: ${props => props.padding || '12px'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'fit-content'};
  text-align: center;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  color: ${props => (props.color ? `var(--color-${props.color})` : '')};
  background-color: ${props =>
    props.bgColor ? `var(--color-${props.bgColor})` : ''};
`);

export default ButtonWrapper;
