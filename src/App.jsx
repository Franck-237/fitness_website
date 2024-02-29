import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MainFirst from './components/MainFirst/MainFirst';

const App = () => {
  return (
    <div className='bg-[#F8F0FD]'>
      <Navbar />
      <Hero />
      <MainFirst />
    </div>
  )
};

export default App;