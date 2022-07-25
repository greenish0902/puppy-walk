/**
 * @filename Footer.js
 * @description Footer부분, 높이 55px
 * @author 박정모(oooperbjm@gmail.com)
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { BiGift } from 'react-icons/bi';
import { TbMapPin, TbUserCircle, TbStars } from 'react-icons/tb';
import { FaDog } from 'react-icons/fa';

const FooterContainer = styled.div`
  width: 360px;
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  border-top: 1px solid #eee;
  background-color: #fff;
  z-index: 9;

  ul {
    display: flex;
    height: 100%;

    li {
      width: 20%;

      a {
        height: 50px;
        padding: 4px 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
        text-decoration: none;

        &.active {
          font-weight: bold;
          background-color: white;

          * {
            color: var(--color-green-3);
          }
        }

        p {
          position: relative;
          text-align: center;
          color: #000;
          font-size: 11px;
          word-break: keep-all;
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
            <TbMapPin size={18} />
            <p>어디가개</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dogsupplies">
            <BiGift size={18} />
            <p>애견용품</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/puppywalk">
            <FaDog size={18} />
            <p>같이 산책하개</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/community">
            <TbStars size={18} />
            <p>커뮤니티</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/mypage">
            <TbUserCircle size={18} />
            <p>마이페이지</p>
          </NavLink>
        </li>
      </ul>
    </FooterContainer>
  );
});

export default JMFooter;
