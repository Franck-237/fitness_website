import React from 'react';


import fleche from '../../assets/images/ri_arrow-right-line.png';
import yoga1 from  '../../assets/images/follow-yoga-1.png';
import yoga2 from  '../../assets/images/follow-yoga-2.png';
import yoga3 from  '../../assets/images/follow-yoga-3.png';
import yoga4 from  '../../assets/images/follow-yoga-4.png';

const MainContent = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center md:justify-between'>
            <div className='flex flex-col justify-center items-center md:hidden'>
                <p className='text-xl font-semibold text-center pb-3 lg:pb-0'>Follow Us On <br /> Instagram <br /> <span className='txt_grad'>#YOGA</span></p>
                <button className='flex flex-col justify-center items-center bg-gradient-to-r from-[#FF62B7] to-[#9F53FF] border text-white text-center rounded-full py-3 px-3 mb-3'>
                    Follow <span><img src={fleche} alt="" /></span>
                </button>
            </div>
            <div className='flex justify-between items-center gap-5 md:flex-row md:gap-[60px] lg:gap-[100px]'>
                <div>
                    <img src={yoga1} alt="" />
                </div>
                <div className='hidden md:flex flex-col justify-center items-center'>
                    <p className='text-2xl lg:text-4xl font-semibold text-center pb-[70px] lg:pb-[100px] leading-[30px] lg:leading-[50px]'>Follow Us On<br /> Instagram<br /> <span className='txt_grad'>#YOGA</span></p>
                    <button className='flex flex-col justify-center items-center bg-gradient-to-r from-[#FF62B7] to-[#9F53FF] border text-white text-center rounded-full py-3 px-3 mb-3'>
                        Follow <span><img src={fleche} alt="" /></span>
                    </button>
                </div>
                <div>
                    <img src={yoga2} alt="" />
                </div>
            </div>
            <div className='md:flex justify-between items-center gap-5 pt-5'>
                <div>
                    <img src={yoga3} alt="" className='pr-10 md:pr-0'/>
                </div>
                <div>
                    <img src={yoga4} alt="" className='pl-20 md:pl-0'/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default MainContent;