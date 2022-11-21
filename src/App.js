import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Ecomm from './pages/Ecomm';
import Emp from './pages/Emp';
import Lines from './pages/Lines';
import Cart from './pages/Cart';
import Chat from './pages/Chat';
import Notif from './pages/Notif';
import Login from './pages/Login';
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route />
      <Route path='/' element={<><Ecomm/></>}/> 
      <Route path='/employee' element={<><Emp/></>}/>
      <Route path='/lines' element={<><Lines/></>}/>
      <Route path='/cart' element={<><Cart/></>}/>
      <Route path='/chat' element={<><Chat/></>}/>
      <Route path='/notif' element={<Notif/>}/>
      <Route path='/profile' element={<Login/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
