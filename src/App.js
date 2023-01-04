import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Banner from "./components/Banner"
import Services from './components/Services'
import Collections from "./components/Collections"
import Popular from './components/Popular'
import Explore from './components/Explore'
import Footer from './components/Footer';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Home from './components/Home';


function App() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/signup' element={<SignupPage />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  

export default App;
