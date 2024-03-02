import React from 'react';

import footer from '../../assets/images/Social footer.png';
import copyright from '../../assets/images/copyright.png';

const Footer = () => {
  return (
    <div className='bg-slate-700'>
        <div className='container mx-auto px-5'>
            <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-5 md:gap-7 text-sm md:text-lg py-10'>
                <div>
                    <p className='txt_grad text-2xl md:text-3xl cursor-pointer font-[lora] pb-3 md:pb-5'>Yoga</p>
                    <p className='text-gray-400'>Take care of your health and your <br /> mind with the best Yoga classes.</p>
                </div>
                <div>
                    <p className='text-lg md:text-xl pb-1 md:pb-3 text-white'>Address</p>
                    <p className='text-gray-400'>12345 M/01 Sol Avenue, Lima, Peru</p>
                </div>
                <div>
                    <p className='text-lg md:text-xl pb-1 md:pb-3 text-white'>Contact</p>
                    <p className='text-gray-400'>+123 456 7890 <br />yoga@email.com</p>
                </div>
                <div>
                    <p className='text-lg md:text-xl pb-1 md:pb-3 text-white'>Office</p>
                    <p className='text-gray-400'>Monday - Saturday <br />9AM - 10PM</p>
                </div>
            </div>
            <hr />
            <div className='py-10 flex flex-col md:flex-row items-center md:justify-between gap-5 text-white'>
                <div>
                    <img src={footer} alt="" />
                </div>
                <div className='flex gap-3'>
                    <span><img src={copyright} alt=""  className='w-[20px] h-[20px]'/></span>
                    <p>Copyright Bedimcode. All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Footer;