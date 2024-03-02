import React from 'react';

import Button from '../Button';

import fleche from '../../assets/images/ri_arrow-right-line.png';
import rout1 from '../../assets/images/routine-yoga-1.png';
import rout2 from '../../assets/images/routine-yoga-2.png';
import box1 from '../../assets/images/Box routine 1.png';
import box2 from '../../assets/images/Box routine 2.png';

const MainThird = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between pb-12 overflow-hidden'>
            <div className='lg:w-1/2'>
                <h2 className='text-center lg:text-start font-bold font-[poppins] text-2xl md:text-3xl lg:text-5xl py-5'>Anytime, Any Place, Any Workout</h2>
                <p className='text-center lg:text-start font-medium font-[poppins] text-lg lg:text-2xl pt-5 pb-5 lg:pb-10'>
                    Take your routine at any time of your day, with the new videos and with the teachers who will guide you.
                </p>
                <div className='py-5'>
                    <Button>
                    Get started free <span><img src={fleche} alt="" /></span>
                    </Button>
                </div>
            </div>
            <div className='pt-10 md:pt-0'>
                <div >
                    <div>
                        <img src={rout1} alt="" className='absolute w-[300px] md:w-[400px]'/>
                    </div>
                    <div>
                        <img src={box1} alt="" className='absolute pt-10 pl-32 lg:pl-[230px] md:pl-[200px]'/>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={box2} alt="" className='absolute mr-[400px] pt-[270px] md:pt-[320px] lg:mr-[400px]'/>
                    </div>
                    <div>
                        <img src={rout2} alt="" className='w-[300px] md:w-[400px] pt-36'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default MainThird;