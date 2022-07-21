import {Routes, Route} from "react-router-dom"
import React, { useState } from 'react';
import styled from 'styled-components';

import Main from './Main';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import Signup from './pages/Home/Signup';
import Search from './pages/Home/Search';
import Place from './pages/Places/Place';
import Reservation from './pages/Places/Reservation';
import Community from './pages/Community/JMCommunity';
import PuppyWalk from "./pages/PuppyWalk/JMPuppyWalk";
import Header from './components/JMHeader';
import Footer from './components/JMFooter';
import Post from "./pages/Community/JMPost";
import JSCart from './components/Cart/JSCart';
import DogSupplies from './pages/DogSupplies/DogSupplies';
import JSGoodsDetail from './pages/DogSupplies/JSGoodsDetail';
import JSPayment from './pages/DogSupplies/JSPayment';
import JSPayResult from './pages/DogSupplies/JSPayResult';

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
  // 세션 정보에 따라 첫 접속시 보이는 컴포넌트 다르게 구현
  const [first, setFirst] = useState(false);

  return (
      // <AppContainer>
      //     <Routes>
      //         <Route path='/community/*' element={<Community />} />
      //         <Route path='/puppywalk/*' element={<PuppyWalk />} />
      //         <Route path="/post" element={<Post />} />
      //     </Routes>
      // </AppContainer>
    <AppContainer>
      <Routes>
        <Route>
          <Route path="/*" exact={true} element={first ? <Home /> : <Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/*" element={<Signup />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/place/:id/*" element={<Place />} />
          <Route path="/reservation/:id/*" element={<Reservation />} />
          <Route path="/community/*" element={<Community />} />
          <Route path='/puppywalk/*' element={<PuppyWalk />} />
          <Route path="/post" element={<Post />} />
          <Route path="/dogsupplies" element={<DogSupplies/>}/>
          <Route path="/dogsupplies/:where" element={<DogSupplies/>}/>
          <Route path="/goodsdetail/:title/:price" element={<JSGoodsDetail/>}/>
          <Route path="/cart" element={<JSCart/>}/>
          <Route path="/payment" element={<JSPayment/>}/>
          <Route path="/payresult" element={<JSPayResult/>}/>
        </Route>
      </Routes>
    </AppContainer>
  );
};

export default App;
