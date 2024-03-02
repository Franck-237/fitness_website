import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainFirst from './components/MainFirst/MainFirst';
import Suscribe from './components/Suscribe/Suscribe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='bg-[#F8F0FD]'>
      <Navbar />
      <Hero />
      <MainFirst />
      <Suscribe />
      <Footer />
    </div>
  )
};

export default App;