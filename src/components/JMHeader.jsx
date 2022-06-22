/**
 * @filename Header.js
 * @description Header부분, 높이 40px, children이 가운데 제목으로 나타남
 * @author 박정모(oooperbjm@gmail.com)
 */

import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { faBars, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderContainer = styled.div`
  width: 360px;
  background-color: #eee;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: 40px;
  display: flex;
  justify-content: space-between;
  z-index: 99999;

  p {
    font-size: 1.2em;
    line-height: 40px;
    text-align: center;
  }

  svg {
    height: 20px;
    margin: 10px 15px;
    cursor: pointer;
  }
`;

const NavBarContainer = styled.div`
  width: 0px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #eee9;
  transition: width 0.2s;
  overflow: hidden;
  padding-bottom: 55px;

  ul {
    &:first-child {
      padding-top: 10px;
      padding-left: 10px;
    }
    li {
      padding: 5px;
      font-size: 18px;
      a {
        text-decoration: none;
        display: block;
      }
      ul {
        padding-top: 5px;
      }
    }
  }
`;

const NavBar = ({ navref }) => {
  return (
    <NavBarContainer ref={navref}>
      <ul>
        <li>
          <NavLink to="/">홈페이지</NavLink>
        </li>
        <li>
          <NavLink to="/">어디가개</NavLink>
          <ul>
            <li>
              <NavLink to="/">제휴매장</NavLink>
            </li>
            <li>
              <NavLink to="/">일반매장</NavLink>
            </li>
            <li>
              <NavLink to="/">직영매장</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">애견용품</NavLink>
          <ul>
            <li>
              <NavLink to="/">카테고리1</NavLink>
            </li>
            <li>
              <NavLink to="/">카테고리2</NavLink>
            </li>
            <li>
              <NavLink to="/">카테고리3</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">커뮤니티</NavLink>
          <ul>
            <li>
              <NavLink to="/">자유게시판</NavLink>
            </li>
            <li>
              <NavLink to="/">지식in</NavLink>
            </li>
            <li>
              <NavLink to="/">산책코스 추천게시판</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">산책하개</NavLink>
          <ul>
            <li>
              <NavLink to="/">산책메이트 탐색</NavLink>
            </li>
            <li>
              <NavLink to="/">산책번개</NavLink>
            </li>
            <li>
              <NavLink to="/">메이트관리</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">마이페이지</NavLink>
          <ul>
            <li>
              <NavLink to="/">내 미니홈피</NavLink>
            </li>
            <li>
              <NavLink to="/">프로필수정</NavLink>
            </li>
            <li>
              <NavLink to="/">메시지함</NavLink>
            </li>
            <li>
              <NavLink to="/">내 구매</NavLink>
            </li>
            <li>
              <NavLink to="/">내 예약</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">고객센터</NavLink>
          <ul>
            <li>
              <NavLink to="/">공지사항</NavLink>
            </li>
            <li>
              <NavLink to="/">문의게시판</NavLink>
            </li>
            <li>
              <NavLink to="/">자주 묻는 질문</NavLink>
            </li>
            <li>
              <NavLink to="/">불량회원 신고</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </NavBarContainer>
  );
};

const Header = ({ children }) => {
  const nav = React.useRef();

  const OnClick = e => {
    e.preventDefault();

    // nav.current.classList.toggle('hide');
    nav.current.style.width =
      nav.current.style.width === '0px' ? '360px' : '0px';
    //   nav.current.style.height === '0px' ? '100%' : '0px';
  };

  return (
    <>
      <HeaderContainer>
        <FontAwesomeIcon icon={faBars} onClick={OnClick} />
        <p>{children ?? ''}</p>
        <FontAwesomeIcon icon={faComment} />
      </HeaderContainer>
      <NavBar navref={nav} />
    </>
  );
};

export default Header;
