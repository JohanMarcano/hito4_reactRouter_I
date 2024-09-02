import React from 'react';
import MyNavbar from './components/MyNavbar';
//import Home from './pages/Home';
import Footer from './components/Footer';
import Pizza from './pages/Pizza';
// import RegisterPage from './pages/RegisterPage'; 
// import LoginPage from './pages/LoginPage'; 
//import Cart from './pages/Cart';

const App = () => {
  return (
    <div> 
      <MyNavbar />
      <div >
        {/*<Home />*/}
        <Pizza />
        {/*<RegisterPage />*/} 
        {/*<LoginPage />*/} 
        {/*<Cart />*/} 
      </div>
      <Footer />
    </div>
  );
};

export default App;
