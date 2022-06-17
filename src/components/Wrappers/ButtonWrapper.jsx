import { memo } from "react";
import styled from "styled-components";

const ButtonWrapper = memo(styled.button`
  padding: 12px;
  width: ${(props) => props.width || "100%"};
  text-align: center;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  color: ${(props) => (props.color ? `var(--color-${props.color})` : "")};
  background-color: ${(props) =>
    props.bgColor ? `var(--color-${props.bgColor})` : ""};
`);

export default ButtonWrapper;
