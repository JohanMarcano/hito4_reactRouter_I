import React from 'react';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Pizza from './pages/Pizza';
import RegisterPage from './pages/RegisterPage'; 
import LoginPage from './pages/LoginPage'; 
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div> 
      <MyNavbar />
      <div >
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/profile' element={<Profile></Profile>} />
          <Route path='/login' element={<LoginPage></LoginPage>} />
          <Route path='/register' element={<RegisterPage></RegisterPage>} />
          <Route path='/cart' element={<Cart></Cart>} />
          <Route path='/pizza/p001' element={<Pizza></Pizza>} />
          <Route path='*' element={<NotFound></NotFound>} />
 
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
