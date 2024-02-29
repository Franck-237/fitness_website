import React from 'react';

import Button from '../Button';

import fleche from '../../assets/images/ri_arrow-right-line.png';
import homme from '../../assets/images/health-fitness.png';
import desc1 from '../../assets/images/desc1.png';
import desc2 from '../../assets/images/desc2.png';

const MainSecond = () => {
  return (
    <div>
        <div className='pb-28 pt-10 flex flex-col-reverse justify-center lg:gap-5 lg:justify-between items-center lg:flex-row'>
            <div>
                <div><img src={desc1} alt="" className='absolute pr-[200px] md:pr-[250px]'/></div>
                <div><img src={desc2} alt="" className='absolute pt-[280px] pl-[180px] md:pt-[300px] md:pl-[210px]'/></div>
                <div><img src={homme} alt="" /></div>
            </div>
            <div className='md:pl-20 flex flex-col justify-center items-center lg:items-start lg:justify-start pb-12'>
                <h2 className='text-center md:text-start font-bold ont-[poppins] text-2xl md:text-5xl py-5'>
                Bring Happiness To Good Health!
                </h2>
                <p className='text-center lg:text-start font-medium font-[poppins] text-lg lg:text-2xl pt-5 pb-5 lg:pb-10'>
                If you take care of your good health, take care of your mentality and lead a healthy life with positive thoughts every day.
                </p>
                <Button>
                Get started free <span><img src={fleche} alt="" /></span>
                </Button>
            </div>
        </div>
    </div>
  )
};

export default MainSecond;