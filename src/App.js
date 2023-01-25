import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthContextProvider } from './context/AuthContext';
import Header from './components/Header';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Home from './components/Home';
import Welcome from './components/Welcome'
import Restaurants from './components/Restaurants'
import Profile from './components/Profile';
import MyTables from './components/MyTables';
import  Protected  from './components/Protected';
import Unprotected from './components/Unprotected';
import ResDetails from './components/Restaurants/ResDetails'
import { useEffect, useState, createContext } from 'react';
export const authentication = createContext();

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
        <Header />
          <Routes>
            <Route path='/' element={<Unprotected><Welcome /></Unprotected>}></Route>
            <Route path='/home' element={<Protected><Home /></Protected>} ></Route>
            <Route path='/restaurants' element={<Protected><Restaurants /></Protected>}></Route>
            <Route path='/login' element={<Unprotected><LoginPage /></Unprotected>}></Route>
            <Route path='/signup' element={<Unprotected><SignupPage /></Unprotected>}></Route>
            <Route path='/my-tables' element={<Protected><MyTables /></Protected>} ></Route>
            <Route path='/profile' element={<Protected><Profile /></Protected>}></Route>
            <Route path='/restaurant-details/:_id' element={<Protected><ResDetails /></Protected>}></Route>

          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}


export default App;
