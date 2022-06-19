import React from 'react';
import {Routes, Route} from "react-router-dom"
import JSServiceCenter from './pages/JSServiceCenter';
import JSService from './pages/JSService';
import JSNotice from './pages/JSNotice';
import JSInqury from './pages/JSInqury';
import JSFAQ from './pages/JSFAQ';
import JSReport from './pages/JSReport';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/center" element={<JSServiceCenter/>}/>
        <Route path="/service" element={<JSService/>}/>
        <Route path="/notice" element={<JSNotice/>}/>
        <Route path="/inqury" element={<JSInqury/>}/>
        <Route path="/faq" element={<JSFAQ/>}/>
        <Route path="/report" element={<JSReport/>}/>
      </Routes>
    </>
  );
};

export default App;
