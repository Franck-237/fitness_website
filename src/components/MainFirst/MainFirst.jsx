import React from 'react';

import MainSecond from './MainSecond';
import MainThird from './MainThird';

import homeHealth from '../../assets/images/List box.png'
import star from '../../assets/images/liststar-2-img.png';
import btnLink from '../../assets/images/Button link list.png';

const MainFirst = () => {
  return (
    <div className='container mx-auto px-5 py-32 overflow-hidden'>
        <div className='flex flex-col justify-between items-center space-y-5 lg:flex-row lg:gap-5'>
            <div className='flex justify-between items-center gap-1 md:gap-5 pr-6 pb-10'>
                <p className='font-[poppins] text-2xl md:text-3xl font-bold'>#01</p>
                <img src={homeHealth} alt="" className='w-[300px] md:w-auto'/>
            </div>
            <div className=''>
                <img src={star} alt="" className='absolute top-[1350px] md:top-[1180px] lg:top-[900px]'/>
                <p className='text-lg text-center font-medium font-[poppins] lg:text-xl w-[400px]'>
                Get a list of specific influencers in your niche at your fingertips so you can focus on managing your status.
                </p>
            </div>
            <div>
                <img src={btnLink} alt="" />
            </div>
        </div>
        <MainSecond />
        <MainThird />
    </div>
  )
};

export default MainFirst;