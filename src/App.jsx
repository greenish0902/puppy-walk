import React from 'react';
import {Routes, Route} from "react-router-dom"
import JSCart from './components/JSCart';
import JSMyPage from './pages/JSMyPage';
import JSMiniHome from './pages/JSMiniHome';
import JSMyPurchasePage from './pages/JSMyPurchasePage';
import JSMyPurchaseList from './pages/JSMyPurchaseList';
import JSPurchaseDetail from './pages/JSPurchaseDetail';
import JSMyPost from './pages/JSMyPost';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/mypage" element={<JSMyPage/>}/>
        <Route path="/minihome" element={<JSMiniHome/>}/>
        <Route path="/cart" element={<JSCart/>}/>
        <Route path="/cart/:title/:count/:price" element={<JSCart/>}/>
        <Route path="/purchase" element={<JSMyPurchasePage/>}/>
        <Route path="/purchaselist" element={<JSMyPurchaseList/>}/>
        <Route path="/purchasedetail/:date" element={<JSPurchaseDetail/>}/>
        <Route path="/minihome/post" element={<JSMyPost/>}/>
      </Routes>
    </>
  );
};

export default App;
