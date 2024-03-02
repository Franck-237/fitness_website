import React from 'react';

import Button from '../Button';

import fleche from '../../assets/images/ri_arrow-right-line.png';

const Suscribe = () => {
  return (
    <div className='container mx-auto px-5 pb-5'>
        <div className='bg-gradient-to-r from-[#FF62B7] to-[#9F53FF] border border-1 rounded-lg text-center py-20 px-10 md:mx-20'>
            <h3 className='text-lg md:text-xl lg:text-3xl text-white font-semibold font-[poppins] pb-5'>Join our newsletter</h3>
            <p className='text-lg lg:text-xl text-white pb-5'>Subscribe to our newsletter to be aware of many things on discounts, gifts, training and much more. Just enter your email.</p>
            <div className='md:flex justify-center items-center gap-5'>  
                <input type="text" placeholder='For latest update send mail' className='w-[90%] md:w-[70%] lg:w-[60%] h-[50px] border border-1 rounded-3xl px-3 mb-3 md:mb-0'/>
                <div className=''>
                    <Button>
                        Subscribe <span><img src={fleche} alt="" /></span>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Suscribe;