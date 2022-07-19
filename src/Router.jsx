import React, { useContext } from 'react';

import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './utils/AuthContextProvider';

import Main from './Main';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import Signup from './pages/Home/Signup';
import Search from './pages/Home/Search';
import Place from './pages/Places/Place';
import Reservation from './pages/Places/Reservation';

const Router = () => {
  // localStorage 정보에 따라 첫 접속시 보이는 컴포넌트 다르게 구현
  const { id } = useContext(AuthContext);

  return (
    <Routes>
      <Route>
        <Route path="/*" element={id ? <Main /> : <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/*" element={<Signup />} />
        <Route path="/search/*" element={<Search />} />
        <Route path="/place/:id/*" element={<Place />} />
        <Route path="/reservation/:id/*" element={<Reservation />} />
      </Route>
    </Routes>
  );
};

export default Router;
