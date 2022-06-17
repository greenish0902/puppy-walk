/**
 * @filename Signup.jsx
 * @description 회원가입 페이지
 * @author 서소희 greenish0902@gmail.com
 */

import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import FrameWrapper from "../../components/Wrappers/FrameWrapper";
import Agreements from "../../components/Home/Agreements";
import Member from "../../components/Home/Member";
import UserInfo from "../../components/Home/UserInfo";
import UserProfile from "../../components/Home/UserProfile";
import PetInfo from "../../components/Home/PetInfo";
import PetProfile from "../../components/Home/PetProfile";

const SignupContainer = styled(FrameWrapper)`
  h4 {
    font-weight: bold;
    margin-bottom: 12px;
  }

  label {
    font-weight: bold;
  }

  input,
  label {
    font-size: 12px;
  }

  input:not([type="checkbox"]),
  select {
    cursor: pointer;
    margin: 8px 0;
    width: 100%;
    padding: 8px 12px;
    font-size: 12px;
    border: 1px solid #dedede;
    border-radius: 4px;
  }

  input:focus,
  select:focus {
    outline: 1px solid var(--color-green-1);
  }
`;

const Signup = () => {
  return (
    <SignupContainer>
      <h4>회원가입</h4>
      <Routes>
        <Route exact path="/" element={<Agreements />} />
        <Route path="member" element={<Member />} />
        <Route path="user_info" element={<UserInfo />} />
        <Route path="user_profile" element={<UserProfile />} />
        <Route path="pet_info" element={<PetInfo />} />
        <Route path="pet_profile" element={<PetProfile />} />
      </Routes>
    </SignupContainer>
  );
};

export default Signup;
