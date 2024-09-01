import React from 'react';
import Navbar from './components/Navbar';
//import Home from './components/Home';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
// import RegisterPage from './components/RegisterPage'; 
// import LoginPage from './components/LoginPage'; 
//import Cart from './components/Cart';

const App = () => {
  return (
    <div> 
      <Navbar />
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
