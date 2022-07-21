/**
 * @filename PuppyWalkHome.jsx
 * @description 산책하개 홈 페이지
 * @author 박정모 (oooperbjm@gmail.com)
 */

import React from 'react';
import styled from 'styled-components';
import PuppyWalkHomeLogos from '../../components/PuppyWalk/PuppyWalkHomeLogos';
import '../../assets/scss/palette.scss';

const PuppyWalkHomeContainer = styled.div`
  background-color: var(--color-gray);
  width: 360px;
  height: 510px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .content-wrapper {
    h1 {
      font-size: 1.5em;
      padding: 10px 10px;

      span {
        &:nth-child(2) {
          background-color: var(--color-green-2);
        }
        background-color: orange;
      }

      &:nth-child(3) {
        text-align: right;
      }
    }
  }
`;
const PuppyWalkHome = () => {
  return (
    <PuppyWalkHomeContainer>
      <div className="content-wrapper">
        <h1>
          꾸준히 함께할 <br /> <span>산책메이트</span>를 찾아보세요
        </h1>
        <div className="logos">
          <PuppyWalkHomeLogos />
        </div>
        <h1>
          <span>산책 번개</span>로 <br /> 쉽고 빠르게 만나보세요
        </h1>
      </div>
    </PuppyWalkHomeContainer>
  );
};

export default PuppyWalkHome;
