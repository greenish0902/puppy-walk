import { memo } from 'react';
import styled from 'styled-components';

const CateWordContainer = memo(styled.span`
  font-size: 12px;
  padding: 0 4px;
  color: var(--color-black);
  background-color: var(--color-light-gray);
`);

const CateWord = memo(({ cate }) => {
  return <CateWordContainer>{cate}</CateWordContainer>;
});

export default CateWord;
