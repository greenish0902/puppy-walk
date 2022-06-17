/**
 * @filename FrameWrapper.jsx
 * @description 앱 UI styled component
 * @author 서소희 greenish0902@gmail.com
 */

import { memo } from "react";
import styled from "styled-components";

const FrameWrapper = memo(styled.div`
  padding: 36px;
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`);

export default FrameWrapper;
