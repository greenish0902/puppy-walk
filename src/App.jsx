import React from "react";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login";
import Signup from "./pages/Home/Signup";
import Search from "./pages/Home/Search";

const AppContainer = styled.div`
  margin: auto;
  width: 360px !important;
  height: 600px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/*" element={<Signup />} />
          <Route path="/search/*" element={<Search />} />
        </Route>
      </Routes>
    </AppContainer>
  );
};

export default App;
