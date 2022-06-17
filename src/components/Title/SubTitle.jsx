/**
 * @filename SubTitle.jsx
 * @description 부제목 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import { memo } from "react";
import styled from "styled-components";

const SubTitleWrapper = memo(styled.div`
  font-size: 14px;
  text-align: center;
  color: var(--color-text-gray);
  margin-bottom: 12px;
`);

const SubTitle = memo(({ children }) => {
  return <SubTitleWrapper>{children}</SubTitleWrapper>;
});

export default SubTitle;
