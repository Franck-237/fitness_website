import React from 'react';

import Button from '../Button';

import fleche from '../../assets/images/ri_arrow-right-line.png';

const MainThird = () => {
  return (
    <div>
        <div className='md:pl-20 flex flex-col justify-center items-center lg:items-start lg:justify-start pb-12'>
            <div>
                <h2 className='text-center md:text-start font-bold ont-[poppins] text-2xl md:text-5xl py-5'>Anytime, Any Place, Any Workout</h2>
                <p className='text-center lg:text-start font-medium font-[poppins] text-lg lg:text-2xl pt-5 pb-5 lg:pb-10'>
                    Take your routine at any time of your day, with the new videos and with the teachers who will guide you.
                </p>
                <Button>
                Get started free <span><img src={fleche} alt="" /></span>
                </Button>
            </div>
            <div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default MainThird;