import React from 'react';
import {Routes, Route} from "react-router-dom"
import Cart from './components/Cart';
import DogSupplies from './pages/DogSupplies';
import GoodsDetail from './pages/GoodsDetail';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DogSupplies/>}/>
        <Route path="/:where" element={<DogSupplies/>}/>
        <Route path="/detail/:title/:price" element={<GoodsDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/cart/:title/:count/:price" element={<Cart/>}/>
      </Routes>
    </>
  );
};

export default App;
