/**
 * @filename Footer.js
 * @description Footer부분, 높이 55px
 * @author 박정모(oooperbjm@gmail.com)
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import {
  faMapLocationDot,
  faDog,
  faGift,
  faComments,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterContainer = styled.div`
  width: 360px;
  height: 50px;
  position: fixed;
  bottom: 0px;
  background-color: #eee;
  left: 50%;
  transform: translate(-50%, 0);

  ul {
    display: flex;
    flex-wrap: nowrap;

    li {
      padding-top: 5px;
      /* &:nth-child(3) {
        background-color: white;
      } */

      // NavLink 라우팅 이후에 위 옵션 끄고 아래 옵션 켜기
      .active {
        background-color: white;
      }

      a {
        width: 72px;
        display: flex;
        flex-direction: column;
        height: 50px;
        position: relative;
        cursor: pointer;
        text-decoration: none;

        svg {
          height: 50%;
          position: relative;
          top: 2px;
          color: #000;
        }

        p {
          font-size: 0.75em;
          position: relative;
          bottom: -5px;
          text-align: center;
          color: #000;
        }
      }
    }
  }
`;

const JMFooter = memo(() => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <NavLink to="/places">
            <FontAwesomeIcon icon={faMapLocationDot} size="2x" />
            <p>어디가개</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop">
            <FontAwesomeIcon icon={faGift} size="2x" />
            <p>애견용품</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <FontAwesomeIcon icon={faDog} size="2x" />
            <p>같이 산책하개</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/community">
            <FontAwesomeIcon icon={faComments} size="2x" />
            <p>커뮤니티</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/mypage">
            <FontAwesomeIcon icon={faIdCard} size="2x" />
            <p>마이페이지</p>
          </NavLink>
        </li>
      </ul>
    </FooterContainer>
  );
});

export default JMFooter;
