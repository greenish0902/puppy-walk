import React from 'react';
import {Routes, Route} from "react-router-dom"
import JSCart from './components/Cart/JSCart';
import JSMyPage from './pages/Mypage/JSMyPage';
import JSMiniHome from './pages/Mypage/JSMiniHome';
import JSMyPurchasePage from './pages/Mypage/JSMyPurchasePage';
import JSMyPurchaseList from './pages/Mypage/JSMyPurchaseList';
import JSPurchaseDetail from './pages/Mypage/JSPurchaseDetail';
import JSMyPost from './pages/Mypage/JSMyPost';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/mypage" element={<JSMyPage/>}/>
        <Route path="/minihome" element={<JSMiniHome/>}/>
        <Route path="/cart" element={<JSCart/>}/>
        <Route path="/purchase" element={<JSMyPurchasePage/>}/>
        <Route path="/purchaselist" element={<JSMyPurchaseList/>}/>
        <Route path="/purchasedetail/:date" element={<JSPurchaseDetail/>}/>
        <Route path="/minihome/post" element={<JSMyPost/>}/>
      </Routes>
    </>
  );
};

export default App;
