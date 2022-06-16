import React from 'react';
import {Routes, Route} from "react-router-dom"
import JSCart from './components/JSCart';
import DogSupplies from './pages/DogSupplies';
import JSGoodsDetail from './pages/JSGoodsDetail';
import JSPayment from './pages/JSPayment';
import JSPayResult from './pages/JSPayResult';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DogSupplies/>}/>
        <Route path="/:where" element={<DogSupplies/>}/>
        <Route path="/detail/:title/:price" element={<JSGoodsDetail/>}/>
        <Route path="/cart" element={<JSCart/>}/>
        <Route path="/cart/:title/:count/:price" element={<JSCart/>}/>
        <Route path="/payment" element={<JSPayment/>}/>
        <Route path="/payresult" element={<JSPayResult/>}/>
      </Routes>
    </>
  );
};

export default App;
