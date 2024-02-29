import React from 'react';

import Button from '../Button';

import fleche from '../../assets/images/ri_arrow-right-line.png';
import homme from '../../assets/images/health-fitness.png';
import desc1 from '../../assets/images/desc1.png';
import desc2 from '../../assets/images/desc2.png';

const MainSecond = () => {
  return (
    <div>
        <div className='py-32 flex flex-col justify-center md:gap-5 md:justify-between items-center md:flex-row'>
            <div>
                <div><img src={desc1} alt="" className='absolute pr-[200px] md:pr-[250px]'/></div>
                <div><img src={desc2} alt="" className='absolute pt-[280px] pl-[180px] md:pt-[300px] md:pl-[210px]'/></div>
                <div><img src={homme} alt="" /></div>
            </div>
            <div className='md:pl-20 flex flex-col justify-center items-center md:items-start md:justify-start'>
                <h2 className='text-center md:text-start font-bold ont-[poppins] text-2xl md:text-5xl py-5'>
                Bring Happiness To Good Health!
                </h2>
                <p className='text-center md:text-start font-medium font-[poppins] text-lg md:text-2xl pt-5 pb-5 md:pb-10'>
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