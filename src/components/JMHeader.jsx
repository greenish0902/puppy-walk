/**
 * @filename Header.js
 * @description Header부분, 높이 40px, children이 가운데 제목으로 나타남
 * @author 박정모(oooperbjm@gmail.com)
 */

import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import { BiMenu } from 'react-icons/bi';
import { TbMessageCircle2 } from 'react-icons/tb';

const HeaderContainer = styled.div`
  padding: 0 12px;
  width: 360px;
  height: 40px;
  position: fixed;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateX(-50%);
  z-index: 99999;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  user-select: none;

  p {
    font-weight: bold;
  }

  * {
    cursor: pointer;
    &:hover {
      color: var(--color-green-3);
    }
  }
`;

const NavBarContainer = styled.div`
  padding-bottom: 64px;
  width: 360px;
  height: 560px;
  max-height: 560px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  overflow-y: scroll;
  transition: all 300ms ease;
  background-color: #fffffff2;
  z-index: 9;

  &.hide {
    height: 0px;
    padding-bottom: 0;
  }

  > ul {
    > li {
      padding: 4px 24px;
      font-size: 14px;

      a {
        display: block;
        line-height: 2;

        &:hover {
          font-weight: bold;
        }

        span {
          border-bottom: 4px solid var(--color-gray);

          &.depth1 {
            border-bottom: 4px solid var(--color-green-1);
          }
        }
      }

      > ul {
        padding-left: 36px;
      }
    }
  }
`;

const NavBar = ({ navref, onClick }) => {
  return (
    <NavBarContainer className="hide" ref={navref} onClick={onClick}>
      <ul>
        <li>
          <NavLink to="/home">
            <span className="depth1">홈페이지</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/signup">
                <span>회원가입</span>
              </NavLink>
              <NavLink to="/signin">
                <span>로그인</span>
              </NavLink>
              <NavLink to="/signout">
                <span>로그아웃</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/places">
            <span className="depth1">어디가개</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/places">
                <span>제휴매장</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/places">
                <span>일반매장</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/places">
                <span>직영매장</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/dogsupplies">
            <span className="depth1">애견용품</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/dogsupplies/best">
                <span>BEST</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dogsupplies/category1">
                <span>카테고리1</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dogsupplies/category2">
                <span>카테고리2</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dogsupplies/category3">
                <span>카테고리3</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/community">
            <span className="depth1">커뮤니티</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/community">
                <span>자유게시판</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/community">
                <span>지식in</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/community">
                <span>산책코스 추천게시판</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">
            <span className="depth1">산책하개</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/">
                <span>산책메이트 탐색</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <span>산책번개</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <span>메이트관리</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/mypage">
            <span className="depth1">마이페이지</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/mypage">
                <span>내 미니홈피</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mypage">
                <span>프로필수정</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mypage">
                <span>메시지함</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mypage">
                <span>내 구매</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mypage">
                <span>내 예약</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/service">
            <span className="depth1">고객센터</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/service">
                <span>공지사항</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">
                <span>문의게시판</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">
                <span>자주 묻는 질문</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">
                <span>불량회원 신고</span>
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </NavBarContainer>
  );
};

const Header = ({ children }) => {
  const nav = React.useRef(null);
  const navigate = useNavigate();

  const onClick = e => {
    nav.current.classList.toggle('hide');
  };

  const onNavClick = e => {
    nav.current.classList.add('hide');
  };

  return (
    <>
      <HeaderContainer>
        <BiMenu onClick={onClick} size={20} />
        <p onClick={() => navigate('/')}>{children ?? ''}</p>
        <TbMessageCircle2 size={20} onClick={() => navigate('/message')} />
      </HeaderContainer>
      <NavBar navref={nav} onClick={onNavClick} />
    </>
  );
};

export default Header;
