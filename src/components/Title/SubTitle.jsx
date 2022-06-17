import React from "react";
import styled from "styled-components";

const SubTitleWrapper = styled.div`
  font-size: 14px;
  text-align: center;
  color: var(--color-text-gray);
  margin-bottom: 12px;
`;

const SubTitle = ({ children }) => {
  return <SubTitleWrapper>{children}</SubTitleWrapper>;
};

export default SubTitle;
