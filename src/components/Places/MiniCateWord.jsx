/**
 * @filename MiniCateWord.jsx
 * @description 카테고리정보 UI 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import { memo } from 'react';
import styled from 'styled-components';

const CateContainer = memo(styled.span`
  font-size: 12px;
  padding: 0 4px;
  color: var(--color-black);
  background-color: var(--color-light-gray);
`);

const MiniCateWord = memo(({ cate }) => {
  return <CateContainer>{cate}</CateContainer>;
});

export default MiniCateWord;
