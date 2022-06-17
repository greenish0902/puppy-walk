/**
 * @filename Title.jsx
 * @description 제목 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import pawprint from "../../assets/img/pawprint.png";

const TitleWrapper = memo(styled.h1`
  text-align: center;
  font-weight: bold;
  .logo.small {
    margin-left: 12px;
    width: 32px;
  }
`);

const Title = memo(() => {
  return (
    <Link to="/">
      <TitleWrapper>
        산책하개
        <img src={pawprint} alt="pawprint" className="logo small" />
      </TitleWrapper>
    </Link>
  );
});

export default Title;
