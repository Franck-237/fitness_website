import React, { useState } from 'react';

import DarkMode from '../Navbar/DarkMode';

import burger from '../../assets/images/ri_apps-2-line.png';
import close from '../../assets/images/Vector1.png';

const Navbar = () => {

    const Links = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Health",
            link: "/",
        },
        {
            name: "Routine",
            link: "/",
        },
        {
            name: "Follow",
            link: "/",
        },
    ];

    const [nav, setNav] = useState(false);

  return (
    <div className='container mx-auto px-5 pt-5'>
        <div className='flex justify-between items-center'>
            <div>
                <p className='txt_grad text-xl md:text-2xl lg:text-3xl cursor-pointer font-[lora]'>Yoga</p>
            </div>
            <div>
                <div className=''>
                    <ul className={`absolute z-10 md:bg-[#F8F0FD] bg-[#cfbfd8] top-0 w-[60%] h-[100vh] left-0 text-center text-lg pt-10 font-[poppins] font-medium md:relative md:inline ${nav ? 'left-0 transition-all duration-700' : 'left-[-490px] transition-all duration-700'} md:left-0`}>
                        {
                            Links.map((data) => (
                                <li key={data.name} className='pt-8 md:pt-0 md:inline-block md:ml-6'>
                                    <a href={data.link} 
                                    className='hover:txt_grad'
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <div onClick={() => setNav(!nav)} className='md:hidden absolute top-5 right-0 mr-5 cursor-pointer font-bold'>
                        {
                            nav ? 
                            <img src={close} alt="" />
                             : 
                             <img src={burger} alt=""  className='text-gray-900'/>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Navbar;