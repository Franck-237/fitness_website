import React from 'react';

import Button from '../Button';

import fleche from '../../assets/images/ri_arrow-right-line.png';
import girlHero from '../../assets/images/home-yoga.png';
import homeStar from '../../assets/images/home-star.png';
import homeCircle from '../../assets/images/home-circle.png';

const Hero = () => {
  return (
    <div className='container mx-auto px-5 pt-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 font-[poppins]'>
            <div className='flex flex-col items-center justify-center md:items-start'>
                <h1 className='text-3xl font-bold pb-10 md:text-4xl lg:text-5xl text-center md:text-start'>
                Choose Your Best <span className='relative bg-gradient-to-r from-[#FF62B7] to-[#9F53FF] border rounded-lg my-5 px-4 py-1 text-white w-[100px] rotate-12 text-center inline-block md:w-[150px]'>Yoga</span><span><img src={homeStar} alt="" className='inline-block w-[60px] md:w-[100px] ml-3 md:ml-10'/></span> Teacher
                </h1>
                <p className='font-[poppins] font-medium text-xl lg:text-2xl pb-10 text-center md:text-start'>
                    <span><img src={homeCircle} alt="" className='absolute pt-16 pl-[270px] md:pl-0 md:pt-0 md:relative'/></span>
                Calm your mind and body with the best yoga teachers available, relax your day and stay positive.
                </p>
                <Button>
                    Get started free <span><img src={fleche} alt="" /></span>
                </Button>
                <div className='flex justify-center items-center md:justify-start gap-8 py-10 text-xl lg:text-2xl font-[poppins] font-medium'>
                    <div>
                        <p>300+</p>
                        <p>Yoga Class</p>
                    </div>
                    <div>
                        <p>40+</p>
                        <p>Participants</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={girlHero} alt="" className='h-[60vh] w-auto mx-auto md:mx-0 md:h-[70vh] lg:h-[100vh] md:w-full'/>
            </div>
        </div>
    </div>
  );
};

export default Hero;