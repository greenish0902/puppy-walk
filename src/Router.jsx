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
import Community from './pages/Community/JMCommunity';
import PuppyWalk from './pages/PuppyWalk/JMPuppyWalk';
import Header from './components/JMHeader';
import Footer from './components/JMFooter';
import Post from './pages/Community/JMPost';
import JSCart from './components/Cart/JSCart';
import DogSupplies from './pages/DogSupplies/DogSupplies';
import JSGoodsDetail from './pages/DogSupplies/JSGoodsDetail';
import JSPayment from './pages/DogSupplies/JSPayment';
import JSPayResult from './pages/DogSupplies/JSPayResult';
import JSMyPage from './pages/Mypage/JSMyPage';
import JSMiniHome from './pages/Mypage/JSMiniHome';
import JSMyPurchasePage from './pages/Mypage/JSMyPurchasePage';
import JSMyPurchaseList from './pages/Mypage/JSMyPurchaseList';
import JSPurchaseDetail from './pages/Mypage/JSPurchaseDetail';
import JSMyPost from './pages/Mypage/JSMyPost';
import JSServiceCenter from './pages/JSServiceCenter';
import JSService from './pages/JSService';
import JSNotice from './pages/JSNotice';
import JSInqury from './pages/JSInqury';
import JSFAQ from './pages/JSFAQ';
import JSReport from './pages/JSReport';

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
        <Route path="/reservation/:id/*" element={<Reservation />} />
        <Route path="/community/*" element={<Community />} />
        <Route path="/puppywalk/*" element={<PuppyWalk />} />
        <Route path="/post" element={<Post />} />
        <Route path="/dogsupplies" element={<DogSupplies />} />
        <Route path="/dogsupplies/:where" element={<DogSupplies />} />
        <Route path="/goodsdetail/:title/:price" element={<JSGoodsDetail />} />
        <Route path="/cart" element={<JSCart />} />
        <Route path="/payment" element={<JSPayment />} />
        <Route path="/payresult" element={<JSPayResult />} />
        <Route path="/mypage" element={<JSMyPage />} />
        <Route path="/minihome" element={<JSMiniHome />} />
        <Route path="/cart" element={<JSCart />} />
        <Route path="/purchase" element={<JSMyPurchasePage />} />
        <Route path="/purchaselist" element={<JSMyPurchaseList />} />
        <Route path="/purchasedetail/:date" element={<JSPurchaseDetail />} />
        <Route path="/minihome/post" element={<JSMyPost />} />
        <Route path="/center" element={<JSServiceCenter />} />
        <Route path="/service" element={<JSService />} />
        <Route path="/notice" element={<JSNotice />} />
        <Route path="/inqury" element={<JSInqury />} />
        <Route path="/faq" element={<JSFAQ />} />
        <Route path="/report" element={<JSReport />} />
      </Route>
    </Routes>
  );
};

export default Router;
