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
import Protected from './components/Protected';
import { useEffect, useState, createContext } from 'react';
export const authentication = createContext();

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/home' element={<Protected><Home /></Protected>} ></Route>
            <Route path='/restaurants' element={<Protected><Restaurants /></Protected>}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/signup' element={<SignupPage />}></Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}


export default App;
