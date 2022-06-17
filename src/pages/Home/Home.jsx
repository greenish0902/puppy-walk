import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/img/dog.png";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/Title/SubTitle";
import ButtonWrapper from "../../components/Wrappers/ButtonWrapper";
import FrameWrapper from "../../components/Wrappers/FrameWrapper";
import NavWrapper from "../../components/Wrappers/NavWrapper";

const HomeContainer = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 160px;
  }

  .desc {
    text-align: center;
    color: var(--color-text-gray);

    p {
      margin-top: 12px;
      font-size: 14px;
    }
  }

  nav {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <FrameWrapper>
      <SubTitle>반갑습니다!</SubTitle>
      <HomeContainer>
        <Title />
        <img src={logo} alt="logo" className="logo" />
        <div className="desc">
          반갑습니다.
          <br />
          <p>당신의 산책 메이트를 만나보세요!</p>
        </div>
        <NavWrapper>
          <div className="buttons">
            <Link to="/signup">
              <ButtonWrapper>회원가입</ButtonWrapper>
            </Link>
            <Link to="/login">
              <ButtonWrapper>로그인</ButtonWrapper>
            </Link>
          </div>
        </NavWrapper>
      </HomeContainer>
    </FrameWrapper>
  );
};

export default Home;
