import { memo } from "react";
import styled from "styled-components";

const HomeWrapper = memo(styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`);

export default HomeWrapper;
